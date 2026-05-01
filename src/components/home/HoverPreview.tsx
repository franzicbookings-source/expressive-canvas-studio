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

      <ul className="divide-y divide-border/60 border-y border-border/60">
        {items.map((p, i) => (
          <li key={p.slug} id={p.slug}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onMouseMove={onMove}
              className="group grid grid-cols-12 items-center gap-3 md:gap-4 py-5 md:py-10 px-1 transition-colors"
            >
              <span className="col-span-2 md:col-span-1 text-xs text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Mobile thumbnail (inline) */}
              <div className="col-span-3 md:hidden aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="col-span-6 md:col-span-7 flex flex-col">
                <h3 className="display text-lg sm:text-xl md:text-5xl leading-tight md:leading-none transition-transform duration-500 md:group-hover:translate-x-3 md:group-hover:text-accent">
                  {p.title}
                </h3>
                <span className="md:hidden mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.category}
                </span>
              </div>

              <span className="hidden md:block col-span-3 text-sm text-muted-foreground">
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
