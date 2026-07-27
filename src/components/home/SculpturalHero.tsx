import { motion, useReducedMotion } from "framer-motion";

/**
 * SculpturalHero — layered CSS/SVG sculptural centerpiece.
 * Worth Agency energy: a single hero object that breathes and rotates.
 * No Three.js — pure CSS transforms + SVG for a small bundle.
 */
export const SculpturalHero = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  const spin = reduce ? {} : { rotate: [0, 360] };
  const spinRev = reduce ? {} : { rotate: [0, -360] };
  const breathe = reduce ? {} : { scale: [1, 1.04, 1] };

  return (
    <div
      className={`relative aspect-square w-full max-w-[520px] mx-auto ${className}`}
      aria-hidden
    >
      {/* Electric blue disc — slow rotation */}
      <motion.div
        className="absolute inset-[6%] rounded-full"
        style={{
          background:
            "conic-gradient(from 210deg at 50% 50%, hsl(233 100% 62%) 0%, hsl(233 100% 74%) 35%, hsl(233 100% 55%) 65%, hsl(233 100% 62%) 100%)",
          filter: "blur(0.5px)",
        }}
        animate={spin}
        transition={{ duration: 42, ease: "linear", repeat: Infinity }}
      />

      {/* Orange offset ring — counter-punch */}
      <motion.div
        className="absolute inset-[16%] rounded-full border-[10px] md:border-[14px]"
        style={{ borderColor: "hsl(24 100% 50%)" }}
        animate={reduce ? {} : { x: [0, 14, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Bone core with cut wedge */}
      <motion.div
        className="absolute inset-[24%] rounded-full overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, hsl(42 24% 96%) 0%, hsl(42 18% 84%) 100%)",
          boxShadow:
            "inset 0 1px 0 hsl(0 0% 100% / 0.7), 0 24px 60px -20px hsl(0 0% 4% / 0.35)",
        }}
        animate={breathe}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        {/* Sliced wedge */}
        <div
          className="absolute inset-0"
          style={{
            background: "hsl(0 0% 4%)",
            clipPath: "polygon(50% 50%, 100% 0%, 100% 40%)",
          }}
        />
      </motion.div>

      {/* Ink annulus outline */}
      <motion.div
        className="absolute inset-[4%] rounded-full border border-foreground/70"
        animate={spinRev}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      >
        <span
          className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full"
          style={{ background: "hsl(24 100% 50%)" }}
        />
        <span
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full"
          style={{ background: "hsl(233 100% 62%)" }}
        />
      </motion.div>

      {/* Registration mark */}
      <div className="absolute inset-x-0 -bottom-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.28em] text-foreground/50">
        <span className="h-px w-6 bg-foreground/30" />
        Newcastle · KZN
        <span className="h-px w-6 bg-foreground/30" />
      </div>
    </div>
  );
};

export default SculpturalHero;
