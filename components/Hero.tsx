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
