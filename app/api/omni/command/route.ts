import { getViewer, verifyInfinityApiToken } from "@/lib/auth";
import { rateLimit } from "@/lib/rate-limit";
import { generateChunks } from "@/lib/infinity-engine";
import { prisma } from "@/lib/prisma";
import { getQuota } from "@/lib/quota";

export const runtime = "nodejs";

function estimateTokens(text: string) {
  return Math.max(1, Math.ceil(text.length / 4));
}

function unauthorized() {
  return Response.json(
    { ok: false, error: "unauthorized", message: "A valid Malcolm Infinity API bearer token is required." },
    { status: 401, headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization");
  const bearer = authorization?.match(/^Bearer\s+(.+)$/i)?.[1]?.trim() ?? null;
  const apiTokenConfigured = Boolean(process.env.MALCOLM_INFINITY_API_TOKEN);
  const isIntegrationToken = verifyInfinityApiToken(bearer);

  // A supplied bearer credential must be valid when dedicated-token mode is enabled.
  // Browser sessions without an Authorization header continue to authenticate by cookie.
  // Never fall back to a guest identity after an invalid bearer token.
  if (bearer && apiTokenConfigured && !isIntegrationToken) {
    return unauthorized();
  }

  let user: Awaited<ReturnType<typeof getViewer>>["user"];
  if (isIntegrationToken) {
    const serviceGuestId = "malcolm_infinity_api_service";
    user = await prisma.user.upsert({
      where: { guestId: serviceGuestId },
      update: { tier: "INTEGRATION" },
      create: { guestId: serviceGuestId, tier: "INTEGRATION" }
    });
  } else {
    // Cookie-based browser sessions remain supported. If a bearer token was supplied
    // but the dedicated token is not configured, preserve the existing viewer-JWT path.
    const viewer = await getViewer();
    user = viewer.user;
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const limit = rateLimit(`command:${ip}:${isIntegrationToken ? "integration" : "session"}`, 20, 60_000);
  if (!limit.ok) {
    return Response.json({ ok: false, error: "rate_limit_exceeded" }, { status: 429, headers: { "Cache-Control": "no-store" } });
  }

  let body: { mode?: unknown; message?: unknown };
  try {
    body = await request.json() as { mode?: unknown; message?: unknown };
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400, headers: { "Cache-Control": "no-store" } });
  }

  const mode = typeof body.mode === "string" ? body.mode.toLowerCase().slice(0, 64) : "growth";
  const message = typeof body.message === "string" ? body.message.slice(0, 4000) : "";
  if (!message.trim()) {
    return Response.json({ ok: false, error: "message_required" }, { status: 400, headers: { "Cache-Control": "no-store" } });
  }

  // Apply quota to browser sessions. The dedicated API token is governed by the rate limit
  // and the service's configured credential policy rather than the public guest quota.
  if (!isIntegrationToken) {
    const quota = await getQuota(user.id);
    if (quota.remaining <= 0) {
      return Response.json({ ok: false, error: "daily_quota_exhausted" }, { status: 429, headers: { "Cache-Control": "no-store" } });
    }
  }

  const chunks = generateChunks({
    mode,
    messages: [{ role: "user", content: message }]
  });

  let full = "";
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of chunks) {
          full += chunk;
          controller.enqueue(encoder.encode(chunk));
        }
        controller.close();
        await prisma.sessionLog.create({
          data: {
            userId: user.id,
            channel: isIntegrationToken ? "malcolm-infinity-api" : "console",
            mode,
            prompt: message,
            response: full,
            tokensUsed: estimateTokens(message + full)
          }
        });
      } catch {
        controller.error(new Error("Command execution failed."));
      }
    }
  });

  return new Response(request.headers.get("accept")?.includes("text/event-stream") ? stream : stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
