import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { SEO } from "@/components/seo/SEO";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

const BlogPost = () => {
  const { slug } = useParams();
  const post = SITE.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="container-tight py-32 text-center">
        <h1 className="display text-4xl">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-flex text-sm text-muted-foreground hover:text-foreground">← Back to journal</Link>
      </section>
    );
  }

  const others = SITE.posts.filter((p) => p.slug !== slug);

  return (
    <article>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        image={post.cover}
        keywords={`${post.category}, Northern KZN, Newcastle, web design, ${post.title}`}
        schemas={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Journal", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <header className="container-tight pt-16 pb-10 md:pt-24">
        <Reveal>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow mt-8">{post.category} · {post.date}</p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="display mt-4 text-4xl md:text-6xl max-w-4xl">{post.title}</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{post.excerpt}</p>
        </Reveal>
      </header>

      <div className="container-tight">
        <Reveal>
          <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-muted">
            <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>

      <div className="container-tight py-16 max-w-3xl">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-p:text-foreground/85 prose-p:leading-relaxed">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-lg leading-relaxed text-foreground/85 mb-6">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-3xl bg-card border border-border/70 p-8 md:p-10">
            <h3 className="display text-2xl">Want this for your business?</h3>
            <p className="mt-2 text-muted-foreground">Tell us about your project - we'll come back with a clear plan within 24 hours.</p>
            <Link to="/contact" className="mt-5 inline-flex rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium">
              Start a project
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Continue reading */}
      {others.length > 0 && (
        <section className="container-wide pb-24 md:pb-32 border-t border-border/60 pt-16">
          <Reveal>
            <p className="eyebrow">Continue reading</p>
            <h2 className="display mt-4 text-3xl md:text-4xl max-w-2xl">
              More from <span className="serif text-accent">the journal.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to={`/blog/${p.slug}`} className="group block lift rounded-3xl overflow-hidden bg-card border border-border/70 h-full">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-700" />
                  </div>
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">{p.category} · {p.date}</p>
                      <h3 className="display mt-2 text-xl leading-snug">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition shrink-0" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default BlogPost;
