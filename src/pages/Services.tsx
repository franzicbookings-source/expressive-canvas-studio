import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

const process = [
  { n: "01", t: "Discover", d: "A short call, a tighter brief. We surface the real goal before any pixel moves." },
  { n: "02", t: "Design", d: "Wireframes, then visuals. You approve at each gate — no surprises at handoff." },
  { n: "03", t: "Build", d: "Production code, tuned for speed and SEO from day one. WhatsApp-fast feedback." },
  { n: "04", t: "Hand-off", d: "Launch, train, document. You leave with a site you can run without us." },
];

const Services = () => (
  <>
    <section className="container-wide pt-16 pb-12 md:pt-24">
      <Reveal>
        <p className="eyebrow">Services</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-4xl">
          Design, build, <span className="serif text-accent">and launch.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A focused set of services covering everything from first sketch to live site. Each engagement is run as a tight sprint with WhatsApp checkpoints, so nothing stalls.
        </p>
      </Reveal>
    </section>

    <section className="container-wide pb-24 md:pb-32 grid gap-px bg-border/70 rounded-3xl overflow-hidden border border-border/70 md:grid-cols-2">
      {SITE.services.map((s, i) => (
        <Reveal key={s.n} delay={i * 90} className="bg-background p-8 md:p-12">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-muted-foreground">{s.n}</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <h2 className="display mt-6 text-3xl md:text-4xl">{s.title}</h2>
          <p className="mt-4 text-muted-foreground">{s.summary}</p>
          <ul className="mt-6 space-y-2.5">
            {s.includes.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </section>

    {/* How we work */}
    <section className="container-wide pb-24">
      <Reveal>
        <p className="eyebrow">How we work</p>
        <h2 className="display mt-4 text-4xl md:text-5xl max-w-3xl">
          Four steps. <span className="serif text-accent">No theatre.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {process.map((p, i) => (
          <Reveal key={p.n} delay={i * 90} className="rounded-3xl bg-card border border-border/70 p-7">
            <div className="text-xs text-muted-foreground">{p.n}</div>
            <h3 className="display mt-5 text-2xl">{p.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container-wide pb-24">
      <Reveal>
        <div className="rounded-[2rem] bg-card border border-border/70 p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-5xl">Got something specific in mind?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We also take on web apps, e-commerce builds, and custom UI work — quoted after a short call.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
            Start a conversation
          </Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default Services;
