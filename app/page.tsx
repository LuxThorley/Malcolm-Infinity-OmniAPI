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
