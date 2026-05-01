import { useRef, useState, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type Item = {
  slug: string;
  title: string;
  category: string;
  image: string;
  href: string;
};

export const HoverPreview = ({ items }: { items: Item[] }) => {
  const [hover, setHover] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div ref={wrapRef} className="relative">
      {/* Desktop hover hint */}
      <p className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-4">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent dot-pulse" aria-hidden />
        Hover any title to preview
      </p>

      {/* Mobile: full mockup, no crop, no overlay text */}
      <ul className="md:hidden grid gap-8">
        {items.map((p, i) => (
          <li key={p.slug} id={p.slug}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="rounded-2xl overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-auto object-contain transition-transform duration-700 group-active:scale-[1.01]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground tabular-nums mb-1">
                    ({String(i + 1).padStart(2, "0")}) — {p.category}
                  </p>
                  <h3 className="display text-2xl leading-tight">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop: hover list */}
      <ul className="hidden md:block divide-y divide-border/60 border-y border-border/60">
        {items.map((p, i) => (
          <li key={p.slug} id={`${p.slug}-d`}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onMouseMove={onMove}
              className="group grid grid-cols-12 items-center gap-4 py-10 px-1 transition-colors"
            >
              <span className="col-span-1 text-xs text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-7 flex flex-col">
                <h3 className="display text-5xl leading-none transition-transform duration-500 group-hover:translate-x-3 group-hover:text-accent">
                  {p.title}
                </h3>
              </div>
              <span className="col-span-3 text-sm text-muted-foreground">
                {p.category}
              </span>
              <ArrowUpRight className="col-span-1 ml-auto h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
            </a>
          </li>
        ))}
      </ul>

      {/* Floating preview (desktop only) */}
      <div
        className="pointer-events-none absolute hidden md:block transition-opacity duration-300 z-20"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: hover !== null ? 1 : 0,
        }}
      >
        {hover !== null && (
          <img
            src={items[hover].image}
            alt=""
            className="w-[340px] h-[220px] object-cover rounded-2xl shadow-2xl"
          />
        )}
      </div>
    </div>
  );
};
