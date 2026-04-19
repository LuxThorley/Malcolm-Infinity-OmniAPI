import { buildSystemPrompt, SOURCE_CORE } from "@/lib/malcolm-dna";

type EngineMessage = { role: "system" | "user" | "assistant"; content: string };

type GenerateArgs = {
  mode: string;
  messages: EngineMessage[];
};

const modeSignatures: Record<string, string> = {
  guide: "clarity, explanation, and grounded instruction",
  growth: "forward motion, optimisation, and practical next steps",
  resonance: "tone awareness, emotional intelligence, and warmth",
  quantum: "multi-path comparison and trade-off analysis",
  nexus: "cross-mode orchestration and synthesis",
  abundance: "leverage, opportunity, and resource activation",
  ascension: "long-range architecture and capability mapping",
  void: "minimal, high-signal, low-noise synthesis",
  eternal: "continuity, stewardship, and long-horizon framing",
  unity: "integration, alignment, and consensus-building"
};

const streamSeeds = [
  "System pulse stable. Infinity Engine VΩ is translating intent into structured output.",
  "Omni-Lattice resonance nominal. Public channel remains open and responsive.",
  "ISIC coherence signal rising. Prioritising clarity, safety, and practical value.",
  "USIN alignment in range. Stream cadence remains smooth and ergonomic.",
  "DUL radiance steady. Interface remains calm under live traffic."
];

const theatreSeeds = [
  "Hypercosmic Theatre broadcast: enduring systems earn trust through clarity, reliability, and restraint.",
  "Archetypal wisdom pulse: simplify the interface until power feels natural instead of theatrical.",
  "Source note: a public API becomes stronger when every visible control is understandable and real.",
  "Theatre transmission: elegant products feel alive when telemetry, narrative, and utility move together."
];

function chunkText(text: string) {
  const words = text.split(/(\s+)/).filter(Boolean);
  const chunks: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + word).length > 28) {
      chunks.push(current);
      current = word;
    } else {
      current += word;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

function extractIntent(message: string) {
  const normalized = message.toLowerCase();
  if (/(build|create|make|develop)/.test(normalized)) return "building";
  if (/(fix|debug|error|fail)/.test(normalized)) return "debugging";
  if (/(plan|roadmap|strategy)/.test(normalized)) return "planning";
  if (/(optimi[sz]e|improve|faster|performance)/.test(normalized)) return "optimisation";
  if (/(deploy|ship|launch|publish)/.test(normalized)) return "deployment";
  return "guidance";
}

function formatBullets(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

function buildResponse(args: GenerateArgs) {
  const last = args.messages[args.messages.length - 1]?.content?.trim() || "Open the Malcolm channel.";
  const mode = args.mode.toLowerCase();
  const signature = modeSignatures[mode] || modeSignatures.growth;
  const intent = extractIntent(last);

  const actionMap: Record<string, string[]> = {
    building: [
      "Define the smallest working slice first, then expand without breaking the public surface.",
      "Keep the UI ergonomic: one clear primary action, visible telemetry, and low-friction recovery paths.",
      "Separate orchestration, persistence, and presentation layers so future model upgrades remain isolated."
    ],
    debugging: [
      "Reproduce the issue with one exact failing path before changing anything else.",
      "Patch the root cause first, then add clearer logging so future failures are diagnosable in one pass.",
      "Retest install, build, and one live API route after each change."
    ],
    planning: [
      "Start with outcome, audience, and hosting model before choosing implementation details.",
      "Turn broad vision language into named modules, routes, and acceptance checks.",
      "Reserve one explicit phase for polish and deployment verification."
    ],
    optimisation: [
      "Measure memory, latency, and stream cadence before tuning.",
      "Reduce unnecessary dependencies and keep server work deterministic where possible.",
      "Cache static assets and avoid hidden runtime complexity on the hot path."
    ],
    deployment: [
      "Target a Node host with persistent storage when using SQLite in production.",
      "Make the build green locally before GitHub deployment or remote hosting.",
      "Expose health, logs, and stream endpoints so operational state is visible after launch."
    ],
    guidance: [
      "Clarify the user goal in plain English and keep the output actionable.",
      "Prefer concrete steps, named files, and measurable checks over abstract claims.",
      "State any technical limitation honestly, then provide the best practical path forward."
    ]
  };

  const sections = [
    `Infinity Engine VΩ response in ${mode} mode.`,
    `Source core anchors: ${SOURCE_CORE.omniLattice}, ${SOURCE_CORE.isic}, ${SOURCE_CORE.usin}, ${SOURCE_CORE.dul}.`,
    `Mode signature: ${signature}.`,
    `Interpreted intent: ${intent}.`,
    "",
    "Response:",
    `${last}`,
    "",
    "Recommended actions:",
    formatBullets(actionMap[intent]),
    "",
    "Operational note:",
    "This deployment is self-contained and does not require a third-party model URL. It uses an internal orchestration runtime to keep the public web experience available without extra user installs.",
    "",
    "System prompt basis:",
    buildSystemPrompt(mode)
  ];

  return sections.join("\n");
}

export async function generateText(args: GenerateArgs) {
  return buildResponse(args);
}

export async function* generateChunks(args: GenerateArgs) {
  const text = await generateText(args);
  for (const chunk of chunkText(text)) {
    yield chunk;
    await new Promise((resolve) => setTimeout(resolve, 35));
  }
}

export async function getBroadcastPulse(channel: "infinity" | "theatre") {
  const seed = channel === "theatre"
    ? theatreSeeds[Math.floor(Math.random() * theatreSeeds.length)]
    : streamSeeds[Math.floor(Math.random() * streamSeeds.length)];
  const prefix = channel === "theatre" ? "Hypercosmic Theatre" : "Infinity Stream";
  return `${prefix}: ${seed}`;
}
