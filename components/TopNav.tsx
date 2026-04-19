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
