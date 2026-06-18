import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export const WhatsAppFab = () => (
  <a
    href={`https://wa.me/${SITE.whatsapp}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-3 right-3 md:bottom-5 md:right-5 z-40 inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-foreground text-background pl-2.5 pr-3 py-2 md:pl-3 md:pr-4 md:py-3 shadow-[var(--shadow-lift)] hover:scale-[1.03] transition"
  >
    <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
    <span className="text-xs md:text-sm font-medium">WhatsApp</span>
  </a>
);
