
# Ntombii Tech — Apple-inspired Redesign

A complete rebuild of ntombii.tech with all your existing copy, services, projects, pricing, FAQ, and blog posts — re-skinned in a light, airy, premium aesthetic inspired by Apple's product pages.

## Design language

- **Palette:** off-white background (#FBFBFD), near-black text (#1D1D1F), soft greys for surfaces, a single warm accent (a refined version of your current orange) used sparingly for CTAs and highlights.
- **Typography:** large, confident display headings (SF-Pro-style sans), generous line-height, tight tracking on big type. Body text sized for comfortable reading (17–19px).
- **Layout:** wide horizontal rhythm, lots of whitespace, max-width container, content broken into focused "scenes" rather than dense walls.
- **Motion:** subtle fade-and-rise on scroll, smooth hover lifts on cards. No heavy animation.
- **Components:** rounded soft cards, hairline 1px dividers, pill buttons, minimal nav with a sticky translucent blur bar.

## Pages

1. **Home** — Hero, marquee tags, stats strip, services preview, featured work, pricing teaser, FAQ, latest blog posts, CTA + footer.
2. **Services** — Full breakdown of UI/UX, Mobile, Web Development, Branding with descriptions and "what's included" lists.
3. **Work** — Grid of all 5 projects (Nyatee Foundation, Sknowhite Events, Umzilikazi, Ntombii Tech, Keep Newcastle Alive) with category tags and live links.
4. **Pricing** — Three tiers (Starter R2,500 / Business R3,500 / Premium from R7,500) with full feature lists and a comparison feel.
5. **About** — Studio story, location (Newcastle, KZN), values, stats.
6. **Blog index** — Card grid of posts with category, date, excerpt.
7. **Blog article template** — Clean reading layout for the 3 existing posts (Northern KZN, Vryheid & Zululand, Construction & Trades).
8. **Contact** — Callback form (full name, business, email, phone, project type, budget, timeline, brief) + WhatsApp shortcut.
9. **404** — On-brand not-found page.

## Global elements

- Sticky translucent top nav: logo · Work · Services · Pricing · About · Blog · "Let's talk" pill button.
- Floating WhatsApp button linking to +27 81 236 0230.
- Footer with newsletter signup, social links (IG, X, LinkedIn), contact, sitemap.

## Content (kept verbatim from your site)

- Hero headline: "Next-Gen Design Agency for Growing Brands."
- Sub: "Mobile-first websites and product builds with clear lead capture, stronger follow-up, and a WhatsApp-friendly handoff for faster approvals and support."
- Marquee tags: Newcastle Born · KZN Rooted · AI Workflow · High Performance · Fast Delivery · UI/UX Design · Web Development · Brand Strategy.
- Stats: 5★ Rated Excellence · 30+ Projects Delivered · 100% Client Retention · 1+ Year in Digital.
- Services 01–04, all 5 portfolio items, all 3 pricing tiers, all 6 FAQs, all 3 blog posts — included as written.

## Backend (Lovable Cloud)

- Table `leads` storing: name, business, email, phone, project_type, budget, timeline, brief, created_at.
- Row-level security: public can insert (form submissions); only authenticated admin can read.
- Email notification (optional, can add later) when a lead is captured.
- Newsletter signup stored in a `subscribers` table.

## Technical notes

- React + Vite + Tailwind, Apple-style design tokens defined as HSL CSS variables in `index.css`.
- New routes added to `App.tsx`; one shared `Layout` component with nav + footer.
- Form validated client-side with Zod, inserted via Supabase client.
- Imagery reuses your existing portfolio screenshots from ntombii.tech URLs (or you can re-upload).

## Out of scope for this pass

- Writing new blog posts (existing 3 will be migrated; future posts you'll add).
- CMS dashboard for editing content (content lives in code; can add later).
- Payments / package checkout (CTAs route to contact form + WhatsApp).
