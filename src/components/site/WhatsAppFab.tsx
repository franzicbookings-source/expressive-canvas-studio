import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export const WhatsAppFab = () => (
  <a
    href={`https://wa.me/${SITE.whatsapp}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-3 pr-4 py-3 shadow-[var(--shadow-lift)] hover:scale-[1.03] transition"
  >
    <MessageCircle className="h-4 w-4" />
    <span className="text-sm font-medium">WhatsApp</span>
  </a>
);
