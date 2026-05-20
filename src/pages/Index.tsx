import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";
import { HoverPreview } from "@/components/home/HoverPreview";
import { CursorGlow } from "@/components/home/CursorGlow";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Testimonials } from "@/components/home/Testimonials";
import { SEO } from "@/components/seo/SEO";
import { TextReveal } from "@/components/fx/TextReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { MarqueeRow } from "@/components/fx/MarqueeRow";
import { ParticleField } from "@/components/fx/ParticleField";
import { FloatingMockups } from "@/components/fx/FloatingMockups";
import { Parallax } from "@/components/fx/Parallax";
import {
  faqSchema,
  localBusinessSchema,
  reviewSchema,
  websiteSchema,
} from "@/lib/seo";

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

const marqueeWords = [
  "DESIGN",
  "DEVELOPMENT",
  "BRANDING",
  "WEBSITES",
  "AUTOMATION",
  "DIGITAL SYSTEMS",
  "CREATIVE TECH",
  "ONLINE GROWTH",
  "BUSINESS TOOLS",
];

const Index = () => {
  const featured = SITE.pricing[1];
  const others = SITE.pricing.filter((p) => p !== featured);
  const featuredPost = SITE.posts[0];
  const otherPosts = SITE.posts.slice(1, 3);

  return (
    <>
      <SEO
        title="Ntombii Tech — Web Design Agency in Newcastle, KZN"
        description="Newcastle-based digital studio building mobile-first websites, web apps and brand systems for businesses across Northern KZN — from R2,500. Fast delivery, real results."
        path="/"
        keywords="web design Newcastle, web designer Newcastle KZN, website design Northern KZN, web development Newcastle, branding agency KZN, Ntombii Tech, KZN web agency, Vryheid web design, Ladysmith web design"
        schemas={[
          localBusinessSchema(),
          websiteSchema(),
          faqSchema(SITE.faqs),
          ...SITE.testimonials.map(reviewSchema),
        ]}
      />

      {/* ───────────── HERO ───────────── */}
      <section className="relative noise overflow-hidden">
        {/* Aurora + hero gradient */}
        <div aria-hidden className="absolute inset-0 -z-20 aurora-shift" />
        <div
          aria-hidden
          className="absolute inset-0 -z-30"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 -z-10 dot-grid opacity-60" />
        {/* Particle field */}
        <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
          <ParticleField />
        </div>

        <div className="container-wide pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="grid grid-cols-12 gap-y-10">
            <div className="col-span-12 md:col-span-2 hidden md:block">
              <Reveal>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground leading-relaxed">
                  <p>(00)</p>
                  <p className="mt-2">— Studio</p>
                  <p className="mt-1 text-foreground flex items-center gap-2">
                    Ntombii.tech
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent dot-pulse" />
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-10 lg:col-span-7">
              <h1 className="display-mega max-w-[18ch]">
                <TextReveal stagger={70}>We design</TextReveal>{" "}
                <span className="serif text-accent">
                  <TextReveal stagger={70} delay={200}>the internet</TextReveal>
                </span>
                <br />
                <TextReveal stagger={70} delay={420}>for brands that refuse</TextReveal>
                <br />
                <TextReveal stagger={70} delay={760}>to look</TextReveal>{" "}
                <span className="serif">
                  <TextReveal stagger={70} delay={1000}>like everyone else.</TextReveal>
                </span>
              </h1>

              <Reveal delay={400}>
                <p className="mt-8 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
                  A digital studio out of Newcastle, building the websites,
                  brands and product surfaces growing African companies
                  actually deserve.
                </p>
              </Reveal>
              <Reveal delay={500}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton
                    as={Link as any}
                    to="/contact"
                    strength={0.35}
                    className="group relative inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium sheen overflow-hidden"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                  <MagneticButton
                    as="a"
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    strength={0.25}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-medium hover:border-foreground/40 hover:text-accent transition"
                  >
                    Chat on WhatsApp
                  </MagneticButton>
                </div>
              </Reveal>

              {/* Stat strip */}
              <Reveal delay={650}>
                <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-2xl">
                  {SITE.stats.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="display text-3xl md:text-4xl text-foreground">{s.value}</span>
                      <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Floating creative-tech visual */}
            <div className="col-span-12 lg:col-span-3 lg:pl-4">
              <Reveal delay={300}>
                <Parallax speed={6}>
                  <FloatingMockups />
                </Parallax>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="container-wide pb-6 hidden md:flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>↓ Scroll to explore</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent dot-pulse" />
            Available · {SITE.location}
          </span>
        </div>
      </section>

      {/* ───────────── MARQUEE SERVICE WORDS ───────────── */}
      <section
        aria-label="What we do"
        className="border-y border-border/60 bg-card/30 py-6 md:py-10"
      >
        <MarqueeRow items={marqueeWords} />
      </section>

      {/* ───────────── TRUSTED BY ───────────── */}
      <TrustedBy />

      {/* ───────────── MANIFESTO ───────────── */}
      <section className="container-wide py-20 md:py-28 relative">
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
            <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:text-accent group">
              All capabilities
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[150px] lg:auto-rows-[170px] gap-3">
          {capabilities.map((c, i) => {
            const isDark = c.tone === "dark";
            return (
              <Reveal
                key={c.t}
                delay={i * 60}
                className={`${c.span} spark rounded-3xl p-6 md:p-7 lg:p-8 flex flex-col justify-between min-h-[180px] border lift group ${
                  isDark
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card border-border/70 hover:border-accent/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] uppercase tracking-[0.22em] nums ${isDark ? "text-background/60" : "text-muted-foreground"}`}>
                    0{i + 1} / 06
                  </span>
                  <ArrowUpRight className={`h-4 w-4 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 ${isDark ? "text-background/60" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <h3 className={`display text-xl md:text-2xl`}>{c.t}</h3>
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
      <section className="container-wide py-20 md:py-28 border-t border-border/60">
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
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent group">
            Browse the full archive
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <Testimonials />

      {/* ───────────── PROCESS ───────────── */}
      <section className="container-wide py-16 md:py-24 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            {sectionLabel("05", "Process")}
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
                className="snap-start-x w-[280px] md:w-auto bg-card border border-border/70 hover:border-accent/50 rounded-3xl p-7 flex flex-col lift spark"
              >
                <div className="section-num">{p.n}</div>
                <div className="rule my-6" />
                <h3 className="display text-xl">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PRICING TEASER ───────────── */}
      <section className="container-wide py-20 md:py-28">
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
          <div className="col-span-12 md:col-span-7 rounded-3xl bg-foreground text-background p-7 md:p-10 relative overflow-hidden sheen">
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
              <h3 className="display text-2xl md:text-3xl mt-6">{featured.name}</h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="display text-5xl md:text-6xl">{featured.from}</span>
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
              <MagneticButton
                as={Link as any}
                to="/contact"
                strength={0.25}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                Choose Business <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 grid gap-5">
            {others.map((tier) => (
              <div key={tier.name} className="spark rounded-3xl bg-card border border-border/70 hover:border-accent/50 p-7 flex flex-col lift">
                <div className="flex items-baseline justify-between">
                  <h3 className="display text-xl">{tier.name}</h3>
                  <span className="display text-3xl">{tier.from}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{tier.features.slice(0, 3).join(" · ")}</p>
                <Link to="/pricing" className="mt-6 text-sm font-medium inline-flex items-center gap-1 hover:text-accent group">
                  See full details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── JOURNAL ───────────── */}
      <section className="container-wide py-16 md:py-24 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 md:col-span-6">
            {sectionLabel("07", "Journal")}
            <h2 className="display-xl">
              Notes from <span className="serif text-accent">the studio.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent group">
              Read the journal
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <Link to={`/blog/${featuredPost.slug}`} className="group block lift rounded-3xl overflow-hidden bg-card border border-border/70 hover:border-accent/50 h-full">
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
                <Link to={`/blog/${p.slug}`} className="group grid grid-cols-5 gap-4 rounded-3xl overflow-hidden bg-card border border-border/70 hover:border-accent/50 lift">
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

      {/* ───────────── SECONDARY MARQUEE (Reverse) ───────────── */}
      <section className="border-y border-border/60 bg-card/30 py-6 md:py-10 overflow-hidden">
        <MarqueeRow items={marqueeWords} reverse />
      </section>

      {/* ───────────── CLOSING CTA ───────────── */}
      <section className="container-wide py-14 md:py-20">
        <CursorGlow className="rounded-[2rem] bg-foreground text-background p-8 md:p-12 lg:p-16 noise">
          <div className="relative">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-background/50 mb-8">
              <span>(09)</span>
              <span className="h-px w-8 bg-background/30" />
              <span>Closing</span>
            </div>
            <h2 className="display-mega max-w-[14ch]">
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
                <MagneticButton
                  as={Link as any}
                  to="/contact"
                  strength={0.35}
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-medium sheen overflow-hidden"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  strength={0.25}
                  className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-4 text-sm font-medium hover:bg-background/10 transition"
                >
                  WhatsApp us
                </MagneticButton>
              </div>
            </div>
          </div>
        </CursorGlow>
      </section>
    </>
  );
};

export default Index;
