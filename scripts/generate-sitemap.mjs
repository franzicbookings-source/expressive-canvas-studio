// Generate public/sitemap.xml from static routes + dynamic content.
// Run via npm prebuild (or manually: node scripts/generate-sitemap.mjs).
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://ntombii.tech";

// Mirror of LOCATIONS slugs (kept inline to avoid TS imports at build time).
const LOCATION_SLUGS = [
  "newcastle", "madadeni", "osizweni", "vryheid", "ladysmith",
  "dundee", "utrecht", "pongola", "nongoma", "glencoe",
  "dannhauser", "estcourt", "bergville", "ulundi", "paulpietersburg",
];

// Mirror of post slugs.
const POST_SLUGS = [
  "why-northern-kzn-behind-online-how-to-lead",
  "vryheid-zululand-commerce-online",
  "northern-kzn-construction-trades-online",
  "best-web-designer-newcastle-2026",
  "how-much-does-website-cost-vryheid",
  "ladysmith-businesses-losing-customers-google",
  "madadeni-osizweni-getting-found-online",
  "utrecht-dundee-small-business-digital-guide",
  "northern-kzn-local-seo-checklist",
];

const SERVICE_SLUGS = [
  "branding",
  "graphic-design",
  "printing",
  "ink-toner",
  "signage",
  "corporate-gifts",
];

const STATIC_ROUTES = [
  { url: "/", priority: "1.0", change: "weekly" },
  { url: "/services", priority: "0.9", change: "monthly" },
  { url: "/work", priority: "0.9", change: "monthly" },
  { url: "/pricing", priority: "0.9", change: "monthly" },
  { url: "/about", priority: "0.7", change: "monthly" },
  { url: "/blog", priority: "0.8", change: "weekly" },
  { url: "/contact", priority: "0.8", change: "monthly" },
  { url: "/areas", priority: "0.9", change: "monthly" },
];

const today = new Date().toISOString().split("T")[0];

const urls = [
  ...STATIC_ROUTES.map((r) => ({ ...r, loc: `${SITE_URL}${r.url}` })),
  ...SERVICE_SLUGS.map((slug) => ({
    loc: `${SITE_URL}/services/${slug}`,
    priority: "0.9",
    change: "monthly",
  })),
  ...LOCATION_SLUGS.map((slug) => ({
    loc: `${SITE_URL}/areas/${slug}`,
    priority: "0.9",
    change: "monthly",
  })),
  ...POST_SLUGS.map((slug) => ({
    loc: `${SITE_URL}/blog/${slug}`,
    priority: "0.7",
    change: "monthly",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.change}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "..", "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`✓ sitemap.xml written with ${urls.length} URLs → ${outPath}`);
