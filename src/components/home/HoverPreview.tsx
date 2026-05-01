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
      <ul className="divide-y divide-border/60 border-y border-border/60">
        {items.map((p, i) => (
          <li key={p.slug}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onMouseMove={onMove}
              className="group grid grid-cols-12 items-center gap-4 py-7 md:py-10 px-1 transition-colors"
            >
              <span className="col-span-2 md:col-span-1 text-xs text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-7 md:col-span-7 display text-2xl md:text-5xl leading-none transition-transform duration-500 group-hover:translate-x-3 group-hover:text-accent">
                {p.title}
              </h3>
              <span className="hidden md:block col-span-3 text-sm text-muted-foreground">
                {p.category}
              </span>
              <ArrowUpRight className="col-span-3 md:col-span-1 ml-auto h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
            </a>
          </li>
        ))}
      </ul>

      {/* floating preview */}
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
