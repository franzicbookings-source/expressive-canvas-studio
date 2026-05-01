import knawpLogo from "@/assets/clients/knawp.webp";
import sknowhiteLogo from "@/assets/clients/sknowhite.png";
import auntywamaLogo from "@/assets/clients/auntywama.png";
import nyateeLogo from "@/assets/clients/nyatee.png";
import umzilikaziLogo from "@/assets/clients/umzilikazi.png";

const clientLogos = [
  { name: "Nyatee Foundation", src: nyateeLogo, h: "h-10 md:h-12" },
  { name: "Sknowhite Events", src: sknowhiteLogo, h: "h-12 md:h-14" },
  { name: "Aunty Wama 2K", src: auntywamaLogo, h: "h-12 md:h-14" },
  { name: "Keep Newcastle Alive With Possibilities", src: knawpLogo, h: "h-12 md:h-14" },
  { name: "Umzilikazi Senior Secondary School", src: umzilikaziLogo, h: "h-12 md:h-14" },
];

const LogoItem = ({ c }: { c: (typeof clientLogos)[number] }) => (
  <img
    src={c.src}
    alt={`${c.name} logo`}
    loading="lazy"
    className={`${c.h} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0`}
  />
);

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

          {/* Marquee viewport */}
          <div className="relative flex-1 overflow-hidden marquee-pause">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 z-10 bg-gradient-to-l from-background to-transparent" />

            <div className="marquee flex w-max items-center gap-12 md:gap-16">
              {clientLogos.map((c) => (
                <LogoItem key={c.name} c={c} />
              ))}
              {clientLogos.map((c) => (
                <div key={`dup-${c.name}`} aria-hidden="true">
                  <LogoItem c={c} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
