import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/seo/SEO";
import { LogoRotator } from "@/components/home/LogoRotator";
import founderImage from "@/assets/sabelo-ndlovu-founder.webp.asset.json";
import {
  faqSchema,
  localBusinessSchema,
  reviewSchema,
  websiteSchema,
} from "@/lib/seo";


// Editorial section header: oversized numeral + hairline + label
const SectionHead = ({
  n,
  label,
  tone = "light",
}: {
  n: string;
  label: string;
  tone?: "light" | "dark";
}) => (
  <div
    className={`flex items-baseline gap-4 md:gap-6 mb-10 md:mb-14 ${
      tone === "dark" ? "text-background" : "text-foreground"
    }`}
  >
    <span
      className={`mono-label tabular-nums ${
        tone === "dark" ? "text-background/60" : "text-muted-foreground"
      }`}
    >
      ({n})
    </span>
    <span
      className={`h-px flex-1 ${
        tone === "dark" ? "bg-background/20" : "bg-foreground/15"
      }`}
    />
    <span className="mono-label">{label}</span>
  </div>
);

// Capabilities as an editorial index (table-of-contents feel)
const indexRows = [
  { n: "A", label: "Web Design", desc: "Mobile-first marketing sites and landing pages.", href: "/services/web-design" },
  { n: "B", label: "Web Development", desc: "React, Vite, headless builds tuned for speed and SEO.", href: "/services/web-development" },
  { n: "C", label: "Brand Systems", desc: "Logo, type, voice, colour — identities built to last.", href: "/services/branding" },
  { n: "D", label: "Local SEO", desc: "Town-targeted pages, schema, Google Business Profile.", href: "/services/local-seo" },
  { n: "E", label: "Graphic Design", desc: "Print-ready and social design that doesn't look templated.", href: "/services/graphic-design" },
  { n: "F", label: "Signage & Print", desc: "Shopfronts, vehicle branding, banners — designed and installed.", href: "/services/signage" },
];

// Featured KZN towns for the areas grid (SEO power section)
const featuredAreas = [
  "newcastle", "madadeni", "vryheid", "ladysmith",
  "dundee", "utrecht", "osizweni", "pongola",
].map((slug) => LOCATIONS.find((l) => l.slug === slug)!).filter(Boolean);

const Index = () => {
  const featuredProject = SITE.projects[0];
  const otherProjects = SITE.projects.slice(1, 4);



  return (
    <>
      <SEO
        title="Web design Newcastle, KZN — Ntombii Tech"
        description="Newcastle-based web design studio building fast, mobile-first websites and brands for businesses across KwaZulu-Natal."
        path="/"
        keywords="web design Newcastle, web designer Newcastle KZN, website design KZN, web development Newcastle, branding agency Newcastle, local SEO KZN, Ntombii Tech"
        schemas={[
          localBusinessSchema(),
          websiteSchema(),
          faqSchema(SITE.faqs),
          ...SITE.testimonials.map(reviewSchema),
        ]}
      />

      {/* ═══════════════ (00) MASTHEAD ═══════════════ */}
      <section className="relative noise overflow-hidden border-b border-foreground/15">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-warm), var(--gradient-hero)" }}
        />
        <div className="container-wide pt-10 md:pt-16 pb-12 md:pb-20">
          {/* Top meta strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-20 mono-label text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>Studio open · Mon–Fri</span>
            </span>
            <span className="hidden md:inline">Est. 2024 — Newcastle, KZN</span>
            <span>(№ 001 — Index)</span>
          </div>

          {/* The H1 */}
          <Reveal>
            <h1 className="display-mega max-w-[14ch]">
              Web design<br />
              studio in<br />
              <span className="text-accent">Newcastle,</span>{" "}
              <span className="serif font-normal">KZN.</span>
            </h1>
          </Reveal>

          {/* Sub-line + CTAs in a grid */}
          <div className="mt-10 md:mt-16 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <Reveal delay={120} className="col-span-12 md:col-span-7 lg:col-span-6">
              <p className="text-lg md:text-xl text-foreground/80 leading-snug max-w-xl">
                We build fast, mobile-first websites and brand systems for
                businesses across KwaZulu-Natal — engineered to rank locally
                and convert on WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={180} className="col-span-12 md:col-span-5 lg:col-span-4 md:col-start-8 lg:col-start-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent transition"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/40 px-6 py-3.5 text-sm font-medium hover:border-foreground transition"
              >
                WhatsApp
              </a>
            </Reveal>
          </div>
        </div>

        {/* SEO marquee — towns we serve */}
        <div className="border-t border-foreground/15 overflow-hidden marquee-pause bg-foreground text-background">
          <div className="marquee flex w-max items-center py-4 mono-label">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
                {LOCATIONS.slice(0, 12).map((loc) => (
                  <span key={`${dup}-${loc.slug}`} className="flex items-center">
                    <span className="px-6">Web design in {loc.name}</span>
                    <span className="h-1 w-1 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ (01) INDEX — capabilities as a table ═══════════════ */}
      <section className="container-wide py-20 md:py-28">
        <SectionHead n="01" label="Index — what we do" />

        <Reveal>
          <h2 className="display-xl max-w-4xl mb-12 md:mb-16">
            One studio. <span className="serif font-normal text-accent">Every surface</span> your business needs to show up properly.
          </h2>
        </Reveal>

        <div className="border-t border-foreground/15">
          {indexRows.map((row, i) => (
            <Reveal key={row.label} delay={i * 40}>
              <Link
                to={row.href}
                className="group grid grid-cols-12 gap-4 items-baseline py-6 md:py-8 border-b border-foreground/15 hover:bg-foreground hover:text-background transition-colors px-2 -mx-2"
              >
                <span className="col-span-2 md:col-span-1 mono-label tabular-nums opacity-60">
                  {row.n}
                </span>
                <h3 className="col-span-10 md:col-span-4 display text-2xl md:text-4xl lg:text-5xl">
                  {row.label}
                </h3>
                <p className="col-span-12 md:col-span-6 text-sm md:text-base opacity-80 md:pl-6">
                  {row.desc}
                </p>
                <ArrowUpRight className="hidden md:block col-span-1 h-5 w-5 ml-auto opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ (02) SELECTED WORK ═══════════════ */}
      <section className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="02" label="Selected work — 2024–2026" />

        {/* Featured project */}
        <Reveal>
          <a
            href={featuredProject.href}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="overflow-hidden border border-foreground/15 bg-card">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-auto object-cover aspect-[16/10] group-hover:scale-[1.01] transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="mt-6 grid grid-cols-12 gap-4 items-baseline">
              <span className="col-span-2 md:col-span-1 mono-label tabular-nums text-muted-foreground">001</span>
              <h3 className="col-span-10 md:col-span-7 display text-2xl md:text-4xl">
                {featuredProject.title}
              </h3>
              <span className="col-span-12 md:col-span-3 mono-label text-muted-foreground md:text-right">
                {featuredProject.category}
              </span>
              <ArrowUpRight className="hidden md:block col-span-1 h-5 w-5 ml-auto group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </Reveal>

        {/* 3-up grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {otherProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block bg-background p-5 md:p-6 h-full"
              >
                <div className="overflow-hidden border border-foreground/15 bg-card">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="mono-label text-muted-foreground tabular-nums">
                      00{i + 2}
                    </p>
                    <h4 className="display mt-2 text-lg md:text-xl">
                      {p.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{p.category}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 mono-label hover:text-accent transition"
          >
            All work
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ═══════════════ (03) MANIFESTO ═══════════════ */}
      <section className="border-t border-foreground/15 bg-foreground text-background">
        <div className="container-wide py-24 md:py-36">
          <SectionHead n="03" label="Manifesto" tone="dark" />
          <Reveal>
            <p className="display-xl max-w-5xl">
              Beautiful is the <span className="serif font-normal text-accent">baseline.</span>
              {" "}We're here for what it does <span className="serif font-normal">next</span> —
              bookings filled, leads answered, brands that finally look as
              <span className="serif font-normal text-accent"> serious</span> as the people behind them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ (04) AREAS — SEO POWER SECTION ═══════════════ */}
      <section className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="04" label="Areas served — KwaZulu-Natal" />

        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <Reveal className="col-span-12 md:col-span-7">
            <h2 className="display-xl">
              From Newcastle <span className="serif font-normal text-accent">outward.</span>
            </h2>
          </Reveal>
          <Reveal delay={80} className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-foreground/75 leading-relaxed">
              We're based in Newcastle and deliver across Amajuba, Zululand,
              uMzinyathi and uThukela — plus Durban and Joburg. Every project
              ships with town-targeted SEO and Google Business Profile setup.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
          {featuredAreas.map((loc, i) => (
            <li key={loc.slug}>
              <Link
                to={`/areas/${loc.slug}`}
                className="group block bg-background p-6 md:p-8 h-full hover:bg-foreground hover:text-background transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="mono-label tabular-nums opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="display mt-8 md:mt-12 text-xl md:text-2xl">
                  Web design in {loc.name}
                </h3>
                <p className="mt-2 text-xs opacity-60">{loc.district} District</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-end">
          <Link
            to="/areas"
            className="inline-flex items-center gap-2 mono-label hover:text-accent transition"
          >
            All {LOCATIONS.length} areas
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ═══════════════ (05) WORKED WITH — logo rotator ═══════════════ */}
      <section className="border-t border-foreground/15 bg-secondary">
        <div className="container-wide py-20 md:py-28">
          <SectionHead n="05" label="Worked with" />
          <Reveal>
            <LogoRotator />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ (06) PRICING ═══════════════ */}
      <section className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="06" label="Pricing — fixed, transparent" />
        <Reveal>
          <h2 className="display-xl max-w-4xl mb-12 md:mb-16">
            Three tiers. <span className="serif font-normal text-accent">No surprises.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
          {SITE.pricing.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 80}
              className={`border-b md:border-b-0 md:border-r last:md:border-r-0 border-foreground/15 p-6 md:p-8 flex flex-col ${
                tier.popular ? "bg-foreground text-background" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`mono-label tabular-nums ${tier.popular ? "text-accent" : "text-muted-foreground"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tier.popular && <span className="mono-label text-accent">Popular</span>}
              </div>

              <h3 className={`display mt-6 md:mt-10 text-2xl md:text-3xl ${tier.popular ? "text-background" : ""}`}>
                {tier.name}
              </h3>

              <div className="mt-6 flex items-baseline gap-3">
                <span className={`mono-label ${tier.popular ? "text-background/60" : "text-muted-foreground"}`}>From</span>
                <span className={`display text-4xl md:text-5xl tabular-nums ${tier.popular ? "text-background" : ""}`}>
                  {tier.from}
                </span>
                {tier.original && (
                  <span className={`text-sm line-through ${tier.popular ? "text-background/50" : "text-muted-foreground"}`}>
                    {tier.original}
                  </span>
                )}
              </div>

              <ul className={`mt-8 space-y-3 text-sm ${tier.popular ? "text-background/85" : "text-foreground/85"}`}>
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.popular ? "text-accent" : "text-foreground/50"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-10 inline-flex items-center justify-between gap-2 px-5 py-3.5 text-sm font-medium transition ${
                  tier.popular
                    ? "bg-accent text-accent-foreground hover:bg-background hover:text-foreground"
                    : "bg-foreground text-background hover:bg-accent"
                }`}
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link to="/pricing" className="inline-flex items-center gap-2 mono-label hover:text-accent transition">
            See full pricing
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ═══════════════ (07) FOUNDER ═══════════════ */}
      <section className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="07" label="Founder" />
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="overflow-hidden border border-foreground/15 bg-card aspect-[4/5]">
              <img
                src={founderImage.url}
                alt="Sabelo Ndlovu, Technoking and founder of Ntombii Tech"
                width={800}
                height={1000}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-7">
            <h2 className="display-xl">
              Sabelo Ndlovu — <span className="serif font-normal text-accent">Technoking.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-prose-wide">
              Technoking is the company's CEO-equivalent role at Ntombii Tech. Sabelo founded the studio in Newcastle and leads every project personally — from the first WhatsApp brief to the live site — bringing the same standards to a local salon's first website as to a school's full digital rebuild.
            </p>
            <dl className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
              <div className="bg-background p-5">
                <dt className="mono-label text-muted-foreground">Role</dt>
                <dd className="mt-2 text-sm font-medium">Technoking, Founder</dd>
              </div>
              <div className="bg-background p-5">
                <dt className="mono-label text-muted-foreground">Based</dt>
                <dd className="mt-2 text-sm font-medium">Newcastle, KZN</dd>
              </div>
              <div className="bg-background p-5">
                <dt className="mono-label text-muted-foreground">Studio est.</dt>
                <dd className="mt-2 text-sm font-medium">2024</dd>
              </div>
            </dl>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 mono-label hover:text-accent transition"
            >
              More about the studio
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>


      {/* ═══════════════ (08) PROCESS ═══════════════ */}
      <section id="process" className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="08" label="Process — four moves" />

        <Reveal>
          <h2 className="display-xl max-w-3xl mb-12 md:mb-16">
            From first call to <span className="serif font-normal text-accent">live in days,</span> not months.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-foreground/15">
          {[
            { n: "01", t: "Discover", d: "A short call. We surface the real goal before any pixel moves." },
            { n: "02", t: "Design", d: "Wireframes, then visuals. You approve at every gate." },
            { n: "03", t: "Build", d: "Production code. Mobile-first. SEO from day one." },
            { n: "04", t: "Launch", d: "Tested, optimised, handed over — with WhatsApp support." },
          ].map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 60}
              className="border-b md:border-b-0 md:border-r last:md:border-r-0 border-foreground/15 p-6 md:p-8"
            >
              <span className="mono-label tabular-nums text-accent">{p.n}</span>
              <h3 className="display mt-6 md:mt-10 text-2xl md:text-3xl">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ (09) CONTACT — full bleed ═══════════════ */}
      <section className="border-t border-foreground/15 bg-foreground text-background relative noise overflow-hidden">
        <div className="container-wide py-24 md:py-36">
          <SectionHead n="09" label="Contact — start something" tone="dark" />

          <Reveal>
            <h2 className="display-mega max-w-[14ch] text-background">
              Let's make<br />
              something{" "}
              <span className="serif font-normal text-accent">worth</span><br />
              shipping.
            </h2>
          </Reveal>

          <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <Reveal delay={80} className="col-span-12 md:col-span-7">
              <p className="text-lg md:text-xl text-background/80 max-w-xl leading-snug">
                Tell us the goal, the deadline, the budget. We'll come back
                in under a day with a clear plan and a fixed quote.
              </p>
            </Reveal>
            <Reveal delay={140} className="col-span-12 md:col-span-5 md:col-start-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:bg-background hover:text-foreground transition"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-background/40 text-background px-6 py-3.5 text-sm font-medium hover:border-background transition"
              >
                WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Footer details strip */}
          <div className="mt-20 md:mt-28 pt-8 border-t border-background/20 grid grid-cols-2 md:grid-cols-4 gap-6 mono-label text-background/60">
            <div>
              <p className="text-background/40 mb-2">Email</p>
              <a href="mailto:hello@ntombii.tech" className="text-background hover:text-accent normal-case tracking-normal">
                hello@ntombii.tech
              </a>
            </div>
            <div>
              <p className="text-background/40 mb-2">WhatsApp</p>
              <a href={`https://wa.me/${SITE.whatsapp}`} className="text-background hover:text-accent normal-case tracking-normal">
                {SITE.whatsappDisplay}
              </a>
            </div>
            <div>
              <p className="text-background/40 mb-2">Studio</p>
              <p className="text-background normal-case tracking-normal">{SITE.location}</p>
            </div>
            <div>
              <p className="text-background/40 mb-2">Hours</p>
              <p className="text-background normal-case tracking-normal">Mon–Fri · 09–17 SAST</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
