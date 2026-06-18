import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, MapPin, Check, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/seo/SEO";
import { SITE } from "@/lib/site";
import { getLocation, LOCATIONS } from "@/lib/locations";
import {
  breadcrumbSchema,
  faqSchema,
  locationBusinessSchema,
  serviceSchema,
} from "@/lib/seo";

const services = [
  { t: "Web Design", d: "Mobile-first websites that load fast and convert visitors into WhatsApp leads." },
  { t: "Web Development", d: "Production React builds with SEO, schema and Core Web Vitals tuned from day one." },
  { t: "Branding", d: "Logo, palette, typography and templates - a complete identity from R3,500." },
  { t: "Local SEO", d: "Google Business profile setup, schema markup, and town-targeted page copy." },
];

type Props = { townSlug?: string; canonicalPath?: string };

const LocationPage = ({ townSlug, canonicalPath }: Props = {}) => {
  const { town } = useParams();
  const loc = getLocation(townSlug ?? town);
  if (!loc) return <Navigate to="/areas" replace />;

  const path = canonicalPath ?? `/areas/${loc.slug}`;
  const title = `Web Design in ${loc.name} - Websites, Branding & Local SEO`;
  const description = `Mobile-first websites for ${loc.name} businesses. Web design, branding and local SEO by Ntombii Tech in Newcastle, KZN. From R2,500.`;
  const keywords = [
    `web designer ${loc.name}`,
    `web design ${loc.name}`,
    `website design ${loc.name}`,
    `branding ${loc.name}`,
    `web developer ${loc.name}`,
    `${loc.name} digital agency`,
    `${loc.region} web design`,
  ].join(", ");

  const otherTowns = LOCATIONS.filter((l) => l.slug !== loc.slug).slice(0, 6);

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={path}
        keywords={keywords}
        schemas={[
          locationBusinessSchema(loc),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Areas", url: "/areas" },
            { name: loc.name, url: `/areas/${loc.slug}` },
          ]),
          serviceSchema({
            title: `Web Design in ${loc.name}`,
            summary: `Mobile-first websites and brand systems for businesses in ${loc.name}, ${loc.region}.`,
            area: loc.name,
          }),
          faqSchema(loc.faqs),
        ]}
      />

      {/* Hero */}
      <section className="container-wide pt-16 pb-12 md:pt-24">
        <Reveal>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            <span>{loc.region}</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-5 text-4xl md:text-6xl lg:text-7xl max-w-5xl">
            Web design & development in{" "}
            <span className="serif text-accent">{loc.name}.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {loc.intro}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-4 max-w-2xl text-base text-foreground/85 italic">
            {loc.hook}
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
            >
              Start your {loc.name} project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                `Hi Ntombii Tech, I'm in ${loc.name} and want to chat about a website.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-muted transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </Reveal>
      </section>

      {/* Services for this town */}
      <section className="container-wide py-16 md:py-24 border-t border-border/60">
        <Reveal>
          <p className="eyebrow">What {loc.name} businesses get</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-3xl md:text-5xl max-w-3xl">
            Built for{" "}
            <span className="serif text-accent">{loc.industries[0].toLowerCase()}</span>
            , and everything {loc.name} runs on.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="rounded-2xl border border-border/70 bg-card p-7 h-full">
                <h3 className="display text-xl">{s.t}</h3>
                <p className="mt-3 text-sm text-foreground/75">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-2">
            {loc.industries.map((ind) => (
              <span
                key={ind}
                className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground/80"
              >
                {ind}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Areas + landmarks */}
      <section className="container-wide py-16 md:py-24 border-t border-border/60 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow">Neighbourhoods we serve in {loc.name}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              From {loc.neighborhoods[0]} to {loc.neighborhoods[loc.neighborhoods.length - 1]}.
            </h2>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {loc.neighborhoods.map((n) => (
              <li key={n} className="flex items-center gap-2 text-foreground/80">
                <Check className="h-3.5 w-3.5 text-accent shrink-0" />
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Local landmarks: {loc.landmarks.join(" · ")}
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-3xl overflow-hidden border border-border/70 aspect-square bg-muted">
            <iframe
              title={`Map of ${loc.name}`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${loc.geo.lng - 0.15},${loc.geo.lat - 0.12},${loc.geo.lng + 0.15},${loc.geo.lat + 0.12}&layer=mapnik&marker=${loc.geo.lat},${loc.geo.lng}`}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container-wide py-16 md:py-24 border-t border-border/60">
        <Reveal>
          <p className="eyebrow">{loc.name} FAQs</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-3xl md:text-5xl max-w-3xl">
            Quick answers for{" "}
            <span className="serif text-accent">{loc.name} business owners.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 max-w-3xl">
          {loc.faqs.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <h3 className="font-medium">{f.q}</h3>
                <p className="mt-2 text-sm text-foreground/75">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other towns */}
      <section className="container-wide py-16 md:py-24 border-t border-border/60">
        <Reveal>
          <p className="eyebrow">Also serving</p>
          <h2 className="display mt-4 text-2xl md:text-3xl">
            Other Northern KZN towns
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {otherTowns.map((t) => (
            <Link
              key={t.slug}
              to={`/areas/${t.slug}`}
              className="text-sm px-4 py-2 rounded-full border border-border/70 hover:bg-foreground hover:text-background transition"
            >
              {t.name}
            </Link>
          ))}
          <Link
            to="/areas"
            className="text-sm px-4 py-2 rounded-full bg-foreground text-background"
          >
            All areas →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide pb-24 pt-8">
        <Reveal>
          <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/60">
                {loc.name} - let's go
              </p>
              <h2 className="display mt-3 text-3xl md:text-5xl max-w-2xl">
                Ready to be the{" "}
                <span className="serif text-accent">first result</span> in {loc.name}?
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium"
            >
              Start a project
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default LocationPage;
