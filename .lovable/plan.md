## Phase 2 — Missing service pages

Add 7 new service detail pages so every offering in the entity definition has its own indexable, AI-citable page.

### New pages (route → slug)
1. `/services/web-design` — Website Design (primary "web design Newcastle KZN" landing)
2. `/services/web-development` — Web Development (React / production builds)
3. `/services/ecommerce` — E-commerce Websites
4. `/services/school-websites` — School Websites
5. `/services/local-seo` — Local SEO
6. `/services/logo-design` — Logo Design (links back to Branding)
7. `/services/web-apps` — Web Apps / Digital Systems

### Implementation
- Append 7 new `ServiceDetail` objects to the existing `SERVICE_DETAILS` array in `src/lib/serviceDetails.ts`. Reuses the existing `ServiceDetail.tsx` page, so no routing changes needed (`/services/:slug` already resolves them).
- Each new entry includes: unique SEO title + description + keywords, hero H1, "What we do" with 4–6 included items, "Who this is for", 3-step process, FAQs (3–5 questions targeting buyer intent like "how much", "how long", "do you build X"), WhatsApp CTA with prefilled message, and 3 related-page internal links.
- Each page automatically gets `Service` + `BreadcrumbList` schema via the existing template. I'll extend the template to also inject `FAQPage` schema when the detail has FAQs (currently it doesn't).
- Update `src/pages/Services.tsx` index so the new services appear in the services grid with anchor links to their detail pages.
- Switch the 3 placeholder homepage links (web-design, web-development, local-seo) from `/services` to the real new URLs.
- Add the 7 new URLs to `scripts/generate-sitemap.ts` so the regenerated `sitemap.xml` includes them.

### Out of scope for Phase 2
- Adding the new services into every existing location page's "services offered" list (heavy edit across 15 + 60 pages) — defer to Phase 4 internal-linking sweep.
- New nav menu items (current top nav uses `Services` as a single entry; the index page lists them, which is enough).
