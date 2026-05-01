import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";
import { StatusBar } from "@/components/home/StatusBar";
import { Reveal } from "@/components/home/Reveal";
import { HoverPreview } from "@/components/home/HoverPreview";
import { CursorGlow } from "@/components/home/CursorGlow";

const sectionLabel = (n: string, label: string) => (
  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-10">
    <span className="tabular-nums">({n})</span>
    <span className="h-px w-8 bg-border" />
    <span>{label}</span>
  </div>
);

const capabilities = [
  { t: "Interfaces", d: "Product UI and design systems built to scale from MVP to enterprise.", span: "md:col-span-7 md:row-span-2", tone: "dark" },
  { t: "Brand systems", d: "Identities with backbone — logo, palette, type, voice, motion.", span: "md:col-span-5" },
  { t: "Web engineering", d: "React, Vite, headless. Sub-1s loads. Real Lighthouse scores.", span: "md:col-span-5" },
  { t: "Mobile surfaces", d: "Mobile-first by default — built for South African data realities.", span: "md:col-span-4" },
  { t: "AI workflows", d: "We ship faster because our process runs on AI, not in spite of it.", span: "md:col-span-4" },
  { t: "Launch & iterate", d: "We don't disappear at handoff. Weekly improvements, monthly reviews.", span: "md:col-span-4" },
];

const process = [
  { n: "01", t: "Discover", d: "60-minute call. We map the goal, audience, constraints and what 'win' looks like." },
  { n: "02", t: "Design", d: "Wireframes in 72 hours. Visual direction in a week. You approve every checkpoint on WhatsApp." },
  { n: "03", t: "Build", d: "Engineered in React with performance, SEO and accessibility baked in — not bolted on." },
  { n: "04", t: "Launch", d: "We ship, monitor, and iterate. Your site keeps getting better after go-live." },
];

const Index = () => {
  const featured = SITE.pricing[1];
  const others = SITE.pricing.filter((p) => p !== featured);
  const featuredPost = SITE.posts[0];
  const otherPosts = SITE.posts.slice(1, 3);

  return (
    <>
      <StatusBar />

      {/* ───────────── HERO ───────────── */}
      <section className="relative noise">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-warm), var(--gradient-hero)" }}
        />
        <div className="container-wide pt-20 md:pt-28 pb-20 md:pb-32">
          <div className="grid grid-cols-12 gap-y-10">
            <Reveal className="col-span-12 md:col-span-2 hidden md:block">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground leading-relaxed">
                <p>(00)</p>
                <p className="mt-2">— Studio</p>
                <p className="mt-1 text-foreground">Ntombii.tech</p>
              </div>
            </Reveal>

            <div className="col-span-12 md:col-span-10">
              <Reveal>
                <h1 className="display-mega">
                  We design <span className="serif text-accent">the internet</span>
                  <br />
                  for brands that refuse
                  <br />
                  to look <span className="serif">like everyone else.</span>
                </h1>
              </Reveal>

              <div className="mt-12 grid grid-cols-12 gap-6 items-end">
                <Reveal delay={120} className="col-span-12 md:col-span-6 md:col-start-7">
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
                    A digital studio out of Newcastle, building the websites,
                    brands and product surfaces growing African companies
                    actually deserve.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
                    >
                      Start a project <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3.5 text-sm font-medium hover:border-foreground/40 transition"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Live ticker — replaces marquee */}
        <div className="border-y border-border/60 bg-background/70 backdrop-blur-sm py-3 overflow-hidden">
          <div className="flex w-max ticker whitespace-nowrap">
            {[...Array(3)].flatMap((_, k) =>
              SITE.marquee.map((t, i) => (
                <span key={`${k}-${i}`} className="px-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-8">
                  {t}
                  <span className="text-accent">✦</span>
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      {/* ───────────── MANIFESTO ───────────── */}
      <section className="container-wide py-28 md:py-44">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            {sectionLabel("01", "Manifesto")}
          </div>
          <div className="col-span-12 md:col-span-10">
            <Reveal>
              <p className="display-xl text-foreground/90">
                Beautiful is the <span className="serif text-accent">baseline</span>.
                We're here for what it does <span className="serif">next</span> —
                bookings filled, leads answered, brands that finally look as
                <span className="serif text-accent"> serious</span> as the people behind them.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── CAPABILITIES (BENTO) ───────────── */}
      <section className="container-wide py-20 md:py-28 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-6">
            {sectionLabel("02", "Capabilities")}
            <h2 className="display-xl">
              Everything you need
              <br />
              <span className="serif text-muted-foreground">under one roof.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-muted-foreground">
              We work like an in-house team — not a vendor. From the first
              wireframe to the hundredth iteration, one studio, one standard.
            </p>
            <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
              All capabilities <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[180px] gap-3">
          {capabilities.map((c, i) => {
            const isDark = c.tone === "dark";
            return (
              <Reveal
                key={c.t}
                delay={i * 60}
                className={`${c.span} rounded-3xl p-7 md:p-9 flex flex-col justify-between min-h-[200px] border transition group ${
                  isDark
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card border-border/70 hover:border-foreground/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] uppercase tracking-[0.22em] ${isDark ? "text-background/60" : "text-muted-foreground"}`}>
                    0{i + 1}
                  </span>
                  <ArrowUpRight className={`h-4 w-4 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 ${isDark ? "text-background/60" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <h3 className={`display text-2xl md:text-3xl ${isDark ? "" : ""}`}>{c.t}</h3>
                  <p className={`mt-3 text-sm leading-relaxed max-w-sm ${isDark ? "text-background/70" : "text-muted-foreground"}`}>
                    {c.d}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ───────────── SELECTED WORK (HOVER PREVIEW) ───────────── */}
      <section className="container-wide py-28 md:py-40 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-2">
            {sectionLabel("03", "Selected work")}
          </div>
          <div className="col-span-12 md:col-span-10">
            <Reveal>
              <h2 className="display-xl">
                A small <span className="serif text-accent">portfolio</span>
                <br />
                of <span className="serif">serious</span> work.
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <HoverPreview items={SITE.projects} />
        </Reveal>

        <div className="mt-12 flex justify-end">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
            Browse the full archive <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section className="container-wide py-24 md:py-32 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            {sectionLabel("04", "Process")}
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display-xl">
              Four steps. <span className="serif text-muted-foreground">Zero drama.</span>
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto -mx-6 px-6 scroll-snap-x">
          <div className="flex gap-5 min-w-max md:min-w-0 md:grid md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                className="snap-start-x w-[280px] md:w-auto bg-card border border-border/70 rounded-3xl p-7 flex flex-col"
              >
                <div className="display text-6xl text-accent leading-none">{p.n}</div>
                <div className="rule my-6" />
                <h3 className="display text-xl">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PRICING TEASER ───────────── */}
      <section className="container-wide py-28 md:py-40">
        <div className="grid grid-cols-12 gap-6 mb-14 items-end">
          <div className="col-span-12 md:col-span-7">
            {sectionLabel("06", "Pricing")}
            <h2 className="display-xl">
              Honest pricing.
              <br />
              <span className="serif text-accent">No surprise invoices.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-muted-foreground">
              Three starting points, all fully scoped before we begin. Custom work
              is quoted after a 30-minute discovery — never blind.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* hero card */}
          <div className="col-span-12 md:col-span-7 rounded-3xl bg-foreground text-background p-8 md:p-12 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(closest-side, hsl(var(--accent) / 0.45), transparent)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-background/60">Most chosen</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground">Popular</span>
              </div>
              <h3 className="display text-3xl mt-6">{featured.name}</h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="display text-7xl">{featured.from}</span>
                {featured.original && (
                  <span className="text-sm line-through text-background/50">{featured.original}</span>
                )}
              </div>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg">
                {featured.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-background/85">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                Choose Business <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 grid gap-5">
            {others.map((tier) => (
              <div key={tier.name} className="rounded-3xl bg-card border border-border/70 p-7 flex flex-col">
                <div className="flex items-baseline justify-between">
                  <h3 className="display text-xl">{tier.name}</h3>
                  <span className="display text-3xl">{tier.from}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{tier.features.slice(0, 3).join(" · ")}</p>
                <Link to="/pricing" className="mt-6 text-sm font-medium inline-flex items-center gap-1 hover:text-accent">
                  See full details <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── JOURNAL ───────────── */}
      <section className="container-wide py-24 md:py-32 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 md:col-span-6">
            {sectionLabel("07", "Journal")}
            <h2 className="display-xl">
              Notes from <span className="serif text-accent">the studio.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
              Read the journal <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <Link to={`/blog/${featuredPost.slug}`} className="group block lift rounded-3xl overflow-hidden bg-card border border-border/70 h-full">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={featuredPost.cover} alt={featuredPost.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-700" />
              </div>
              <div className="p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{featuredPost.category} · {featuredPost.date}</p>
                <h3 className="display mt-4 text-2xl md:text-3xl leading-tight">{featuredPost.title}</h3>
                <p className="mt-4 text-muted-foreground">{featuredPost.excerpt}</p>
              </div>
            </Link>
          </Reveal>

          <div className="col-span-12 md:col-span-5 grid gap-6">
            {otherPosts.map((p, i) => (
              <Reveal key={p.slug} delay={(i + 1) * 100}>
                <Link to={`/blog/${p.slug}`} className="group grid grid-cols-5 gap-4 rounded-3xl overflow-hidden bg-card border border-border/70 lift">
                  <div className="col-span-2 aspect-square overflow-hidden bg-muted">
                    <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.05] transition duration-700" />
                  </div>
                  <div className="col-span-3 p-5 flex flex-col justify-center">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.date}</p>
                    <h3 className="display mt-2 text-base leading-snug">{p.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CLOSING CTA ───────────── */}
      <section className="container-wide py-20 md:py-28">
        <CursorGlow className="rounded-[2rem] bg-foreground text-background p-10 md:p-24 noise">
          <div className="relative">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-background/50 mb-10">
              <span>(08)</span>
              <span className="h-px w-8 bg-background/30" />
              <span>Closing</span>
            </div>
            <h2 className="display-mega max-w-5xl">
              Let's build
              <br />
              <span className="serif text-accent">the next thing.</span>
            </h2>
            <div className="mt-12 grid grid-cols-12 gap-6 items-end">
              <p className="col-span-12 md:col-span-6 text-background/70 text-lg max-w-xl">
                Tell us the shape of the idea. We'll respond within 24 hours
                with a clear plan, timeline, and price — no decks, no fluff.
              </p>
              <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-4 text-sm font-medium hover:bg-background/10 transition"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </CursorGlow>
      </section>
    </>
  );
};

export default Index;
