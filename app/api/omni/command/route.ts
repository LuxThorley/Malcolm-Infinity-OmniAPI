import { getViewer } from "@/lib/auth";
import { rateLimit } from "@/lib/rate-limit";
import { generateChunks } from "@/lib/infinity-engine";
import { prisma } from "@/lib/prisma";
import { getQuota } from "@/lib/quota";

export const runtime = "nodejs";

function estimateTokens(text: string) {
  return Math.max(1, Math.ceil(text.length / 4));
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "local";
  const limit = rateLimit(`command:${ip}`, 20, 60_000);

  if (!limit.ok) {
    return new Response("Rate limit exceeded.", { status: 429 });
  }

  const { user } = await getViewer();
  const quota = await getQuota(user.id);
  if (quota.remaining <= 0) {
    return new Response("Daily public quota exhausted for now. Please try again tomorrow.", { status: 429 });
  }

  const body = (await request.json()) as { mode?: string; message?: string };
  const mode = (body.mode || "growth").toLowerCase();
  const message = (body.message || "").slice(0, 4000);

  const chunks = generateChunks({
    mode,
    messages: [{ role: "user", content: message }]
  });

  let full = "";

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      for await (const chunk of chunks) {
        full += chunk;
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();

      await prisma.sessionLog.create({
        data: {
          userId: user.id,
          channel: "console",
          mode,
          prompt: message,
          response: full,
          tokensUsed: estimateTokens(message + full)
        }
      });
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive"
    }
  });
}
