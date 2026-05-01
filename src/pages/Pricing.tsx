import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

const alwaysIncluded = [
  "Two rounds of revisions per stage",
  "All source files & design assets",
  "Plain-English handoff documentation",
  "14 days of post-launch support",
  "Performance & SEO pass before launch",
];

const Pricing = () => (
  <>
    <section className="container-wide pt-16 pb-12 md:pt-24 text-center">
      <Reveal>
        <p className="eyebrow justify-center">Pricing</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl">
          Honest pricing. <span className="serif text-accent">Real value.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Three simple packages designed for South African businesses. No hidden fees — every quote includes design, build, and launch.
        </p>
      </Reveal>
    </section>

    <section className="container-wide pb-20 md:pb-28 grid gap-6 md:grid-cols-3">
      {SITE.pricing.map((tier, i) => (
        <Reveal key={tier.name} delay={i * 100}>
          <div
            className={`h-full rounded-3xl p-8 md:p-10 border transition-transform duration-500 hover:-translate-y-1 ${
              tier.popular ? "bg-foreground text-background border-foreground" : "bg-card border-border/70"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{tier.name}</h2>
              {tier.popular && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground">Popular</span>
              )}
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="display text-5xl md:text-6xl">{tier.from}</span>
              {tier.original && (
                <span className={`text-sm line-through ${tier.popular ? "text-background/50" : "text-muted-foreground"}`}>{tier.original}</span>
              )}
            </div>
            <p className={`mt-2 text-sm ${tier.popular ? "text-background/70" : "text-muted-foreground"}`}>Project starting price</p>
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
                tier.popular ? "bg-background text-foreground" : "bg-foreground text-background"
              } hover:opacity-90`}
            >
              Select package
            </Link>
          </div>
        </Reveal>
      ))}
    </section>

    {/* Always included */}
    <section className="container-wide pb-20">
      <Reveal>
        <div className="rounded-3xl border border-border/70 bg-card p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="eyebrow">Always included</p>
              <h2 className="display mt-3 text-2xl md:text-3xl">
                In every <span className="serif text-accent">package.</span>
              </h2>
            </div>
            <ul className="md:col-span-2 grid sm:grid-cols-2 gap-3">
              {alwaysIncluded.map((f, i) => (
                <Reveal key={f} delay={i * 60} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span>{f}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>

    <section className="container-tight pb-24">
      <Reveal>
        <div className="rounded-[2rem] bg-card border border-border/70 p-10 md:p-14 text-center">
          <h2 className="display text-3xl md:text-4xl">Need something custom?</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Web apps, SaaS, e-commerce — get a tailored quote within 24 hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/contact" className="inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
              Request a quote
            </Link>
            <Link to="/contact" className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted/60">
              Have a question? Ask us →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

export default Pricing;
