import { SITE } from "@/lib/site";

export const TrustedBy = () => {
  return (
    <section
      aria-label="Trusted by"
      className="border-b border-border/60 bg-background/60"
    >
      <div className="container-wide py-6 md:py-7">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground shrink-0">
            Trusted by
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:gap-x-8">
            {SITE.clients.map((c, i) => (
              <span
                key={c}
                className="display text-sm md:text-[15px] uppercase tracking-[0.18em] text-foreground/55 hover:text-foreground transition-colors"
              >
                {c}
                {i < SITE.clients.length - 1 && (
                  <span className="ml-6 md:ml-8 text-border hidden md:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
