import { motion } from "framer-motion";
import { ReactNode } from "react";

/** Splits children string into words that stagger-rise. Wraps inline. */
export const SplitTextReveal = ({
  text,
  className,
  delay = 0,
  as = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "h1" | "h2";
}) => {
  const words = text.split(" ");
  const Tag = motion[as] as typeof motion.span;
  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.045, delayChildren: delay } },
        hidden: {},
      }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline" aria-hidden>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
