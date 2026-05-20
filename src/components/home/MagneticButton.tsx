import { useRef, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "button" | "a" | "div";
  href?: string;
  to?: string;
  onClick?: () => void;
  strength?: number;
}

/** Magnetic hover wrapper — children shift toward the cursor on hover. */
export const Magnetic = ({ children, className, strength = 18 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate3d(${(x / r.width) * strength}px, ${(y / r.height) * strength}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-block transition-transform duration-300 will-change-transform", className)}
    >
      {children}
    </span>
  );
};
