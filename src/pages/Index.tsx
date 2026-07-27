import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Check, MessageCircle, Plus } from "lucide-react";
import { SITE } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/seo/SEO";
import { CustomCursor } from "@/components/home/CustomCursor";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { MagneticButton } from "@/components/home/MagneticButton";
import nyateeLogo from "@/assets/clients/nyatee.webp";
import knawpLogo from "@/assets/clients/knawp.webp";
import umzilikaziLogo from "@/assets/clients/umzilikazi.webp";
import snesenzoAsset from "@/assets/clients/snesenzo.png.asset.json";
import amajubaTopWomenAsset from "@/assets/clients/amajuba-top-women.png.asset.json";
import ntombiiTechAsset from "@/assets/clients/ntombii-tech.png.asset.json";
import founderImage from "@/assets/sabelo-ndlovu-founder.webp.asset.json";
import {
  faqSchema,
  localBusinessSchema,
  reviewSchema,
  websiteSchema,
} from "@/lib/seo";

// Proof clients shown in the Trusted strip
const trustedClients = [
  { name: "Nyatee Foundation", logo: nyateeLogo as string | null, href: "https://nyateefoundation.org.za/" },
  { name: "Umzilikazi SSS", logo: umzilikaziLogo as string | null, href: "https://umzilikazi.vercel.app/" },
  { name: "Snesenzo Security", logo: snesenzoAsset.url, href: "https://www.snesenzosecuritygroup.co.za/" },
  { name: "KNAWP", logo: knawpLogo as string | null, href: "https://keepnnalive.org.za/" },
  { name: "Amajuba Top Women", logo: amajubaTopWomenAsset.url, href: "https://amajubawomenawarda.co.za/" },
  { name: "Ntombii Tech", logo: ntombiiTechAsset.url, href: "https://ntombii.tech/" },
];

const services = [
  { n: "01", label: "Website Design", desc: "Mobile-first, fast-loading marketing sites built for Newcastle businesses.", href: "/services/web-design", tone: "accent" },
  { n: "02", label: "Web Development", desc: "Custom builds, web apps and integrations. Clean code, real performance.", href: "/services/web-development", tone: "counter" },
  { n: "03", label: "Local SEO", desc: "Rank in Newcastle, Madadeni and across KZN. Schema, GBP, town pages.", href: "/services/local-seo", tone: "accent" },
  { n: "04", label: "E-commerce", desc: "Online stores with Payfast, Yoco and Stripe. Built to sell.", href: "/services/ecommerce", tone: "counter" },
  { n: "05", label: "Booking Websites", desc: "Calendar bookings, WhatsApp enquiries and deposits, done right.", href: "/services/booking-websites", tone: "accent" },
  { n: "06", label: "School Websites", desc: "Professional, parent-friendly sites for KZN schools and colleges.", href: "/services/school-websites", tone: "counter" },
  { n: "07", label: "NGO Websites", desc: "Donation-ready, story-led sites for non-profits and community groups.", href: "/services/ngo-websites", tone: "accent" },
  { n: "08", label: "Redesigns", desc: "Rebuild your old site faster, cleaner and ready to rank.", href: "/services/website-redesign", tone: "counter" },
];

const process = [
  { n: "01", t: "Discovery", d: "Short WhatsApp or call to understand your business, goals and customers." },
  { n: "02", t: "Design", d: "Clean, on-brand, mobile-first. You approve every screen." },
  { n: "03", t: "Build", d: "Production code, fast load, local SEO and schema from day one." },
  { n: "04", t: "Launch", d: "Domain, testing, handover of every login." },
  { n: "05", t: "Support", d: "Ongoing updates and maintenance, all via WhatsApp." },
];

const featuredAreas = [
  { name: "Newcastle", href: "/web-design-newcastle-kzn" },
  { name: "Madadeni", href: "/web-design-madadeni" },
  { name: "Osizweni", href: "/web-design-osizweni" },
  { name: "Dundee", href: "/web-design-dundee-kzn" },
  { name: "Utrecht", href: "/web-design-utrecht-kzn" },
  { name: "Ladysmith", href: "/web-design-ladysmith-kzn" },
  { name: "Amajuba District", href: "/web-design-amajuba-district" },
];

const Index = () => {
  return (
    <>
      <SEO
        title="Web Design Newcastle KZN | Ntombii Tech"
        description="Web design Newcastle KZN. Mobile-first websites for businesses, schools, NGOs and events across Newcastle, Amajuba and KwaZulu-Natal."
        path="/"
        keywords="web design Newcastle KZN, website design Newcastle, web designer Newcastle KZN, website design KZN, local SEO Newcastle KZN"
        schemas={[
          localBusinessSchema(),
          websiteSchema(),
          faqSchema(SITE.faqs),
          ...SITE.testimonials.map(reviewSchema),
        ]}
      />

      <CustomCursor />
      <ScrollProgress />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">

        {/* ═══════════════ HERO — Asymmetric Editorial (7/5) ═══════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-24 md:mb-40">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-block bg-foreground text-background px-4 py-1.5 mb-8 font-display tracking-tight uppercase text-xs">
                Newcastle · KZN
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display font-bold leading-[0.95] tracking-tight text-[clamp(2rem,4.6vw,4rem)]">
                <span className="block">Web Design in</span>
                <span className="block text-accent">Newcastle, KZN.</span>
                <span className="block mt-3">
                  Websites that{" "}
                  <span className="italic font-normal">bring calls</span>
                  <span className="text-counter">.</span>
                </span>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={160} className="lg:col-span-5 pb-2">
            <p className="text-xl md:text-2xl font-medium leading-snug mb-8 text-foreground/90">
              Ntombii Tech builds fast, professional websites for businesses,
              schools, NGOs and events across Newcastle, the Amajuba District
              and KwaZulu-Natal.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[3px] bg-counter" />
              <span className="uppercase font-display font-bold tracking-widest text-xs">
                Web Design Studio · Est. 2024
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-accent transition"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-counter text-counter-foreground px-6 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </section>

        {/* ═══════════════ TRUSTED — Minimal Ink Strip ═══════════════ */}
        <section className="border-y border-foreground/15 py-8 md:py-10 mb-24 md:mb-40">
          <div className="flex items-center justify-between gap-6 mb-6">
            <span className="uppercase font-display font-bold tracking-widest text-xs text-foreground/60">
              Trusted across KZN
            </span>
            <span className="hidden md:inline-block h-px flex-1 bg-foreground/15" />
            <span className="uppercase font-display font-bold tracking-widest text-xs text-foreground/40">
              6 partners · 2024–2026
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
            {trustedClients.map((c, i) => (
              <Reveal key={c.name} delay={i * 40}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
                  aria-label={`Visit ${c.name}`}
                >
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      loading="lazy"
                      className="h-10 md:h-12 w-auto max-w-[120px] object-contain"
                    />
                  ) : (
                    <span className="font-display font-bold text-lg">{c.name}</span>
                  )}
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══════════════ SERVICES — Sticky Split (4/8) ═══════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 md:mb-40">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="uppercase font-display font-bold tracking-widest text-xs text-foreground/50 block mb-4">
              01 · Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold italic mb-6 leading-[0.95]">
              What we build.
            </h2>
            <p className="text-foreground/60 max-w-xs">
              Eight things we ship for Newcastle businesses. Every website
              launches with local SEO and clean code by default.
            </p>
            <div className="mt-10 space-y-2">
              <div className="w-full h-1 bg-accent" />
              <div className="w-2/3 h-1 bg-counter" />
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
            {services.map((s, i) => (
              <Reveal key={s.label} delay={i * 40}>
                <Link
                  to={s.href}
                  className="group bg-background hover:bg-foreground hover:text-background transition-colors p-8 md:p-10 h-full block"
                >
                  <span className={`font-display font-bold text-sm ${s.tone === "accent" ? "text-accent" : "text-counter"} group-hover:text-background`}>
                    {s.n}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold mt-4 mb-3 uppercase tracking-tight">
                    {s.label}
                  </h3>
                  <p className="text-sm opacity-70 group-hover:opacity-90 leading-relaxed">
                    {s.desc}
                  </p>
                  <ArrowUpRight className="h-4 w-4 mt-6 opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══════════════ FEATURED WORK — Magazine Layout (8/4 offset) ═══════════════ */}
        <section className="mb-24 md:mb-40">
          <div className="flex justify-between items-end mb-12 md:mb-16">
            <div>
              <span className="uppercase font-display font-bold tracking-widest text-xs text-foreground/50 block mb-4">
                02 · Portfolio
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                Featured<br />Cases<span className="text-counter">.</span>
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-counter">
                {SITE.projects.length} projects
              </div>
              <div className="h-px w-20 bg-foreground ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Large featured project */}
            {SITE.projects[0] && (
              <Reveal className="lg:col-span-8">
                <Link
                  to={`/work/${SITE.projects[0].slug}`}
                  className="group block"
                >
                  <div className="aspect-video bg-foreground relative overflow-hidden">
                    {SITE.projects[0].image && (
                      <img
                        src={SITE.projects[0].image}
                        alt={SITE.projects[0].title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-background">
                      <p className="font-display text-xs uppercase tracking-widest mb-2 bg-background/20 backdrop-blur-sm inline-block px-2.5 py-1">
                        {SITE.projects[0].category}
                      </p>
                      <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                        {SITE.projects[0].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )}
            {/* Offset promo tile */}
            <Reveal delay={120} className="lg:col-span-4 lg:mt-32">
              <div className="aspect-square bg-accent p-8 md:p-10 flex flex-col justify-between text-background">
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-[1.05]">
                  See how we build websites that get calls.
                </h3>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-3 border-2 border-background text-background py-3 px-5 font-bold uppercase text-xs tracking-widest hover:bg-background hover:text-accent transition self-start"
                >
                  View Gallery
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Secondary projects row */}
          {SITE.projects.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
              {SITE.projects.slice(1, 4).map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <Link to={`/work/${p.slug}`} className="group block">
                    <div className="aspect-[4/3] bg-foreground/10 overflow-hidden mb-4">
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-[10px] uppercase tracking-widest text-foreground/50 mb-1">
                          {p.category}
                        </p>
                        <h4 className="font-display font-bold text-lg leading-tight">{p.title}</h4>
                      </div>
                      <ArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition shrink-0 mt-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </section>

        {/* ═══════════════ PROCESS — Offset Step Grid (staircase) ═══════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 md:mb-40">
          <div className="lg:col-span-4">
            <span className="uppercase font-display font-bold tracking-widest text-xs text-foreground/50 block mb-4">
              03 · Method
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight">
              Our<br />Process<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 text-foreground/60 max-w-xs">
              From first WhatsApp to a live website, in days not months.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.slice(0, 3).map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 60}
                className={`${i === 1 ? "lg:mt-16" : ""} ${i === 2 ? "lg:mt-32" : ""}`}
              >
                <div className="border-t-2 border-foreground pt-6">
                  <span className="block font-display text-3xl md:text-4xl font-light mb-3 tabular-nums">
                    {p.n}. {p.t}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/70">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Steps 4 and 5 as secondary row */}
          <div className="lg:col-span-8 lg:col-start-5 grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.slice(3).map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="border-t border-foreground/30 pt-6">
                  <span className="block font-display text-2xl md:text-3xl font-light mb-3 tabular-nums">
                    {p.n}. {p.t}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/70">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══════════════ PRICING & FAQ — Bold High Contrast Split ═══════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-foreground mb-24 md:mb-40 border border-foreground">
          {/* Pricing left */}
          <div className="bg-accent p-8 md:p-12 text-background">
            <span className="uppercase font-display font-bold tracking-widest text-xs opacity-70 block mb-4">
              04 · Pricing
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-[0.95]">
              Fixed prices.<br />
              <span className="italic font-normal">No surprises.</span>
            </h2>
            <div className="space-y-6">
              {SITE.pricing.map((tier) => (
                <div
                  key={tier.name}
                  className="flex justify-between items-end border-b border-background/30 pb-5"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-display">{tier.name}</h3>
                    <p className="text-xs opacity-80 mt-1 max-w-[200px]">
                      {tier.features?.[0]}
                    </p>
                  </div>
                  <div className="text-2xl md:text-3xl font-display font-bold italic whitespace-nowrap">
                    From {tier.from}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/pricing"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest border-b-2 border-background pb-1 hover:text-counter hover:border-counter transition"
            >
              See full pricing <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* FAQ right */}
          <div className="bg-background p-8 md:p-12">
            <span className="uppercase font-display font-bold tracking-widest text-xs text-foreground/50 block mb-4">
              05 · FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-[0.95]">
              Common<br />
              <span className="italic font-normal text-accent">questions.</span>
            </h2>
            <div className="space-y-4">
              {SITE.faqs.slice(0, 6).map((f) => (
                <details key={f.q} className="group border-b border-foreground/15 pb-4">
                  <summary className="list-none cursor-pointer flex justify-between items-start gap-4 font-display font-bold text-sm md:text-base">
                    <span>{f.q}</span>
                    <Plus className="h-4 w-4 text-counter shrink-0 mt-1 transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="text-sm mt-3 text-foreground/70 leading-relaxed pr-8">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ AREAS — Compact Grid ═══════════════ */}
        <section className="mb-24 md:mb-40">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="uppercase font-display font-bold tracking-widest text-xs text-foreground/50 block mb-4">
                06 · Coverage
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight">
                From Newcastle{" "}
                <span className="italic font-normal">outward.</span>
              </h2>
            </div>
            <Link
              to="/areas"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest hover:text-accent transition"
            >
              All {LOCATIONS.length} areas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-foreground/15 border border-foreground/15">
            {featuredAreas.map((loc) => (
              <Link
                key={loc.name}
                to={loc.href}
                className="group bg-background p-5 md:p-6 hover:bg-foreground hover:text-background transition-colors"
              >
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition mb-6" />
                <h3 className="font-display font-bold text-base md:text-lg leading-tight">
                  {loc.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════ FOUNDER + CTA — 5/7 Split ═══════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] bg-foreground overflow-hidden">
                <img
                  src={founderImage.url}
                  alt="Sabelo Ndlovu, Technoking and founder of Ntombii Tech"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-background border border-foreground/15 p-5 md:p-6 max-w-[240px]">
                <p className="font-display font-bold text-base">Sabelo Ndlovu</p>
                <p className="text-[10px] text-foreground/60 uppercase tracking-widest mt-1">
                  Technoking · Founder
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <span className="uppercase font-display font-bold tracking-widest text-xs text-foreground/50 block mb-4">
              07 · Founder
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.92] tracking-tight mb-8">
              Let's build something{" "}
              <span className="text-accent">exceptional</span>{" "}
              <span className="italic font-normal">together.</span>
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed mb-4 max-w-xl">
              Sabelo Ndlovu is the <strong>Technoking</strong> of Ntombii Tech,
              his own twist on founder and CEO. Based in Newcastle, he builds
              websites, web apps and digital solutions for businesses and
              entrepreneurs across KZN.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-10 max-w-xl">
              Self-taught, AI-native, and personally leading every project from
              first conversation to launch.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 text-base font-bold uppercase tracking-wider hover:bg-counter hover:text-counter-foreground transition"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest hover:text-accent transition border-b border-foreground/30 hover:border-accent pb-1"
              >
                Read the full story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-14 pt-8 border-t border-foreground/15 grid grid-cols-2 md:grid-cols-3 gap-6 text-xs">
              <div>
                <p className="text-foreground/40 uppercase tracking-widest mb-1.5">Email</p>
                <a href="mailto:hello@ntombii.tech" className="font-display font-bold hover:text-accent transition">
                  hello@ntombii.tech
                </a>
              </div>
              <div>
                <p className="text-foreground/40 uppercase tracking-widest mb-1.5">WhatsApp</p>
                <a href={`https://wa.me/${SITE.whatsapp}`} className="font-display font-bold hover:text-accent transition">
                  {SITE.whatsappDisplay}
                </a>
              </div>
              <div>
                <p className="text-foreground/40 uppercase tracking-widest mb-1.5">Studio</p>
                <p className="font-display font-bold">{SITE.location}</p>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
};

export default Index;
