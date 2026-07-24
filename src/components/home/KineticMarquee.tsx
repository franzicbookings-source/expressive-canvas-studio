interface Props {
  words: string[];
  className?: string;
  speed?: number; // seconds per loop
}

/** Full-width kinetic type band. Static-looking during reduced-motion. */
export const KineticMarquee = ({ words, className, speed = 40 }: Props) => {
  const line = [...words, ...words, ...words];
  return (
    <div className={`overflow-hidden py-8 md:py-10 ${className ?? ""}`}>
      <div
        className="flex w-max items-center gap-8 md:gap-14 marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8 md:gap-14" aria-hidden={dup === 1}>
            {line.map((w, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-8 md:gap-14">
                <span className="display text-[14vw] md:text-[9vw] leading-[0.9] whitespace-nowrap">
                  {w}
                </span>
                <span className="serif text-accent text-[10vw] md:text-[7vw] italic">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
