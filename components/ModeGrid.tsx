import { MODES } from "@/lib/modes";
import { Card } from "@/components/ui/card";

export function ModeGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {MODES.map((mode) => (
        <Card key={mode.key} className="min-h-[160px]">
          <div className="text-xs uppercase tracking-[0.22em] text-dul-300">{mode.access}</div>
          <div className="mt-3 text-xl font-semibold">{mode.title}</div>
          <p className="mt-3 text-sm leading-6 text-white/65">{mode.description}</p>
        </Card>
      ))}
    </div>
  );
}
