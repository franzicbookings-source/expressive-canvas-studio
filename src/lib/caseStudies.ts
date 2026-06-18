// Case study data - drives /work/:slug pages.
import portfolioNyatee from "@/assets/portfolio-nyatee.webp";
import portfolioEvents from "@/assets/portfolio-events.webp";
import portfolioUmzilikazi from "@/assets/portfolio-umzilikazi.webp";
import portfolioKeepNNAlive from "@/assets/portfolio-keepnnalive.webp";
import portfolioSnesenzoAsset from "@/assets/portfolio-snesenzo.png.asset.json";
import portfolioRnbAsset from "@/assets/portfolio-rnb.png.asset.json";

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  category: string;
  sector: string;
  location: string;
  year: string;
  liveUrl: string;
  image: string;
  summary: string;
  scope: string[];
  challenge: string;
  approach: string;
  outcome: string;
  results: string[];
  related: { label: string; href: string }[];
  seoTitle: string;
  seoDescription: string;
  keywords: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "nyatee",
    client: "Nyatee Foundation",
    title: "Nyatee Foundation - A non-profit website that earns trust on first scroll.",
    category: "Non-Profit Branding & Web",
    sector: "Non-profit / Community development",
    location: "Newcastle, KZN",
    year: "2025",
    liveUrl: "https://nyateefoundation.org.za/",
    image: portfolioNyatee,
    summary:
      "A modern non-profit site that communicates mission, programmes and donation paths clearly - replacing a dated presence with credibility donors and partners take seriously.",
    scope: ["Brand refinement", "Website design", "Web development", "Local SEO setup", "Content structure"],
    challenge:
      "Nyatee Foundation needed an online presence that matched the seriousness of its community work. The previous footprint was scattered across social media with no central, credible home for funders, partners or beneficiaries to learn about programmes or get involved.",
    approach:
      "We ran a one-week discovery sprint to map every audience - donors, partners, beneficiaries, volunteers - and built a clear information architecture around each. Design leaned warm and human, with strong photography, generous spacing, and unmistakable calls to action. Built in React + Vite for speed, with schema markup and Open Graph tags so the site previews well across WhatsApp, LinkedIn and search.",
    outcome:
      "A live, mobile-first website that loads in under 2 seconds, ranks for 'Nyatee Foundation' and related searches, and gives the team a credible URL to put on every proposal, banner and email.",
    results: [
      "Live launch in under 2 weeks from kickoff",
      "Mobile-first, sub-2-second load times",
      "Clear donation and partnership funnels",
      "Schema markup for Organization + NGO indexing",
      "WhatsApp click-to-chat for fast enquiries",
    ],
    related: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Branding", href: "/services/branding" },
    ],
    seoTitle: "Nyatee Foundation Website - Non-Profit Case Study | Ntombii Tech",
    seoDescription:
      "How Ntombii Tech built the Nyatee Foundation website - a credible, mobile-first non-profit site shipped in under 2 weeks with full local SEO and donor-friendly UX.",
    keywords: "non-profit web design South Africa, Nyatee Foundation, NGO website case study, charity website Newcastle, KZN non-profit website",
  },
  {
    slug: "events",
    client: "Sknowhite Events",
    title: "Sknowhite Events - Luxury hospitality, told in pixels.",
    category: "Luxury Events & Hospitality",
    sector: "Events & hospitality",
    location: "Newcastle, KZN",
    year: "2025",
    liveUrl: "https://sknowhiteevents.co.za/",
    image: portfolioEvents,
    summary:
      "A cinematic, editorial-feeling website for a high-end events brand - where every detail had to feel as considered as the events themselves.",
    scope: ["Brand direction", "Website design", "Web development", "Photography curation", "WhatsApp enquiry flow"],
    challenge:
      "Sknowhite Events books on aesthetic and reputation. The previous online presence undersold the brand's polish and made it hard for prospective clients to envision a Sknowhite-level event - costing the brand premium bookings that drifted to competitors with sharper sites.",
    approach:
      "Editorial typography, large imagery, generous whitespace, and a colour story that mirrors the brand's signature palette. We built the site around storytelling - each section answers a question a prospective client is asking. WhatsApp enquiry buttons placed at decision moments, and a structured contact form for formal RFQs.",
    outcome:
      "A site that finally matches the work. Bookings now arrive with prospective clients already half-convinced - and qualified enquiries land directly on WhatsApp.",
    results: [
      "Cinematic, mobile-first design",
      "WhatsApp enquiry handoff at every CTA",
      "Open Graph + Twitter cards for premium link previews",
      "Schema markup for EventVenue and LocalBusiness",
      "Sub-2-second load on 4G",
    ],
    related: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Branding", href: "/services/branding" },
    ],
    seoTitle: "Sknowhite Events Website - Hospitality Case Study | Ntombii Tech",
    seoDescription:
      "How Ntombii Tech built a cinematic, editorial-feeling website for Sknowhite Events - luxury hospitality design with WhatsApp enquiry flow and Core Web Vitals tuning.",
    keywords: "luxury events website South Africa, hospitality web design Newcastle, Sknowhite Events case study, events brand website KZN",
  },
  {
    slug: "umzilikazi",
    client: "Umzilikazi Senior Secondary School",
    title: "Umzilikazi Senior Secondary - A school website that informs, recruits and reassures.",
    category: "Education & Institutional Web",
    sector: "Education / Public school",
    location: "KwaZulu-Natal",
    year: "2025",
    liveUrl: "https://umzilikazi.vercel.app/",
    image: portfolioUmzilikazi,
    summary:
      "A clean, parent-friendly school website that handles admissions enquiries, communicates academic identity, and gives the school a credible online home parents and the department can both trust.",
    scope: ["Information architecture", "Website design", "Web development", "Admissions enquiry flow", "Mobile-first build"],
    challenge:
      "Public schools across KZN are massively under-represented online. Parents researching school options find blank Google results or outdated Facebook pages - and that gap quietly costs schools enrolments and community trust. Umzilikazi needed a credible, informative web presence built on a small school budget.",
    approach:
      "We built a focused, single-purpose information site: school identity, academic offering, admissions, contact, and a news area for the principal. Mobile-first because most parents browse on phones. WhatsApp enquiry button for admissions because that's how parents actually communicate. Hosted lean for fast load on township data realities.",
    outcome:
      "Umzilikazi now has an online presence that matches its academic ambition - and parents have a clear, mobile-friendly place to learn about the school before they call.",
    results: [
      "Mobile-first, fast-loading on township data",
      "Clear admissions enquiry path with WhatsApp",
      "Schema markup for EducationalOrganization",
      "Future-proof structure for news + events",
      "Affordable, school-budget-friendly delivery",
    ],
    related: [
      { label: "School Websites", href: "/services/school-websites" },
      { label: "Web Design", href: "/services/web-design" },
    ],
    seoTitle: "Umzilikazi School Website - Education Case Study | Ntombii Tech",
    seoDescription:
      "How Ntombii Tech built the Umzilikazi Senior Secondary School website - a credible, mobile-first school site with admissions enquiry flow on a public-school budget.",
    keywords: "school website South Africa, KZN school website design, Umzilikazi case study, public school website Newcastle, education web design",
  },
  {
    slug: "keepnnalive",
    client: "Keep Newcastle Alive With Possibilities",
    title: "Keep Newcastle Alive - A civic platform for a city worth fighting for.",
    category: "Community & Civic Web",
    sector: "Civic / Community initiative",
    location: "Newcastle, KZN",
    year: "2025",
    liveUrl: "https://keepnnalive.org.za/",
    image: portfolioKeepNNAlive,
    summary:
      "A civic platform that gives Newcastle's community initiative a credible, accessible home online - somewhere supporters, partners and journalists can find the story and get involved.",
    scope: ["Brand alignment", "Website design", "Web development", "Content structure", "Local SEO + schema"],
    challenge:
      "Civic initiatives live and die by visibility. KNAWP was doing real on-the-ground work but had no central, credible online home where supporters, sponsors, journalists or government partners could understand the initiative, see the work, and contact the team.",
    approach:
      "Bold, civic-feeling design built around the initiative's identity. Clear sections for mission, work, get-involved, and contact. Built fast and mobile-first because civic engagement happens on phones, often on shared data. Schema markup so the site shows up well when journalists or partners search.",
    outcome:
      "Keep Newcastle Alive now has a real online home - a URL people can be sent to, share, link to in articles, and refer sponsors to. The initiative is no longer invisible to anyone outside its immediate WhatsApp circle.",
    results: [
      "Mobile-first, fast on shared data",
      "Clear get-involved + sponsor flows",
      "Schema markup for NGO + LocalBusiness",
      "Press-ready About page for journalists",
      "WhatsApp click-to-chat for fast contact",
    ],
    related: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Local SEO", href: "/services/local-seo" },
    ],
    seoTitle: "Keep Newcastle Alive Website - Civic Case Study | Ntombii Tech",
    seoDescription:
      "How Ntombii Tech built the Keep Newcastle Alive With Possibilities civic platform - a mobile-first community site with sponsor-ready content and local SEO.",
    keywords: "civic website South Africa, community initiative web design, Newcastle community website, KNAWP case study, NGO website Newcastle",
  },
  },
  {
    slug: "snesenzo",
    client: "Snesenzo Security Group",
    title: "Snesenzo Security Group - A security brand site that closes contracts.",
    category: "Security · Brand & Web",
    sector: "Security services",
    location: "Newcastle, KZN",
    year: "2025",
    liveUrl: "https://www.snesenzosecuritygroup.co.za/",
    image: portfolioSnesenzoAsset.url,
    summary:
      "A credible, contract-ready website for a Newcastle security company - clear company profile, service breakdown, and a WhatsApp CTA that turns site visitors into qualified enquiries.",
    scope: ["Brand alignment", "Website design", "Web development", "WhatsApp CTA", "Local SEO setup"],
    challenge:
      "Snesenzo Security Group competes for contracts where credibility decides the deal. Without a proper website, prospective clients had nowhere to verify the brand, scan services, or see a professional online presence before signing.",
    approach:
      "We built a security-first information site: company profile, service breakdown (guarding, armed response, events), contact, and a prominent WhatsApp CTA. Mobile-first because most enquiries land from phones. Schema markup so the site shows up in 'security company Newcastle' searches.",
    outcome:
      "Snesenzo now has a contract-ready URL to share with property managers, schools, retailers and event organisers - and enquiries land directly on WhatsApp for fast response.",
    results: [
      "Mobile-first company profile",
      "Service pages: guarding, armed response, events",
      "WhatsApp CTA on every page",
      "Schema markup for SecurityService + LocalBusiness",
      "Local SEO targeting 'security company Newcastle'",
    ],
    related: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Local SEO", href: "/services/local-seo" },
    ],
    seoTitle: "Snesenzo Security Group Website - Case Study | Ntombii Tech",
    seoDescription:
      "How Ntombii Tech built the Snesenzo Security Group website - a credible, mobile-first security company site with WhatsApp enquiry CTA and local SEO for Newcastle KZN.",
    keywords: "security company website KZN, website design for security companies KZN, Snesenzo case study, Newcastle security website, web design Newcastle KZN",
  },
];

export const getCaseStudy = (slug?: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);
