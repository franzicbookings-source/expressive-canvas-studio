import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";

const sectionLabel = (n: string, label: string) => (
  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-10">
    <span className="tabular-nums">({n})</span>
    <span className="h-px w-8 bg-border" />
    <span>{label}</span>
  </div>
);

export const Testimonials = () => {
  const [featured, ...rest] = SITE.testimonials;

  return (
    <section className="container-wide py-20 md:py-28 border-t border-border/60">
      <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
        <div className="col-span-12 md:col-span-7">
          {sectionLabel("04", "Testimonials")}
          <h2 className="display-xl">
            Words from <span className="serif text-accent">people</span>
            <br />
            we've actually <span className="serif">shipped for.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <p className="text-muted-foreground">
            Every quote here is tied to a live project you can open and click
            through. No stock praise.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Featured quote */}
        <Reveal className="col-span-12 md:col-span-7 rounded-3xl bg-foreground text-background p-8 md:p-12 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-16 h-80 w-80 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--accent) / 0.35), transparent)",
            }}
          />
          <div className="relative flex flex-col h-full">
            <div className="serif text-6xl md:text-7xl text-accent leading-none select-none">
              &ldquo;
            </div>
            <p className="mt-2 display text-2xl md:text-3xl leading-snug text-background/95">
              {featured.quote}
            </p>
            <div className="mt-10 flex items-end justify-between gap-4 pt-6 border-t border-background/15">
              <div>
                <p className="display text-base">{featured.name}</p>
                <p className="text-sm text-background/60">{featured.role}</p>
              </div>
              <Link
                to={`/work#${featured.project}`}
                className="inline-flex items-center gap-1.5 text-sm text-background/80 hover:text-accent transition shrink-0"
              >
                View project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Two stacked secondary quotes */}
        <div className="col-span-12 md:col-span-5 grid gap-5">
          {rest.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i + 1) * 100}
              className="rounded-3xl bg-card border border-border/70 p-7 flex flex-col"
            >
              <div className="serif text-4xl text-accent leading-none">&ldquo;</div>
              <p className="mt-2 text-base leading-relaxed text-foreground/85">
                {t.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-border/60 flex items-end justify-between gap-3">
                <div>
                  <p className="display text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <Link
                  to={`/work#${t.project}`}
                  className="inline-flex items-center gap-1 text-xs font-medium hover:text-accent transition shrink-0"
                >
                  View project <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
