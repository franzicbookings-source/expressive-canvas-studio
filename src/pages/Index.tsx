import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Check, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/seo/SEO";
import nyateeLogo from "@/assets/clients/nyatee.webp";
import knawpLogo from "@/assets/clients/knawp.webp";
import umzilikaziLogo from "@/assets/clients/umzilikazi.webp";
import snesenzoAsset from "@/assets/clients/snesenzo.png.asset.json";
import founderImage from "@/assets/sabelo-ndlovu-founder.webp.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  faqSchema,
  localBusinessSchema,
  reviewSchema,
  websiteSchema,
} from "@/lib/seo";

// Proof clients shown in the Trusted strip
const trustedClients = [
  { name: "Nyatee Foundation", note: "NGO website · Newcastle KZN", logo: nyateeLogo as string | null },
  { name: "Umzilikazi Senior Secondary School", note: "School website · Newcastle KZN", logo: umzilikaziLogo as string | null },
  { name: "Snesenzo Security Group", note: "Security company website · Newcastle KZN", logo: snesenzoAsset.url },
  { name: "KNAWP", note: "Community organisation · Newcastle KZN", logo: knawpLogo as string | null },
  { name: "Which Way Agency", note: "Events brand · Newcastle KZN", logo: null },
];

// Editorial section header
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

// Main services with internal links (local SEO power block)
const services = [
  { n: "01", label: "Website Design", desc: "Mobile-first, fast-loading marketing sites built for Newcastle businesses.", href: "/services/web-design" },
  { n: "02", label: "Web Development", desc: "Custom builds, web apps and integrations - clean code, real performance.", href: "/services/web-development" },
  { n: "03", label: "Local SEO", desc: "Rank in Newcastle, Madadeni and across KZN. Schema, GBP, town pages.", href: "/services/local-seo" },
  { n: "04", label: "E-commerce Websites", desc: "Online stores with Payfast, Yoco and Stripe - built to sell.", href: "/services/ecommerce" },
  { n: "05", label: "Booking Websites", desc: "Calendar bookings, WhatsApp enquiries and deposits - done right.", href: "/services/booking-websites" },
  { n: "06", label: "School Websites", desc: "Professional, parent-friendly sites for KZN schools and colleges.", href: "/services/school-websites" },
  { n: "07", label: "NGO Websites", desc: "Donation-ready, story-led sites for non-profits and community groups.", href: "/services/ngo-websites" },
  { n: "08", label: "Website Redesigns", desc: "Rebuild your old site faster, cleaner and ready to rank.", href: "/services/website-redesign" },
];

// Why choose
const whyUs = [
  { t: "Newcastle-based, KZN-focused", d: "We live here. We know how local customers search, buy and message." },
  { t: "Built to rank on Google", d: "Local SEO, schema and clean code shipped on every site by default." },
  { t: "WhatsApp-first communication", d: "Quick voice notes, fast approvals. No long email chains, no stalled projects." },
  { t: "Fixed pricing, no surprises", d: "Clear quotes. Clear timelines. You always know what you're paying for." },
];

// Areas (featured) - Newcastle first, then KZN towns + district link.
// Hrefs use the SEO-friendly /web-design-* slugs.
const featuredAreas = [
  { name: "Newcastle", href: "/web-design-newcastle-kzn", district: "Amajuba" },
  { name: "Madadeni", href: "/web-design-madadeni", district: "Amajuba" },
  { name: "Osizweni", href: "/web-design-osizweni", district: "Amajuba" },
  { name: "Dundee", href: "/web-design-dundee-kzn", district: "uMzinyathi" },
  { name: "Utrecht", href: "/web-design-utrecht-kzn", district: "Amajuba" },
  { name: "Ladysmith", href: "/web-design-ladysmith-kzn", district: "uThukela" },
  { name: "Amajuba District", href: "/web-design-amajuba-district", district: "KZN" },
];

const Index = () => {
  return (
    <>
      <SEO
        title="Web Design Newcastle KZN | Ntombii Tech"
        description="Web design Newcastle KZN. Mobile-first websites for businesses, schools, NGOs and events across Newcastle, Amajuba and KwaZulu-Natal."
        path="/"
        keywords="web design Newcastle KZN, website design Newcastle, web designer Newcastle KZN, website design KZN, web developer Newcastle KZN, website design for schools KZN, website design for NGOs KZN, website design for security companies KZN, local SEO Newcastle KZN"
        schemas={[
          localBusinessSchema(),
          websiteSchema(),
          faqSchema(SITE.faqs),
          ...SITE.testimonials.map(reviewSchema),
        ]}
      />

      {/* ═══════════════ (00) HERO ═══════════════ */}
      <section className="relative noise overflow-hidden border-b border-foreground/15">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-warm), var(--gradient-hero)" }}
        />
        <div className="container-wide pt-10 md:pt-16 pb-12 md:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-16 mono-label text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>Studio open · Mon–Fri</span>
            </span>
            <span className="hidden md:inline">Est. 2024 - Newcastle, KZN</span>
          </div>

          <Reveal>
            <h1 className="display-mega leading-[0.95] max-w-[20ch]">
              <span className="block">
                Web Design in{" "}
                <span className="text-accent">Newcastle, KZN</span>
              </span>
              <span className="block mt-2 md:mt-3">
                Websites That Help Local Businesses{" "}
                <span className="serif font-normal text-accent">Get More Calls.</span>
              </span>
            </h1>
          </Reveal>

          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <Reveal delay={120} className="col-span-12 md:col-span-7 lg:col-span-7">
              <p className="text-lg md:text-xl text-foreground/80 leading-snug max-w-2xl">
                Ntombii Tech builds fast, professional websites for businesses,
                schools, NGOs, churches, events and local brands in Newcastle,
                the Amajuba District and across KwaZulu-Natal.
              </p>
            </Reveal>
            <Reveal delay={180} className="col-span-12 md:col-span-5 md:col-start-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent transition"
              >
                Get a Website Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 border border-foreground/40 px-6 py-3.5 text-sm font-medium hover:border-foreground transition"
              >
                View Our Work
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <p className="mt-10 md:mt-14 mono-label text-foreground/70 flex items-center gap-3 flex-wrap">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
              Newcastle Born <span className="text-foreground/30">//</span> KZN Roots
              <span className="text-foreground/30">//</span> Built for Local Businesses
            </p>
          </Reveal>
        </div>

        {/* SEO marquee - towns we serve */}
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

      {/* ═══════════════ (01) TRUSTED ACROSS KZN ═══════════════ */}
      <section className="border-b border-foreground/15 bg-secondary">
        <div className="container-wide py-16 md:py-20">
          <div className="mb-6 flex items-center justify-between">
            <span className="mono-label text-muted-foreground">(01) Trusted across KZN</span>
            <span className="hidden md:block mono-label text-muted-foreground">
              Schools · NGOs · Security · Community · Events
            </span>
          </div>
          <Reveal>
            <h2 className="display text-2xl md:text-4xl max-w-3xl">
              Trusted by local businesses, schools, NGOs and{" "}
              <span className="serif font-normal text-accent">community brands</span> across KZN.
            </h2>
          </Reveal>

          <ul className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-foreground/15 border border-foreground/15">
            {trustedClients.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <li className="bg-background h-full p-5 md:p-6 flex flex-col items-center justify-center text-center min-h-[160px]">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="h-12 md:h-14 w-auto max-w-[140px] object-contain"
                    />
                  ) : (
                    <span className="display text-base md:text-lg leading-tight">{c.name}</span>
                  )}
                  <p className="mt-4 text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                    {c.note}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ (02) SERVICES ═══════════════ */}
      <section className="container-wide py-20 md:py-28">
        <SectionHead n="02" label="Services - what we build" />
        <Reveal>
          <h2 className="display-xl max-w-4xl mb-12 md:mb-16">
            Websites that <span className="serif font-normal text-accent">work for Newcastle</span> - and the businesses building it.
          </h2>
        </Reveal>

        <div className="border-t border-foreground/15">
          {services.map((row, i) => (
            <Reveal key={row.label} delay={i * 30}>
              <Link
                to={row.href}
                className="group grid grid-cols-12 gap-4 items-baseline py-6 md:py-7 border-b border-foreground/15 hover:bg-foreground hover:text-background transition-colors px-2 -mx-2"
              >
                <span className="col-span-2 md:col-span-1 mono-label tabular-nums opacity-60">
                  {row.n}
                </span>
                <h3 className="col-span-10 md:col-span-4 display text-xl md:text-3xl lg:text-4xl">
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

      {/* ═══════════════ (03) WHY CHOOSE ═══════════════ */}
      <section className="border-y border-foreground/15 bg-foreground text-background">
        <div className="container-wide py-20 md:py-28">
          <SectionHead n="03" label="Why Ntombii Tech" tone="dark" />
          <Reveal>
            <h2 className="display-xl max-w-4xl mb-12 md:mb-16">
              Local. Fast. <span className="serif font-normal text-accent">Built to convert.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 border border-background/10">
            {whyUs.map((w, i) => (
              <Reveal
                key={w.t}
                delay={i * 60}
                className="bg-foreground p-6 md:p-8"
              >
                <span className="mono-label text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-6 md:mt-10 text-xl md:text-2xl">{w.t}</h3>
                <p className="mt-3 text-sm text-background/70 leading-relaxed">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ (04) FEATURED WORK ═══════════════ */}
      <section className="container-wide py-20 md:py-28">
        <SectionHead n="04" label="Featured work - 2024–2026" />
        <Reveal>
          <h2 className="display-xl max-w-4xl mb-12 md:mb-16">
            Real websites for <span className="serif font-normal text-accent">real KZN brands.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
          {SITE.projects.map((p, i) => {
            const isExternal = p.href.startsWith("http");
            const inner = (
              <div className="group block bg-background p-5 md:p-6 h-full">
                <div className="overflow-hidden border border-foreground/15 bg-card aspect-[4/3] flex items-center justify-center">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} - Ntombii Tech project`}
                      loading="lazy"
                      width={640}
                      height={480}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 text-center bg-secondary">
                      <span className="display text-lg md:text-xl text-foreground/80">
                        {p.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="mono-label text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(3, "0")}
                    </p>
                    <h3 className="display mt-2 text-base md:text-lg">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.category}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            );
            return (
              <Reveal key={p.slug} delay={i * 50}>
                {isExternal ? (
                  <a href={p.href} target="_blank" rel="noreferrer">{inner}</a>
                ) : (
                  <Link to="/work">{inner}</Link>
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-end">
          <Link to="/work" className="inline-flex items-center gap-2 mono-label hover:text-accent transition">
            See all work
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ═══════════════ (05) AREAS SERVED ═══════════════ */}
      <section className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="05" label="Areas served - KwaZulu-Natal" />

        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <Reveal className="col-span-12 md:col-span-7">
            <h2 className="display-xl">
              From Newcastle <span className="serif font-normal text-accent">outward.</span>
            </h2>
          </Reveal>
          <Reveal delay={80} className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-foreground/75 leading-relaxed">
              We're based in Newcastle and build websites for businesses across
              the Amajuba District, uMzinyathi, uThukela, Zululand and the wider
              KZN. Every project ships with town-targeted local SEO.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
          {featuredAreas.map((loc, i) => {
            const to = loc.slug === "__areas" ? "/areas" : `/areas/${loc.slug}`;
            return (
              <li key={loc.name}>
                <Link
                  to={to}
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
            );
          })}
        </ul>

        <div className="mt-10 flex justify-end">
          <Link to="/areas" className="inline-flex items-center gap-2 mono-label hover:text-accent transition">
            All {LOCATIONS.length} areas
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ═══════════════ (06) PROCESS ═══════════════ */}
      <section id="process" className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="06" label="Process - how we work" />
        <Reveal>
          <h2 className="display-xl max-w-3xl mb-12 md:mb-16">
            From first WhatsApp to <span className="serif font-normal text-accent">live website,</span> in days.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-5 border-t border-foreground/15">
          {[
            { n: "01", t: "Discovery", d: "Short WhatsApp or call to understand your business, goals and customers." },
            { n: "02", t: "Design", d: "We design your site - clean, on-brand, mobile-first. You approve every screen." },
            { n: "03", t: "Build", d: "Production code, fast load, local SEO and schema built in from day one." },
            { n: "04", t: "Launch", d: "We connect your domain, test on real devices and hand over all logins." },
            { n: "05", t: "Support", d: "Ongoing updates, content changes and maintenance - all via WhatsApp." },
          ].map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 50}
              className="border-b md:border-b-0 md:border-r last:md:border-r-0 border-foreground/15 p-6 md:p-8"
            >
              <span className="mono-label tabular-nums text-accent">{p.n}</span>
              <h3 className="display mt-6 md:mt-10 text-xl md:text-2xl">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ (07) REVIEWS ═══════════════ */}
      <section className="border-t border-foreground/15 bg-secondary">
        <div className="container-wide py-20 md:py-28">
          <SectionHead n="07" label="Reviews - what clients say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
            {SITE.testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 60}
                className="bg-background p-6 md:p-8 flex flex-col"
              >
                <span className="mono-label tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 text-base md:text-lg text-foreground/85 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-auto pt-8">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-8">
              <p className="text-sm text-muted-foreground max-w-xl">
                Worked with us? Help other Newcastle businesses find us - leave a quick Google review.
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Ntombii Tech - I'd like to leave a review.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/40 px-5 py-3 text-sm font-medium hover:border-foreground hover:bg-foreground hover:text-background transition"
              >
                Leave a Review
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ (08) FAQ ═══════════════ */}
      <section className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="08" label="FAQ - common questions" />
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <h2 className="display-xl">
              Answers <span className="serif font-normal text-accent">before</span> you ask.
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
              Still unsure? Send us a WhatsApp - we reply within a few hours
              during the day.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 mono-label hover:text-accent transition"
            >
              Ask on WhatsApp
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>

          <div className="col-span-12 md:col-span-7">
            <Accordion type="single" collapsible className="w-full border-t border-foreground/15">
              {SITE.faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-foreground/15"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg display py-5 md:py-6">
                    <span className="flex items-baseline gap-4">
                      <span className="mono-label tabular-nums text-muted-foreground shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{f.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/75 leading-relaxed pl-10 pb-6 text-sm md:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══════════════ (09) PRICING ═══════════════ */}
      <section className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="09" label="Pricing - fixed, no surprises" />
        <Reveal>
          <h2 className="display-xl max-w-4xl mb-12 md:mb-16">
            Clear packages. <span className="serif font-normal text-accent">Honest prices.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {SITE.pricing.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 70}
              className={`bg-background p-6 md:p-8 flex flex-col ${tier.popular ? "ring-2 ring-accent ring-inset relative" : ""}`}
            >
              {tier.popular && (
                <span className="absolute top-4 right-4 mono-label text-accent">Most picked</span>
              )}
              <span className="mono-label tabular-nums text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-6 text-2xl md:text-3xl">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="display text-3xl md:text-4xl">From {tier.from}</span>
                {tier.original && (
                  <span className="mono-label text-muted-foreground line-through">{tier.original}</span>
                )}
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {tier.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center justify-center gap-2 border border-foreground/40 px-5 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition"
              >
                Get this package
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

      {/* ═══════════════ (10) FOUNDER PREVIEW ═══════════════ */}
      <section className="container-wide py-20 md:py-28 border-t border-foreground/15">
        <SectionHead n="10" label="Founder - meet the Technoking" />
        <div className="grid grid-cols-12 gap-8 md:gap-14 items-center">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="relative overflow-hidden border border-foreground/15 bg-card aspect-[4/5]">
              <img
                src={founderImage.url}
                alt="Sabelo Ndlovu, Technoking and founder of Ntombii Tech"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-7">
            <h2 className="display-xl">
              Sabelo Ndlovu - <span className="serif font-normal text-accent">Technoking.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Sabelo Ndlovu is the <strong>Technoking</strong> of Ntombii Tech - his own twist on "founder and CEO." Based in Newcastle, KwaZulu-Natal, he builds websites, web apps and digital solutions for businesses and entrepreneurs across the region.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Self-taught and AI-native, he leads every project personally - from the first conversation to the final product live.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 mono-label hover:text-accent transition"
            >
              Read the full story
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ (11) FINAL CTA ═══════════════ */}
      <section className="border-t border-foreground/15 bg-foreground text-background relative noise overflow-hidden">
        <div className="container-wide py-24 md:py-36">
          <SectionHead n="11" label="Start - get a website quote" tone="dark" />

          <Reveal>
            <h2 className="display-mega max-w-[16ch] text-background">
              Ready for a website that{" "}
              <span className="serif font-normal text-accent">brings calls?</span>
            </h2>
          </Reveal>

          <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <Reveal delay={80} className="col-span-12 md:col-span-7">
              <p className="text-lg md:text-xl text-background/80 max-w-xl leading-snug">
                Tell us about your business - we'll come back within a day with
                a clear plan and a fixed quote for your Newcastle or KZN project.
              </p>
            </Reveal>
            <Reveal delay={140} className="col-span-12 md:col-span-5 md:col-start-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:bg-background hover:text-foreground transition"
              >
                Get a Website Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-background/40 text-background px-6 py-3.5 text-sm font-medium hover:border-background transition"
              >
                WhatsApp Us
              </a>
            </Reveal>
          </div>

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
