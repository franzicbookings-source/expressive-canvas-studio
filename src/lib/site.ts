// Centralized site content — easy to edit later.
import portfolioNyatee from "@/assets/portfolio-nyatee.webp";
import portfolioEvents from "@/assets/portfolio-events.webp";
import portfolioUmzilikazi from "@/assets/portfolio-umzilikazi.webp";
import portfolioKeepNNAlive from "@/assets/portfolio-keepnnalive.webp";

export const SITE = {
  name: "Ntombii Tech",
  location: "Newcastle, KZN",
  tagline: "Digital Product Studio",
  whatsapp: "27812360230",
  whatsappDisplay: "+27 81 236 0230",
  socials: {
    instagram: "https://www.instagram.com/ntombii_communications",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
  },
  hero: {
    title: "Next-Gen Design Agency for Growing Brands.",
    sub: "Mobile-first websites and product builds with clear lead capture, stronger follow-up, and a WhatsApp-friendly handoff for faster approvals and support.",
  },
  marquee: [
    "Newcastle Born", "KZN Rooted", "AI Workflow", "High Performance",
    "Fast Delivery", "UI/UX Design", "Web Development", "Brand Strategy",
  ],
  stats: [
    { value: "5★", label: "Rated Excellence" },
    { value: "30+", label: "Projects Delivered" },
    { value: "100%", label: "Client Retention" },
    { value: "1+", label: "Year in Digital" },
  ],
  clients: [
    "Nyatee Foundation",
    "Sknowhite Events",
    "Umzilikazi SSS",
    "Keep NN Alive",
    "Ntombii Comms",
    "Zululand Trades",
  ],
  testimonials: [
    {
      quote:
        "Ntombii Tech rebuilt our entire site in under two months — roughly 90% faster than the previous agency we worked with. Professional from the first call to handover, and the result speaks for itself.",
      name: "MK Nyathi",
      role: "Founder, Nyatee Foundation",
      project: "nyatee",
    },
    {
      quote:
        "They handled both our branding and the full build, and only charged me once. I only found out later most agencies bill those separately — that alone tells you the kind of integrity you're dealing with.",
      name: "Sknowhite Events",
      role: "Owner, Sknowhite Events",
      project: "events",
    },
    {
      quote:
        "We needed a site that actually represents our school properly. What we got back felt premium without losing the local feel. Parents notice.",
      name: "Mr. Zulu",
      role: "Principal, Umzilikazi SSS",
      project: "umzilikazi",
    },
  ],
  services: [
    {
      n: "01",
      title: "UI/UX Design",
      summary: "User-centric interfaces and experiences that engage, convert, and delight across every touchpoint.",
      includes: ["Discovery & user research", "Wireframes & prototypes", "Design systems", "Usability testing"],
    },
    {
      n: "02",
      title: "Mobile Design",
      summary: "Mobile-first product design built for South African audiences and the realities of modern data and devices.",
      includes: ["iOS & Android patterns", "Responsive layouts", "App icons & assets", "Tap-to-WhatsApp handoff"],
    },
    {
      n: "03",
      title: "Web Development",
      summary: "Fast, modern, search-first websites engineered to convert visitors into leads.",
      includes: ["React & Next-gen stacks", "Performance tuning", "SEO foundations", "Form & lead capture"],
    },
    {
      n: "04",
      title: "Branding Design",
      summary: "Distinctive brand identities — names, logos, palettes, and systems — that scale from card to billboard.",
      includes: ["Logo & wordmark", "Brand guidelines", "Color & typography", "Social templates"],
    },
  ],
  projects: [
    { slug: "nyatee", title: "Nyatee Foundation", category: "Non-Profit Branding & Web", image: portfolioNyatee, href: "https://nyateefoundation.org.za/" },
    { slug: "events", title: "Where Every Detail Tells Your Story", category: "Luxury Events & Hospitality", image: portfolioEvents, href: "https://sknowhiteevents.co.za/" },
    { slug: "umzilikazi", title: "Umzilikazi Senior Secondary", category: "Education & Institutional Web", image: portfolioUmzilikazi, href: "https://umzilikazi.vercel.app/" },
    { slug: "ntombii", title: "Ntombii Tech — Agency Website", category: "Agency Branding & Web", image: portfolioNyatee, href: "http://ntombii.tech/" },
    { slug: "keepnnalive", title: "Keep Newcastle Alive With Possibilities", category: "Community & Civic Web", image: portfolioKeepNNAlive, href: "https://keepnnalive.co.za/" },
  ],
  pricing: [
    {
      name: "Starter Website",
      from: "R2,500",
      original: "R3,000",
      features: ["1–3 Pages", "WhatsApp Button", "Contact Form", "Mobile Responsive", "Basic SEO", "AI-Assisted Layouts"],
      popular: false,
    },
    {
      name: "Business Website",
      from: "R3,500",
      original: "R4,500",
      features: ["Up to 6 Pages", "Enhanced UI", "Google Map Integration", "Performance Tuning", "SEO Optimization", "72-Hour Sprint Start"],
      popular: true,
    },
    {
      name: "Premium Website",
      from: "R7,500",
      original: null,
      features: ["Up to 10 Pages", "Conversion Structure", "Advanced UI/UX", "Custom Icons", "Priority Support", "Full AI Workflow Integration"],
      popular: false,
    },
  ],
  faqs: [
    {
      q: "What are your agency's main services?",
      a: "We design and build mobile-first websites, web apps, and brand systems. That includes UI/UX, web development, mobile design, and branding — all delivered with an AI-assisted workflow to keep things fast and focused.",
    },
    {
      q: "How fast can you build a website?",
      a: "Starter sites can launch in under a week. Business builds typically run a 72-hour sprint kickoff and ship in 1–2 weeks. Premium builds with custom UX run 2–4 weeks depending on scope.",
    },
    {
      q: "What's the typical cost for your services?",
      a: "Starter from R2,500, Business from R3,500, Premium from R7,500. Custom web apps and e-commerce are quoted based on scope after a short discovery call.",
    },
    {
      q: "What will the process look like for your project?",
      a: "Discovery → wireframes → design → build → review → launch. You get checkpoints at every step on WhatsApp, with clear approvals so nothing stalls.",
    },
    {
      q: "How will we communicate and collaborate?",
      a: "Mainly WhatsApp for fast async updates, plus email and scheduled calls when needed. You always know who to message and when to expect a reply.",
    },
    {
      q: "Is the SEO local to Newcastle/KZN?",
      a: "Yes — we set up local SEO for Newcastle, Vryheid, Pongola, Nongoma, Dundee, Madadeni and surrounding KZN towns, with Google Business profile guidance included.",
    },
  ],
  posts: [
    {
      slug: "why-northern-kzn-behind-online-how-to-lead",
      title: "Why Northern KZN Is Behind Online — And How Your Business Can Lead",
      category: "Northern KZN",
      date: "Apr 16, 2026",
      cover: "https://ntombii.tech/why-northern-kzn-behind-online-how-to-lead.png",
      excerpt: "Northern KZN lags behind Gauteng and Western Cape in online business presence. Here's why — and how forward-thinking local businesses can take the lead.",
      body: [
        "If you live in Newcastle, Madadeni, Dundee or anywhere across northern KZN, you've felt it: the local economy moves at a different pace online than Johannesburg or Cape Town. Search a service and you'll see ads from Gauteng companies long before any local listing appears.",
        "The gap isn't talent. The gap is presence. Most local businesses still rely on word-of-mouth and a Facebook page, while customers — and competitors — have moved to Google, WhatsApp Business, and TikTok.",
        "The fix is simpler than it sounds: a fast mobile site, a clear WhatsApp handoff, a Google Business profile that's actually filled out, and one weekly piece of local content. Do that for 90 days and you'll outrank most competitors in your town.",
        "Northern KZN doesn't need to copy Sandton. It needs to show up online with the same care it already shows in person.",
      ],
    },
    {
      slug: "vryheid-zululand-commerce-online",
      title: "Vryheid & Zululand Commerce — The Digital Opportunity",
      category: "Northern KZN",
      date: "Apr 16, 2026",
      cover: "https://ntombii.tech/vryheid-zululand-commerce-online.png",
      excerpt: "Vryheid, Pongola, Nongoma — Zululand District's commercial hubs are missing out online. Here's the digital blueprint for northern KZN businesses.",
      body: [
        "Zululand's commercial heart — Vryheid, Pongola, Nongoma — has serious buying power, but online discoverability is patchy. Search for an electrician in Vryheid and Google often shows results from Newcastle or Durban.",
        "That's not a customer problem; it's a presence problem. The businesses that rank are simply the ones that posted, replied, and updated their info.",
        "The blueprint: a one-page site optimised for your town name + service, a WhatsApp click-to-chat button, a Google Business profile updated weekly, and three short videos a month showing your work. Cheap to start, compounds fast.",
      ],
    },
    {
      slug: "northern-kzn-construction-trades-online",
      title: "Construction & Trades in Northern KZN — The Digital Playbook",
      category: "Northern KZN",
      date: "Apr 16, 2026",
      cover: "https://ntombii.tech/northern-kzn-construction-trades-online.png",
      excerpt: "Builders, plumbers, electricians, and contractors in northern KZN can dominate online with the right strategy. Here's how.",
      body: [
        "Trades are still won and lost on referrals — but the referral now starts with a Google search. If a homeowner in Newcastle searches \"plumber near me\" at 9pm, they want a number and a WhatsApp link, not a brochure.",
        "Build a site with three things on the home page: services in plain language, a phone + WhatsApp button above the fold, and proof (photos, reviews, areas you serve).",
        "Add a Google Business profile, post one job photo a week, and ask happy clients for a 1-line review. That's it. That's the playbook.",
      ],
    },
  ],
};

export type Post = (typeof SITE.posts)[number];
