import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";

const BlogPost = () => {
  const { slug } = useParams();
  const post = SITE.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="container-tight py-32 text-center">
        <h1 className="display text-4xl">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-flex text-sm text-muted-foreground hover:text-foreground">← Back to blog</Link>
      </section>
    );
  }

  return (
    <article>
      <header className="container-tight pt-16 pb-10 md:pt-24">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>
        <p className="eyebrow mt-8">{post.category} · {post.date}</p>
        <h1 className="display mt-4 text-4xl md:text-6xl max-w-4xl">{post.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{post.excerpt}</p>
      </header>

      <div className="container-tight">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-muted">
          <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="container-tight py-16 max-w-3xl">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-p:text-foreground/85 prose-p:leading-relaxed">
          {post.body.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-foreground/85 mb-6">{para}</p>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-card border border-border/70 p-8 md:p-10">
          <h3 className="display text-2xl">Want this for your business?</h3>
          <p className="mt-2 text-muted-foreground">Tell us about your project — we'll come back with a clear plan within 24 hours.</p>
          <Link to="/contact" className="mt-5 inline-flex rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium">
            Start a project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
