import { useEffect, useRef, ReactNode } from "react";

/** Wraps a single child element and drifts it toward the cursor. Desktop-only, opt-out on reduced motion. */
export const MagneticButton = ({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !fine) return;
    const target = el.firstElementChild as HTMLElement | null;
    if (!target) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      target.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    const onLeave = () => {
      target.style.transform = "translate3d(0,0,0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    target.style.transition = "transform 400ms cubic-bezier(.2,.7,.2,1)";
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <div ref={wrapRef} className={className} style={{ display: "inline-flex" }}>
      {children}
    </div>
  );
};
