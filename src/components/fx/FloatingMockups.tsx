import { Circle, Square, Triangle } from "lucide-react";

/**
 * Abstract creative-tech visual cluster — floating UI/dashboard/code/network
 * cards composed purely in CSS. No personal photos.
 */
export const FloatingMockups = () => {
  return (
    <div
      aria-hidden
      className="relative w-full h-[420px] md:h-[520px] lg:h-[560px] select-none"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 60% 40%, hsl(var(--accent) / 0.35), transparent 70%)",
        }}
      />

      {/* Dashboard card (back) */}
      <div className="absolute right-0 top-4 w-[78%] md:w-[72%] glass rounded-2xl p-5 shadow-[var(--shadow-lift)] float-slower">
        <div className="flex items-center gap-1.5 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
          <span className="ml-auto text-[10px] uppercase tracking-[0.22em] text-muted-foreground">ntombii / studio.app</span>
        </div>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 space-y-3">
            <div className="h-2 rounded bg-foreground/15 w-3/4" />
            <div className="h-2 rounded bg-foreground/10 w-1/2" />
            {/* chart */}
            <div className="mt-4 h-28 rounded-xl border border-border/60 p-3 flex items-end gap-1.5">
              {[35, 55, 40, 70, 50, 82, 60, 90, 72, 100].map((h, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-sm ${i === 7 ? "bg-accent" : "bg-foreground/15"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border border-border/60 p-2">
                <span className={`h-2 w-2 rounded-full ${i === 1 ? "bg-accent" : "bg-foreground/30"}`} />
                <span className="h-1.5 rounded bg-foreground/15 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code card */}
      <div className="absolute left-0 top-36 md:top-44 w-[66%] md:w-[58%] glass rounded-2xl p-5 font-mono text-[11px] leading-relaxed shadow-[var(--shadow-lift)] float-slow">
        <div className="flex items-center gap-2 mb-3">
          <Square className="h-3 w-3 text-accent" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">hero.tsx</span>
        </div>
        <pre className="text-foreground/80 whitespace-pre overflow-hidden">
{`<Hero
  brand="`}<span className="text-accent">Ntombii</span>{`"
  motion={true}
  accent={`}<span className="text-accent">"orange"</span>{`}
/>`}
        </pre>
      </div>

      {/* Floating chip / network node */}
      <div className="absolute right-4 bottom-6 md:right-12 md:bottom-10 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-lift)] float-slow flex items-center gap-3">
        <span className="relative inline-flex h-2.5 w-2.5">
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <div className="text-xs">
          <p className="display">Live · KZN</p>
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">98 Lighthouse</p>
        </div>
      </div>

      {/* Small geometric accents */}
      <Circle className="absolute left-6 bottom-4 h-4 w-4 text-accent/80 float-slower" />
      <Triangle className="absolute right-1/3 top-2 h-3.5 w-3.5 text-foreground/40 float-slow" />
    </div>
  );
};
