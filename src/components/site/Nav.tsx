import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import { SERVICE_DETAILS } from "@/lib/serviceDetails";
import logoUrl from "@/assets/ntombii-tech-logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/agents", label: "Agents" },
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
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60 shadow-[0_1px_0_0_hsl(var(--border)/0.4)]"
          : "bg-background/40 backdrop-blur-md",
      )}
    >
      <div className="container-wide flex h-24 md:h-28 items-center justify-between gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0"
          aria-label="Ntombii Tech home"
        >
          <img
            src={logoUrl}
            alt="Ntombii Tech"
            className="h-12 md:h-14 w-auto select-none"
            draggable={false}
            width={224}
            height={56}
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        {/* Centered nav pill */}
        <nav
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-full border border-border/60 bg-background/70 backdrop-blur px-1.5 py-1.5 shadow-[0_1px_2px_hsl(220_14%_11%/0.04)]"
          aria-label="Primary"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "px-4 py-1.5 text-sm rounded-full transition-all duration-200",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* Services dropdown */}
          <div className="relative group">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                cn(
                  "inline-flex items-center gap-1 px-4 py-1.5 text-sm rounded-full transition-all duration-200",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )
              }
            >
              Services
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </NavLink>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
              <div className="min-w-[240px] rounded-2xl border border-border/70 bg-background/95 backdrop-blur-xl shadow-lg p-2">
                {SERVICE_DETAILS.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="block px-4 py-2.5 text-sm rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition"
                  >
                    {s.navLabel}
                  </Link>
                ))}
                <div className="border-t border-border/60 mt-1 pt-1">
                  <Link
                    to="/services"
                    className="block px-4 py-2.5 text-sm rounded-xl text-foreground hover:bg-muted transition font-medium"
                  >
                    All services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 -mr-2 rounded-full hover:bg-muted transition"
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
                className="px-2 py-3 text-base text-foreground border-b border-border/40 last:border-0"
              >
                {l.label}
              </Link>
            ))}

            {/* Services group */}
            <div className="pt-2 mt-1 border-t border-border/40">
              <p className="px-2 py-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Services
              </p>
              {SERVICE_DETAILS.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 text-sm text-foreground"
                >
                  {s.navLabel}
                </Link>
              ))}
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="block px-2 py-2.5 text-sm font-medium text-foreground"
              >
                All services →
              </Link>
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export const SiteFooter = () => {
  const onSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim();
    if (!email) return;
    const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
      `Hi Ntombii Tech - please add me to the studio newsletter: ${email}`,
    )}`;
    window.open(wa, "_blank", "noopener");
    form.reset();
  };

  return (
    <footer className="border-t border-border/60 mt-24 bg-background">
      {/* Newsletter band */}
      <div className="border-b border-border/60">
        <div className="container-wide py-12 md:py-16 grid gap-8 md:grid-cols-12 items-end">
          <div className="md:col-span-6">
            <p className="eyebrow">Studio dispatch</p>
            <h3 className="display mt-3 text-2xl md:text-3xl">
              One short email a month. <span className="serif text-accent">No spam, ever.</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Notes from the studio - what we shipped, what we learned, and the
              local KZN web stories worth your time.
            </p>
          </div>
          <form onSubmit={onSubscribe} className="md:col-span-6 md:col-start-7 flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@business.co.za"
              className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container-wide py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="font-semibold tracking-tight inline-flex items-center gap-1" aria-label="Ntombii Tech home">
            <span>Ntombii</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent dot-pulse mx-0.5" aria-hidden />
            <span className="text-muted-foreground">tech</span>
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
          <p className="mt-6 text-xs text-muted-foreground">
            {SITE.location} · Mon–Fri, 09:00–17:00 SAST
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-sm font-medium mb-4">Studio</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/work">Work</Link></li>
            <li><Link className="hover:text-foreground" to="/services">Services</Link></li>
            <li><Link className="hover:text-foreground" to="/pricing">Pricing</Link></li>
            <li><Link className="hover:text-foreground" to="/about">About</Link></li>
          </ul>
          <h4 className="text-sm font-medium mt-6 mb-4">Capabilities</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/services/branding">Branding & Identity</Link></li>
            <li><Link className="hover:text-foreground" to="/services/graphic-design">Graphic Design</Link></li>
            <li><Link className="hover:text-foreground" to="/services/printing">Printing Services</Link></li>
            <li><Link className="hover:text-foreground" to="/services/ink-toner">Ink & Toner Supply</Link></li>
            <li><Link className="hover:text-foreground" to="/services/signage">Signage Solutions</Link></li>
            <li><Link className="hover:text-foreground" to="/services/corporate-gifts">Corporate Gifts</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-sm font-medium mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/blog">Journal</Link></li>
            <li><Link className="hover:text-foreground" to="/contact">Contact</Link></li>
            <li><a className="hover:text-foreground" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a className="hover:text-foreground" href="mailto:hello@ntombii.tech">hello@ntombii.tech</a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-sm font-medium mb-4">Areas served</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/areas/newcastle">Newcastle</Link></li>
            <li><Link className="hover:text-foreground" to="/areas/madadeni">Madadeni</Link></li>
            <li><Link className="hover:text-foreground" to="/areas/vryheid">Vryheid</Link></li>
            <li><Link className="hover:text-foreground" to="/areas/ladysmith">Ladysmith</Link></li>
            <li><Link className="hover:text-foreground" to="/areas/dundee">Dundee</Link></li>
            <li><Link className="hover:text-foreground" to="/areas/utrecht">Utrecht</Link></li>
            <li><Link className="hover:text-foreground font-medium text-foreground" to="/areas">All areas →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ntombii Tech. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-foreground">Privacy</Link>
            <Link to="/contact" className="hover:text-foreground">Terms</Link>
            <span className="hidden sm:inline">Designed & built in-house.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
