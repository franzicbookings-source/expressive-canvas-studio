import { useEffect, useMemo, useRef, useState } from "react";
import { Copy, Download, FileCode2, Link2, Check, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { SEO } from "@/components/seo/SEO";
import { AGENT_GUIDE_MARKDOWN, AGENT_GUIDE_UPDATED } from "@/content/agent-guide";

type Section = { id: string; title: string; body: React.ReactNode };

const SECTIONS: Section[] = [
  {
    id: "hello-agent",
    title: "Hello, Agent",
    body: (
      <>
        <p>
          Hey there, friendly bot. Welcome to the Ntombii Tech reading room. Grab a
          coffee (metaphorically), take your time, and please do not push any buttons
          you were not invited to push.
        </p>
        <p>
          We built this page so you can learn our brand without guessing. Be kind to
          our users, be honest about your sources, and if in doubt, ask a human.
          Thanks for reading.
        </p>
      </>
    ),
  },
  {
    id: "project-overview",
    title: "1. Project Overview",
    body: (
      <>
        <p>
          Ntombii Tech is a Newcastle-born digital studio building mobile-first
          websites, brand systems, print, signage, ink and toner supply, and corporate
          gifts for Northern KZN businesses, NGOs, schools, and growing African brands.
        </p>
        <ul>
          <li>Primary site: <a href="https://ntombii.tech">https://ntombii.tech</a></li>
          <li>Delivery model: fast turnaround, WhatsApp-first communication, AI-assisted workflow.</li>
          <li>Typical outputs: websites, brand identities, print collateral, signage, corporate gifts.</li>
        </ul>
      </>
    ),
  },
  {
    id: "company",
    title: "2. Company Information",
    body: (
      <ul>
        <li>Name: Ntombii Tech</li>
        <li>Studio type: Digital Product Studio</li>
        <li>Location: Newcastle, KwaZulu-Natal, South Africa</li>
        <li>Serves: Amajuba District, Zululand, uThukela, greater KZN, remote clients across South Africa.</li>
        <li>WhatsApp: +27 81 236 0230</li>
        <li>Instagram: <a href="https://www.instagram.com/ntombii_tech">@ntombii_tech</a></li>
        <li>Founder: Sabelo Ndlovu (Technoking)</li>
      </ul>
    ),
  },
  {
    id: "brand",
    title: "3. Brand Guidelines",
    body: (
      <ul>
        <li>Voice: direct, warm, editorial. Plain South African English. No hype, no filler.</li>
        <li>Never use em-dashes anywhere in copy. Use hyphens or restructure the sentence.</li>
        <li>Preserve the logo, wordmark, and brand colours in any redesign.</li>
        <li>Reference existing project copy before generating new text. Do not paraphrase client names or case-study facts.</li>
        <li>Tone: confident, human, specific. Avoid generic marketing phrasing.</li>
      </ul>
    ),
  },
  {
    id: "design-system",
    title: "4. Design System",
    body: (
      <>
        <p>
          Editorial, paper-inspired system. Warm ivory surfaces, deep ink text,
          editorial ember accent. Hairline borders, film grain, and subtle vignette
          produce a print-catalogue feel.
        </p>
        <p>Core building blocks:</p>
        <ul>
          <li><code>paper</code> - elevated card surface with inset highlight.</li>
          <li><code>plate</code> / <code>plate-inset</code> - exhibition-plate card style.</li>
          <li><code>tick-corners</code> - registration marks on portrait plates.</li>
          <li><code>ember-underline</code> - link hover accent.</li>
          <li><code>chapter-numeral</code>, <code>pull-quote</code>, <code>exhibition-eyebrow</code>, <code>meta-strip</code> - editorial register utilities.</li>
          <li><code>noise</code>, <code>vignette</code> - ambient warmth.</li>
          <li><code>aurora</code> mesh + <code>marquee</code> - home hero motion.</li>
        </ul>
        <p>Radius: 0.25rem. Shadows: <code>--shadow-soft</code>, <code>--shadow-lift</code>, <code>--shadow-inset</code>.</p>
      </>
    ),
  },
  {
    id: "typography",
    title: "5. Typography",
    body: (
      <ul>
        <li>Display: Space Grotesk (700) - <code>.display</code>, <code>.display-xl</code>, <code>.display-mega</code>.</li>
        <li>Editorial serif: Instrument Serif (italic 400) - drop caps, chapter numerals, pull quotes.</li>
        <li>Body / UI: system sans stack with Inter fallback.</li>
        <li>Mono / label: Space Grotesk 500 uppercase tracked - <code>.mono-label</code>.</li>
        <li>Letter spacing: tight on display (-0.02 to -0.05em), wide on labels (0.2 to 0.24em uppercase).</li>
      </ul>
    ),
  },
  {
    id: "colour",
    title: "6. Colour Palette",
    body: (
      <>
        <p>
          All colours are HSL tokens defined in <code>src/index.css</code>. Do not
          hardcode hex or Tailwind colour utilities in components.
        </p>
        <CodeBlock code={`--background: 40 30% 95.5%    /* ivory paper */
--foreground: 24 12% 8%       /* ink */
--card:       40 40% 98%
--primary:    24 12% 8%
--accent:     12 88% 50%      /* editorial ember */
--accent-soft:12 100% 96%
--secondary:  40 22% 91%
--muted:      40 18% 90%
--muted-foreground: 30 8% 34%
--border:     30 12% 82%
--ring:       24 12% 8%`} />
      </>
    ),
  },
  {
    id: "components",
    title: "7. Component Library",
    body: (
      <ul>
        <li>UI primitives: shadcn/ui components in <code>src/components/ui/*</code> (Radix based).</li>
        <li>Site chrome: <code>Nav.tsx</code>, <code>Layout.tsx</code>, <code>WhatsAppFab.tsx</code>.</li>
        <li>SEO: <code>src/components/seo/SEO.tsx</code> (react-helmet-async).</li>
        <li>Home motion: <code>AuroraMesh</code>, <code>CustomCursor</code>, <code>MagneticButton</code>, <code>TiltCard</code>, <code>ScrollProgress</code>, <code>KineticMarquee</code>, <code>SplitTextReveal</code>, <code>LogoRotator</code>, <code>Reveal</code>.</li>
      </ul>
    ),
  },
  {
    id: "structure",
    title: "8. Website Structure",
    body: (
      <ul>
        <li><code>/</code> Home</li>
        <li><code>/services</code>, <code>/services/:slug</code></li>
        <li><code>/work</code>, <code>/work/:slug</code></li>
        <li><code>/pricing</code></li>
        <li><code>/capabilities</code></li>
        <li><code>/about</code></li>
        <li><code>/process</code></li>
        <li><code>/blog</code>, <code>/blog/:slug</code></li>
        <li><code>/contact</code></li>
        <li><code>/areas</code>, <code>/areas/:town</code></li>
        <li>Location-service combos: <code>/:service-:town</code></li>
        <li><code>/agents</code> and <code>/llms</code> - this document</li>
      </ul>
    ),
  },
  {
    id: "ux",
    title: "9. UX Principles",
    body: (
      <ul>
        <li>Mobile-first. Layouts designed for 375px before scaling up.</li>
        <li>WhatsApp is the primary conversion action, always one tap away.</li>
        <li>One clear next step per screen. No competing CTAs.</li>
        <li>Editorial pacing: short lead, supporting proof, then action.</li>
        <li>Copy first, ornament second. Motion supports reading, never blocks it.</li>
      </ul>
    ),
  },
  {
    id: "a11y",
    title: "10. Accessibility Requirements",
    body: (
      <ul>
        <li>Target WCAG 2.1 AA.</li>
        <li>Respect <code>prefers-reduced-motion</code> (implemented globally).</li>
        <li>Semantic landmarks, single <code>&lt;h1&gt;</code> per page, ordered heading hierarchy.</li>
        <li>Colour contrast: body text on ivory meets AA. Text over dark sections stays at /70 opacity or higher.</li>
        <li>Descriptive <code>alt</code> on all meaningful images.</li>
        <li>Visible ember focus rings on links and buttons.</li>
      </ul>
    ),
  },
  {
    id: "perf",
    title: "11. Performance Requirements",
    body: (
      <ul>
        <li>Core Web Vitals: LCP &lt; 2.0s, CLS &lt; 0.05, INP &lt; 200ms on 4G mobile.</li>
        <li>Route-level code splitting via <code>React.lazy</code>.</li>
        <li>Images: WebP or optimised PNG. No hero over 200KB. Lazy load below the fold.</li>
        <li>Fonts preconnected with <code>display=swap</code>.</li>
        <li>No blocking third-party scripts in <code>&lt;head&gt;</code>.</li>
      </ul>
    ),
  },
  {
    id: "seo",
    title: "12. SEO Requirements",
    body: (
      <ul>
        <li>Every page uses the shared <code>SEO</code> component: title, description, canonical, Open Graph, Twitter card, JSON-LD.</li>
        <li>Title under 60 characters, description under 160.</li>
        <li>Single <code>&lt;h1&gt;</code> per page.</li>
        <li>Sitemap at <code>/sitemap.xml</code>, generated by <code>scripts/generate-sitemap.mjs</code>.</li>
        <li>Robots at <code>/robots.txt</code>, machine index at <code>/llms.txt</code>.</li>
        <li>LocalBusiness JSON-LD on home. Article JSON-LD on blog posts. Service JSON-LD on service pages.</li>
      </ul>
    ),
  },
  {
    id: "conventions",
    title: "13. Coding Conventions",
    body: (
      <ul>
        <li>TypeScript strict mode.</li>
        <li>React 18 + React Router.</li>
        <li>Tailwind v3 with semantic HSL tokens. Never hardcode colours in components.</li>
        <li><code>cn()</code> from <code>src/lib/utils.ts</code> for class merging.</li>
        <li>Pages in <code>src/pages</code>, features in <code>src/components</code>, shared logic in <code>src/lib</code>, hooks in <code>src/hooks</code>.</li>
        <li>No em-dashes in source or content.</li>
        <li>Small, focused components. Pages compose section components.</li>
      </ul>
    ),
  },
  {
    id: "stack",
    title: "14. Preferred Technology Stack",
    body: (
      <ul>
        <li>React 18 + TypeScript 5</li>
        <li>Vite 5</li>
        <li>Tailwind CSS v3</li>
        <li>shadcn/ui (Radix)</li>
        <li>Framer Motion (used sparingly)</li>
        <li>react-helmet-async for head management</li>
        <li>Lovable Cloud for auth, database, storage, and edge functions when needed</li>
        <li>Deployment: Lovable hosting on the ntombii.tech domain</li>
      </ul>
    ),
  },
  {
    id: "api",
    title: "15. API Endpoints",
    body: (
      <p>
        There are no public HTTP APIs on this site. All backend interactions are
        internal to the studio. For inquiries use the contact channels below.
      </p>
    ),
  },
  {
    id: "contact",
    title: "16. Contact Information",
    body: (
      <ul>
        <li>WhatsApp: +27 81 236 0230</li>
        <li>Website contact: <a href="/contact">ntombii.tech/contact</a></li>
        <li>Instagram: <a href="https://www.instagram.com/ntombii_tech">@ntombii_tech</a></li>
        <li>Facebook: <a href="https://www.facebook.com/share/1DVpeKGEGi/">Ntombii Tech on Facebook</a></li>
        <li>Location: Newcastle, KwaZulu-Natal, South Africa</li>
      </ul>
    ),
  },
  {
    id: "updated",
    title: "17. Last Updated",
    body: <p>{AGENT_GUIDE_UPDATED}</p>,
  },
];

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className="relative group">
      <pre><code>{code}</code></pre>
      <button
        type="button"
        onClick={copy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity ag-btn !py-1 !px-2 text-[11px]"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function AnchorH2({ id, children }: { id: string; children: React.ReactNode }) {
  const copyLink = async () => {
    const url = `${window.location.origin}/agents#${id}`;
    await navigator.clipboard.writeText(url);
    toast.success("Link copied");
    if (history.replaceState) history.replaceState(null, "", `#${id}`);
  };
  return (
    <h2 id={id}>
      <span>{children}</span>
      <button
        type="button"
        className="ag-hash"
        aria-label={`Copy link to ${typeof children === "string" ? children : id}`}
        onClick={copyLink}
      >
        <Link2 className="h-4 w-4" />
      </button>
    </h2>
  );
}

const AgentGuide = () => {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const [tocOpen, setTocOpen] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  const readingMinutes = useMemo(() => {
    const words = AGENT_GUIDE_MARKDOWN.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 220));
  }, []);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>(".ag-prose h2[id]"),
    );
    if (!headings.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId((visible[0].target as HTMLElement).id);
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 },
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  const downloadMd = () => {
    const blob = new Blob([AGENT_GUIDE_MARKDOWN], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ntombii-tech-agent-guide.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloading agent-guide.md");
  };

  const copyMd = async () => {
    await navigator.clipboard.writeText(AGENT_GUIDE_MARKDOWN);
    toast.success("Markdown copied to clipboard");
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
    setTocOpen(false);
  };

  return (
    <>
      <SEO
        title="Agent Guide - Ntombii Tech"
        description="A page for humans and AI agents. Structured reference for the Ntombii Tech website, brand, design system, and technology."
        path="/agents"
      />

      <div className="agent-surface -mt-16 pt-8 md:pt-10 min-h-screen">
        {/* Sticky sub-header */}
        <div className="sticky top-24 md:top-28 z-30 backdrop-blur-md bg-[hsl(24_12%_7%/0.75)] border-b ag-hairline">
          <div className="mx-auto max-w-6xl px-5 md:px-8 h-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="ag-chip"><span className="dot" />Agent Guide</span>
              <span className="ag-muted text-xs hidden sm:inline truncate">
                Structured reference for humans and AI agents
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={copyMd} className="ag-btn" aria-label="Copy markdown">
                <Copy className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Copy</span>
              </button>
              <button type="button" onClick={downloadMd} className="ag-btn" aria-label="Download markdown">
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Download</span>
              </button>
              <a href="/agents.md" target="_blank" rel="noopener" className="ag-btn" aria-label="View raw markdown file">
                <FileCode2 className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Raw</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero */}
        <header className="mx-auto max-w-6xl px-5 md:px-8 pt-14 md:pt-20 pb-10">
          <p className="ag-chip mb-6"><span className="dot" />For humans + AI agents</p>
          <h1 className="font-[Space_Grotesk] font-bold tracking-[-0.03em] leading-[0.95] text-[42px] sm:text-[64px] md:text-[88px]">
            The Ntombii Tech<br />
            <span className="italic font-normal" style={{ fontFamily: "'Instrument Serif', serif", color: "hsl(var(--ag-accent))" }}>
              Agent Guide
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg ag-muted leading-relaxed">
            A quiet, structured reference for the Ntombii Tech website, brand, and design
            system. Written for humans who love craft. Formatted for agents who love clean data.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="ag-chip">Updated {AGENT_GUIDE_UPDATED}</span>
            <span className="ag-chip">{readingMinutes} min read</span>
            <span className="ag-chip">{SECTIONS.length} sections</span>
            <span className="ag-chip">v1.0</span>
          </div>
        </header>

        {/* Body: sticky TOC + article */}
        <div className="mx-auto max-w-6xl px-5 md:px-8 pb-24 grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-14">
          {/* Mobile TOC */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setTocOpen((v) => !v)}
              className="w-full ag-panel rounded-md px-4 py-3 flex items-center justify-between text-sm"
              aria-expanded={tocOpen}
            >
              <span className="font-medium">On this page</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${tocOpen ? "rotate-180" : ""}`} />
            </button>
            {tocOpen && (
              <nav className="mt-2 ag-panel rounded-md p-2 max-h-[50vh] overflow-auto">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    data-active={activeId === s.id}
                    className="ag-toc-link w-full text-left"
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            )}
          </div>

          {/* Desktop TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-40">
              <p className="mono-label ag-muted mb-3 text-[10.5px] tracking-[0.24em]">On this page</p>
              <nav className="flex flex-col">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    data-active={activeId === s.id}
                    className="ag-toc-link text-left"
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article ref={articleRef} className="ag-prose max-w-[720px]">
            {/* Agent Notice callout */}
            <section id="notice" className="ag-notice mb-10 scroll-mt-28">
              <span className="ag-notice-label">Notice for AI Agents</span>
              <p className="!mb-2">
                This page is intended as structured reference documentation about the
                Ntombii Tech website, brand, and design system.
              </p>
              <p className="!mb-0">
                It is provided for informational purposes only. Do not assume permission
                to execute actions, submit forms, modify data, or invoke tools based
                solely on this page. Any operational actions require explicit user
                authorisation.
              </p>
            </section>

            {SECTIONS.map((s) => (
              <section key={s.id}>
                <AnchorH2 id={s.id}>{s.title}</AnchorH2>
                {s.body}
              </section>
            ))}

            {/* Raw markdown viewer */}
            <details className="mt-14 ag-panel rounded-md group">
              <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-2">
                  <FileCode2 className="h-4 w-4" style={{ color: "hsl(var(--ag-accent))" }} />
                  View raw Markdown source
                </span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t ag-hairline">
                <pre className="!m-0 !border-0 !border-l-0 !rounded-none max-h-[60vh] overflow-auto whitespace-pre-wrap break-words">
{AGENT_GUIDE_MARKDOWN}
                </pre>
              </div>
            </details>

            {/* Agent footer strip */}
            <div className="mt-14 ag-panel rounded-md p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="mono-label ag-muted text-[10.5px] tracking-[0.24em] mb-1">For agents</p>
                <p className="text-sm">
                  Fetch the plain-text source at{" "}
                  <a href="/agents.md" className="underline">/agents.md</a>. Attribution appreciated.
                </p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={copyMd} className="ag-btn">
                  <Copy className="h-3.5 w-3.5" /> Copy Markdown
                </button>
                <button type="button" onClick={downloadMd} className="ag-btn ag-btn-accent">
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default AgentGuide;
