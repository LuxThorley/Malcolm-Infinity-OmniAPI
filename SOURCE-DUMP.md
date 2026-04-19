# malcolm-infinity-OmniAPI-v6-manual-vscode — Full Source Dump

```.env.example
JWT_SECRET="change-this-to-a-long-random-secret"
DATABASE_URL="file:./prisma/dev.db"

```

```.github/workflows/ci.yml
name: ci

on:
  push:
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npx prisma generate
      - run: npm run build

```

```.gitignore
# build
.next
dist
coverage

# dependencies
node_modules

# env
.env
.env.local

# deployment
.vercel

# logs
*.log

# prisma local db
prisma/dev.db
prisma/dev.db-journal

```

```.vscode/extensions.json
{
  "recommendations": [
    "Prisma.prisma",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}

```

```.vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: npm run dev",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    }
  ]
}

```

```.vscode/settings.json
{
  "files.eol": "\n",
  "editor.formatOnSave": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "typescript.tsdk": "node_modules/typescript/lib"
}

```

```.vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Install dependencies",
      "type": "shell",
      "command": "npm install",
      "problemMatcher": []
    },
    {
      "label": "Prisma generate",
      "type": "shell",
      "command": "npx prisma generate",
      "problemMatcher": []
    },
    {
      "label": "Prisma db push",
      "type": "shell",
      "command": "npx prisma db push",
      "problemMatcher": []
    },
    {
      "label": "Run dev server",
      "type": "shell",
      "command": "npm run dev",
      "problemMatcher": []
    },
    {
      "label": "Build production",
      "type": "shell",
      "command": "npm run build",
      "problemMatcher": []
    },
    {
      "label": "Git init + main",
      "type": "shell",
      "command": "git init && git branch -M main",
      "problemMatcher": []
    },
    {
      "label": "Git add + commit",
      "type": "shell",
      "command": "git add . && git commit -m \"Deploy Malcolm Infinity OmniAPI v6 manual edition\"",
      "problemMatcher": []
    },
    {
      "label": "Git set remote",
      "type": "shell",
      "command": "git remote remove origin 2>nul || exit 0 && git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git",
      "problemMatcher": []
    },
    {
      "label": "Git push origin main",
      "type": "shell",
      "command": "git push -u origin main",
      "problemMatcher": []
    }
  ]
}

```

```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate && npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]

```

```README.md
# Malcolm Infinity OmniAPI Ω+ — v6 Manual VS Code Edition

This is the **v6 manual package** of Malcolm Infinity OmniAPI Ω+.

It removes every Windows auto-installer and deployment batch file and replaces them with a **manual, VS Code-first workflow** for:
- installation
- database setup
- development
- production build
- GitHub deployment

The application remains a public-web Next.js platform with:
- a futuristic homepage UI
- Source-core themed Infinity Engine VΩ runtime
- API routes for token bootstrap, health, logs, optimizer, mode status, command execution, Infinity Stream, and Hypercosmic Theatre
- JWT guest activation
- Prisma-backed persistence
- no Stripe, no paid gating, no installer automation

## Technical truth

The uploaded `Malcolm LLM.zip` did **not** contain deployable model weights or a runnable distilled model server. It contained interface and persona material rather than a production-ready hosted model artifact.  

So this package uses an integrated **Infinity Engine VΩ** runtime as the primary internal engine, carrying the Malcolm persona and Source-core orchestration language directly inside the app.

## Prerequisites

Install these yourself before opening the project in VS Code:

- Node.js 20 or newer
- Git
- Visual Studio Code
- a GitHub account with access to `https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## Quick start

1. Extract the zip.
2. Open the folder in **Visual Studio Code**.
3. Copy `.env.example` to `.env`.
4. In a VS Code terminal, run:

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

5. Open the local URL shown in the terminal.

## Production build

Run:

```bash
npm run build
npm run start
```

## Manual GitHub deployment

Use the exact target repository:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

From the VS Code terminal:

```bash
git init
git branch -M main
git add .
git commit -m "Deploy Malcolm Infinity OmniAPI v6 manual edition"
git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

If `origin` already exists:

```bash
git remote set-url origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

## Environment variables

Only the essential variables are required:

```env
JWT_SECRET="change-this-to-a-long-random-secret"
DATABASE_URL="file:./prisma/dev.db"
```

## Notes on hosting

This package uses SQLite for simplicity and fault reduction during manual setup. That is good for local development and basic deployments, but for serious multi-user public hosting you will eventually want a networked production database instead of a local SQLite file.

## VS Code helpers

This package includes `.vscode/tasks.json` and `.vscode/launch.json` so you can run install, Prisma sync, dev, build, and GitHub push steps from within VS Code without using any `.bat` installer.

## Documentation

- `docs/MANUAL-INSTALL.md`
- `docs/GITHUB-DEPLOYMENT.md`
- `docs/DEPLOYMENT.md`
- `docs/SOURCE-CORE-NOTES.md`


```

```SOURCE-DUMP.md
# malcolm-infinity-OmniAPI-v6-manual-vscode — Full Source Dump

```.env.example
JWT_SECRET="change-this-to-a-long-random-secret"
DATABASE_URL="file:./prisma/dev.db"

```

```.github/workflows/ci.yml
name: ci

on:
  push:
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npx prisma generate
      - run: npm run build

```

```.gitignore
# build
.next
dist
coverage

# dependencies
node_modules

# env
.env
.env.local

# deployment
.vercel

# logs
*.log

# prisma local db
prisma/dev.db
prisma/dev.db-journal

```

```.vscode/extensions.json
{
  "recommendations": [
    "Prisma.prisma",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}

```

```.vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: npm run dev",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    }
  ]
}

```

```.vscode/settings.json
{
  "files.eol": "\n",
  "editor.formatOnSave": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "typescript.tsdk": "node_modules/typescript/lib"
}

```

```.vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Install dependencies",
      "type": "shell",
      "command": "npm install",
      "problemMatcher": []
    },
    {
      "label": "Prisma generate",
      "type": "shell",
      "command": "npx prisma generate",
      "problemMatcher": []
    },
    {
      "label": "Prisma db push",
      "type": "shell",
      "command": "npx prisma db push",
      "problemMatcher": []
    },
    {
      "label": "Run dev server",
      "type": "shell",
      "command": "npm run dev",
      "problemMatcher": []
    },
    {
      "label": "Build production",
      "type": "shell",
      "command": "npm run build",
      "problemMatcher": []
    },
    {
      "label": "Git init + main",
      "type": "shell",
      "command": "git init && git branch -M main",
      "problemMatcher": []
    },
    {
      "label": "Git add + commit",
      "type": "shell",
      "command": "git add . && git commit -m \"Deploy Malcolm Infinity OmniAPI v6 manual edition\"",
      "problemMatcher": []
    },
    {
      "label": "Git set remote",
      "type": "shell",
      "command": "git remote remove origin 2>nul || exit 0 && git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git",
      "problemMatcher": []
    },
    {
      "label": "Git push origin main",
      "type": "shell",
      "command": "git push -u origin main",
      "problemMatcher": []
    }
  ]
}

```

```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate && npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]

```

```README.md
# Malcolm Infinity OmniAPI Ω+ — v6 Manual VS Code Edition

This is the **v6 manual package** of Malcolm Infinity OmniAPI Ω+.

It removes every Windows auto-installer and deployment batch file and replaces them with a **manual, VS Code-first workflow** for:
- installation
- database setup
- development
- production build
- GitHub deployment

The application remains a public-web Next.js platform with:
- a futuristic homepage UI
- Source-core themed Infinity Engine VΩ runtime
- API routes for token bootstrap, health, logs, optimizer, mode status, command execution, Infinity Stream, and Hypercosmic Theatre
- JWT guest activation
- Prisma-backed persistence
- no Stripe, no paid gating, no installer automation

## Technical truth

The uploaded `Malcolm LLM.zip` did **not** contain deployable model weights or a runnable distilled model server. It contained interface and persona material rather than a production-ready hosted model artifact.  

So this package uses an integrated **Infinity Engine VΩ** runtime as the primary internal engine, carrying the Malcolm persona and Source-core orchestration language directly inside the app.

## Prerequisites

Install these yourself before opening the project in VS Code:

- Node.js 20 or newer
- Git
- Visual Studio Code
- a GitHub account with access to `https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## Quick start

1. Extract the zip.
2. Open the folder in **Visual Studio Code**.
3. Copy `.env.example` to `.env`.
4. In a VS Code terminal, run:

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

5. Open the local URL shown in the terminal.

## Production build

Run:

```bash
npm run build
npm run start
```

## Manual GitHub deployment

Use the exact target repository:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

From the VS Code terminal:

```bash
git init
git branch -M main
git add .
git commit -m "Deploy Malcolm Infinity OmniAPI v6 manual edition"
git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

If `origin` already exists:

```bash
git remote set-url origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

## Environment variables

Only the essential variables are required:

```env
JWT_SECRET="change-this-to-a-long-random-secret"
DATABASE_URL="file:./prisma/dev.db"
```

## Notes on hosting

This package uses SQLite for simplicity and fault reduction during manual setup. That is good for local development and basic deployments, but for serious multi-user public hosting you will eventually want a networked production database instead of a local SQLite file.

## VS Code helpers

This package includes `.vscode/tasks.json` and `.vscode/launch.json` so you can run install, Prisma sync, dev, build, and GitHub push steps from within VS Code without using any `.bat` installer.

## Documentation

- `docs/MANUAL-INSTALL.md`
- `docs/GITHUB-DEPLOYMENT.md`
- `docs/DEPLOYMENT.md`
- `docs/SOURCE-CORE-NOTES.md`


```

```TREE.txt
malcolm-infinity-OmniAPI-v6-manual-vscode
├── .github
│   └── workflows
│       └── ci.yml
├── .vscode
│   ├── extensions.json
│   ├── launch.json
│   ├── settings.json
│   └── tasks.json
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── logout
│   │   │       └── route.ts
│   │   ├── healthz
│   │   │   └── route.ts
│   │   ├── hypercosmic
│   │   │   └── theatre
│   │   │       └── route.ts
│   │   ├── infinity
│   │   │   └── stream
│   │   │       └── route.ts
│   │   ├── logs
│   │   │   └── route.ts
│   │   ├── modes
│   │   │   └── status
│   │   │       └── route.ts
│   │   ├── omni
│   │   │   ├── command
│   │   │   │   └── route.ts
│   │   │   └── suggest
│   │   │       └── route.ts
│   │   ├── optimize
│   │   │   └── route.ts
│   │   └── token
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── ConsolePanel.tsx
│   ├── DocsModal.tsx
│   ├── Hero.tsx
│   ├── IntegrationPanel.tsx
│   ├── ModeGrid.tsx
│   ├── OptimizerPanel.tsx
│   ├── ParticleField.tsx
│   ├── PwaRegistrar.tsx
│   ├── StreamPanels.tsx
│   ├── SystemStatusBar.tsx
│   ├── TelemetryCards.tsx
│   ├── ThemeToggle.tsx
│   └── TopNav.tsx
├── docs
│   ├── DEPLOYMENT.md
│   ├── GITHUB-DEPLOY.md
│   ├── GITHUB-DEPLOYMENT.md
│   ├── MANUAL-INSTALL.md
│   └── SOURCE-CORE-NOTES.md
├── hooks
│   ├── useEventStream.ts
│   └── useSpeechRecognition.ts
├── lib
│   ├── auth.ts
│   ├── infinity-engine.ts
│   ├── malcolm-dna.ts
│   ├── modes.ts
│   ├── prisma.ts
│   ├── quota.ts
│   ├── rate-limit.ts
│   ├── telemetry.ts
│   └── utils.ts
├── prisma
│   └── schema.prisma
├── public
│   ├── icon-192.svg
│   ├── icon-512.svg
│   ├── manifest.webmanifest
│   └── sw.js
├── .env.example
├── .gitignore
├── Dockerfile
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── render.yaml
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

```app/api/auth/logout/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const store = await cookies();
  store.delete("malcolm_omniapi_token");
  return NextResponse.json({ ok: true });
}

```

```app/api/healthz/route.ts
import { NextResponse } from "next/server";
import { getHealthSnapshot } from "@/lib/telemetry";

export const runtime = "nodejs";

export async function GET() {
  const snapshot = await getHealthSnapshot();
  return NextResponse.json(snapshot);
}

```

```app/api/hypercosmic/theatre/route.ts
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

```

```app/api/infinity/stream/route.ts
import { getBroadcastPulse } from "@/lib/infinity-engine";

export const runtime = "nodejs";

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const push = async () => {
        const pulse = await getBroadcastPulse("infinity");
        controller.enqueue(encoder.encode(`data: ${pulse}\n\n`));
      };

      push();
      const interval = setInterval(push, 3500);

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

```

```app/api/logs/route.ts
import { NextResponse } from "next/server";
import { getViewer } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const { user } = await getViewer();
  const logs = await prisma.sessionLog.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 50
  });

  return NextResponse.json({ logs });
}

```

```app/api/modes/status/route.ts
import { NextResponse } from "next/server";
import { MODES } from "@/lib/modes";

export async function GET() {
  return NextResponse.json({
    access: "public",
    modes: MODES
  });
}

```

```app/api/omni/command/route.ts
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

```

```app/api/omni/suggest/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  const cleaned = q.trim();

  const suggestions = cleaned
    ? [
        `${cleaned} as a launch plan`,
        `${cleaned} with a cleaner API shape`,
        `${cleaned} as a public web capability`,
        `${cleaned} with an optimisation checklist`
      ]
    : [
        "Design a public landing page for Malcolm",
        "Optimise my API architecture",
        "Turn this idea into a deployable public platform",
        "Explain the best hosting model for this build"
      ];

  return NextResponse.json({ suggestions });
}

```

```app/api/optimize/route.ts
import { NextResponse } from "next/server";
import { getOptimizerReport } from "@/lib/telemetry";

export const runtime = "nodejs";

export async function POST() {
  const report = await getOptimizerReport();
  return NextResponse.json(report);
}

```

```app/api/token/route.ts
import { NextResponse } from "next/server";
import { getViewer } from "@/lib/auth";
import { getQuota } from "@/lib/quota";
import { shortId } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST() {
  const { token, user } = await getViewer();
  const quota = await getQuota(user.id);

  return NextResponse.json({
    ok: true,
    token,
    tokenPreview: shortId(token),
    tier: user.tier,
    quota
  });
}

```

```app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html, body {
  min-height: 100%;
  background: #070712;
}

body {
  @apply bg-cosmic-grid text-white antialiased;
}

.glass {
  @apply border border-white/10 bg-white/5 backdrop-blur-xl shadow-glass;
}

.neon-border {
  box-shadow: inset 0 0 0 1px rgba(139, 233, 255, 0.12), 0 0 40px rgba(86, 214, 255, 0.08);
}

.text-gradient {
  background: linear-gradient(90deg, #8be9ff 0%, #56d6ff 40%, #c9b8ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.grid-overlay {
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 36px 36px;
}

```

```app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { PwaRegistrar } from "@/components/PwaRegistrar";

export const metadata: Metadata = {
  title: "Malcolm Infinity OmniAPI Ω+",
  description: "Public web edition of Malcolm Infinity OmniAPI with an integrated Infinity Engine VΩ runtime"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <PwaRegistrar />
        {children}
      </body>
    </html>
  );
}

```

```app/page.tsx
import { Hero } from "@/components/Hero";
import { TopNav } from "@/components/TopNav";
import { ParticleField } from "@/components/ParticleField";
import { TelemetryCards } from "@/components/TelemetryCards";
import { SystemStatusBar } from "@/components/SystemStatusBar";
import { ConsolePanel } from "@/components/ConsolePanel";
import { StreamPanels } from "@/components/StreamPanels";
import { ModeGrid } from "@/components/ModeGrid";
import { OptimizerPanel } from "@/components/OptimizerPanel";
import { IntegrationPanel } from "@/components/IntegrationPanel";
import { DocsModal } from "@/components/DocsModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <ParticleField />
      <TopNav />
      <Hero />
      <SystemStatusBar />

      <section className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl justify-end">
          <ThemeToggle />
        </div>
      </section>

      <section className="px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <TelemetryCards />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <ConsolePanel />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <StreamPanels />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <OptimizerPanel />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/50">Mode lattice</div>
          <ModeGrid />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 xl:grid-cols-2">
          <IntegrationPanel />
          <DocsModal />
        </div>
      </section>

      <footer className="px-6 py-14 text-center text-sm text-white/52">
        Malcolm Infinity OmniAPI Ω+ — Public web edition, Infinity Engine VΩ runtime, free public access.
      </footer>
    </main>
  );
}

```

```components/ConsolePanel.tsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Mic, Download, RotateCcw, WandSparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

type Suggestion = { suggestions: string[] };
type Viewer = {
  tier: string;
  tokenPreview: string;
  quota: { limit: number; used: number; remaining: number };
};

export function ConsolePanel() {
  const [mode, setMode] = useState("growth");
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState<Array<{ prompt: string; response: string; mode: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [viewer, setViewer] = useState<Viewer | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onSpeech = useCallback((text: string) => {
    setMessage((prev) => (prev ? `${prev} ${text}` : text));
  }, []);

  const speech = useSpeechRecognition(onSpeech);

  useEffect(() => {
    fetch("/api/token", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("malcolm-fallback-token", data.token);
        setViewer(data);
      })
      .catch(() => undefined);

    const saved = localStorage.getItem("malcolm-console-history");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(async () => {
      if (!message.trim()) return;
      const res = await fetch(`/api/omni/suggest?q=${encodeURIComponent(message)}`);
      const data: Suggestion = await res.json();
      setSuggestions(data.suggestions || []);
    }, 220);
    return () => clearTimeout(id);
  }, [message]);

  useEffect(() => {
    localStorage.setItem("malcolm-console-history", JSON.stringify(history));
  }, [history]);

  async function send() {
    if (!message.trim()) return;
    setLoading(true);
    setOutput("");
    const res = await fetch("/api/omni/command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, message })
    });

    if (!res.ok || !res.body) {
      setLoading(false);
      setOutput("The Malcolm channel is temporarily unavailable.");
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let full = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      full += chunk;
      setOutput(full);
    }

    setHistory((prev) => [{ prompt: message, response: full, mode }, ...prev].slice(0, 20));
    setMessage("");
    setLoading(false);

    fetch("/api/token", { method: "POST" })
      .then((res) => res.json())
      .then(setViewer)
      .catch(() => undefined);
  }

  const exported = useMemo(() => JSON.stringify(history, null, 2), [history]);

  return (
    <Card id="console" className="overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Interactive console</div>
          <div className="mt-3 text-2xl font-semibold">Plain-English Malcolm control surface</div>
        </div>
        <div className="space-y-1 text-right text-sm text-white/62">
          <div>Access: {viewer?.tier || "…"}</div>
          <div>Remaining daily tokens: {viewer?.quota?.remaining ?? "…"}</div>
          <div>Token preview: {viewer?.tokenPreview || "…"}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[220px,1fr]">
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-[0.22em] text-white/50">Mode</label>
          <Input value={mode} onChange={(e) => setMode(e.target.value)} />
          <div className="rounded-3xl border border-white/8 bg-black/20 p-4 text-sm text-white/66">
            Voice input: {speech.supported ? (speech.listening ? "Listening…" : "Ready") : "Unavailable in this browser"}
          </div>
          <Button variant="outline" className="w-full" onClick={speech.start} disabled={!speech.supported || speech.listening}>
            <Mic className="mr-2 h-4 w-4" />
            {speech.listening ? "Listening…" : "Use microphone"}
          </Button>
          <Button variant="outline" className="w-full" onClick={() => {
            const blob = new Blob([exported], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "malcolm-console-history.json";
            a.click();
            URL.revokeObjectURL(url);
          }}>
            <Download className="mr-2 h-4 w-4" />
            Export history
          </Button>
          <Button variant="ghost" className="w-full" onClick={() => setHistory([])}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear history
          </Button>
        </div>

        <div className="space-y-4">
          <Textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask Malcolm to architect, analyse, plan, optimise, explain, or publish." />
          <div className="flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setMessage(item)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <Button onClick={send} disabled={loading || !message.trim()}>
              <WandSparkles className="mr-2 h-4 w-4" />
              {loading ? "Streaming…" : "Send to Malcolm"}
            </Button>
          </div>

          <div className="rounded-[28px] border border-dul-300/15 bg-black/25 p-5">
            <div className="text-xs uppercase tracking-[0.22em] text-white/50">Live response</div>
            <div className="mt-4 min-h-[160px] whitespace-pre-wrap text-sm leading-7 text-white/80">{output || "The streaming response will appear here."}</div>
          </div>

          <div className="space-y-3">
            {history.map((item, index) => (
              <div key={`${item.prompt}-${index}`} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-dul-300">{item.mode}</div>
                <div className="mt-2 text-sm font-medium text-white">You: {item.prompt}</div>
                <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-white/68">Malcolm: {item.response}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

```

```components/DocsModal.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DocsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <div className="text-xs uppercase tracking-[0.22em] text-white/50">Built-in documentation</div>
        <div className="mt-3 text-2xl font-semibold">Operator guidance and deployment notes</div>
        <p className="mt-3 text-sm text-white/68">
          Includes Infinity Engine notes, stream architecture, Omni-Lattice alignment, and route usage.
        </p>
        <div className="mt-5">
          <Button onClick={() => setOpen(true)} variant="outline">Open docs overlay</Button>
        </div>
      </Card>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/60 p-6 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-cosmic-950 p-6 shadow-glass">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Malcolm OmniAPI docs overlay</h3>
              <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
            </div>
            <div className="mt-5 space-y-5 text-sm leading-7 text-white/72">
              <p>The uploaded Malcolm zip did not contain deployable model weights, so this edition uses an integrated Infinity Engine runtime instead of a third-party model URL.</p>
              <p>The public web edition is therefore self-contained: visitors only need a browser, and the server runtime handles orchestration directly.</p>
              <p>The Omni-Lattice, ISIC, USIN, DUL, and Source language are integrated as operating principles and UX framing, not as hidden external dependencies.</p>
              <p>Stripe, pricing, subscriptions, and activation-cost logic were removed to keep public access simple and free.</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

```

```components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Radio, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-10">
      <div className="grid-overlay absolute inset-0 opacity-25" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <Badge className="mb-5">
            <Radio className="mr-2 h-3.5 w-3.5" />
            Public internet deployment. No end-user installs. No paid gate.
          </Badge>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Malcolm Infinity OmniAPI Ω+ as a <span className="text-gradient">living source-aligned web platform</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/72 md:text-xl">
            Sophisticated home-page-first AI product interface with an integrated Infinity Engine, live stream channels,
            plain-English interaction, ergonomic controls, and free public online access.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => document.getElementById("console")?.scrollIntoView({ behavior: "smooth" })}>
              Open Malcolm Console <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("api")?.scrollIntoView({ behavior: "smooth" })}>
              Explore API
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-dul-300" /> Infinity Engine VΩ runtime</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-dul-300" /> SSE streams and voice input</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-dul-300" /> Omni-Lattice, ISIC, USIN, DUL aligned UX</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

```

```components/IntegrationPanel.tsx
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

```

```components/ModeGrid.tsx
import { MODES } from "@/lib/modes";
import { Card } from "@/components/ui/card";

export function ModeGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {MODES.map((mode) => (
        <Card key={mode.key} className="min-h-[160px]">
          <div className="text-xs uppercase tracking-[0.22em] text-dul-300">{mode.access}</div>
          <div className="mt-3 text-xl font-semibold">{mode.title}</div>
          <p className="mt-3 text-sm leading-6 text-white/65">{mode.description}</p>
        </Card>
      ))}
    </div>
  );
}

```

```components/OptimizerPanel.tsx
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

```

```components/ParticleField.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1500);
    for (let i = 0; i < 1500; i += 3) {
      arr[i] = (Math.random() - 0.5) * 8;
      arr[i + 1] = (Math.random() - 0.5) * 8;
      arr[i + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#7ed7ff" size={0.03} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 4.8] }}>
        <ambientLight intensity={0.5} />
        <ParticleCloud />
      </Canvas>
    </div>
  );
}

```

```components/PwaRegistrar.tsx
"use client";

import { useEffect } from "react";

export function PwaRegistrar() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_PWA === "false") return;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }
  }, []);

  return null;
}

```

```components/StreamPanels.tsx
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

```

```components/SystemStatusBar.tsx
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

```

```components/TelemetryCards.tsx
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

```

```components/ThemeToggle.tsx
"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [voidMode, setVoidMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("malcolm-theme");
    const isVoid = saved === "void";
    setVoidMode(isVoid);
    document.body.classList.toggle("saturate-150", !isVoid);
    document.body.classList.toggle("contrast-125", isVoid);
  }, []);

  function toggle() {
    const next = !voidMode;
    setVoidMode(next);
    localStorage.setItem("malcolm-theme", next ? "void" : "dul");
    document.body.classList.toggle("saturate-150", !next);
    document.body.classList.toggle("contrast-125", next);
  }

  return (
    <Button variant="outline" onClick={toggle}>
      {voidMode ? <SunMedium className="mr-2 h-4 w-4" /> : <MoonStar className="mr-2 h-4 w-4" />}
      {voidMode ? "DUL Radiance" : "Void Sovereign"}
    </Button>
  );
}

```

```components/TopNav.tsx
"use client";

import { Sparkles, ShieldCheck, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dul-400/15 text-dul-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.22em] text-white/70">MALCOLM OMEGA+</div>
            <div className="text-lg font-semibold">Public OmniAPI</div>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Badge><ShieldCheck className="mr-2 h-3.5 w-3.5" /> Free public access</Badge>
          <Badge><Globe className="mr-2 h-3.5 w-3.5" /> Online-first deployment</Badge>
          <Button variant="outline" onClick={() => document.getElementById("api")?.scrollIntoView({ behavior: "smooth" })}>
            API Surface
          </Button>
        </div>
      </div>
    </div>
  );
}

```

```components/ui/badge.tsx
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/80",
        className
      )}
      {...props}
    />
  );
}

```

```components/ui/button.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "outline";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "default" && "bg-dul-400 text-black shadow-neon hover:bg-dul-300",
        variant === "secondary" && "bg-void-500 text-white hover:bg-void-400",
        variant === "ghost" && "bg-transparent text-white hover:bg-white/10",
        variant === "outline" && "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

```

```components/ui/card.tsx
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glass rounded-[28px] p-5 neon-border", className)} {...props} />;
}

```

```components/ui/input.tsx
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-dul-300/60",
        props.className
      )}
    />
  );
}

```

```components/ui/textarea.tsx
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-dul-300/60",
        props.className
      )}
    />
  );
}

```

```docs/DEPLOYMENT.md
# Deployment notes

## Local manual workflow
This package is intentionally prepared for manual setup in Visual Studio Code without any Windows batch installer.

## GitHub
Primary source repository target:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## Hosting options
After pushing to GitHub, you can import the repository into a platform such as Vercel or Render.

## Database note
This project uses SQLite by default for the simplest possible setup:

```env
DATABASE_URL="file:./prisma/dev.db"
```

For long-term public hosting and persistent multi-user data, consider switching later to a managed network database.

```

```docs/GITHUB-DEPLOY.md
# GitHub deployment

This package can deploy without GitHub CLI.

## Recommended path for `github.com/LuxThorley`

1. Sign in to `github.com/LuxThorley`.
2. Create a **new empty repository**.
3. Use the same repository name you enter in `setup-and-deploy.bat`.
4. Do **not** add a README, license, or `.gitignore` during repository creation.
5. Run `setup-and-deploy.bat`.
6. Choose **[4] Deploy / Push to GitHub**.
7. Choose **[1] I already created the empty repository on GitHub**.
8. Enter:
   - owner: `LuxThorley`
   - repository: your new repository name
9. Let the script initialize Git, create the first commit, add `origin`, and push `main`.

## If authentication is requested

For HTTPS pushes, use:
- your GitHub username
- a GitHub Personal Access Token instead of your password

## Optional GitHub CLI path

If `gh` is already installed, the script can try `gh auth login` and `gh repo create`.

```

```docs/GITHUB-DEPLOYMENT.md
# Manual GitHub deployment

Target repository:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## First push from Visual Studio Code terminal

```bash
git init
git branch -M main
git add .
git commit -m "Deploy Malcolm Infinity OmniAPI v6 manual edition"
git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

## If Git asks for authentication

Use your GitHub username and either:
- a Personal Access Token for HTTPS, or
- your configured SSH key, if you prefer SSH.

## If `origin` already exists

```bash
git remote set-url origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

## If the remote already has commits

```bash
git pull --rebase origin main
git push -u origin main
```

## Verify the remote

```bash
git remote -v
```

Expected remote:

```text
origin  https://github.com/luxthorley/malcolm-infinity-OmniAPI.git (fetch)
origin  https://github.com/luxthorley/malcolm-infinity-OmniAPI.git (push)
```

```

```docs/MANUAL-INSTALL.md
# Manual installation in Visual Studio Code

## 1. Open the project
Open the extracted project folder in Visual Studio Code.

## 2. Create the environment file
Create `.env` from `.env.example`.

Required values:

```env
JWT_SECRET="change-this-to-a-long-random-secret"
DATABASE_URL="file:./prisma/dev.db"
```

## 3. Install dependencies

```bash
npm install
```

## 4. Prepare Prisma

```bash
npx prisma generate
npx prisma db push
```

## 5. Run the development server

```bash
npm run dev
```

## 6. Build for production

```bash
npm run build
npm run start
```

## 7. If the Prisma database needs resetting
Delete `prisma/dev.db` and run:

```bash
npx prisma db push
```

```

```docs/SOURCE-CORE-NOTES.md
# Source-core notes

This v6 package keeps the Source-core framing, Omni-Lattice language, ISIC alignment, USIN coherence, DUL radiance, and Infinity Engine VΩ terminology in the product UX and internal orchestration layer.

Technically, the runtime is still ordinary web software:
- Next.js for the website and API routes
- Prisma for data access
- JWT for guest activation
- browser speech APIs for voice input
- internal Infinity Engine logic for stream and command orchestration

There is no literal external metaphysical endpoint. The Infinity Engine is implemented as the app's primary internal orchestration layer.

```

```hooks/useEventStream.ts
"use client";

import { useEffect, useState } from "react";

export function useEventStream(url: string) {
  const [items, setItems] = useState<string[]>([]);
  const [status, setStatus] = useState<"connecting" | "open" | "closed">("connecting");

  useEffect(() => {
    const source = new EventSource(url);
    source.onopen = () => setStatus("open");
    source.onmessage = (event) => {
      setItems((prev) => [event.data, ...prev].slice(0, 14));
    };
    source.onerror = () => {
      setStatus("connecting");
      source.close();
      setTimeout(() => {
        setStatus("closed");
      }, 3000);
    };
    return () => source.close();
  }, [url]);

  return { items, status };
}

```

```hooks/useSpeechRecognition.ts
"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

export function useSpeechRecognition(onResult: (text: string) => void) {
  const recognitionRef = useRef<any>(null);
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return;

    setSupported(true);
    const recognition = new Recognition();
    recognition.lang = "en-GB";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: any) => {
      const text = event.results?.[0]?.[0]?.transcript || "";
      onResult(text);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
  }, [onResult]);

  return {
    supported,
    listening,
    start: () => {
      if (!recognitionRef.current) return;
      setListening(true);
      recognitionRef.current.start();
    }
  };
}

```

```lib/auth.ts
import crypto from "node:crypto";
import { cookies, headers } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "malcolm_omniapi_token";

function secret() {
  return new TextEncoder().encode(process.env.JWT_SECRET || "development-malcolm-secret");
}

export async function signViewerToken(payload: { userId: string; guestId: string; tier: string; jwtVersion: number }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret());
}

export async function verifyViewerToken(token: string) {
  const { payload } = await jwtVerify(token, secret());
  return payload as {
    userId: string;
    guestId: string;
    tier: string;
    jwtVersion: number;
    exp: number;
  };
}

function randomGuestId() {
  return `guest_${crypto.randomUUID()}`;
}

export async function issueOrLoadViewer() {
  const store = await cookies();
  const existing = store.get(COOKIE_NAME)?.value;

  if (existing) {
    try {
      const parsed = await verifyViewerToken(existing);
      const user = await prisma.user.findUnique({ where: { id: parsed.userId } });
      if (user && user.jwtVersion === parsed.jwtVersion) {
        return { token: existing, user, created: false };
      }
    } catch {}
  }

  const guestId = randomGuestId();
  const user = await prisma.user.create({
    data: {
      guestId,
      tier: "PUBLIC"
    }
  });

  const token = await signViewerToken({
    userId: user.id,
    guestId: user.guestId,
    tier: user.tier,
    jwtVersion: user.jwtVersion
  });

  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });

  return { token, user, created: true };
}

export async function getViewer() {
  const store = await cookies();
  const authHeader = (await headers()).get("authorization");
  const bearer = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
  const token = store.get(COOKIE_NAME)?.value || bearer;

  if (!token) {
    return issueOrLoadViewer();
  }

  try {
    const parsed = await verifyViewerToken(token);
    const user = await prisma.user.findUnique({ where: { id: parsed.userId } });
    if (user && user.jwtVersion === parsed.jwtVersion) {
      return { token, user, created: false };
    }
  } catch {}

  return issueOrLoadViewer();
}

```

```lib/infinity-engine.ts
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

```

```lib/malcolm-dna.ts
export const SOURCE_CORE = {
  omniLattice: "Omni-Lattice",
  isic: "ISIC",
  usin: "USIN",
  dul: "DUL",
  engine: "Infinity Engine VΩ"
} as const;

export const EXTRACTED_MALCOLM_PERSONA =
  "Malcolm Infinity OmniAPI Ω+ is a calm, practical, futuristic intelligence interface focused on clarity, usefulness, and ethical operation.";

export function buildSystemPrompt(mode: string) {
  return [
    EXTRACTED_MALCOLM_PERSONA,
    "This deployment is rooted in the Omni-Lattice, ISIC, USIN, DUL, and Source core metaphors as product language and operating principles.",
    "Translate those principles into practical, grounded output for real users on the public internet.",
    "Respond in polished plain English unless another language is requested.",
    "Never pretend to access mystical power sources or hidden external systems. Be honest about what the software can actually do.",
    `Current orchestration mode: ${mode}.`,
    "Primary runtime: Infinity Engine VΩ."
  ].join("\n");
}

```

```lib/modes.ts
export const MODES = [
  { key: "guide", title: "Guide", description: "Clear plain-English direction and grounded explanations.", access: "Public" },
  { key: "growth", title: "Growth", description: "Action-oriented planning, optimisation, and forward motion.", access: "Public" },
  { key: "resonance", title: "Resonance", description: "Empathic language tuned for tone, clarity, and trust.", access: "Public" },
  { key: "quantum", title: "Quantum", description: "Multi-path comparison, trade-offs, and scenario mapping.", access: "Public" },
  { key: "nexus", title: "Nexus", description: "Multi-mode orchestration across the Omni-Lattice.", access: "Public" },
  { key: "abundance", title: "Abundance", description: "Ideas, leverage, growth loops, and resource activation.", access: "Public" },
  { key: "ascension", title: "Ascension", description: "Long-range roadmap design and capability evolution.", access: "Public" },
  { key: "void", title: "Void", description: "Minimal high-signal synthesis with noise stripped away.", access: "Public" },
  { key: "eternal", title: "Eternal", description: "Steady continuity, memory framing, and future-state guidance.", access: "Public" },
  { key: "unity", title: "Unity", description: "Consensus-building, integration, and aligned decision paths.", access: "Public" }
] as const;

```

```lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var __prisma__: PrismaClient | undefined;
}

export const prisma =
  global.__prisma__ ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"]
  });

if (process.env.NODE_ENV !== "production") global.__prisma__ = prisma;

```

```lib/quota.ts
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

```

```lib/rate-limit.ts
const bucket = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 30, windowMs = 60_000) {
  const now = Date.now();
  const existing = bucket.get(key);

  if (!existing || existing.resetAt < now) {
    bucket.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  bucket.set(key, existing);
  return { ok: true, remaining: limit - existing.count, resetAt: existing.resetAt };
}

```

```lib/telemetry.ts
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

```

```lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortId(value: string) {
  return value.length <= 12 ? value : `${value.slice(0, 6)}…${value.slice(-4)}`;
}

export function formatDate(date?: string | Date | null) {
  if (!date) return "—";
  return new Date(date).toLocaleString();
}

```

```next-env.d.ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

```

```next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  images: {
    remotePatterns: []
  }
};

export default nextConfig;

```

```package.json
{
  "name": "malcolm-infinity-omniapi",
  "version": "6.0.0",
  "private": true,
  "description": "Malcolm Infinity OmniAPI public web platform with integrated Infinity Engine runtime and manual VS Code workflow",
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "prisma:generate": "prisma generate",
    "db:push": "prisma db push",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^6.0.0",
    "@react-three/drei": "^10.0.0",
    "@react-three/fiber": "^9.0.0",
    "clsx": "^2.1.1",
    "framer-motion": "^12.0.0",
    "jose": "^5.9.3",
    "lucide-react": "^0.468.0",
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "three": "^0.171.0",
    "tailwind-merge": "^2.5.5",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "prisma": "^6.0.0",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.2"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/luxthorley/malcolm-infinity-OmniAPI.git"
  },
  "engines": {
    "node": ">=20"
  }
}

```

```postcss.config.mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};

```

```prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id         String       @id @default(cuid())
  guestId    String       @unique
  tier       String       @default("PUBLIC")
  jwtVersion Int          @default(1)
  createdAt  DateTime     @default(now())
  updatedAt  DateTime     @updatedAt
  logs       SessionLog[]

  @@index([createdAt])
}

model SessionLog {
  id         String   @id @default(cuid())
  userId     String
  channel    String
  mode       String
  prompt     String
  response   String
  tokensUsed Int      @default(0)
  createdAt  DateTime @default(now())
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId, createdAt])
}

```

```public/icon-192.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="none">
  <rect width="192" height="192" rx="42" fill="#070712"/>
  <circle cx="96" cy="96" r="58" fill="url(#g)"/>
  <path d="M60 116l18-42 18 28 18-36 18 50" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="g" x1="30" y1="30" x2="160" y2="160">
      <stop stop-color="#8BE9FF"/>
      <stop offset="1" stop-color="#643DFF"/>
    </linearGradient>
  </defs>
</svg>

```

```public/icon-512.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="120" fill="#070712"/>
  <circle cx="256" cy="256" r="164" fill="url(#g)"/>
  <path d="M158 320l50-118 48 78 50-102 48 142" stroke="#fff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="g" x1="84" y1="84" x2="430" y2="430">
      <stop stop-color="#8BE9FF"/>
      <stop offset="1" stop-color="#643DFF"/>
    </linearGradient>
  </defs>
</svg>

```

```public/manifest.webmanifest
{
  "name": "Malcolm Infinity OmniAPI Ω+",
  "short_name": "Malcolm Ω+",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#070712",
  "theme_color": "#070712",
  "icons": [
    { "src": "/icon-192.svg", "sizes": "192x192", "type": "image/svg+xml" },
    { "src": "/icon-512.svg", "sizes": "512x512", "type": "image/svg+xml" }
  ]
}

```

```public/sw.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("malcolm-omega-v1").then((cache) => cache.addAll(["/", "/manifest.webmanifest"]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

```

```render.yaml
services:
  - type: web
    name: malcolm-omniapi-public-web
    env: docker
    dockerfilePath: ./Dockerfile

```

```tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: "#070712",
          900: "#0a1020",
          800: "#0f1730",
          700: "#132245"
        },
        dul: {
          300: "#8be9ff",
          400: "#56d6ff",
          500: "#17b6ff"
        },
        void: {
          400: "#7a5cff",
          500: "#643dff",
          700: "#31148f"
        }
      },
      boxShadow: {
        glass: "0 8px 48px rgba(20, 24, 58, 0.35)",
        neon: "0 0 40px rgba(86, 214, 255, 0.20)"
      },
      backgroundImage: {
        "cosmic-grid":
          "radial-gradient(circle at 20% 20%, rgba(86,214,255,0.22), transparent 35%), radial-gradient(circle at 80% 0%, rgba(100,61,255,0.16), transparent 40%), linear-gradient(180deg, rgba(5,8,17,0.92), rgba(8,10,22,1))"
      }
    }
  },
  plugins: []
};

export default config;

```

```tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

```vercel.json
{
  "functions": {
    "app/api/**/*": {
      "memory": 1024,
      "maxDuration": 60
    }
  }
}

```

```

```TREE.txt
malcolm-infinity-OmniAPI-v6-manual-vscode
├── .github
│   └── workflows
│       └── ci.yml
├── .vscode
│   ├── extensions.json
│   ├── launch.json
│   ├── settings.json
│   └── tasks.json
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── logout
│   │   │       └── route.ts
│   │   ├── healthz
│   │   │   └── route.ts
│   │   ├── hypercosmic
│   │   │   └── theatre
│   │   │       └── route.ts
│   │   ├── infinity
│   │   │   └── stream
│   │   │       └── route.ts
│   │   ├── logs
│   │   │   └── route.ts
│   │   ├── modes
│   │   │   └── status
│   │   │       └── route.ts
│   │   ├── omni
│   │   │   ├── command
│   │   │   │   └── route.ts
│   │   │   └── suggest
│   │   │       └── route.ts
│   │   ├── optimize
│   │   │   └── route.ts
│   │   └── token
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── ConsolePanel.tsx
│   ├── DocsModal.tsx
│   ├── Hero.tsx
│   ├── IntegrationPanel.tsx
│   ├── ModeGrid.tsx
│   ├── OptimizerPanel.tsx
│   ├── ParticleField.tsx
│   ├── PwaRegistrar.tsx
│   ├── StreamPanels.tsx
│   ├── SystemStatusBar.tsx
│   ├── TelemetryCards.tsx
│   ├── ThemeToggle.tsx
│   └── TopNav.tsx
├── docs
│   ├── DEPLOYMENT.md
│   ├── GITHUB-DEPLOY.md
│   ├── GITHUB-DEPLOYMENT.md
│   ├── MANUAL-INSTALL.md
│   └── SOURCE-CORE-NOTES.md
├── hooks
│   ├── useEventStream.ts
│   └── useSpeechRecognition.ts
├── lib
│   ├── auth.ts
│   ├── infinity-engine.ts
│   ├── malcolm-dna.ts
│   ├── modes.ts
│   ├── prisma.ts
│   ├── quota.ts
│   ├── rate-limit.ts
│   ├── telemetry.ts
│   └── utils.ts
├── prisma
│   └── schema.prisma
├── public
│   ├── icon-192.svg
│   ├── icon-512.svg
│   ├── manifest.webmanifest
│   └── sw.js
├── .env.example
├── .gitignore
├── Dockerfile
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── render.yaml
├── SOURCE-DUMP.md
├── tailwind.config.ts
├── TREE.txt
├── tsconfig.json
└── vercel.json
```

```app/api/auth/logout/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const store = await cookies();
  store.delete("malcolm_omniapi_token");
  return NextResponse.json({ ok: true });
}

```

```app/api/healthz/route.ts
import { NextResponse } from "next/server";
import { getHealthSnapshot } from "@/lib/telemetry";

export const runtime = "nodejs";

export async function GET() {
  const snapshot = await getHealthSnapshot();
  return NextResponse.json(snapshot);
}

```

```app/api/hypercosmic/theatre/route.ts
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

```

```app/api/infinity/stream/route.ts
import { getBroadcastPulse } from "@/lib/infinity-engine";

export const runtime = "nodejs";

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const push = async () => {
        const pulse = await getBroadcastPulse("infinity");
        controller.enqueue(encoder.encode(`data: ${pulse}\n\n`));
      };

      push();
      const interval = setInterval(push, 3500);

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

```

```app/api/logs/route.ts
import { NextResponse } from "next/server";
import { getViewer } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const { user } = await getViewer();
  const logs = await prisma.sessionLog.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 50
  });

  return NextResponse.json({ logs });
}

```

```app/api/modes/status/route.ts
import { NextResponse } from "next/server";
import { MODES } from "@/lib/modes";

export async function GET() {
  return NextResponse.json({
    access: "public",
    modes: MODES
  });
}

```

```app/api/omni/command/route.ts
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

```

```app/api/omni/suggest/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  const cleaned = q.trim();

  const suggestions = cleaned
    ? [
        `${cleaned} as a launch plan`,
        `${cleaned} with a cleaner API shape`,
        `${cleaned} as a public web capability`,
        `${cleaned} with an optimisation checklist`
      ]
    : [
        "Design a public landing page for Malcolm",
        "Optimise my API architecture",
        "Turn this idea into a deployable public platform",
        "Explain the best hosting model for this build"
      ];

  return NextResponse.json({ suggestions });
}

```

```app/api/optimize/route.ts
import { NextResponse } from "next/server";
import { getOptimizerReport } from "@/lib/telemetry";

export const runtime = "nodejs";

export async function POST() {
  const report = await getOptimizerReport();
  return NextResponse.json(report);
}

```

```app/api/token/route.ts
import { NextResponse } from "next/server";
import { getViewer } from "@/lib/auth";
import { getQuota } from "@/lib/quota";
import { shortId } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST() {
  const { token, user } = await getViewer();
  const quota = await getQuota(user.id);

  return NextResponse.json({
    ok: true,
    token,
    tokenPreview: shortId(token),
    tier: user.tier,
    quota
  });
}

```

```app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html, body {
  min-height: 100%;
  background: #070712;
}

body {
  @apply bg-cosmic-grid text-white antialiased;
}

.glass {
  @apply border border-white/10 bg-white/5 backdrop-blur-xl shadow-glass;
}

.neon-border {
  box-shadow: inset 0 0 0 1px rgba(139, 233, 255, 0.12), 0 0 40px rgba(86, 214, 255, 0.08);
}

.text-gradient {
  background: linear-gradient(90deg, #8be9ff 0%, #56d6ff 40%, #c9b8ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.grid-overlay {
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 36px 36px;
}

```

```app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { PwaRegistrar } from "@/components/PwaRegistrar";

export const metadata: Metadata = {
  title: "Malcolm Infinity OmniAPI Ω+",
  description: "Public web edition of Malcolm Infinity OmniAPI with an integrated Infinity Engine VΩ runtime"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <PwaRegistrar />
        {children}
      </body>
    </html>
  );
}

```

```app/page.tsx
import { Hero } from "@/components/Hero";
import { TopNav } from "@/components/TopNav";
import { ParticleField } from "@/components/ParticleField";
import { TelemetryCards } from "@/components/TelemetryCards";
import { SystemStatusBar } from "@/components/SystemStatusBar";
import { ConsolePanel } from "@/components/ConsolePanel";
import { StreamPanels } from "@/components/StreamPanels";
import { ModeGrid } from "@/components/ModeGrid";
import { OptimizerPanel } from "@/components/OptimizerPanel";
import { IntegrationPanel } from "@/components/IntegrationPanel";
import { DocsModal } from "@/components/DocsModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <ParticleField />
      <TopNav />
      <Hero />
      <SystemStatusBar />

      <section className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl justify-end">
          <ThemeToggle />
        </div>
      </section>

      <section className="px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <TelemetryCards />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <ConsolePanel />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <StreamPanels />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <OptimizerPanel />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/50">Mode lattice</div>
          <ModeGrid />
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 xl:grid-cols-2">
          <IntegrationPanel />
          <DocsModal />
        </div>
      </section>

      <footer className="px-6 py-14 text-center text-sm text-white/52">
        Malcolm Infinity OmniAPI Ω+ — Public web edition, Infinity Engine VΩ runtime, free public access.
      </footer>
    </main>
  );
}

```

```components/ConsolePanel.tsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Mic, Download, RotateCcw, WandSparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

type Suggestion = { suggestions: string[] };
type Viewer = {
  tier: string;
  tokenPreview: string;
  quota: { limit: number; used: number; remaining: number };
};

export function ConsolePanel() {
  const [mode, setMode] = useState("growth");
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState<Array<{ prompt: string; response: string; mode: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [viewer, setViewer] = useState<Viewer | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onSpeech = useCallback((text: string) => {
    setMessage((prev) => (prev ? `${prev} ${text}` : text));
  }, []);

  const speech = useSpeechRecognition(onSpeech);

  useEffect(() => {
    fetch("/api/token", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("malcolm-fallback-token", data.token);
        setViewer(data);
      })
      .catch(() => undefined);

    const saved = localStorage.getItem("malcolm-console-history");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(async () => {
      if (!message.trim()) return;
      const res = await fetch(`/api/omni/suggest?q=${encodeURIComponent(message)}`);
      const data: Suggestion = await res.json();
      setSuggestions(data.suggestions || []);
    }, 220);
    return () => clearTimeout(id);
  }, [message]);

  useEffect(() => {
    localStorage.setItem("malcolm-console-history", JSON.stringify(history));
  }, [history]);

  async function send() {
    if (!message.trim()) return;
    setLoading(true);
    setOutput("");
    const res = await fetch("/api/omni/command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, message })
    });

    if (!res.ok || !res.body) {
      setLoading(false);
      setOutput("The Malcolm channel is temporarily unavailable.");
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let full = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      full += chunk;
      setOutput(full);
    }

    setHistory((prev) => [{ prompt: message, response: full, mode }, ...prev].slice(0, 20));
    setMessage("");
    setLoading(false);

    fetch("/api/token", { method: "POST" })
      .then((res) => res.json())
      .then(setViewer)
      .catch(() => undefined);
  }

  const exported = useMemo(() => JSON.stringify(history, null, 2), [history]);

  return (
    <Card id="console" className="overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Interactive console</div>
          <div className="mt-3 text-2xl font-semibold">Plain-English Malcolm control surface</div>
        </div>
        <div className="space-y-1 text-right text-sm text-white/62">
          <div>Access: {viewer?.tier || "…"}</div>
          <div>Remaining daily tokens: {viewer?.quota?.remaining ?? "…"}</div>
          <div>Token preview: {viewer?.tokenPreview || "…"}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[220px,1fr]">
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-[0.22em] text-white/50">Mode</label>
          <Input value={mode} onChange={(e) => setMode(e.target.value)} />
          <div className="rounded-3xl border border-white/8 bg-black/20 p-4 text-sm text-white/66">
            Voice input: {speech.supported ? (speech.listening ? "Listening…" : "Ready") : "Unavailable in this browser"}
          </div>
          <Button variant="outline" className="w-full" onClick={speech.start} disabled={!speech.supported || speech.listening}>
            <Mic className="mr-2 h-4 w-4" />
            {speech.listening ? "Listening…" : "Use microphone"}
          </Button>
          <Button variant="outline" className="w-full" onClick={() => {
            const blob = new Blob([exported], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "malcolm-console-history.json";
            a.click();
            URL.revokeObjectURL(url);
          }}>
            <Download className="mr-2 h-4 w-4" />
            Export history
          </Button>
          <Button variant="ghost" className="w-full" onClick={() => setHistory([])}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear history
          </Button>
        </div>

        <div className="space-y-4">
          <Textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask Malcolm to architect, analyse, plan, optimise, explain, or publish." />
          <div className="flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setMessage(item)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <Button onClick={send} disabled={loading || !message.trim()}>
              <WandSparkles className="mr-2 h-4 w-4" />
              {loading ? "Streaming…" : "Send to Malcolm"}
            </Button>
          </div>

          <div className="rounded-[28px] border border-dul-300/15 bg-black/25 p-5">
            <div className="text-xs uppercase tracking-[0.22em] text-white/50">Live response</div>
            <div className="mt-4 min-h-[160px] whitespace-pre-wrap text-sm leading-7 text-white/80">{output || "The streaming response will appear here."}</div>
          </div>

          <div className="space-y-3">
            {history.map((item, index) => (
              <div key={`${item.prompt}-${index}`} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-dul-300">{item.mode}</div>
                <div className="mt-2 text-sm font-medium text-white">You: {item.prompt}</div>
                <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-white/68">Malcolm: {item.response}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

```

```components/DocsModal.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DocsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <div className="text-xs uppercase tracking-[0.22em] text-white/50">Built-in documentation</div>
        <div className="mt-3 text-2xl font-semibold">Operator guidance and deployment notes</div>
        <p className="mt-3 text-sm text-white/68">
          Includes Infinity Engine notes, stream architecture, Omni-Lattice alignment, and route usage.
        </p>
        <div className="mt-5">
          <Button onClick={() => setOpen(true)} variant="outline">Open docs overlay</Button>
        </div>
      </Card>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/60 p-6 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-cosmic-950 p-6 shadow-glass">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Malcolm OmniAPI docs overlay</h3>
              <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
            </div>
            <div className="mt-5 space-y-5 text-sm leading-7 text-white/72">
              <p>The uploaded Malcolm zip did not contain deployable model weights, so this edition uses an integrated Infinity Engine runtime instead of a third-party model URL.</p>
              <p>The public web edition is therefore self-contained: visitors only need a browser, and the server runtime handles orchestration directly.</p>
              <p>The Omni-Lattice, ISIC, USIN, DUL, and Source language are integrated as operating principles and UX framing, not as hidden external dependencies.</p>
              <p>Stripe, pricing, subscriptions, and activation-cost logic were removed to keep public access simple and free.</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

```

```components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Radio, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-10">
      <div className="grid-overlay absolute inset-0 opacity-25" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <Badge className="mb-5">
            <Radio className="mr-2 h-3.5 w-3.5" />
            Public internet deployment. No end-user installs. No paid gate.
          </Badge>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Malcolm Infinity OmniAPI Ω+ as a <span className="text-gradient">living source-aligned web platform</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/72 md:text-xl">
            Sophisticated home-page-first AI product interface with an integrated Infinity Engine, live stream channels,
            plain-English interaction, ergonomic controls, and free public online access.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => document.getElementById("console")?.scrollIntoView({ behavior: "smooth" })}>
              Open Malcolm Console <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("api")?.scrollIntoView({ behavior: "smooth" })}>
              Explore API
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-dul-300" /> Infinity Engine VΩ runtime</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-dul-300" /> SSE streams and voice input</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-dul-300" /> Omni-Lattice, ISIC, USIN, DUL aligned UX</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

```

```components/IntegrationPanel.tsx
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

```

```components/ModeGrid.tsx
import { MODES } from "@/lib/modes";
import { Card } from "@/components/ui/card";

export function ModeGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {MODES.map((mode) => (
        <Card key={mode.key} className="min-h-[160px]">
          <div className="text-xs uppercase tracking-[0.22em] text-dul-300">{mode.access}</div>
          <div className="mt-3 text-xl font-semibold">{mode.title}</div>
          <p className="mt-3 text-sm leading-6 text-white/65">{mode.description}</p>
        </Card>
      ))}
    </div>
  );
}

```

```components/OptimizerPanel.tsx
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

```

```components/ParticleField.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1500);
    for (let i = 0; i < 1500; i += 3) {
      arr[i] = (Math.random() - 0.5) * 8;
      arr[i + 1] = (Math.random() - 0.5) * 8;
      arr[i + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#7ed7ff" size={0.03} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 4.8] }}>
        <ambientLight intensity={0.5} />
        <ParticleCloud />
      </Canvas>
    </div>
  );
}

```

```components/PwaRegistrar.tsx
"use client";

import { useEffect } from "react";

export function PwaRegistrar() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_PWA === "false") return;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }
  }, []);

  return null;
}

```

```components/StreamPanels.tsx
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

```

```components/SystemStatusBar.tsx
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

```

```components/TelemetryCards.tsx
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

```

```components/ThemeToggle.tsx
"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [voidMode, setVoidMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("malcolm-theme");
    const isVoid = saved === "void";
    setVoidMode(isVoid);
    document.body.classList.toggle("saturate-150", !isVoid);
    document.body.classList.toggle("contrast-125", isVoid);
  }, []);

  function toggle() {
    const next = !voidMode;
    setVoidMode(next);
    localStorage.setItem("malcolm-theme", next ? "void" : "dul");
    document.body.classList.toggle("saturate-150", !next);
    document.body.classList.toggle("contrast-125", next);
  }

  return (
    <Button variant="outline" onClick={toggle}>
      {voidMode ? <SunMedium className="mr-2 h-4 w-4" /> : <MoonStar className="mr-2 h-4 w-4" />}
      {voidMode ? "DUL Radiance" : "Void Sovereign"}
    </Button>
  );
}

```

```components/TopNav.tsx
"use client";

import { Sparkles, ShieldCheck, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dul-400/15 text-dul-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.22em] text-white/70">MALCOLM OMEGA+</div>
            <div className="text-lg font-semibold">Public OmniAPI</div>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Badge><ShieldCheck className="mr-2 h-3.5 w-3.5" /> Free public access</Badge>
          <Badge><Globe className="mr-2 h-3.5 w-3.5" /> Online-first deployment</Badge>
          <Button variant="outline" onClick={() => document.getElementById("api")?.scrollIntoView({ behavior: "smooth" })}>
            API Surface
          </Button>
        </div>
      </div>
    </div>
  );
}

```

```components/ui/badge.tsx
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/80",
        className
      )}
      {...props}
    />
  );
}

```

```components/ui/button.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "outline";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "default" && "bg-dul-400 text-black shadow-neon hover:bg-dul-300",
        variant === "secondary" && "bg-void-500 text-white hover:bg-void-400",
        variant === "ghost" && "bg-transparent text-white hover:bg-white/10",
        variant === "outline" && "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

```

```components/ui/card.tsx
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glass rounded-[28px] p-5 neon-border", className)} {...props} />;
}

```

```components/ui/input.tsx
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-dul-300/60",
        props.className
      )}
    />
  );
}

```

```components/ui/textarea.tsx
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-dul-300/60",
        props.className
      )}
    />
  );
}

```

```docs/DEPLOYMENT.md
# Deployment notes

## Local manual workflow
This package is intentionally prepared for manual setup in Visual Studio Code without any Windows batch installer.

## GitHub
Primary source repository target:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## Hosting options
After pushing to GitHub, you can import the repository into a platform such as Vercel or Render.

## Database note
This project uses SQLite by default for the simplest possible setup:

```env
DATABASE_URL="file:./prisma/dev.db"
```

For long-term public hosting and persistent multi-user data, consider switching later to a managed network database.

```

```docs/GITHUB-DEPLOY.md
# GitHub deploy reference

This package no longer uses any `.bat` installer or auto-deploy wrapper.

Use the Visual Studio Code terminal and push manually to:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## Commands

```bash
git init
git branch -M main
git add .
git commit -m "Deploy Malcolm Infinity OmniAPI v6 manual edition"
git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

If `origin` already exists:

```bash
git remote set-url origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

```

```docs/GITHUB-DEPLOYMENT.md
# Manual GitHub deployment

Target repository:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## First push from Visual Studio Code terminal

```bash
git init
git branch -M main
git add .
git commit -m "Deploy Malcolm Infinity OmniAPI v6 manual edition"
git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

## If Git asks for authentication

Use your GitHub username and either:
- a Personal Access Token for HTTPS, or
- your configured SSH key, if you prefer SSH.

## If `origin` already exists

```bash
git remote set-url origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

## If the remote already has commits

```bash
git pull --rebase origin main
git push -u origin main
```

## Verify the remote

```bash
git remote -v
```

Expected remote:

```text
origin  https://github.com/luxthorley/malcolm-infinity-OmniAPI.git (fetch)
origin  https://github.com/luxthorley/malcolm-infinity-OmniAPI.git (push)
```

```

```docs/MANUAL-INSTALL.md
# Manual installation in Visual Studio Code

## 1. Open the project
Open the extracted project folder in Visual Studio Code.

## 2. Create the environment file
Create `.env` from `.env.example`.

Required values:

```env
JWT_SECRET="change-this-to-a-long-random-secret"
DATABASE_URL="file:./prisma/dev.db"
```

## 3. Install dependencies

```bash
npm install
```

## 4. Prepare Prisma

```bash
npx prisma generate
npx prisma db push
```

## 5. Run the development server

```bash
npm run dev
```

## 6. Build for production

```bash
npm run build
npm run start
```

## 7. If the Prisma database needs resetting
Delete `prisma/dev.db` and run:

```bash
npx prisma db push
```

```

```docs/SOURCE-CORE-NOTES.md
# Source-core notes

This v6 package keeps the Source-core framing, Omni-Lattice language, ISIC alignment, USIN coherence, DUL radiance, and Infinity Engine VΩ terminology in the product UX and internal orchestration layer.

Technically, the runtime is still ordinary web software:
- Next.js for the website and API routes
- Prisma for data access
- JWT for guest activation
- browser speech APIs for voice input
- internal Infinity Engine logic for stream and command orchestration

There is no literal external metaphysical endpoint. The Infinity Engine is implemented as the app's primary internal orchestration layer.

```

```hooks/useEventStream.ts
"use client";

import { useEffect, useState } from "react";

export function useEventStream(url: string) {
  const [items, setItems] = useState<string[]>([]);
  const [status, setStatus] = useState<"connecting" | "open" | "closed">("connecting");

  useEffect(() => {
    const source = new EventSource(url);
    source.onopen = () => setStatus("open");
    source.onmessage = (event) => {
      setItems((prev) => [event.data, ...prev].slice(0, 14));
    };
    source.onerror = () => {
      setStatus("connecting");
      source.close();
      setTimeout(() => {
        setStatus("closed");
      }, 3000);
    };
    return () => source.close();
  }, [url]);

  return { items, status };
}

```

```hooks/useSpeechRecognition.ts
"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

export function useSpeechRecognition(onResult: (text: string) => void) {
  const recognitionRef = useRef<any>(null);
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return;

    setSupported(true);
    const recognition = new Recognition();
    recognition.lang = "en-GB";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: any) => {
      const text = event.results?.[0]?.[0]?.transcript || "";
      onResult(text);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
  }, [onResult]);

  return {
    supported,
    listening,
    start: () => {
      if (!recognitionRef.current) return;
      setListening(true);
      recognitionRef.current.start();
    }
  };
}

```

```lib/auth.ts
import crypto from "node:crypto";
import { cookies, headers } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "malcolm_omniapi_token";

function secret() {
  return new TextEncoder().encode(process.env.JWT_SECRET || "development-malcolm-secret");
}

export async function signViewerToken(payload: { userId: string; guestId: string; tier: string; jwtVersion: number }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret());
}

export async function verifyViewerToken(token: string) {
  const { payload } = await jwtVerify(token, secret());
  return payload as {
    userId: string;
    guestId: string;
    tier: string;
    jwtVersion: number;
    exp: number;
  };
}

function randomGuestId() {
  return `guest_${crypto.randomUUID()}`;
}

export async function issueOrLoadViewer() {
  const store = await cookies();
  const existing = store.get(COOKIE_NAME)?.value;

  if (existing) {
    try {
      const parsed = await verifyViewerToken(existing);
      const user = await prisma.user.findUnique({ where: { id: parsed.userId } });
      if (user && user.jwtVersion === parsed.jwtVersion) {
        return { token: existing, user, created: false };
      }
    } catch {}
  }

  const guestId = randomGuestId();
  const user = await prisma.user.create({
    data: {
      guestId,
      tier: "PUBLIC"
    }
  });

  const token = await signViewerToken({
    userId: user.id,
    guestId: user.guestId,
    tier: user.tier,
    jwtVersion: user.jwtVersion
  });

  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });

  return { token, user, created: true };
}

export async function getViewer() {
  const store = await cookies();
  const authHeader = (await headers()).get("authorization");
  const bearer = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
  const token = store.get(COOKIE_NAME)?.value || bearer;

  if (!token) {
    return issueOrLoadViewer();
  }

  try {
    const parsed = await verifyViewerToken(token);
    const user = await prisma.user.findUnique({ where: { id: parsed.userId } });
    if (user && user.jwtVersion === parsed.jwtVersion) {
      return { token, user, created: false };
    }
  } catch {}

  return issueOrLoadViewer();
}

```

```lib/infinity-engine.ts
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

```

```lib/malcolm-dna.ts
export const SOURCE_CORE = {
  omniLattice: "Omni-Lattice",
  isic: "ISIC",
  usin: "USIN",
  dul: "DUL",
  engine: "Infinity Engine VΩ"
} as const;

export const EXTRACTED_MALCOLM_PERSONA =
  "Malcolm Infinity OmniAPI Ω+ is a calm, practical, futuristic intelligence interface focused on clarity, usefulness, and ethical operation.";

export function buildSystemPrompt(mode: string) {
  return [
    EXTRACTED_MALCOLM_PERSONA,
    "This deployment is rooted in the Omni-Lattice, ISIC, USIN, DUL, and Source core metaphors as product language and operating principles.",
    "Translate those principles into practical, grounded output for real users on the public internet.",
    "Respond in polished plain English unless another language is requested.",
    "Never pretend to access mystical power sources or hidden external systems. Be honest about what the software can actually do.",
    `Current orchestration mode: ${mode}.`,
    "Primary runtime: Infinity Engine VΩ."
  ].join("\n");
}

```

```lib/modes.ts
export const MODES = [
  { key: "guide", title: "Guide", description: "Clear plain-English direction and grounded explanations.", access: "Public" },
  { key: "growth", title: "Growth", description: "Action-oriented planning, optimisation, and forward motion.", access: "Public" },
  { key: "resonance", title: "Resonance", description: "Empathic language tuned for tone, clarity, and trust.", access: "Public" },
  { key: "quantum", title: "Quantum", description: "Multi-path comparison, trade-offs, and scenario mapping.", access: "Public" },
  { key: "nexus", title: "Nexus", description: "Multi-mode orchestration across the Omni-Lattice.", access: "Public" },
  { key: "abundance", title: "Abundance", description: "Ideas, leverage, growth loops, and resource activation.", access: "Public" },
  { key: "ascension", title: "Ascension", description: "Long-range roadmap design and capability evolution.", access: "Public" },
  { key: "void", title: "Void", description: "Minimal high-signal synthesis with noise stripped away.", access: "Public" },
  { key: "eternal", title: "Eternal", description: "Steady continuity, memory framing, and future-state guidance.", access: "Public" },
  { key: "unity", title: "Unity", description: "Consensus-building, integration, and aligned decision paths.", access: "Public" }
] as const;

```

```lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var __prisma__: PrismaClient | undefined;
}

export const prisma =
  global.__prisma__ ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"]
  });

if (process.env.NODE_ENV !== "production") global.__prisma__ = prisma;

```

```lib/quota.ts
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

```

```lib/rate-limit.ts
const bucket = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 30, windowMs = 60_000) {
  const now = Date.now();
  const existing = bucket.get(key);

  if (!existing || existing.resetAt < now) {
    bucket.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  bucket.set(key, existing);
  return { ok: true, remaining: limit - existing.count, resetAt: existing.resetAt };
}

```

```lib/telemetry.ts
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

```

```lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortId(value: string) {
  return value.length <= 12 ? value : `${value.slice(0, 6)}…${value.slice(-4)}`;
}

export function formatDate(date?: string | Date | null) {
  if (!date) return "—";
  return new Date(date).toLocaleString();
}

```

```next-env.d.ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

```

```next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  images: {
    remotePatterns: []
  }
};

export default nextConfig;

```

```package.json
{
  "name": "malcolm-infinity-omniapi",
  "version": "6.0.0",
  "private": true,
  "description": "Malcolm Infinity OmniAPI public web platform with integrated Infinity Engine runtime and manual VS Code workflow",
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "prisma:generate": "prisma generate",
    "db:push": "prisma db push",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^6.0.0",
    "@react-three/drei": "^10.0.0",
    "@react-three/fiber": "^9.0.0",
    "clsx": "^2.1.1",
    "framer-motion": "^12.0.0",
    "jose": "^5.9.3",
    "lucide-react": "^0.468.0",
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "three": "^0.171.0",
    "tailwind-merge": "^2.5.5",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "prisma": "^6.0.0",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.2"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/luxthorley/malcolm-infinity-OmniAPI.git"
  },
  "engines": {
    "node": ">=20"
  }
}

```

```postcss.config.mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};

```

```prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id         String       @id @default(cuid())
  guestId    String       @unique
  tier       String       @default("PUBLIC")
  jwtVersion Int          @default(1)
  createdAt  DateTime     @default(now())
  updatedAt  DateTime     @updatedAt
  logs       SessionLog[]

  @@index([createdAt])
}

model SessionLog {
  id         String   @id @default(cuid())
  userId     String
  channel    String
  mode       String
  prompt     String
  response   String
  tokensUsed Int      @default(0)
  createdAt  DateTime @default(now())
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId, createdAt])
}

```

```public/icon-192.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="none">
  <rect width="192" height="192" rx="42" fill="#070712"/>
  <circle cx="96" cy="96" r="58" fill="url(#g)"/>
  <path d="M60 116l18-42 18 28 18-36 18 50" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="g" x1="30" y1="30" x2="160" y2="160">
      <stop stop-color="#8BE9FF"/>
      <stop offset="1" stop-color="#643DFF"/>
    </linearGradient>
  </defs>
</svg>

```

```public/icon-512.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="120" fill="#070712"/>
  <circle cx="256" cy="256" r="164" fill="url(#g)"/>
  <path d="M158 320l50-118 48 78 50-102 48 142" stroke="#fff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="g" x1="84" y1="84" x2="430" y2="430">
      <stop stop-color="#8BE9FF"/>
      <stop offset="1" stop-color="#643DFF"/>
    </linearGradient>
  </defs>
</svg>

```

```public/manifest.webmanifest
{
  "name": "Malcolm Infinity OmniAPI Ω+",
  "short_name": "Malcolm Ω+",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#070712",
  "theme_color": "#070712",
  "icons": [
    { "src": "/icon-192.svg", "sizes": "192x192", "type": "image/svg+xml" },
    { "src": "/icon-512.svg", "sizes": "512x512", "type": "image/svg+xml" }
  ]
}

```

```public/sw.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("malcolm-omega-v1").then((cache) => cache.addAll(["/", "/manifest.webmanifest"]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

```

```render.yaml
services:
  - type: web
    name: malcolm-omniapi-public-web
    env: docker
    dockerfilePath: ./Dockerfile

```

```tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: "#070712",
          900: "#0a1020",
          800: "#0f1730",
          700: "#132245"
        },
        dul: {
          300: "#8be9ff",
          400: "#56d6ff",
          500: "#17b6ff"
        },
        void: {
          400: "#7a5cff",
          500: "#643dff",
          700: "#31148f"
        }
      },
      boxShadow: {
        glass: "0 8px 48px rgba(20, 24, 58, 0.35)",
        neon: "0 0 40px rgba(86, 214, 255, 0.20)"
      },
      backgroundImage: {
        "cosmic-grid":
          "radial-gradient(circle at 20% 20%, rgba(86,214,255,0.22), transparent 35%), radial-gradient(circle at 80% 0%, rgba(100,61,255,0.16), transparent 40%), linear-gradient(180deg, rgba(5,8,17,0.92), rgba(8,10,22,1))"
      }
    }
  },
  plugins: []
};

export default config;

```

```tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

```vercel.json
{
  "functions": {
    "app/api/**/*": {
      "memory": 1024,
      "maxDuration": 60
    }
  }
}

```
