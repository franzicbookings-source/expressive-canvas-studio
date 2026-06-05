import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { getCaseStudy, CASE_STUDIES } from "@/lib/caseStudies";

const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const c = slug ? getCaseStudy(slug) : undefined;
  if (!c) return <Navigate to="/work" replace />;

  const others = CASE_STUDIES.filter((x) => x.slug !== c.slug);
  const ctaMessage = `Hi Ntombii Tech, I'd like a project like the ${c.client} build.`;

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.client,
    headline: c.title,
    description: c.summary,
    inLanguage: "en-ZA",
    url: c.liveUrl,
    creator: {
      "@type": "Organization",
      name: "Ntombii Tech",
    },
    about: c.sector,
    locationCreated: { "@type": "Place", name: c.location },
    dateCreated: c.year,
  };

  return (
    <>
      <SEO
        title={c.seoTitle}
        description={c.seoDescription}
        path={`/work/${c.slug}`}
        keywords={c.keywords}
        image={c.image}
        schemas={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: c.client, url: `/work/${c.slug}` },
          ]),
          creativeWorkSchema,
        ]}
      />

      {/* Hero */}
      <section className="container-wide pt-16 pb-12 md:pt-24">
        <Reveal>
          <p className="eyebrow">{c.category}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-[1.05]">
            {c.title.split(" - ")[0]} -{" "}
            <span className="serif text-accent">
              {c.title.split(" - ")[1] || ""}
            </span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {c.summary}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
            >
              View live site
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={waLink(ctaMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium hover:border-foreground/40 transition"
            >
              <MessageCircle className="h-4 w-4" /> Start a similar project
            </a>
          </div>
        </Reveal>
      </section>

      {/* Hero image */}
      <section className="container-wide pb-12">
        <Reveal>
          <div className="rounded-3xl overflow-hidden bg-card border border-border/70">
            <img
              src={c.image}
              alt={`${c.client} website`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      {/* Meta strip */}
      <section className="container-wide pb-12 md:pb-16">
        <div className="grid gap-6 md:grid-cols-4 rounded-3xl border border-border/70 bg-card p-7 md:p-9">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Client</p>
            <p className="mt-2 display text-base">{c.client}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Sector</p>
            <p className="mt-2 display text-base">{c.sector}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Location</p>
            <p className="mt-2 display text-base">{c.location}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Year</p>
            <p className="mt-2 display text-base">{c.year}</p>
          </div>
        </div>
      </section>

      {/* Challenge / Approach / Outcome */}
      <section className="container-wide py-12 md:py-16 border-t border-border/60 grid gap-10 md:grid-cols-3">
        <Reveal>
          <p className="eyebrow">Challenge</p>
          <p className="mt-5 text-foreground/85 leading-relaxed">{c.challenge}</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">Approach</p>
          <p className="mt-5 text-foreground/85 leading-relaxed">{c.approach}</p>
        </Reveal>
        <Reveal delay={200}>
          <p className="eyebrow">Outcome</p>
          <p className="mt-5 text-foreground/85 leading-relaxed">{c.outcome}</p>
        </Reveal>
      </section>

      {/* Scope + results */}
      <section className="container-wide py-12 md:py-16 border-t border-border/60 grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Scope</p>
          <ul className="mt-6 grid gap-3">
            {c.scope.map((s) => (
              <li key={s} className="flex items-start gap-3 text-foreground/85">
                <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">Results</p>
          <ul className="mt-6 grid gap-3">
            {c.results.map((r) => (
              <li key={r} className="flex items-start gap-3 text-foreground/85">
                <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Related services */}
      {c.related.length > 0 && (
        <section className="container-wide py-12 md:py-16 border-t border-border/60">
          <p className="eyebrow mb-6">Services delivered</p>
          <div className="grid gap-5 md:grid-cols-2">
            {c.related.map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="group flex items-center justify-between rounded-3xl bg-card border border-border/70 p-7 hover:border-foreground/40 transition"
              >
                <span className="display text-xl md:text-2xl">{r.label}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other case studies */}
      <section className="container-wide py-12 md:py-16 border-t border-border/60">
        <p className="eyebrow mb-6">More work</p>
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to={`/work/${o.slug}`}
              className="group block rounded-3xl overflow-hidden bg-card border border-border/70 lift"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={o.image} alt={o.client} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-700" />
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{o.category}</p>
                <h3 className="display mt-2 text-lg">{o.client}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-16 md:py-24">
        <div
          className="rounded-[2rem] text-background p-8 md:p-14"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-background/60">Start your project</p>
          <h2 className="display mt-4 text-3xl md:text-5xl leading-[1.05] max-w-3xl text-background">
            Want a build like{" "}
            <span className="serif text-accent">{c.client}?</span>
          </h2>
          <p className="mt-5 max-w-2xl text-background/70">
            Tell us what you're trying to launch. We'll come back within a day with a plan and a quote.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink(ctaMessage)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition"
            >
              Start on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 text-background px-7 py-4 text-sm font-medium hover:bg-background/10 transition"
            >
              Send a brief
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
