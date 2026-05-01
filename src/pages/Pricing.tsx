import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { SITE } from "@/lib/site";

const Pricing = () => (
  <>
    <section className="container-wide pt-16 pb-12 md:pt-24 text-center">
      <p className="eyebrow justify-center">Pricing</p>
      <h1 className="display mt-4 text-5xl md:text-7xl">
        Honest pricing. <span className="serif text-accent">Real value.</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
        Three simple packages designed for South African businesses. No hidden fees — every quote includes design, build, and launch.
      </p>
    </section>

    <section className="container-wide pb-24 md:pb-32 grid gap-6 md:grid-cols-3">
      {SITE.pricing.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-3xl p-8 md:p-10 border ${tier.popular ? "bg-foreground text-background border-foreground" : "bg-card border-border/70"}`}
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
      ))}
    </section>

    <section className="container-tight pb-24">
      <div className="rounded-[2rem] bg-card border border-border/70 p-10 md:p-14 text-center">
        <h2 className="display text-3xl md:text-4xl">Need something custom?</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Web apps, SaaS, e-commerce — get a tailored quote within 24 hours.
        </p>
        <Link to="/contact" className="mt-6 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
          Request a quote
        </Link>
      </div>
    </section>
  </>
);

export default Pricing;
