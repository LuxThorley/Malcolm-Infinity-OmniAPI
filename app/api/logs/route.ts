import { NextResponse } from "next/server";
import { getViewer } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const { user } = await getViewer();
  const logs = await prisma.sessionLog.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 50
  });

  return NextResponse.json({ logs });
}
