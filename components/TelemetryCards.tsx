"use client";

import { useEffect, useState } from "react";
import { Activity, Cpu, MemoryStick, ShieldEllipsis } from "lucide-react";
import { Card } from "@/components/ui/card";

type Health = {
  uptimeSeconds: number;
  cpuCores: number;
  processRssMb: number;
  totalMemGb: number;
};

export function TelemetryCards() {
  const [data, setData] = useState<Health | null>(null);

  useEffect(() => {
    fetch("/api/healthz")
      .then((res) => res.json())
      .then(setData)
      .catch(() => undefined);
  }, []);

  const cards = [
    { label: "Uptime", value: `${Math.round(data?.uptimeSeconds || 0)}s`, icon: Activity },
    { label: "CPU cores", value: `${data?.cpuCores || "—"}`, icon: Cpu },
    { label: "Process RSS", value: `${data?.processRssMb || "—"} MB`, icon: MemoryStick },
    { label: "Host memory", value: `${data?.totalMemGb || "—"} GB`, icon: ShieldEllipsis }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-white/50">{card.label}</div>
              <div className="mt-2 text-2xl font-semibold">{card.value}</div>
            </div>
            <card.icon className="h-5 w-5 text-dul-300" />
          </div>
        </Card>
      ))}
    </div>
  );
}
