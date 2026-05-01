import knawpLogo from "@/assets/clients/knawp.webp";
import sknowhiteLogo from "@/assets/clients/sknowhite.png";
import auntywamaLogo from "@/assets/clients/auntywama.png";
import nyateeLogo from "@/assets/clients/nyatee.png";

const clientLogos = [
  { name: "Nyatee Foundation", src: nyateeLogo, h: "h-10 md:h-12" },
  { name: "Sknowhite Events", src: sknowhiteLogo, h: "h-12 md:h-14" },
  { name: "Aunty Wama 2K", src: auntywamaLogo, h: "h-12 md:h-14" },
  { name: "Keep Newcastle Alive With Possibilities", src: knawpLogo, h: "h-12 md:h-14" },
];

export const TrustedBy = () => {
  return (
    <section
      aria-label="Trusted by"
      className="border-b border-border/60 bg-background/60"
    >
      <div className="container-wide py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground shrink-0">
            Trusted by
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-6 md:gap-x-14 flex-1">
            {clientLogos.map((c) => (
              <img
                key={c.name}
                src={c.src}
                alt={`${c.name} logo`}
                loading="lazy"
                className={`${c.h} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
