import crypto from "node:crypto";
import { cookies, headers } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "malcolm_omniapi_token";

function secret() {
  return new TextEncoder().encode(process.env.JWT_SECRET || "development-malcolm-secret");
}

export async function signViewerToken(payload: { userId: string; guestId: string; tier: string; jwtVersion: number }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret());
}

export async function verifyViewerToken(token: string) {
  const { payload } = await jwtVerify(token, secret());
  return payload as {
    userId: string;
    guestId: string;
    tier: string;
    jwtVersion: number;
    exp: number;
  };
}

function randomGuestId() {
  return `guest_${crypto.randomUUID()}`;
}

export async function issueOrLoadViewer() {
  const store = await cookies();
  const existing = store.get(COOKIE_NAME)?.value;

  if (existing) {
    try {
      const parsed = await verifyViewerToken(existing);
      const user = await prisma.user.findUnique({ where: { id: parsed.userId } });
      if (user && user.jwtVersion === parsed.jwtVersion) {
        return { token: existing, user, created: false };
      }
    } catch {}
  }

  const guestId = randomGuestId();
  const user = await prisma.user.create({
    data: {
      guestId,
      tier: "PUBLIC"
    }
  });

  const token = await signViewerToken({
    userId: user.id,
    guestId: user.guestId,
    tier: user.tier,
    jwtVersion: user.jwtVersion
  });

  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });

  return { token, user, created: true };
}

export async function getViewer() {
  const store = await cookies();
  const authHeader = (await headers()).get("authorization");
  const bearer = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
  const token = store.get(COOKIE_NAME)?.value || bearer;

  if (!token) {
    return issueOrLoadViewer();
  }

  try {
    const parsed = await verifyViewerToken(token);
    const user = await prisma.user.findUnique({ where: { id: parsed.userId } });
    if (user && user.jwtVersion === parsed.jwtVersion) {
      return { token, user, created: false };
    }
  } catch {}

  return issueOrLoadViewer();
}
