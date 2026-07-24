import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-[90] h-[2px] bg-accent origin-left"
      style={{ width: "100%", transform: `scaleX(${p})`, transition: "transform 120ms linear" }}
    />
  );
};
