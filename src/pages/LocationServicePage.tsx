import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";
import {
  getLocationService,
  getTown,
  LOCATION_SERVICES,
} from "@/lib/locationServices";

const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const SectionLabel = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
    <span className="text-accent font-medium">({n})</span>
    <span>— {label}</span>
  </div>
);

type Props = { serviceKey: string };

const LocationServicePage = ({ serviceKey }: Props) => {
  const { town: townSlug } = useParams<{ town: string }>();
  const svc = getLocationService(serviceKey);
  const town = townSlug ? getTown(townSlug) : undefined;
  if (!svc || !town) return <Navigate to="/areas" replace />;

  const path = `/${svc.key}-${town.slug}`;
  const related = LOCATION_SERVICES.filter((s) => s.key !== svc.key)
    .slice(0, 3)
    .map((s) => ({
      label: `${s.navLabel} in ${town.name}`,
      href: `/${s.key}-${town.slug}`,
    }));

  return (
    <>
      <SEO
        title={svc.seoTitle(town.name)}
        description={svc.seoDescription(town.name)}
        path={path}
        keywords={svc.keywords(town.name)}
        schemas={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Areas", url: "/areas" },
            { name: `${svc.navLabel} ${town.name}`, url: path },
          ]),
          serviceSchema({
            title: `${svc.navLabel} — ${town.name}`,
            summary: svc.seoDescription(town.name),
          }),
        ]}
      />

      <section className="container-wide pt-16 pb-12 md:pt-24 md:pb-16">
        <Reveal>
          <p className="eyebrow">{svc.eyebrow} · {town.name}, KZN</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.05]">
            {svc.heroTitle(town.name)}{" "}
            <span className="serif text-accent">{svc.heroItalic}</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {svc.heroBody(town.name)}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink(svc.heroCtaMessage(town.name))}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[0_12px_32px_-12px_hsl(14_95%_55%/0.8)]"
            >
              {svc.heroCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to={svc.parentHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium hover:border-foreground/40 transition"
            >
              Full service overview
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="container-wide py-16 md:py-20 border-t border-border/60">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 md:col-span-7">
            <SectionLabel n="01" label={svc.s1Label} />
            <h2 className="display mt-5 text-3xl md:text-5xl leading-[1.05]">
              {svc.s1Heading(town.name)}
            </h2>
          </div>
          {svc.s1Body && (
            <div className="col-span-12 md:col-span-5">
              <p className="text-muted-foreground">{svc.s1Body(town.name)}</p>
            </div>
          )}
        </div>

        <div className="grid gap-px bg-border/70 rounded-3xl overflow-hidden border border-border/70 md:grid-cols-2 lg:grid-cols-3">
          {svc.s1Cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 60}
              className="bg-background p-7 md:p-8 flex flex-col"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="display mt-6 text-xl md:text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-wide py-16 md:py-20 border-t border-border/60">
        <Reveal>
          <SectionLabel n="02" label={svc.s2Label} />
          <h2 className="display mt-5 text-3xl md:text-5xl leading-[1.05] max-w-4xl">
            {svc.s2Heading(town.name)}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            {svc.s2Body(town.name, town.nearby)}
          </p>
        </Reveal>

        {svc.s2Cards && svc.s2Cards.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {svc.s2Cards.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="rounded-3xl bg-card border border-border/70 p-7"
              >
                <div className="text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="display mt-5 text-xl md:text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="container-wide py-16 md:py-24">
        <div
          className="rounded-[2rem] text-background p-8 md:p-14 relative overflow-hidden"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <SectionLabel n="03" label={svc.s3Label} />
          <h2 className="display mt-5 text-3xl md:text-5xl leading-[1.05] max-w-3xl text-background">
            {svc.s3Heading}
          </h2>
          {svc.s3Body && (
            <p className="mt-5 max-w-2xl text-background/70">
              {svc.s3Body(town.name)}
            </p>
          )}
          <a
            href={waLink(svc.ctaMessage(town.name))}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition"
          >
            {svc.ctaButton}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      <section className="container-wide pb-24">
        <p className="eyebrow mb-6">More services in {town.name}</p>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.href}
              to={r.href}
              className="group flex items-center justify-between rounded-3xl bg-card border border-border/70 p-7 hover:border-foreground/40 transition"
            >
              <span className="display text-lg md:text-xl">{r.label}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default LocationServicePage;
