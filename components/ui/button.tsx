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
