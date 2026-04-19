import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  const cleaned = q.trim();

  const suggestions = cleaned
    ? [
        `${cleaned} as a launch plan`,
        `${cleaned} with a cleaner API shape`,
        `${cleaned} as a public web capability`,
        `${cleaned} with an optimisation checklist`
      ]
    : [
        "Design a public landing page for Malcolm",
        "Optimise my API architecture",
        "Turn this idea into a deployable public platform",
        "Explain the best hosting model for this build"
      ];

  return NextResponse.json({ suggestions });
}
