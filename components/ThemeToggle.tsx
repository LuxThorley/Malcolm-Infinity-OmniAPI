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
