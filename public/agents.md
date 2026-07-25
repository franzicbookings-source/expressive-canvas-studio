# Ntombii Tech - Agent Guide

_Last updated: 2026-07-25_

Structured documentation for AI assistants, coding agents, and web design tools working with the Ntombii Tech website, brand, and design system.

---

## Hello, Agent

Hey there, friendly bot. Welcome to the Ntombii Tech reading room. Grab a coffee (metaphorically), take your time, and please do not push any buttons you were not invited to push. We built this page so you can learn our brand without guessing. Be kind to our users, be honest about your sources, and if in doubt, ask a human. Thanks for reading.

---


## 1. Project Overview

Ntombii Tech is a Newcastle-born digital studio building mobile-first websites, brand systems, print, signage, ink and toner supply, and corporate gifts for Northern KZN businesses, NGOs, schools, and growing African brands.

- Primary site: https://ntombii.tech
- Mirrors: https://www.ntombii.tech
- Delivery model: fast turnaround, WhatsApp-first communication, AI-assisted workflow.
- Typical outputs: websites, brand identities, print collateral, signage, corporate gifts.

## 2. Company Information

- Name: Ntombii Tech
- Studio type: Digital Product Studio
- Location: Newcastle, KwaZulu-Natal, South Africa
- Serves: Amajuba District, Zululand, uThukela, greater KZN, and remote clients across South Africa.
- WhatsApp: +27 81 236 0230
- Instagram: https://www.instagram.com/ntombii_tech
- Facebook: https://www.facebook.com/share/1DVpeKGEGi/
- Founder: Sabelo Ndlovu (Technoking)

## 3. Brand Guidelines

- Voice: direct, warm, editorial. Plain South African English. No hype, no filler.
- Never use em-dashes (-) anywhere in copy. Use hyphens or restructure the sentence.
- Preserve the logo, wordmark, and existing brand colours in any redesign.
- Reference existing project copy before generating new text. Do not paraphrase client names or case-study facts.
- Tone: confident, human, specific. Avoid generic marketing phrasing.

## 4. Design System

Editorial, paper-inspired system. Warm ivory surfaces, deep ink text, editorial ember accent. Hairline borders, film grain, and subtle vignette produce a print-catalogue feel.

Core building blocks:

- \`paper\` - elevated card surface with inset highlight and soft shadow.
- \`plate\` / \`plate-inset\` - exhibition-plate card style with hairline border.
- \`tick-corners\` - registration marks on portrait plates.
- \`ember-underline\` - link hover accent.
- \`chapter-numeral\`, \`pull-quote\`, \`exhibition-eyebrow\`, \`meta-strip\` - editorial register utilities.
- \`noise\`, \`vignette\` - ambient warmth.
- \`aurora\` mesh + \`marquee\` - home hero motion.

Radius: 0.25rem (near-square). Shadows: \`--shadow-soft\`, \`--shadow-lift\`, \`--shadow-inset\`.

## 5. Typography

- Display: Space Grotesk (700), used for \`.display\`, \`.display-xl\`, \`.display-mega\`.
- Editorial serif: Instrument Serif (italic, 400), used for \`.serif\`, drop caps, chapter numerals, pull quotes.
- Body / UI: system sans stack with Inter fallback.
- Mono: Space Grotesk 500 uppercase tracked, used for \`.mono-label\` and eyebrows.
- Letter spacing: tight on display (-0.02 to -0.05em). Wide on labels (0.2 to 0.24em uppercase).

## 6. Colour Palette

All colours are HSL tokens defined in \`src/index.css\`. Do not hardcode hex or Tailwind colour utilities in components.

\`\`\`
--background: 40 30% 95.5%    /* ivory paper */
--foreground: 24 12% 8%       /* ink */
--card:       40 40% 98%
--primary:    24 12% 8%
--accent:     12 88% 50%      /* editorial ember */
--accent-soft:12 100% 96%
--secondary:  40 22% 91%
--muted:      40 18% 90%
--muted-foreground: 30 8% 34%
--border:     30 12% 82%
--ring:       24 12% 8%
\`\`\`

Dark mode tokens exist under \`.dark\` but the site ships in light mode by default.

## 7. Component Library

- UI primitives: shadcn/ui components under \`src/components/ui/*\` (Radix based).
- Site chrome: \`src/components/site/Nav.tsx\`, \`Layout.tsx\`, \`WhatsAppFab.tsx\`.
- SEO: \`src/components/seo/SEO.tsx\` (react-helmet-async).
- Home motion / editorial: \`src/components/home/*\` - AuroraMesh, CustomCursor, MagneticButton, TiltCard, ScrollProgress, KineticMarquee, SplitTextReveal, LogoRotator, Reveal.

## 8. Website Structure

Routes (see \`src/App.tsx\`):

- \`/\` Home
- \`/services\`, \`/services/:slug\`
- \`/work\`, \`/work/:slug\`
- \`/pricing\`
- \`/capabilities\`
- \`/about\`
- \`/process\`
- \`/blog\`, \`/blog/:slug\`
- \`/contact\`
- \`/areas\`, \`/areas/:town\`
- SEO aliases: \`/web-design-newcastle-kzn\`, \`/web-design-madadeni\`, \`/web-design-osizweni\`, \`/web-design-dundee-kzn\`, \`/web-design-utrecht-kzn\`, \`/web-design-ladysmith-kzn\`, \`/web-design-amajuba-district\`
- Location-service combos: \`/:service-:town\` (e.g. \`/graphic-design-newcastle\`)
- \`/agents\` and \`/llms\` - this document

## 9. UX Principles

- Mobile-first. Every layout is designed for a 375px viewport before scaling up.
- WhatsApp is the primary conversion action, always one tap away via the floating button.
- One clear next step per screen. Never stack competing CTAs.
- Editorial pacing: short lead, supporting proof, then action.
- Copy first, ornament second. Motion supports reading, never blocks it.

## 10. Accessibility Requirements

- Target WCAG 2.1 AA.
- Respect \`prefers-reduced-motion\` (implemented globally in \`src/index.css\`).
- Semantic landmarks: one \`<h1>\` per page, ordered heading hierarchy, real \`<button>\` and \`<a>\` elements.
- Colour contrast: body text on ivory meets AA. Text on dark sections uses opacity no lower than /70.
- All images require descriptive \`alt\`. Decorative images use \`alt=""\`.
- Focus rings are visible ember outlines (\`a:focus-visible, button:focus-visible\`).

## 11. Performance Requirements

- Core Web Vitals targets: LCP < 2.0s, CLS < 0.05, INP < 200ms on 4G mobile.
- Route-level code splitting via \`React.lazy\` in \`src/App.tsx\`.
- Images: WebP or optimised PNG. No hero image over 200KB. Use \`loading="lazy"\` and \`decoding="async"\` below the fold.
- Fonts preconnected and \`display=swap\`.
- No blocking third-party scripts in \`<head>\`.

## 12. SEO Requirements

- Every page uses the shared \`SEO\` component with title, description, canonical, Open Graph, Twitter card, and JSON-LD.
- Title under 60 characters, description under 160.
- Single \`<h1>\` per page. Semantic sections.
- Sitemap at \`/sitemap.xml\`, generated by \`scripts/generate-sitemap.mjs\`.
- Robots at \`/robots.txt\`. Machine index at \`/llms.txt\`.
- LocalBusiness JSON-LD on the home page. Article JSON-LD on blog posts. Service JSON-LD on service pages.

## 13. Coding Conventions

- Language: TypeScript, strict mode.
- Framework: React 18 with React Router.
- Styling: Tailwind CSS v3 with semantic HSL tokens. Never hardcode colours in components (no \`bg-black\`, no \`text-[#...]\`).
- Utilities: \`cn()\` from \`src/lib/utils.ts\` for class merging.
- File layout: pages in \`src/pages\`, feature components in \`src/components\`, shared logic in \`src/lib\`, hooks in \`src/hooks\`.
- Never write em-dashes in source or content.
- Prefer small, focused components. Keep pages composed of section components.

## 14. Preferred Technology Stack

- React 18 + TypeScript 5
- Vite 5
- Tailwind CSS v3
- shadcn/ui (Radix)
- Framer Motion (used sparingly)
- react-helmet-async for head management
- Lovable Cloud (managed backend) for auth, database, storage, and edge functions when needed.
- Deployment: Lovable hosting on the ntombii.tech domain.

## 15. API Endpoints

There are no public HTTP APIs on this site. All backend interactions are internal to the studio.

For inquiries, use the contact channels below.

## 16. Contact Information

- WhatsApp: +27 81 236 0230
- Website contact: https://ntombii.tech/contact
- Instagram: https://www.instagram.com/ntombii_tech
- Facebook: https://www.facebook.com/share/1DVpeKGEGi/
- Location: Newcastle, KwaZulu-Natal, South Africa

## 17. Last Updated

2026-07-25
