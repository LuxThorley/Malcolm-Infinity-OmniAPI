import { prisma } from "@/lib/prisma";

const PUBLIC_DAILY_LIMIT = 120000;

function startOfToday() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
}

export async function getQuota(userId: string) {
  const usage = await prisma.sessionLog.aggregate({
    _sum: { tokensUsed: true },
    where: {
      userId,
      createdAt: {
        gte: startOfToday()
      }
    }
  });

  const used = usage._sum.tokensUsed ?? 0;
  const limit = PUBLIC_DAILY_LIMIT;

  return {
    tier: "PUBLIC",
    limit,
    used,
    remaining: Math.max(limit - used, 0)
  };
}
