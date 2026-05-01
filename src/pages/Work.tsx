import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

const Work = () => (
  <>
    <section className="container-wide pt-16 pb-12 md:pt-24">
      <Reveal>
        <p className="eyebrow">Selected work</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-4xl">
          Work we're <span className="serif text-accent">proud of.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A snapshot of recent builds across non-profit, hospitality, education, agency, and civic spaces. Each project shipped fast, loaded faster, and earned its keep. Tap any tile to visit the live site.
        </p>
      </Reveal>
    </section>

    <section className="container-wide pb-24 md:pb-32 grid gap-8 md:grid-cols-2">
      {SITE.projects.map((p, i) => (
        <Reveal
          key={p.slug}
          delay={i * 90}
          className={i === 0 ? "md:col-span-2" : ""}
        >
          <a
            href={p.href}
            target="_blank" rel="noreferrer"
            className="group block lift rounded-3xl overflow-hidden bg-card border border-border/70 h-full"
          >
            <div className={`overflow-hidden bg-muted ${i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-700" />
            </div>
            <div className="p-6 md:p-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-muted-foreground">{p.category}</p>
                <h2 className="display mt-2 text-2xl md:text-3xl">{p.title}</h2>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition shrink-0" />
            </div>
          </a>
        </Reveal>
      ))}
    </section>

    <section className="container-wide pb-24">
      <Reveal>
        <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-background/60">Next project</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">
              Have something <span className="serif text-accent">in mind?</span>
            </h2>
          </div>
          <Link to="/contact" className="inline-flex rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium">
            Start a project
          </Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default Work;
