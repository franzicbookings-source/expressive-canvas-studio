import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import knawpLogo from "@/assets/clients/knawp.webp";
import sknowhiteLogo from "@/assets/clients/sknowhite.webp";
import auntywamaLogo from "@/assets/clients/auntywama.webp";
import nyateeLogo from "@/assets/clients/nyatee.webp";
import umzilikaziLogo from "@/assets/clients/umzilikazi.webp";
import snesenzoAsset from "@/assets/clients/snesenzo.png.asset.json";
import ntombiiAsset from "@/assets/clients/ntombii.png.asset.json";
import amajubaAsset from "@/assets/clients/amajuba.png.asset.json";

export type Logo = { name: string; src: string; scale?: number };

const DEFAULT_LOGOS: Logo[] = [
  { name: "Nyatee Foundation", src: nyateeLogo },
  { name: "Sknowhite Events", src: sknowhiteLogo },
  { name: "Keep Newcastle Alive With Possibilities", src: knawpLogo },
  { name: "Umzilikazi Senior Secondary School", src: umzilikaziLogo },
  { name: "Aunty Wama 2K", src: auntywamaLogo, scale: 1.6 },
  { name: "Snesenzo Security Group", src: snesenzoAsset.url, scale: 1.5 },
  { name: "Ntombii Tech", src: ntombiiAsset.url, scale: 1.7 },
  { name: "Amajuba Top Women Awards", src: amajubaAsset.url, scale: 1.5 },
];

type Props = {
  logos?: Logo[];
  intervalMs?: number;
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export const LogoRotator = ({ logos = DEFAULT_LOGOS, intervalMs = 2400 }: Props) => {
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mq = window.matchMedia("(max-width: 767px)");
    const onRm = () => setReduced(rm.matches);
    const onMq = () => setIsMobile(mq.matches);
    onRm();
    onMq();
    rm.addEventListener("change", onRm);
    mq.addEventListener("change", onMq);
    return () => {
      rm.removeEventListener("change", onRm);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  const groupSize = isMobile ? 2 : 3;
  const groups = chunk(logos, groupSize);

  useEffect(() => {
    setIdx(0);
  }, [groupSize, logos.length]);

  useEffect(() => {
    if (reduced || groups.length <= 1) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % groups.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reduced, groups.length, intervalMs]);

  if (reduced) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {logos.map((l) => (
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
    <div
      className="relative mx-auto flex items-center justify-center overflow-hidden h-24 md:h-32 w-full"
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={idx}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-10 md:gap-20"
        >
          {current.map((l) => (
            <img
              key={l.name}
              src={l.src}
              alt={`${l.name} logo`}
              loading="lazy"
              style={l.scale ? { transform: `scale(${l.scale})` } : undefined}
              className="h-12 md:h-16 w-auto max-w-[140px] md:max-w-[180px] object-contain"
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
