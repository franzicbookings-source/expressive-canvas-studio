import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";

const Services = () => (
  <>
    <section className="container-wide pt-16 pb-12 md:pt-24">
      <p className="eyebrow">Services</p>
      <h1 className="display mt-4 text-5xl md:text-7xl max-w-4xl">
        Design, build, <span className="serif text-accent">and launch.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A focused set of services covering everything from first sketch to live site. Each engagement is run as a tight sprint with WhatsApp checkpoints, so nothing stalls.
      </p>
    </section>

    <section className="container-wide pb-24 md:pb-32 grid gap-px bg-border/70 rounded-3xl overflow-hidden border border-border/70 md:grid-cols-2">
      {SITE.services.map((s) => (
        <div key={s.n} className="bg-background p-8 md:p-12">
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
        </div>
      ))}
    </section>

    <section className="container-wide pb-24">
      <div className="rounded-[2rem] bg-card border border-border/70 p-10 md:p-16 text-center">
        <h2 className="display text-3xl md:text-5xl">Got something specific in mind?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          We also take on web apps, e-commerce builds, and custom UI work — quoted after a short call.
        </p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
          Start a conversation
        </Link>
      </div>
    </section>
  </>
);

export default Services;
