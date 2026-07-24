import { SITE } from "@/lib/site";
import waAsset from "@/assets/whatsapp.png.asset.json";

export const WhatsAppFab = () => (
  <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 group">
    {/* Ping rings */}
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-[wa-ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite] motion-reduce:hidden group-hover:[animation-play-state:paused]"
    />
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-[wa-ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite] motion-reduce:hidden group-hover:[animation-play-state:paused]"
      style={{ animationDelay: "1.1s" }}
    />

    {/* Tooltip */}
    <span
      aria-hidden
      className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded-full bg-foreground text-background px-3 py-1.5 text-xs font-medium opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-[var(--shadow-lift)]"
    >
      Chat with us
    </span>

    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="relative inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-[var(--shadow-lift)] ring-1 ring-black/5 transition-transform duration-300 will-change-transform hover:scale-110 motion-safe:animate-[wa-breathe_2.2s_ease-in-out_infinite,wa-wiggle_5s_ease-in-out_infinite]"
    >
      <img
        src={waAsset.url}
        alt=""
        aria-hidden
        className="h-9 w-9 md:h-10 md:w-10 select-none pointer-events-none"
        draggable={false}
      />
    </a>
  </div>
);
