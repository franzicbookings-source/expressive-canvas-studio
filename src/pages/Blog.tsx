import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema } from "@/lib/seo";

const Blog = () => (
  <>
    <SEO
      title="Journal — Northern KZN Digital Strategy & Web Design"
      description="Honest writing for South African business owners trying to win online. Local SEO, web design, and digital strategy for Newcastle, Vryheid, Ladysmith and Northern KZN."
      path="/blog"
      keywords="Northern KZN digital, Newcastle SEO, KZN web design blog, local SEO South Africa, small business website blog"
      schemas={[
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Journal", url: "/blog" },
        ]),
      ]}
    />
    <section className="container-wide pt-16 pb-12 md:pt-24">
      <Reveal>
        <p className="eyebrow">Journal</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-4xl">
          Stories, strategies, <span className="serif text-accent">digital thinking.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Honest writing for South African business owners trying to win online — especially across northern KZN. No fluff, no jargon, just what's working right now.
        </p>
      </Reveal>
    </section>

    <section className="container-wide pb-24 md:pb-32 grid gap-8 md:grid-cols-3">
      {SITE.posts.map((p, i) => (
        <Reveal key={p.slug} delay={i * 100}>
          <Link
            to={`/blog/${p.slug}`}
            className="group block lift rounded-3xl overflow-hidden bg-card border border-border/70 h-full"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-700" />
            </div>
            <div className="p-6">
              <p className="text-xs text-muted-foreground">{p.category} · {p.date}</p>
              <h2 className="display mt-3 text-xl leading-snug">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </section>
  </>
);

export default Blog;
