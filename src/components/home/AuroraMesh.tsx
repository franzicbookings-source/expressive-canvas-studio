/** Animated aurora / gradient mesh backdrop. Purely decorative. */
export const AuroraMesh = () => (
  <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <div className="aurora aurora-1" />
    <div className="aurora aurora-2" />
    <div className="aurora aurora-3" />
    <div
      className="absolute inset-0 opacity-[0.09] mix-blend-multiply"
      style={{
        backgroundImage:
          "radial-gradient(hsl(var(--foreground) / 0.5) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
  </div>
);
