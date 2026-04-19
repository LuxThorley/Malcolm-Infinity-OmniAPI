import { NextResponse } from "next/server";
import { MODES } from "@/lib/modes";

export async function GET() {
  return NextResponse.json({
    access: "public",
    modes: MODES
  });
}
