## Entity-first SEO overhaul for ntombii.tech

This is a large body of work. I'll execute it in **4 phases** so each ship is reviewable and the site never goes incoherent. Approve and I'll start Phase 1 immediately; you can tell me to roll straight into 2/3/4 or pause between phases.

### What's already in place (no rebuild needed)
- 6 service detail pages: branding, graphic-design, printing, ink-toner, signage, corporate-gifts
- 15 KZN location pages (Newcastle, Madadeni, Osizweni, Vryheid, Ladysmith, Dundee, Utrecht, Pongola, Nongoma, Glencoe, Dannhauser, Estcourt, Bergville, Ulundi, Paulpietersburg) + 60 service+location combo pages
- 9 blog posts, full sitemap, robots.txt, Helmet-based per-route SEO, JSON-LD helpers (Organization/LocalBusiness, WebSite, Service, FAQ, Breadcrumb, Article), Google Search Console meta verified

So this plan **adds** what's missing rather than rewriting what works.

---

### Phase 1 — Entity-first homepage + sitewide schema tightening
- Rewrite homepage `<title>` and meta description to: *"Web Design & Digital Solutions Company in Newcastle, KZN | Ntombii Tech"*.
- Rewrite the hero eyebrow, H1, sub-paragraph, and the section directly under it to answer the 5 questions (who/what/where/who-we-serve/why-trust) in natural prose — including the service-mix keywords listed in your brief, without stuffing.
- Add a short "Who We Are" entity paragraph above Trusted By, with internal links to Web Design / Branding / Local SEO / Pricing / Work / Contact / Newcastle.
- Upgrade `localBusinessSchema()` to dual-type `["ProfessionalService","LocalBusiness"]`, fill `founder`, `slogan`, `knowsAbout` (full service list), and add real `sameAs` (Instagram you already have; ask you for LinkedIn/Facebook URLs if any).
- Add a sitewide JSON-LD `Organization` graph node in `index.html` head so non-JS crawlers (LinkedIn, Slack, Facebook) see the entity.

### Phase 2 — Missing service pages (entity proof for every offering)
Add 5 new service detail pages reusing the existing `ServiceDetail` template + `SERVICE_DETAILS` data, all with H1, "who it's for", problem solved, what's included, starting price, turnaround, examples, FAQs, WhatsApp CTA, internal links:

1. `/services/web-design` — Website Design (also the canonical landing for "web design Newcastle KZN")
2. `/services/web-development` — Web Development / React builds
3. `/services/ecommerce` — E-commerce Websites
4. `/services/school-websites` — School Websites
5. `/services/local-seo` — Local SEO
6. `/services/logo-design` — Logo Design (lighter page, links back to Branding)
7. `/services/web-apps` — Web Apps / Digital Systems

Each page gets `Service` + `FAQPage` + `BreadcrumbList` schema and links to 2-3 related services + relevant case studies + Pricing.

Update `Services.tsx` index, nav, sitemap, and homepage services grid to include them.

### Phase 3 — Wider location coverage + case studies
**Locations** — add 4 new location pages:
- `/areas/durban`, `/areas/johannesburg`, `/areas/pretoria`, `/areas/south-africa`

Each gets unique intro, local industries, "why a business there needs us even when we're in Newcastle" angle, FAQs, and `LocalBusiness` + `Service` + `FAQPage` schema. No copy-paste-rename — each writes from the actual local commercial context.

**Case studies** — convert the existing 4 portfolio items (Nyatee, Sknowhite Events, Umzilikazi, Keep NN Alive) into full case study pages at `/work/:slug` with: client, industry, location, problem, solution, services provided, features, screenshot, results, testimonial, "Need a website like this?" CTA. `Work.tsx` becomes the index. Each page gets `Article` + `BreadcrumbList` schema.

### Phase 4 — Buyer-intent blog + internal linking pass
- Add the 6 buyer-intent blog posts you don't already have (you have 3 close matches — KZN cost, Newcastle designer, SEO checklist). New posts: small-business-website-checklist, website-vs-facebook-page, whatsapp-enquiries-from-website, school-website-checklist, how-long-website-takes, what-makes-website-professional. Each ~600-900 words with internal links to services, pricing, contact, WhatsApp.
- Internal linking sweep: every service page links to 2 related services + 1 case study + Pricing + 2 location pages with descriptive anchor text. Every blog post links to 1 service + Quote/WhatsApp. Homepage gets a "Where we work" strip linking to 6 location pages.
- Sitemap auto-regenerates from the data files via the existing predev/prebuild generator.

---

### Things I need from you before / during Phase 1
1. **LinkedIn / Facebook URLs** for `sameAs` (or confirm "only Instagram exists today").
2. **Founder name + 1-sentence bio** for the Organization schema `founder` field and the homepage trust paragraph.
3. **Hours** — current schema says Mon-Fri 08:00-18:00, Sat 09:00-13:00. Keep or change?
4. **Company registration number** (optional, only if you want it shown as a trust signal).

You can answer in one message and I'll start Phase 1 in the same turn. If you say "just go", I'll proceed with the existing data and leave placeholders for #1-4.

### Out of scope here (you mentioned but require off-site work)
- Submitting sitemap + requesting indexing in Google Search Console (you do this in GSC, I already gave you the URL list).
- Earning real backlinks from NewsNexus / client sites / directories (off-site).
- AI-search testing in ChatGPT/Gemini/Perplexity (run prompts after Phase 1 ships, share screenshots, I'll iterate).
