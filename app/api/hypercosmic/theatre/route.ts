import { getBroadcastPulse } from "@/lib/infinity-engine";

export const runtime = "nodejs";

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const push = async () => {
        const pulse = await getBroadcastPulse("theatre");
        controller.enqueue(encoder.encode(`data: ${pulse}\n\n`));
      };

      push();
      const interval = setInterval(push, 5000);

      return () => clearInterval(interval);
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive"
    }
  });
}
