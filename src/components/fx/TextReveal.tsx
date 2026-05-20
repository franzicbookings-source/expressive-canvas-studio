import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Word-by-word rise reveal. Animates on mount (above-the-fold) or on first
 * intersection (below-the-fold). Respects prefers-reduced-motion.
 */
export const TextReveal = ({
  children,
  className,
  delay = 0,
  stagger = 60,
  as: Tag = "span",
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShow(true); return; }

    // Above the fold? animate immediately.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setShow(true);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setShow(true); io.disconnect(); }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp: any = Tag;
  const words = children.split(/(\s+)/); // keep whitespace

  return (
    <Comp ref={ref as any} className={cn("word-rise", className)} aria-label={children}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        return (
          <span key={i}>
            <span
              style={{
                animationDelay: show ? `${delay + i * stagger}ms` : "9999s",
              }}
            >
              {w}
            </span>
          </span>
        );
      })}
    </Comp>
  );
};
