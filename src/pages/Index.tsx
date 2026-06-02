import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";
import { TrustedBy } from "@/components/home/TrustedBy";
import { SEO } from "@/components/seo/SEO";
import {
  faqSchema,
  localBusinessSchema,
  reviewSchema,
  websiteSchema,
} from "@/lib/seo";
import heroDevices from "@/assets/hero-devices.webp";

const sectionLabel = (n: string, label: string, tone: "light" | "dark" = "light") => (
  <div
    className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] mb-10 ${
      tone === "dark" ? "text-background/60" : "text-muted-foreground"
    }`}
  >
    <span className="tabular-nums text-accent">({n})</span>
    <span className={`h-px w-8 ${tone === "dark" ? "bg-background/30" : "bg-border"}`} />
    <span>{label}</span>
  </div>
);

const capabilities = [
  { t: "Websites", d: "Business websites, landing pages, school sites and booking flows built for mobile-first visitors." },
  { t: "Brand Systems", d: "Logos, colours, typography, templates and voice — so your business looks consistent everywhere." },
  { t: "Graphic Design", d: "Posters, flyers, profiles, pitch decks and digital designs that do not look like templates." },
  { t: "Print & Signage", d: "Banners, shopfronts, vehicle branding and print-ready assets for real-world visibility." },
  { t: "Web Engineering", d: "React, Vite, headless builds, performance tuning and clean front-end systems." },
  { t: "Mobile Surfaces", d: "Mobile-first by default — built for South African data realities." },
  { t: "Signage Solutions", d: "Banners, shopfronts and vehicle branding. Your name, impossible to miss." },
  { t: "Corporate Gifts", d: "Branded gifts that work harder than a handshake — perfect for clients, staff and events." },
];

const process = [
  { n: "01", t: "Discover", d: "60-minute call. We map the goal, audience, constraints and what 'win' looks like." },
  { n: "02", t: "Design", d: "Wireframes, direction and visuals — you see the plan before we build." },
  { n: "03", t: "Build", d: "Clean code, fast loads, mobile-first. We build like it matters." },
  { n: "04", t: "Launch", d: "Tested, optimised and handed over. Then we keep improving." },
];

// Small double-dot brand mark
const DotMark = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center gap-1 ${className}`} aria-hidden>
    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
  </span>
);

const Index = () => {
  const featured = SITE.pricing[1];
  const others = SITE.pricing.filter((p) => p !== featured);
  const featuredPost = SITE.posts[0];
  const otherPosts = SITE.posts.slice(1, 3);

  const [projectIdx, setProjectIdx] = useState(0);
  const project = SITE.projects[projectIdx];
  const stepProject = (dir: 1 | -1) =>
    setProjectIdx((i) => (i + dir + SITE.projects.length) % SITE.projects.length);

  const [testimonialIdx, setTestimonialIdx] = useState(2); // Mr. Zulu by default
  const testimonial = SITE.testimonials[testimonialIdx];
  const stepTestimonial = (dir: 1 | -1) =>
    setTestimonialIdx((i) => (i + dir + SITE.testimonials.length) % SITE.testimonials.length);

  return (
    <>
      <SEO
        title="Web Design & Digital Solutions Company in Newcastle, KZN | Ntombii Tech"
        description="Ntombii Tech is a South African digital solutions and web design company in Newcastle, KwaZulu-Natal. We build websites, web apps, brand systems, print, signage, ink solutions and corporate gifts for businesses, schools and organisations across KZN and South Africa."
        path="/"
        keywords="web design Newcastle KZN, web designer Newcastle, website development South Africa, affordable business websites, small business web design KZN, school websites South Africa, branding Newcastle, local SEO KZN, print and signage Newcastle, corporate gifts KZN, Ntombii Tech"
        schemas={[
          localBusinessSchema(),
          websiteSchema(),
          faqSchema(SITE.faqs),
          ...SITE.testimonials.map(reviewSchema),
        ]}
      />

      {/* ───────────── HERO ───────────── */}
      <section className="relative noise overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-warm), var(--gradient-hero)" }}
        />
        <div className="container-wide pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-6 items-center">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground flex items-center gap-2">
                  <DotMark />
                  <span>Web Design · Branding · Print · Signage · KZN</span>
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="display-mega mt-6 max-w-[18ch]">
                  Web design &amp; <span className="serif text-accent">digital solutions</span>
                  <br />
                  for South African
                  <br />
                  businesses that <span className="serif">mean business.</span>
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-8 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
                  Ntombii Tech is a digital solutions and web design company based in
                  <strong className="font-medium"> Newcastle, KwaZulu-Natal</strong>. We help local
                  businesses, schools, organisations and startups across South Africa with
                  professional websites, web apps, branding, print, signage, ink and
                  corporate gifts — WhatsApp-friendly, mobile-first and built to be found on Google.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[0_8px_24px_-12px_hsl(14_95%_55%/0.7)]"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 backdrop-blur px-6 py-3.5 text-sm font-medium hover:border-foreground/40 transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Hero mockup */}
            <Reveal delay={120} className="col-span-12 lg:col-span-5 relative">
              <div className="relative w-full">
                <img
                  src={heroDevices}
                  alt="Ntombii Tech portfolio shown on laptop, tablet and phone"
                  width={1600}
                  height={1120}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto max-h-[300px] sm:max-h-[440px] lg:max-h-[560px] object-contain"
                />

                {/* Floating black caption card */}
                <div className="relative sm:absolute sm:-bottom-2 sm:left-6 mt-6 sm:mt-0 mx-auto sm:mx-0 max-w-sm sm:max-w-[260px] rounded-2xl bg-foreground text-background p-5 sm:p-4 shadow-[var(--shadow-lift)]">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-background/50">
                    <DotMark />
                    <span>Ntombii Tech</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">
                    Design that works <span className="serif text-accent">online</span> and in real life.
                  </p>
                </div>

                {/* Circular stamp */}
                <div className="hidden md:flex absolute -top-2 right-2 h-20 w-20 rounded-full bg-accent text-accent-foreground items-center justify-center text-center shadow-[var(--shadow-lift)]">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.18em] leading-tight">
                    Made in
                    <br />
                    Newcastle
                    <br />
                    KZN
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── TRUSTED BY ───────────── */}
      <TrustedBy />

      {/* ───────────── ENTITY / WHO WE ARE ───────────── */}
      <section className="container-wide py-16 md:py-20 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            {sectionLabel("00", "Who we are")}
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6">
            <Reveal>
              <h2 className="display text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl">
                Ntombii Tech is a South African{" "}
                <span className="serif text-accent">digital solutions</span> company
                based in Newcastle, KZN.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-3xl">
                We help businesses, schools, organisations, startups and local
                brands show up properly online and in real life. That means
                professional{" "}
                <Link to="/services/web-design" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  websites
                </Link>
                ,{" "}
                <Link to="/services/web-development" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  web development
                </Link>
                ,{" "}
                <Link to="/services/branding" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  brand systems
                </Link>
                ,{" "}
                <Link to="/services/local-seo" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  local SEO
                </Link>
                ,{" "}
                <Link to="/services/printing" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  print
                </Link>
                ,{" "}
                <Link to="/services/signage" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  signage
                </Link>
                ,{" "}
                <Link to="/services/ink-toner" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  ink supply
                </Link>{" "}
                and{" "}
                <Link to="/services/corporate-gifts" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  corporate gifts
                </Link>{" "}
                — delivered from Newcastle and trusted by clients across{" "}
                <Link to="/areas/newcastle" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  Newcastle
                </Link>
                ,{" "}
                <Link to="/areas/madadeni" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  Madadeni
                </Link>
                ,{" "}
                <Link to="/areas/vryheid" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  Vryheid
                </Link>
                ,{" "}
                <Link to="/areas/ladysmith" className="underline decoration-accent/40 underline-offset-4 hover:text-foreground">
                  Ladysmith
                </Link>{" "}
                and wider KwaZulu-Natal.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 pt-4 border-t border-border/60">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">What we do</dt>
                  <dd className="mt-2 text-sm text-foreground/85">Websites, web apps, branding &amp; digital growth</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Where</dt>
                  <dd className="mt-2 text-sm text-foreground/85">Newcastle, KZN — serving South Africa</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Who we serve</dt>
                  <dd className="mt-2 text-sm text-foreground/85">Small businesses, schools, NGOs &amp; startups</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Why trust us</dt>
                  <dd className="mt-2 text-sm text-foreground/85">5★ rated · 30+ projects · 100% client retention</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>


      {/* ───────────── MANIFESTO ───────────── */}
      <section className="container-wide py-20 md:py-28">
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

      {/* ───────────── CAPABILITIES — DARK ───────────── */}
      <section
        id="capabilities"
        className="relative text-background overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="container-wide py-20 md:py-28 relative">
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-accent mb-8">
                <span className="tabular-nums">(02)</span>
                <span className="h-px w-8 bg-accent/50" />
                <span>Capabilities</span>
              </div>
              <h2 className="display-xl">
                Everything your business
                <br />
                needs to show up{" "}
                <span className="serif text-accent">properly.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-background/70 leading-relaxed">
                From websites and brand systems to signage, print and corporate
                gifts — one studio, one standard, one number to call.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c, i) => (
              <Reveal
                key={c.t}
                delay={i * 50}
                className="group relative rounded-3xl border border-background/10 hover:border-accent/40 p-6 md:p-7 flex flex-col justify-between min-h-[220px] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-background/50 tabular-nums">
                    0{i + 1}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-background/40 group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="mt-8">
                  <h3 className="display text-lg md:text-xl text-background">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/60">
                    {c.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SELECTED WORK ───────────── */}
      <section className="container-wide py-20 md:py-28 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            {sectionLabel("03", "Selected work")}
            <h2 className="display-xl">
              A small <span className="serif text-accent">portfolio</span>
              <br />
              of <span className="serif">serious</span> work.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-muted-foreground">
              A handful of recent builds across non-profit, education,
              hospitality and civic work — each shipped fast, each built to last.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="col-span-12 md:col-span-4 order-2 md:order-1">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {project.category}
            </p>
            <h3 className="display mt-3 text-3xl md:text-4xl">{project.title}</h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Website design and development delivered end-to-end — brand,
              build, content and launch. Live and shipping today.
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition"
            >
              View project <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-8 flex items-center gap-3">
              <button
                aria-label="Previous project"
                onClick={() => stepProject(-1)}
                className="h-10 w-10 rounded-full border border-border hover:border-foreground/40 hover:bg-muted flex items-center justify-center transition"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next project"
                onClick={() => stepProject(1)}
                className="h-10 w-10 rounded-full border border-border hover:border-foreground/40 hover:bg-muted flex items-center justify-center transition"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="ml-2 text-xs text-muted-foreground tabular-nums">
                {String(projectIdx + 1).padStart(2, "0")} / {String(SITE.projects.length).padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100} className="col-span-12 md:col-span-8 order-1 md:order-2">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-3xl overflow-hidden bg-card border border-border/70 lift"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-auto object-contain object-top transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
            Browse the full archive <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS — DARK ───────────── */}
      <section className="relative text-background overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container-wide py-20 md:py-28 relative">
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-accent mb-8">
                <span className="tabular-nums">(04)</span>
                <span className="h-px w-8 bg-accent/50" />
                <span>Testimonials</span>
              </div>
              <h2 className="display-xl">
                Words from <span className="serif text-accent">people</span>
                <br />
                we've actually shipped <span className="serif text-accent">for.</span>
              </h2>
            </div>
          </div>

          <Reveal>
            <div className="relative rounded-[2rem] border border-background/10 p-8 md:p-14">
              <div className="display text-5xl md:text-7xl text-accent leading-none mb-6 select-none">"</div>
              <blockquote className="display text-2xl md:text-4xl leading-tight max-w-4xl text-background">
                {testimonial.quote}
              </blockquote>

              <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="display text-lg text-background">{testimonial.name}</div>
                  <div className="text-sm text-background/60 mt-1">{testimonial.role}</div>
                  <Link
                    to="/work"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition"
                  >
                    View project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    aria-label="Previous testimonial"
                    onClick={() => stepTestimonial(-1)}
                    className="h-10 w-10 rounded-full border border-background/20 hover:border-accent hover:text-accent flex items-center justify-center transition"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next testimonial"
                    onClick={() => stepTestimonial(1)}
                    className="h-10 w-10 rounded-full border border-background/20 hover:border-accent hover:text-accent flex items-center justify-center transition"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <span className="ml-2 text-xs text-background/50 tabular-nums">
                    {String(testimonialIdx + 1).padStart(2, "0")} / {String(SITE.testimonials.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section id="process" className="container-wide py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            {sectionLabel("05", "Our process")}
            <h2 className="display-xl">
              Four steps. <span className="serif text-accent">Zero drama.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-muted-foreground">
              A simple rhythm built around WhatsApp checkpoints. You see what's
              happening every step, no agency theatre.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 80}
              className="rounded-3xl bg-card border border-border/70 p-7 flex flex-col hover:border-foreground/30 transition"
            >
              <div className="display text-5xl md:text-6xl text-accent leading-none">{p.n}</div>
              <div className="rule my-6" />
              <h3 className="display text-xl">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── PRICING TEASER ───────────── */}
      <section className="container-wide py-20 md:py-28 border-t border-border/60">
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
          <div className="col-span-12 md:col-span-7 rounded-3xl text-background p-7 md:p-10 relative overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
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
      <section className="container-wide py-16 md:py-24 border-t border-border/60">
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

      {/* ───────────── FINAL CTA STRIP — DARK ───────────── */}
      <section className="container-wide py-14 md:py-20">
        <div className="rounded-[2rem] text-background p-8 md:p-14 relative overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
          <div className="relative grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-background/50 mb-6">
                <DotMark />
                <span>Closing</span>
              </div>
              <h2 className="display text-3xl md:text-5xl leading-[1.05] max-w-2xl">
                Ready to make your business look
                as <span className="serif text-accent">serious</span> as the
                work behind it?
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition shadow-[0_12px_32px_-12px_hsl(14_95%_55%/0.8)]"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          {/* Bottom margin so floating WA button doesn't clash */}
          <div className="h-2 md:h-0" />
        </div>
      </section>
    </>
  );
};

export default Index;
