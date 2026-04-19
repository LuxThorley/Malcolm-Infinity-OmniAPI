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
