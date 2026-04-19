import { Card } from "@/components/ui/card";

const endpoints = [
  ["GET", "/api/healthz"],
  ["POST", "/api/token"],
  ["POST", "/api/omni/command"],
  ["GET", "/api/omni/suggest?q=..."],
  ["GET", "/api/infinity/stream"],
  ["GET", "/api/hypercosmic/theatre"],
  ["POST", "/api/optimize"],
  ["GET", "/api/modes/status"],
  ["GET", "/api/logs"]
];

export function IntegrationPanel() {
  return (
    <Card id="api">
      <div className="text-xs uppercase tracking-[0.22em] text-white/50">Public API surface</div>
      <h3 className="mt-3 text-2xl font-semibold">API-living website endpoints</h3>
      <div className="mt-6 divide-y divide-white/8 rounded-3xl border border-white/10 bg-black/20">
        {endpoints.map(([verb, path]) => (
          <div key={path} className="flex items-center justify-between px-4 py-4 text-sm">
            <div className="font-mono text-dul-300">{verb}</div>
            <div className="font-mono text-white/80">{path}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
