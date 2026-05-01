// SEO helpers — schema generators + shared constants.
import { SITE } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";

export const SITE_URL = "https://ntombii.tech";
export const ORG_PHONE = "+27 81 236 0230";
export const ORG_EMAIL = "hello@ntombii.tech";

export const absUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

// --------- LocalBusiness / Organization (site-wide) ---------
export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: SITE.name,
  alternateName: "Ntombii Communications",
  description:
    "Newcastle-based digital studio designing and building mobile-first websites, web apps and brand systems for businesses across Northern KZN.",
  url: SITE_URL,
  telephone: ORG_PHONE,
  email: ORG_EMAIL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.png`,
  priceRange: "R2,500 – R25,000+",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newcastle",
    addressRegion: "KwaZulu-Natal",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.7574,
    longitude: 29.9318,
  },
  areaServed: LOCATIONS.map((l) => ({
    "@type": "City",
    name: l.name,
  })),
  sameAs: [
    SITE.socials.instagram,
    SITE.socials.linkedin,
  ].filter(Boolean),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(SITE.testimonials.length),
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE.name,
  publisher: { "@id": `${SITE_URL}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absUrl(it.url),
  })),
});

export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (s: {
  title: string;
  summary: string;
  area?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: s.title,
  provider: { "@id": `${SITE_URL}/#business` },
  description: s.summary,
  areaServed: s.area ?? "Northern KwaZulu-Natal, South Africa",
});

export const articleSchema = (p: {
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: p.title,
  description: p.excerpt,
  image: p.cover,
  datePublished: p.date,
  author: { "@type": "Organization", name: SITE.name },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
  },
  mainEntityOfPage: absUrl(`/blog/${p.slug}`),
});

export const reviewSchema = (t: {
  quote: string;
  name: string;
  role: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody: t.quote,
  author: { "@type": "Person", name: t.name, jobTitle: t.role },
  itemReviewed: { "@id": `${SITE_URL}/#business` },
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
});

// Per-location LocalBusiness with areaServed = town
export const locationBusinessSchema = (town: {
  name: string;
  region: string;
  geo: { lat: number; lng: number };
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/areas/${town.slug}#business`,
  name: `${SITE.name} — ${town.name}`,
  description: `Web design, web development and branding services for businesses in ${town.name}, ${town.region}.`,
  url: absUrl(`/areas/${town.slug}`),
  telephone: ORG_PHONE,
  email: ORG_EMAIL,
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: "R2,500 – R25,000+",
  address: {
    "@type": "PostalAddress",
    addressLocality: town.name,
    addressRegion: "KwaZulu-Natal",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: town.geo.lat,
    longitude: town.geo.lng,
  },
  areaServed: { "@type": "City", name: town.name },
  parentOrganization: { "@id": `${SITE_URL}/#business` },
});
