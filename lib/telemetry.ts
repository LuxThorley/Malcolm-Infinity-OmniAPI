import os from "node:os";
import { SOURCE_CORE } from "@/lib/malcolm-dna";

export async function getHealthSnapshot() {
  return {
    ok: true,
    node: process.version,
    platform: process.platform,
    uptimeSeconds: process.uptime(),
    hostname: os.hostname(),
    cpuCores: os.cpus().length,
    loadAverage: os.loadavg(),
    totalMemGb: +(os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
    freeMemGb: +(os.freemem() / 1024 / 1024 / 1024).toFixed(2),
    processRssMb: +(process.memoryUsage().rss / 1024 / 1024).toFixed(2),
    processHeapMb: +(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
    engine: SOURCE_CORE.engine,
    sourceCore: [SOURCE_CORE.omniLattice, SOURCE_CORE.isic, SOURCE_CORE.usin, SOURCE_CORE.dul],
    hypercosmicTheatre: true,
    publicAccess: true
  };
}

export async function getOptimizerReport() {
  const health = await getHealthSnapshot();
  const suggestions = [
    health.freeMemGb < 1
      ? "Low free memory detected. Reduce concurrent generations or scale instance memory."
      : "Memory headroom looks healthy for typical public traffic.",
    health.loadAverage[0] > health.cpuCores
      ? "CPU load is elevated. Add instance capacity or reduce stream frequency."
      : "CPU load is within nominal range.",
    "Enable CDN caching for public assets and documentation routes.",
    "Pin the deployment to a Node host with persistent storage if you keep SQLite in production."
  ];

  return {
    before: health,
    afterEstimate: {
      projectedLatencyReductionPct: 15,
      projectedStabilityGainPct: 21
    },
    suggestions
  };
}
