"use client";

import { Card } from "@/components/ui/card";
import { useEventStream } from "@/hooks/useEventStream";

export function StreamPanels() {
  const infinity = useEventStream("/api/infinity/stream");
  const theatre = useEventStream("/api/hypercosmic/theatre");

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <Card>
        <div className="text-xs uppercase tracking-[0.22em] text-white/50">Infinity Stream</div>
        <div className="mt-3 text-2xl font-semibold">Live operational transmissions</div>
        <div className="mt-4 text-sm text-white/50">Status: {infinity.status}</div>
        <div className="mt-5 space-y-3">
          {infinity.items.map((item, index) => (
            <div key={`${item}-${index}`} className="rounded-2xl border border-white/8 bg-black/20 p-3 text-sm text-white/72">
              {item}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="text-xs uppercase tracking-[0.22em] text-white/50">Hypercosmic Theatre Network</div>
        <div className="mt-3 text-2xl font-semibold">Public cosmic broadcast channel</div>
        <div className="mt-4 text-sm text-white/50">Status: {theatre.status}</div>
        <div className="mt-5 space-y-3">
          {theatre.items.map((item, index) => (
            <div key={`${item}-${index}`} className="rounded-2xl border border-white/8 bg-black/20 p-3 text-sm text-white/72">
              {item}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
