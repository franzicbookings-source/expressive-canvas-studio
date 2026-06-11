# Homepage SEO + Conversion Optimisation

Goal: rank Ntombii Tech for "web design Newcastle KZN" and related local searches, improve AI-search visibility (clear, factual, location-rich copy + schema), and raise homepage conversion — **without redesigning the site**. Existing brand style, routes, components, navigation, footer, and forms stay intact. Only the homepage (`src/pages/Index.tsx`), homepage-relevant SEO meta (`index.html`), and a small content additions in `src/lib/site.ts` will change.

## What will change

### 1. SEO meta (homepage only)
- `index.html` `<title>` → `Web Design Newcastle KZN | Ntombii Tech`
- `index.html` `<meta name="description">` → new local-focused copy (see Copy Bank)
- `src/pages/Index.tsx` `<SEO>` title/description/keywords updated to match (Helmet overrides for the route)
- Keep canonical, OG, Twitter, and JSON-LD as-is (already correct). FAQ JSON-LD will auto-update because it's generated from the new FAQs in `site.ts`.

### 2. Homepage section order (rewrite `src/pages/Index.tsx`)
The page is rebuilt in the order you specified, reusing existing design tokens, `SectionHead`, `Reveal`, `LogoRotator`, and current colour/typography system (no new aesthetic):

```
00  Hero (new H1, sub, two CTAs, local trust line)
01  Trust proof strip (LogoRotator + short "Trusted across KZN" label)
02  Main services (8 service cards → internal links)
03  Why choose Ntombii Tech (4 short value props)
04  Featured work (8 projects in editorial grid)
05  Areas served (Newcastle + 7 KZN towns, with link to /areas)
06  Process (Discovery → Design → Build → Launch → Support)
07  Reviews / review-request strip (existing testimonials + "Leave a review" CTA)
08  FAQ (10 new local Q&As, accordion-style)
09  Final CTA (Get a Website Quote + WhatsApp)
```

Pricing, founder, manifesto, marquee — removed from homepage (kept on their own pages: `/pricing`, `/about`). This tightens the page for the local-SEO + conversion goal.

### 3. Hero copy (exact)
- **H1:** `Web Design Newcastle KZN — Websites That Help Local Businesses Get More Calls`
- **Sub:** `Ntombii Tech builds fast, professional websites for businesses, schools, NGOs, churches, events and local brands in Newcastle, Amajuba District and across KwaZulu-Natal.`
- **CTAs:** Primary `Get a Website Quote` → `/contact`; Secondary `View Our Work` → `/work`
- **Trust line (under CTAs):** `Newcastle Born // KZN Roots // Built for Local Businesses`

### 4. Services block — 8 cards with internal links
| Card | Link |
|---|---|
| Website Design | `/services/web-design` |
| Web Development | `/services/web-development` |
| Local SEO | `/services/local-seo` |
| E-commerce Websites | `/services/ecommerce` |
| Booking Websites | `/services/booking-websites` *(missing — see below)* |
| School Websites | `/services/school-websites` |
| NGO Websites | `/services/ngo-websites` *(missing — see below)* |
| Website Redesigns | `/services/website-redesign` *(missing — see below)* |

Links will be rendered now so internal-link SEO is in place; missing pages are flagged in the summary so we can add them in the next prompt.

### 5. Featured work — 8 projects
Will extend `SITE.projects` in `src/lib/site.ts` to include the 4 missing ones (Snesenzo Security Group, Spaza Tap, RnB Soulful Groove Gathering, Aunty Wama 2K). Existing 4 (Nyatee, Sknowhite, Umzilikazi, Keep Newcastle Alive) stay. New entries reuse existing client logos where possible (auntywama, sknowhite, etc.); for ones with no asset, a clean placeholder card (no broken image) is shown — listed in summary for follow-up.

### 6. Areas served — internal links
Newcastle, Madadeni, Dundee, Utrecht, Osizweni, Vryheid, Ladysmith + Amajuba District. `/areas/amajuba-district` doesn't exist yet — link will go to `/areas` (district overview) and is flagged in the summary.

### 7. FAQ — 10 new questions
The 10 questions you provided will replace `SITE.faqs` content with local, conversion-led answers (Copy Bank below). FAQ JSON-LD is auto-emitted via existing `faqSchema(SITE.faqs)`.

### 8. Reviews section
Keep the 3 existing testimonials (already wired into review schema). Add a small "Leave a Google review" link block — no design change, just plain text + button.

### 9. Process — 5 steps
Discovery → Design → Build → Launch → Support. Reuses the editorial numbered-row pattern from the current homepage.

## Copy bank (drop-in)

**Meta description (≤160 chars):**
> Ntombii Tech is a Newcastle, KZN web design company building professional websites, booking systems, e-commerce stores, web apps and local SEO-ready sites for businesses, schools, NGOs and events.

**Why choose us (4 props):**
1. Newcastle-based, KZN-focused
2. Built for local search & Google rankings
3. WhatsApp-first communication
4. Fixed pricing, no surprises

**FAQ answers** — short, plain-spoken, town-specific, no keyword stuffing. (Full text written into `SITE.faqs`.)

## Performance & quality
- All images keep `loading="lazy"` except hero. No new heavy assets.
- No font changes. No CSS framework changes.
- All headings semantic (single `<h1>`, `<h2>` per section, `<h3>` for cards).
- Mobile-first grid retained from current page.

## Files edited
- `index.html` — title + meta description only
- `src/pages/Index.tsx` — full homepage rewrite per the new section order
- `src/lib/site.ts` — extend `projects` (add 4), replace `faqs` (10 local Q&As)

No routing, layout, nav, footer, form, or other page is touched.

## After implementation, summary will list
- What changed (with bullet diff)
- Files edited
- Missing routes/pages that need creation in a follow-up prompt:
  - `/services/booking-websites`
  - `/services/ngo-websites`
  - `/services/website-redesign`
  - `/areas/amajuba-district`
  - Case-study assets for: Snesenzo Security Group, Spaza Tap, RnB Soulful Groove Gathering
- SEO items still to do later: Google Business Profile review embeds, dedicated town × service landing pages, blog cadence for local terms.

Approve and I'll build.
