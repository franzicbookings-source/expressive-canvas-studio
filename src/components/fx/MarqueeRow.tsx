import { Fragment } from "react";
import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
  reverse?: boolean;
};

export const MarqueeRow = ({ items, className, reverse }: Props) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex w-max items-center marquee-xl"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {items.map((w, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-8 md:gap-12 px-6 md:px-10"
              >
                <span className="display-heavy text-[clamp(3rem,9vw,8rem)] leading-none whitespace-nowrap">
                  {w}
                </span>
                <span
                  aria-hidden
                  className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-accent shrink-0"
                />
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
