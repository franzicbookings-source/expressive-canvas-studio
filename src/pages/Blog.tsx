import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";

const Blog = () => (
  <>
    <section className="container-wide pt-16 pb-12 md:pt-24">
      <p className="eyebrow">Blog</p>
      <h1 className="display mt-4 text-5xl md:text-7xl max-w-4xl">
        Stories, strategies, <span className="serif text-accent">digital thinking.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Honest writing for South African business owners trying to win online — especially across northern KZN.
      </p>
    </section>

    <section className="container-wide pb-24 md:pb-32 grid gap-8 md:grid-cols-3">
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
            <h2 className="display mt-3 text-xl leading-snug">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
          </div>
        </Link>
      ))}
    </section>
  </>
);

export default Blog;
