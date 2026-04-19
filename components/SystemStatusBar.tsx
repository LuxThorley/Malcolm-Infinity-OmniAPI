"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

type Status = {
  ok: boolean;
  engine: string;
  hypercosmicTheatre: boolean;
  node: string;
  processHeapMb: number;
  freeMemGb: number;
  sourceCore: string[];
  publicAccess: boolean;
};

export function SystemStatusBar() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    fetch("/api/healthz")
      .then((res) => res.json())
      .then(setStatus)
      .catch(() => undefined);
  }, []);

  return (
    <div className="px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
        <Badge>Engine: {status?.engine || "..."}</Badge>
        <Badge>Node: {status?.node || "..."}</Badge>
        <Badge>Heap: {status?.processHeapMb ?? "…"} MB</Badge>
        <Badge>Free RAM: {status?.freeMemGb ?? "…"} GB</Badge>
        <Badge>{status?.hypercosmicTheatre ? "HTN enabled" : "HTN disabled"}</Badge>
        <Badge>{status?.publicAccess ? "Public access" : "Restricted"}</Badge>
        <Badge>Core: {status?.sourceCore?.join(" · ") || "..."}</Badge>
      </div>
    </div>
  );
}
