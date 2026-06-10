import { useEffect, useState } from "react";
import knawpLogo from "@/assets/clients/knawp.webp";
import sknowhiteLogo from "@/assets/clients/sknowhite.webp";
import auntywamaLogo from "@/assets/clients/auntywama.webp";
import nyateeLogo from "@/assets/clients/nyatee.webp";
import umzilikaziLogo from "@/assets/clients/umzilikazi.webp";

type Logo = { name: string; src: string };

const LOGOS: Logo[] = [
  { name: "Nyatee Foundation", src: nyateeLogo },
  { name: "Sknowhite Events", src: sknowhiteLogo },
  { name: "Aunty Wama 2K", src: auntywamaLogo },
  { name: "Keep Newcastle Alive With Possibilities", src: knawpLogo },
  { name: "Umzilikazi Senior Secondary School", src: umzilikaziLogo },
];

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export const LogoRotator = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => setIsMobile(mq.matches);
    const onRm = () => setReduced(rm.matches);
    onMq();
    onRm();
    mq.addEventListener("change", onMq);
    rm.addEventListener("change", onRm);
    return () => {
      mq.removeEventListener("change", onMq);
      rm.removeEventListener("change", onRm);
    };
  }, []);

  const groups = chunk(LOGOS, isMobile ? 2 : 3);

  useEffect(() => {
    if (reduced || groups.length <= 1) return;
    const tick = () => {
      setVisible(false);
      window.setTimeout(() => {
        setIdx((i) => (i + 1) % groups.length);
        setVisible(true);
      }, 400);
    };
    const id = window.setInterval(tick, 2600);
    return () => window.clearInterval(id);
  }, [reduced, groups.length]);

  if (reduced) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {LOGOS.map((l) => (
          <img
            key={l.name}
            src={l.src}
            alt={`${l.name} logo`}
            className="h-12 md:h-14 w-auto object-contain opacity-80"
            loading="lazy"
          />
        ))}
      </div>
    );
  }

  const current = groups[idx] ?? [];

  return (
    <div className="min-h-[88px] md:min-h-[112px] flex items-center justify-center">
      <div
        className="flex items-center justify-center gap-10 md:gap-20 transition-opacity duration-[400ms] ease-out"
        style={{ opacity: visible ? 1 : 0 }}
        aria-live="polite"
      >
        {current.map((l) => (
          <img
            key={l.name}
            src={l.src}
            alt={`${l.name} logo`}
            className="h-12 md:h-16 w-auto object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
