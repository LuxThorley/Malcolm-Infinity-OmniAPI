"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function OptimizerPanel() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);

  async function run() {
    setLoading(true);
    const res = await fetch("/api/optimize", { method: "POST" });
    const data = await res.json();
    setReport(data);
    setLoading(false);
  }

  return (
    <Card>
      <div className="text-xs uppercase tracking-[0.22em] text-white/50">Optimizer</div>
      <div className="mt-3 text-2xl font-semibold">One-click public deployment tuning</div>
      <p className="mt-3 text-sm text-white/65">
        Reads live runtime metrics, estimates gains, and surfaces deployment-side optimisation suggestions.
      </p>
      <div className="mt-5">
        <Button onClick={run} disabled={loading}>{loading ? "Scanning…" : "Run optimizer"}</Button>
      </div>

      {report ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/8 bg-black/20 p-4">
            <div className="text-sm text-white/50">Before</div>
            <pre className="mt-3 overflow-auto text-xs text-white/70">{JSON.stringify(report.before, null, 2)}</pre>
          </div>
          <div className="rounded-3xl border border-white/8 bg-black/20 p-4">
            <div className="text-sm text-white/50">After estimate</div>
            <pre className="mt-3 overflow-auto text-xs text-white/70">{JSON.stringify(report.afterEstimate, null, 2)}</pre>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {report.suggestions?.map((item: string) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </div>
      ) : null}
    </Card>
  );
}
