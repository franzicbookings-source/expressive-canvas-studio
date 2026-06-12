import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema } from "@/lib/seo";

const steps = [
  { n: "01", t: "Discovery", d: "Short WhatsApp or call to understand your business, goals and customers." },
  { n: "02", t: "Design", d: "We design your site clean, on-brand, mobile-first. You approve every screen." },
  { n: "03", t: "Build", d: "Production code, fast load, local SEO and schema built in from day one." },
  { n: "04", t: "Launch", d: "We connect your domain, test on real devices and hand over all logins." },
  { n: "05", t: "Support", d: "Ongoing updates, content changes and maintenance, all via WhatsApp." },
];

const Capabilities = () => (
  <>
    <SEO
      title="Capabilities - What Ntombii Tech Builds"
      description="From websites and web apps to brand systems, print, signage and corporate gifts. The full Ntombii Tech capabilities, built for Newcastle and KZN businesses."
      path="/capabilities"
      keywords="Ntombii Tech capabilities, web design services Newcastle, branding KZN, print services Newcastle, signage KZN"
      schemas={[
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Capabilities", url: "/capabilities" },
        ]),
      ]}
    />

    <section className="container-wide pt-16 pb-12 md:pt-24 border-b border-foreground/15">
      <Reveal>
        <p className="mono-label text-muted-foreground">(00) Capabilities</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display-mega mt-6 max-w-[18ch] leading-[0.95]">
          Everything we build,{" "}
          <span className="serif font-normal text-accent">in one place.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-snug">
          Ntombii Tech is a Newcastle-based studio building websites, brand
          systems, print and digital assets for businesses, schools, NGOs and
          events across KwaZulu-Natal. One studio, one quality bar, end to end.
        </p>
      </Reveal>
    </section>

    <section className="container-wide py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
        {SITE.services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 50}
            className="bg-background p-6 md:p-10 flex flex-col"
          >
            <div className="flex items-baseline justify-between">
              <span className="mono-label tabular-nums text-accent">{s.n}</span>
              <span className="mono-label text-muted-foreground">
                ({String(i + 1).padStart(2, "0")} / {String(SITE.services.length).padStart(2, "0")})
              </span>
            </div>
            <h2 className="display mt-8 md:mt-12 text-2xl md:text-3xl">{s.title}</h2>
            <p className="mt-4 text-sm md:text-base text-foreground/75 leading-relaxed">
              {s.summary}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {s.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span className="text-foreground/80">{inc}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="border-y border-foreground/15 bg-secondary">
      <div className="container-wide py-20 md:py-28">
        <div className="flex items-baseline gap-4 md:gap-6 mb-10 md:mb-14">
          <span className="mono-label tabular-nums text-muted-foreground">(02)</span>
          <span className="h-px flex-1 bg-foreground/15" />
          <span className="mono-label">How we work</span>
        </div>
        <Reveal>
          <h2 className="display-xl max-w-3xl mb-12 md:mb-16">
            From first WhatsApp to{" "}
            <span className="serif font-normal text-accent">live website,</span> in days.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-5 border-t border-foreground/15">
          {steps.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 50}
              className="border-b md:border-b-0 md:border-r last:md:border-r-0 border-foreground/15 p-6 md:p-8 bg-background"
            >
              <span className="mono-label tabular-nums text-accent">{p.n}</span>
              <h3 className="display mt-6 md:mt-10 text-xl md:text-2xl">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-foreground/15 bg-foreground text-background relative noise overflow-hidden">
      <div className="container-wide py-24 md:py-32">
        <Reveal>
          <h2 className="display-mega max-w-[16ch] text-background">
            Need this for your business?{" "}
            <span className="serif font-normal text-accent">Let's talk.</span>
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:bg-background hover:text-foreground transition"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-background/40 text-background px-6 py-3.5 text-sm font-medium hover:border-background transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Capabilities;
