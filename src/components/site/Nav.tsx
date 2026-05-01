import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="text-base">Ntombii</span>
          <span className="text-accent">.</span>
          <span className="text-base text-muted-foreground">tech</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm rounded-full transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:opacity-90 transition"
          >
            Let's talk
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="container-wide py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-base text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Let's talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 mt-24 bg-background">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="font-semibold tracking-tight">
            Ntombii<span className="text-accent">.</span>tech
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A Newcastle-born digital product studio building mobile-first websites and brands for KZN and beyond.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank" rel="noreferrer"
            className="mt-4 inline-flex items-center text-sm text-foreground hover:text-accent transition"
          >
            {SITE.whatsappDisplay} →
          </a>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-4">Studio</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/work">Work</Link></li>
            <li><Link className="hover:text-foreground" to="/services">Services</Link></li>
            <li><Link className="hover:text-foreground" to="/pricing">Pricing</Link></li>
            <li><Link className="hover:text-foreground" to="/about">About</Link></li>
            <li><Link className="hover:text-foreground" to="/blog">Blog</Link></li>
            <li><Link className="hover:text-foreground" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href={SITE.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a className="hover:text-foreground" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-foreground" href={SITE.socials.twitter} target="_blank" rel="noreferrer">X / Twitter</a></li>
            <li><a className="hover:text-foreground" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ntombii Tech. Newcastle, KZN.</p>
          <p>Designed & built in-house.</p>
        </div>
      </div>
    </footer>
  );
};
