## Agent Guide page (/agents and /llms)

A single lightweight, text-first documentation page for AI agents, coding assistants, and web design tools. Rendered like a Markdown document, minimal styling, brand-aligned, no animations, no large images.

### Routing
- Add two routes in `src/App.tsx` pointing to the same new page component: `/agents` and `/llms`.
- Register both in `scripts/generate-sitemap.mjs` (low priority, or exclude via robots if preferred - default: include).

### New files
- `src/pages/AgentGuide.tsx` - the page component.
- `src/content/agent-guide.ts` - exports the full Markdown string as a template literal. Single source of truth used for both on-page rendering and the Markdown download.

### Page structure
- Wrapped in existing `Layout` (nav + footer stay).
- `<article>` with `max-w-[800px] mx-auto px-6 py-16`.
- Uses existing brand tokens (ivory background, ink foreground, ember accent) - no new colors.
- Body font: existing sans (Space Grotesk/Inter stack already loaded). Code blocks use `font-mono` (Tailwind default monospace stack) - no new font loads.
- Headings styled with simple Markdown-like hierarchy (h1 large, h2 with hairline border-bottom, h3 medium). Lists, `code`, and `pre` styled minimally.
- No Framer Motion, no reveal wrappers, no cursor/aurora effects, no images beyond the existing nav logo.

### Rendering approach
- Render the Markdown string with `react-markdown` + `remark-gfm` (small, tree-shakeable). If avoiding a new dep is preferred, hand-author the JSX and keep `agent-guide.ts` as the download source. Default: add `react-markdown` for maintainability - one source of content.

### Download button
- A single `<button>` at the top of the article: "Download as Markdown".
- On click: create a `Blob([markdown], { type: 'text/markdown' })`, generate an object URL, trigger download as `ntombii-tech-agent-guide.md`. No external libs.

### Content sections (in order)
1. Agent Notice (disclaimer at top, verbatim from the request)
2. Project overview
3. Company information
4. Brand guidelines
5. Design system
6. Typography (Space Grotesk, Instrument Serif, Inter fallback)
7. Colour palette (HSL tokens from `src/index.css`)
8. Component library (shadcn/ui + custom `src/components/home/*` and `src/components/site/*`)
9. Website structure (routes from `src/App.tsx`)
10. UX principles
11. Accessibility requirements (WCAG AA, reduced-motion support already in CSS)
12. Performance requirements (lazy routes, image formats, Core Web Vitals targets)
13. SEO requirements (per-page SEO component, JSON-LD, sitemap)
14. Coding conventions (TS, Tailwind tokens only, no hardcoded colors, no em-dashes)
15. Preferred technology stack (React 18, Vite 5, Tailwind v3, TS 5, Lovable Cloud backend)
16. API endpoints - none public; note contact via WhatsApp/email
17. Contact information (from `src/lib/site.ts`)
18. Last updated date (static string, updated when content changes)

Content is drafted directly from existing project sources (`src/index.css` tokens, `src/lib/site.ts`, `src/App.tsx` routes, `README.md`, `public/llms.txt`) so it stays factual.

### SEO
- `SEO` component with title "Agent Guide", concise description, `noindex` false (agents should discover it). Canonical `/agents`; `/llms` route sets the same canonical to avoid duplicate indexing.

### Constraints honored
- No em-dashes anywhere in the content.
- No new heavy fonts or images.
- No animations, no client-side effects beyond the download click handler.

### Technical notes
- New dependency: `react-markdown` and `remark-gfm` (small). If you'd prefer zero new deps, say so and I'll hand-render the JSX from the same content module.
- File additions: 2 files (`AgentGuide.tsx`, `agent-guide.ts`). Edits: `src/App.tsx`, `scripts/generate-sitemap.mjs`, regenerate `public/sitemap.xml`.
