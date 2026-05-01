import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/site";

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-warm), var(--gradient-hero)" }}
        />
        <div className="container-wide pt-16 pb-24 md:pt-28 md:pb-36">
          <div className="eyebrow fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {SITE.location} · {SITE.tagline}
          </div>
          <h1 className="display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl fade-up">
            Next-Gen Design Agency for{" "}
            <span className="serif text-accent">Growing Brands.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground fade-up">
            {SITE.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 fade-up">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-foreground/30 transition"
            >
              WhatsApp direct
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/70 rounded-2xl overflow-hidden border border-border/70">
            {SITE.stats.map((s) => (
              <div key={s.label} className="bg-background p-6">
                <div className="text-3xl md:text-4xl display">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 bg-background/60 backdrop-blur-sm py-5 overflow-hidden">
          <div className="flex w-max marquee whitespace-nowrap">
            {[...SITE.marquee, ...SITE.marquee, ...SITE.marquee].map((t, i) => (
              <span key={i} className="px-6 text-sm text-muted-foreground inline-flex items-center gap-6">
                {t}
                <span className="h-1 w-1 rounded-full bg-accent/70" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-wide py-24 md:py-32">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">Our services</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            View all services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-px bg-border/70 rounded-3xl overflow-hidden border border-border/70 md:grid-cols-2">
          {SITE.services.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-10 group">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-muted-foreground">{s.n}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition" />
              </div>
              <h3 className="display mt-6 text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground max-w-md">{s.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="container-wide py-24 md:py-32 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">
            Featured projects <span className="serif text-muted-foreground">& creative works</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            We build digital products and brands that connect with modern audiences and drive measurable growth.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {SITE.projects.slice(0, 4).map((p) => (
            <a
              key={p.slug}
              href={p.href}
              target="_blank" rel="noreferrer"
              className="group block lift rounded-3xl overflow-hidden bg-card border border-border/70"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-700"
                />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                  <h3 className="display mt-2 text-xl">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition shrink-0" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
            See all cases <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section className="container-wide py-24 md:py-32 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="eyebrow">Transparent pricing</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">
            Ready to scale <span className="serif text-accent">your brand?</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SITE.pricing.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 border ${tier.popular ? "bg-foreground text-background border-foreground" : "bg-card border-border/70"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{tier.name}</h3>
                {tier.popular && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground">Popular</span>
                )}
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="display text-5xl">{tier.from}</span>
                {tier.original && (
                  <span className={`text-sm line-through ${tier.popular ? "text-background/50" : "text-muted-foreground"}`}>
                    {tier.original}
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm ${tier.popular ? "text-background/70" : "text-muted-foreground"}`}>
                Project starting price
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.popular ? "text-accent" : "text-foreground"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                  tier.popular
                    ? "bg-background text-foreground hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Select package
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
            View pricing in detail <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight py-24 md:py-32 border-t border-border/60">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow">FAQ</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Got questions? <span className="serif text-muted-foreground">We've got answers.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Everything you need to know about working with our studio and what to expect from the process.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 fill-accent text-accent" /> Rated 5★ by our clients
            </div>
          </div>
          <div className="md:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {SITE.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/70">
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="container-wide py-24 md:py-32 border-t border-border/60">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p className="eyebrow">Blog</p>
            <h2 className="display mt-4 text-4xl md:text-6xl max-w-2xl">
              Stories, strategies, <span className="serif text-muted-foreground">and digital thinking.</span>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            View all blogs <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SITE.posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group block lift rounded-3xl overflow-hidden bg-card border border-border/70"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-700" />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{p.category} · {p.date}</p>
                <h3 className="display mt-3 text-lg leading-snug">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-24 md:py-32">
        <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 h-80 w-80 rounded-full"
            style={{ background: "radial-gradient(closest-side, hsl(var(--accent) / 0.45), transparent)" }}
          />
          <h2 className="display text-4xl md:text-6xl max-w-3xl">
            Transform your <span className="serif text-accent">ideas</span> today.
          </h2>
          <p className="mt-6 max-w-xl text-background/70 text-lg">
            Tell us about your project. We'll come back with a clear plan, timeline, and price within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-medium hover:bg-background/10 transition"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
