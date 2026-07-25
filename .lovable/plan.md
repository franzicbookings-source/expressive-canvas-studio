## Elevate `/agents` into a premium, nav-linked Agent Guide

Turn the existing Agent Guide into a first-class page: in the nav, mobile-responsive, dark editorial surface, interactive TOC, copy and download actions, and readable Markdown-styled content for humans and agents.

### 1. Navigation
`src/components/site/Nav.tsx`:
- Add `{ to: "/agents", label: "Agents" }` to the `links` array (desktop pill nav + mobile drawer inherit automatically).
- Nav is getting dense; tighten pill padding from `px-4` to `px-3.5` so 7 items fit cleanly on mid-width laptops. No other nav changes.

### 2. Page-scoped dark theme
The site is light ivory globally; per the brief the Agent Guide gets a dark editorial skin using existing tokens (ink foreground as surface, ivory as text, ember as accent). Scope it to the page only via a wrapper class - no global theme change.

Add to `src/index.css` under a new `.agent-surface` scope:
- Background: deep ink (`hsl(var(--foreground))`) with a subtle radial ember glow and film grain.
- Text: ivory/paper (`hsl(var(--background))`), muted variants at 60-70 percent.
- Hairline borders using ivory at 12 percent opacity.
- Code blocks: near-black card with ember caret underline.
- Utility classes: `.agent-h2`, `.agent-h3`, `.agent-code`, `.agent-inline-code`, `.agent-link` (ember underline on hover), `.agent-toc-link`.

### 3. Rebuild `src/pages/AgentGuide.tsx`
Structure (single file, no new deps):

```text
+--------------------------------------------------------------+
|  Sticky sub-header: "Agent Guide"  [Copy MD] [Download] [Raw]|
+--------------------------------------------------------------+
| Hero                                                         |
|  Eyebrow: For humans + AI agents                             |
|  H1: The Ntombii Tech Agent Guide                            |
|  Lede: 1 sentence, warm + clever                             |
|  Meta chips: Last updated | Reading time | 17 sections       |
+--------------------------+-----------------------------------+
| Sticky TOC (desktop)     | Article                           |
|  scroll-spy highlights   |  Rendered Markdown sections       |
|  active section          |  Each h2 has anchor + copy-link   |
|                          |  Callout: Agent Notice (accent)   |
|                          |  Raw Markdown viewer (collapsible)|
+--------------------------+-----------------------------------+
| Footer strip: "For agents: fetch /agents.md" + copy button   |
+--------------------------------------------------------------+
```

Behaviors:
- **Copy Markdown**: `navigator.clipboard.writeText(AGENT_GUIDE_MARKDOWN)` with a "Copied" toast (existing `sonner`).
- **Download Markdown**: keep existing Blob download.
- **View raw**: link to `/agents.md`.
- **Per-heading anchor**: click a hash icon next to any h2 to copy the deep link.
- **Copy code block**: small button on each `<pre>` block.
- **Scroll-spy TOC**: `IntersectionObserver` highlights the current section; smooth-scroll on click.
- **Reading progress**: reuse existing `ScrollProgress` component pinned at the top.
- **Reduced motion**: skip transitions when `prefers-reduced-motion`.
- **Agent Notice**: rendered as a bordered ember callout so it feels intentional, not fine print.
- **Raw Markdown viewer**: keep the pre block but move it into a collapsible `<details>` so it doesn't dominate the page.

### 4. Light animations
- Section fade-up on enter (existing `Reveal` component).
- TOC active-item slide indicator (CSS transition on transform).
- Button hover: ember underline sweep.
- No heavy motion; respect reduced-motion.

### 5. Mobile
- Sub-header actions collapse to icon buttons (Copy, Download, Raw) with `aria-label`.
- TOC becomes a `<details>` "On this page" disclosure above the article.
- Article body: max-width prose, 16px base, generous line-height, comfortable tap targets.

### 6. SEO + discovery
- `SEO` component: title "Agent Guide - Ntombii Tech", description under 160 chars, canonical `/agents`.
- JSON-LD `TechArticle` with author, dateModified, description.
- Sitemap: `/agents` and `/llms` already included.

### 7. Content source of truth
`src/content/agent-guide.ts` remains the single source. The page renders sections from a small structured array (id, title, body JSX) so TOC, anchors, and Markdown stay in sync. The Markdown file at `/agents.md` continues to be generated from the same source at build time.

### Out of scope
- No new dependencies (no `react-markdown`, no syntax highlighter).
- No changes to global theme, fonts, logo, or copy elsewhere.
- No changes to the existing hand-written section content beyond wrapping it in the new shell.

### Technical notes
- Files touched: `src/components/site/Nav.tsx`, `src/pages/AgentGuide.tsx`, `src/index.css`, and a small `src/components/agent-guide/*` folder for `Toc.tsx`, `CopyButton.tsx`, `AnchorHeading.tsx`.
- No changes to `scripts/generate-agents-md.mjs` or `src/content/agent-guide.ts` content.
- Zero backend changes.
