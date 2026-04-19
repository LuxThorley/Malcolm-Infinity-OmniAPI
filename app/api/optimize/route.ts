import { NextResponse } from "next/server";
import { getOptimizerReport } from "@/lib/telemetry";

export const runtime = "nodejs";

export async function POST() {
  const report = await getOptimizerReport();
  return NextResponse.json(report);
}
