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

