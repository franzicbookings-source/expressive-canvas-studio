import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";

const About = () => (
  <>
    <section className="container-wide pt-16 pb-16 md:pt-24">
      <p className="eyebrow">About the studio</p>
      <h1 className="display mt-4 text-5xl md:text-7xl max-w-5xl">
        Built in Newcastle. <span className="serif text-accent">For ambitious brands everywhere.</span>
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
        Ntombii Tech is a small, focused digital product studio based in Newcastle, KZN. We design and build mobile-first websites and brand systems for businesses who want to show up online with the same care they show in person.
      </p>
    </section>

    <section className="container-wide pb-20 grid gap-px bg-border/70 rounded-3xl overflow-hidden border border-border/70 md:grid-cols-4">
      {SITE.stats.map((s) => (
        <div key={s.label} className="bg-background p-8">
          <div className="display text-4xl">{s.value}</div>
          <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </section>

    <section className="container-tight py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="display text-3xl md:text-4xl">Our approach</h2>
        <p className="mt-4 text-muted-foreground">
          We work in tight sprints, communicate primarily on WhatsApp, and use AI in our workflow to ship faster without losing craft. You get a clear plan, real checkpoints, and zero waiting around.
        </p>
      </div>
      <div>
        <h2 className="display text-3xl md:text-4xl">What we believe</h2>
        <p className="mt-4 text-muted-foreground">
          Northern KZN businesses deserve world-class digital presence. Local doesn't mean lo-fi. We build sites that compete with anything coming out of Johannesburg or Cape Town — and load just as fast.
        </p>
      </div>
    </section>

    <section className="container-wide pb-24">
      <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 text-center">
        <h2 className="display text-3xl md:text-5xl">Let's build something together.</h2>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium">
          Start a project
        </Link>
      </div>
    </section>
  </>
);

export default About;
