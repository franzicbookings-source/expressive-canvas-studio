import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const steps = [
  {
    n: "01",
    t: "Discovery",
    d: "Short WhatsApp or call to understand your business, goals and customers.",
    detail:
      "We start with a quick chat — usually on WhatsApp — to understand what you do, who your customers are and what you want the website to achieve. No long forms, no jargon.",
    outcomes: ["Clear project scope", "Target audience defined", "Competitor review"],
  },
  {
    n: "02",
    t: "Design",
    d: "We design your site clean, on-brand, mobile-first. You approve every screen.",
    detail:
      "Every screen is designed for mobile first, then scaled up to desktop. You get clean layouts, real content and your brand colours. We iterate until you are happy.",
    outcomes: ["Figma or screenshot previews", "Mobile-first layouts", "Brand-aligned visuals"],
  },
  {
    n: "03",
    t: "Build",
    d: "Production code, fast load, local SEO and schema built in from day one.",
    detail:
      "We write clean, modern code with React and Tailwind. Every site ships with local SEO, schema markup, fast hosting and accessibility baked in — not bolted on later.",
    outcomes: ["Clean, maintainable code", "Local SEO & schema markup", "Fast hosting & SSL"],
  },
  {
    n: "04",
    t: "Launch",
    d: "We connect your domain, test on real devices and hand over all logins.",
    detail:
      "We connect your custom domain, set up email if needed, test on real phones and browsers, then hand over every login and asset. You own everything.",
    outcomes: ["Domain & DNS configured", "Cross-device testing", "Full asset handover"],
  },
  {
    n: "05",
    t: "Support",
    d: "Ongoing updates, content changes and maintenance, all via WhatsApp.",
    detail:
      "After launch we stay available for updates, content changes and fixes. Most requests are handled same-day via WhatsApp. No ticket systems, no waiting.",
    outcomes: ["Same-day WhatsApp support", "Monthly check-ins", "Content updates included"],
  },
];

const Process = () => (
  <>
    <SEO
      title="Our Process - How Ntombii Tech Builds Websites"
      description="Discovery, design, build, launch and support. See exactly how Ntombii Tech takes your Newcastle business from first WhatsApp to live website."
      path="/process"
      keywords="web design process Newcastle, how to build a website KZN, website design steps, Ntombii Tech process"
      schemas={[
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Process", url: "/process" },
        ]),
      ]}
    />

    <section className="container-wide pt-16 pb-12 md:pt-24 border-b border-foreground/15">
      <Reveal>
        <p className="mono-label text-muted-foreground">(00) Process</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display-mega mt-6 max-w-[18ch] leading-[0.95]">
          From first WhatsApp to{" "}
          <span className="serif font-normal text-accent">live website,</span>{" "}
          in days.
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-snug">
          Every project follows the same five steps. No surprises, no hidden fees,
          no jargon. Just a clean process that gets your business online fast.
        </p>
      </Reveal>
    </section>

    <section className="container-wide py-20 md:py-28">
      <div className="flex items-baseline gap-4 md:gap-6 mb-10 md:mb-14">
        <span className="mono-label tabular-nums text-muted-foreground">(01)</span>
        <span className="h-px flex-1 bg-foreground/15" />
        <span className="mono-label">The five steps</span>
      </div>

      <div className="space-y-16 md:space-y-24">
        {steps.map((p, i) => (
          <div
            key={p.n}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
          >
            <Reveal
              delay={i * 40}
              className="md:col-span-2"
            >
              <span className="mono-label tabular-nums text-accent text-2xl md:text-3xl block">
                {p.n}
              </span>
              <span className="mono-label text-muted-foreground mt-1 block">
                {p.t}
              </span>
            </Reveal>
            <Reveal
              delay={i * 40 + 60}
              className="md:col-span-6"
            >
              <h2 className="display text-2xl md:text-3xl">{p.t}</h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                {p.detail}
              </p>
            </Reveal>
            <Reveal
              delay={i * 40 + 120}
              className="md:col-span-4"
            >
              <div className="border border-foreground/15 p-5 md:p-6 bg-secondary">
                <p className="mono-label text-xs text-muted-foreground mb-3">Outcomes</p>
                <ul className="space-y-2.5 text-sm">
                  {p.outcomes.map((out) => (
                    <li key={out} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                      <span className="text-foreground/80">{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {i < steps.length - 1 && (
              <div className="md:col-span-12 hidden md:block">
                <div className="border-b border-foreground/15" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    <section className="border-y border-foreground/15 bg-foreground text-background relative noise overflow-hidden">
      <div className="container-wide py-24 md:py-32">
        <Reveal>
          <h2 className="display-mega max-w-[16ch] text-background">
            Ready to start your project?{" "}
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

export default Process;
