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

export type Logo = { name: string; src: string };

const DEFAULT_LOGOS: Logo[] = [
  { name: "Nyatee Foundation", src: nyateeLogo },
  { name: "Sknowhite Events", src: sknowhiteLogo },
  { name: "Keep Newcastle Alive With Possibilities", src: knawpLogo },
  { name: "Umzilikazi Senior Secondary School", src: umzilikaziLogo },
  { name: "Aunty Wama 2K", src: auntywamaLogo },
  { name: "Snesenzo Security Group", src: snesenzoAsset.url },
  { name: "Ntombii Tech", src: ntombiiAsset.url },
  { name: "Amajuba Top Women Awards", src: amajubaAsset.url },
];

type Props = {
  logos?: Logo[];
  intervalMs?: number;
};

export const LogoRotator = ({ logos = DEFAULT_LOGOS, intervalMs = 2400 }: Props) => {
  const [reduced, setReduced] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onRm = () => setReduced(rm.matches);
    onRm();
    rm.addEventListener("change", onRm);
    return () => rm.removeEventListener("change", onRm);
  }, []);

  useEffect(() => {
    if (reduced || logos.length <= 1) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % logos.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reduced, logos.length, intervalMs]);

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

  const current = logos[idx];

  return (
    <div
      className="relative mx-auto flex items-center justify-center overflow-hidden h-24 md:h-32 w-full max-w-[280px] md:max-w-[360px]"
      aria-live="polite"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={current.name}
          src={current.src}
          alt={`${current.name} logo`}
          loading="lazy"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute max-h-full max-w-full w-auto h-auto object-contain"
        />
      </AnimatePresence>
    </div>
  );
};
