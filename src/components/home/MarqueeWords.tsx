const WORDS = [
  "DESIGN",
  "DEVELOPMENT",
  "BRANDING",
  "WEBSITES",
  "AUTOMATION",
  "DIGITAL SYSTEMS",
  "CREATIVE TECH",
  "ONLINE GROWTH",
  "BUSINESS TOOLS",
];

const Track = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="overflow-hidden border-y border-border/60 py-6 md:py-8">
    <div className={`flex w-max items-center ${reverse ? "marquee-big-reverse" : "marquee-big"}`}>
      {[0, 1].map((rep) => (
        <ul
          key={rep}
          aria-hidden={rep === 1}
          className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16"
        >
          {WORDS.map((w) => (
            <li
              key={`${rep}-${w}`}
              className="display flex items-center gap-10 md:gap-16 text-[14vw] md:text-[8vw] lg:text-[6.5vw] leading-none tracking-[-0.04em] whitespace-nowrap text-foreground/90"
            >
              {w}
              <span
                aria-hidden
                className="inline-block h-3 w-3 md:h-4 md:w-4 rounded-full bg-accent shrink-0 dot-pulse"
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export const MarqueeWords = () => (
  <section aria-label="What we do" className="bg-background">
    <Track />
  </section>
);
