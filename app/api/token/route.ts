import { NextResponse } from "next/server";
import { getViewer } from "@/lib/auth";
import { getQuota } from "@/lib/quota";
import { shortId } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST() {
  const { token, user } = await getViewer();
  const quota = await getQuota(user.id);

  return NextResponse.json({
    ok: true,
    token,
    tokenPreview: shortId(token),
    tier: user.tier,
    quota
  });
}
