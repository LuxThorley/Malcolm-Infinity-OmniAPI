import { NextResponse } from "next/server";
import { getHealthSnapshot } from "@/lib/telemetry";

export const runtime = "nodejs";

export async function GET() {
  const snapshot = await getHealthSnapshot();
  return NextResponse.json(snapshot);
}
