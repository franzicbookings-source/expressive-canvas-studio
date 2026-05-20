import { ReactNode, useRef, MouseEvent, ElementType } from "react";
import { cn } from "@/lib/utils";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  strength?: number;
} & Record<string, any>;

export const MagneticButton = ({
  as: Comp = "button",
  children,
  className,
  strength = 0.35,
  ...rest
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <Comp
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-flex transition-transform duration-300 ease-out will-change-transform", className)}
      {...rest}
    >
      {children}
    </Comp>
  );
};
