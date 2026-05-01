import { useEffect, useState } from "react";

export const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Johannesburg",
        hour12: false,
      });
      setTime(now);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hidden md:block border-b border-border/60 bg-background/80 backdrop-blur-md text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
      <div className="container-wide flex items-center justify-between h-9">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span>Booking Q3 · 2026 — 2 slots open</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Newcastle · KZN</span>
          <span>{time} SAST</span>
        </div>
      </div>
    </div>
  );
};
