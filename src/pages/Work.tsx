import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

const Work = () => (
  <>
    <section className="container-wide pt-16 pb-12 md:pt-24">
      <p className="eyebrow">Selected work</p>
      <h1 className="display mt-4 text-5xl md:text-7xl max-w-4xl">
        Work we're <span className="serif text-accent">proud of.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A snapshot of recent builds across non-profit, hospitality, education, agency, and civic spaces. Tap any project to visit the live site.
      </p>
    </section>

    <section className="container-wide pb-24 md:pb-32 grid gap-8 md:grid-cols-2">
      {SITE.projects.map((p, i) => (
        <a
          key={p.slug}
          href={p.href}
          target="_blank" rel="noreferrer"
          className={`group block lift rounded-3xl overflow-hidden bg-card border border-border/70 ${
            i === 0 ? "md:col-span-2" : ""
          }`}
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
      ))}
    </section>
  </>
);

export default Work;
