## 1. Make (01) Trusted across KZN logos clickable + fix Nyatee location

Edit `src/pages/Index.tsx`:

- Add an `href` to each entry in `trustedClients` and correct Nyatee's note to reflect Gauteng/Sandton.
- Wrap each card body in `<a target="_blank" rel="noopener noreferrer">` so visitors can verify each org. Keep the existing editorial card style — only add a subtle hover (logo opacity + small arrow icon in top-right corner).
- Add `aria-label="Visit {name} website (opens in new tab)"` on each anchor.

Final card data:

| Card | Link | Note |
|---|---|---|
| Nyatee Foundation | https://nyateefoundation.org.za/ | NGO website · Sandton, Gauteng |
| Umzilikazi Senior Secondary School | https://umzilikazi.vercel.app/ | School website · Newcastle KZN |
| Snesenzo Security Group | https://www.snesenzosecuritygroup.co.za/ | Security company · Newcastle KZN |
| KNAWP | https://keepnnalive.org.za/ | Community organisation · Newcastle KZN |
| Amajuba Top Women Awards | https://amajubawomenawarda.co.za/ | Awards platform · Newcastle KZN |
| Ntombii Tech | https://ntombii.tech/ | Studio · Newcastle KZN |

No other sections touched.

Note: section heading currently reads "Trusted across KZN", but Nyatee is in Gauteng. Want me to soften it to "Trusted across KZN & beyond"? Default: leave it as-is unless you say otherwise.

## 2. Google Search Console — URLs to resubmit

**Submit/resubmit sitemap (priority):**
- https://ntombii.tech/sitemap.xml

**Manually Request Indexing for high-priority pages:**
- https://ntombii.tech/
- https://ntombii.tech/services
- https://ntombii.tech/work
- https://ntombii.tech/pricing
- https://ntombii.tech/about
- https://ntombii.tech/contact
- https://ntombii.tech/process
- https://ntombii.tech/blog
- https://ntombii.tech/areas

**New SEO-friendly location aliases (worth manual submit):**
- https://ntombii.tech/web-design-newcastle-kzn
- https://ntombii.tech/web-design-madadeni
- https://ntombii.tech/web-design-osizweni
- https://ntombii.tech/web-design-dundee-kzn
- https://ntombii.tech/web-design-utrecht-kzn
- https://ntombii.tech/web-design-ladysmith-kzn
- https://ntombii.tech/web-design-amajuba-district

The remaining ~140 routes (all `/areas/*`, `/services/*`, `/blog/*`, `/work/*`, and location-service combos) live in `public/sitemap.xml` and Google will discover them from the sitemap submit.