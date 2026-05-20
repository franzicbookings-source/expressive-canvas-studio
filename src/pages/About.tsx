import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo";

const principles = [
  { n: "01", t: "Clarity over cleverness", d: "If a visitor can't act in 5 seconds, the design has failed." },
  { n: "02", t: "Ship, then refine", d: "We move in tight sprints. Real feedback beats perfect drafts." },
  { n: "03", t: "Respect the brief — then question it", d: "We push back where it earns you a better outcome." },
  { n: "04", t: "Pixels are promises", d: "Every detail signals how you'll treat the customer offline too." },
];

const currently = [
  { k: "Listening", v: "Long-form interviews on craft & focus" },
  { k: "Reading", v: "Atomic Habits — for the third time" },
  { k: "Building", v: "Internal AI tooling for faster handoffs" },
  { k: "Watching", v: "How African studios are reshaping web design" },
];

const About = () => (
  <>
    <SEO
      title="About — Newcastle Digital Studio | Ntombii Tech"
      description="Newcastle-born digital studio building mobile-first websites and brand systems for African companies — fast, focused and AI-assisted."
      path="/about"
      keywords="Ntombii Tech about, Newcastle web agency, KZN digital studio, African design agency"
      schemas={[
        localBusinessSchema(),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]),
      ]}
    />
    <section className="container-wide pt-16 pb-16 md:pt-24">
      <Reveal>
        <p className="eyebrow">About the studio</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-5xl">
          Built in Newcastle. <span className="serif text-accent">For ambitious brands everywhere.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Ntombii Tech is a small, focused digital product studio based in Newcastle, KZN. We design and build mobile-first websites and brand systems for businesses who want to show up online with the same care they show in person.
        </p>
      </Reveal>
    </section>

    <section className="container-wide pb-20 grid gap-px bg-border/70 rounded-3xl overflow-hidden border border-border/70 md:grid-cols-4">
      {SITE.stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 80} className="bg-background p-8">
          <div className="display text-4xl">{s.value}</div>
          <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
        </Reveal>
      ))}
    </section>

    <section className="container-tight py-20 grid md:grid-cols-2 gap-12">
      <Reveal>
        <h2 className="display text-3xl md:text-4xl">Our approach</h2>
        <p className="mt-4 text-muted-foreground">
          We work in tight sprints, communicate primarily on WhatsApp, and use AI in our workflow to ship faster without losing craft. You get a clear plan, real checkpoints, and zero waiting around.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="display text-3xl md:text-4xl">What we believe</h2>
        <p className="mt-4 text-muted-foreground">
          Northern KZN businesses deserve world-class digital presence. Local doesn't mean lo-fi. We build sites that compete with anything coming out of Johannesburg or Cape Town — and load just as fast.
        </p>
      </Reveal>
    </section>

    {/* Principles */}
    <section className="container-wide py-20 border-t border-border/60">
      <Reveal>
        <p className="eyebrow">Principles</p>
        <h2 className="display mt-4 text-4xl md:text-5xl max-w-3xl">
          Four ideas we <span className="serif text-accent">refuse to compromise.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 90} className="rounded-3xl bg-card border border-border/70 p-8">
            <div className="text-xs text-muted-foreground">{p.n}</div>
            <h3 className="display mt-4 text-2xl">{p.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Currently */}
    <section className="container-tight py-20">
      <div className="grid md:grid-cols-3 gap-10">
        <Reveal className="md:col-span-1">
          <p className="eyebrow">Currently</p>
          <h2 className="display mt-4 text-3xl md:text-4xl">
            Inputs <span className="serif text-accent">shape outputs.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            What we're absorbing this season — small windows into the studio.
          </p>
        </Reveal>
        <div className="md:col-span-2 divide-y divide-border/70 border-y border-border/70">
          {currently.map((c, i) => (
            <Reveal key={c.k} delay={i * 70} className="py-5 flex items-baseline justify-between gap-6">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.k}</span>
              <span className="text-right text-sm md:text-base">{c.v}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="container-wide pb-24">
      <Reveal>
        <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-5xl">Let's build something together.</h2>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium">
            Start a project
          </Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default About;
