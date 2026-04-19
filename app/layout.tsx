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
