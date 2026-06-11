// Centralized site content - easy to edit later.
import portfolioNyatee from "@/assets/portfolio-nyatee.webp";
import portfolioEvents from "@/assets/portfolio-events.webp";
import portfolioUmzilikazi from "@/assets/portfolio-umzilikazi.webp";
import portfolioKeepNNAlive from "@/assets/portfolio-keepnnalive.webp";
import blogNorthernKznBehind from "@/assets/blog-northern-kzn-behind.webp";
import blogVryheidZululand from "@/assets/blog-vryheid-zululand.webp";
import blogConstructionTrades from "@/assets/blog-construction-trades.webp";
import blogNewcastleDesigner from "@/assets/blog-newcastle-designer.webp";
import blogVryheidCost from "@/assets/blog-vryheid-cost.webp";
import blogLadysmithGoogle from "@/assets/blog-ladysmith-google.webp";
import blogMadadeniOsizweni from "@/assets/blog-madadeni-osizweni.webp";
import blogUtrechtDundee from "@/assets/blog-utrecht-dundee.webp";
import blogSeoChecklist from "@/assets/blog-seo-checklist.webp";

export const SITE = {
  name: "Ntombii Tech",
  location: "Newcastle, KZN",
  tagline: "Digital Product Studio",
  whatsapp: "27812360230",
  whatsappDisplay: "+27 81 236 0230",
  socials: {
    instagram: "https://www.instagram.com/ntombii_tech",
    facebook: "https://www.facebook.com/share/1DVpeKGEGi/",
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
        "Ntombii Tech rebuilt our entire site in under two months - roughly 90% faster than the previous agency we worked with. Professional from the first call to handover, and the result speaks for itself.",
      name: "MK Nyathi",
      role: "Founder, Nyatee Foundation",
      project: "nyatee",
    },
    {
      quote:
        "They handled both our branding and the full build, and only charged me once. I only found out later most agencies bill those separately - that alone tells you the kind of integrity you're dealing with.",
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
      title: "Interfaces",
      summary: "Product UI and design systems built to scale from MVP to enterprise - interfaces your team and customers will actually love using.",
      includes: ["Product UI design", "Design systems", "Prototypes & flows", "Usability testing"],
    },
    {
      n: "02",
      title: "Brand systems",
      summary: "Identities with backbone - logo, type, voice, colour. Built to last across every surface your business touches.",
      includes: ["Logo & wordmark", "Brand guidelines", "Colour & typography", "Voice & messaging"],
    },
    {
      n: "03",
      title: "Graphic design",
      summary: "Print-ready and digital design that makes your business look the part - every flyer, social post and pitch deck, every time.",
      includes: ["Social templates", "Pitch decks", "Posters & flyers", "Campaign artwork"],
    },
    {
      n: "04",
      title: "Web engineering",
      summary: "React, Next.js, headless. Sub-1s loads, real Lighthouse scores, and SEO baked in from day one.",
      includes: ["React & Next.js builds", "Performance tuning", "SEO foundations", "Form & lead capture"],
    },
    {
      n: "05",
      title: "Print services",
      summary: "Flyers, brochures, business cards and more - ordered through us, delivered to your door. One contact, one quality bar.",
      includes: ["Business cards", "Flyers & brochures", "Banners & posters", "Door-to-door delivery"],
    },
    {
      n: "06",
      title: "Ink & toner supply",
      summary: "Keep your office running. Premium cartridges sourced and delivered fast across KZN - no more emergency runs to the shop.",
      includes: ["Original & compatible cartridges", "Bulk office supply", "Fast KZN delivery", "Account billing available"],
    },
    {
      n: "07",
      title: "Signage solutions",
      summary: "Banners, shop fronts, vehicle branding. Your name, impossible to miss - designed, produced and installed end to end.",
      includes: ["Shop front signage", "Pull-up & PVC banners", "Vehicle branding", "Design + install"],
    },
    {
      n: "08",
      title: "Corporate gifts",
      summary: "Branded gifts that work harder than a handshake - perfect for clients, staff and events. Sourced, branded and delivered.",
      includes: ["Branded merch", "Event giveaways", "Staff onboarding kits", "Client thank-yous"],
    },
  ],
  projects: [
    { slug: "nyatee", title: "Nyatee Foundation", category: "Non-Profit Branding & Web", image: portfolioNyatee as string | null, href: "https://nyateefoundation.org.za/" },
    { slug: "events", title: "Sknowhite Events", category: "Luxury Events & Hospitality", image: portfolioEvents as string | null, href: "https://sknowhiteevents.co.za/" },
    { slug: "umzilikazi", title: "Umzilikazi Senior Secondary", category: "School Website", image: portfolioUmzilikazi as string | null, href: "https://umzilikazi.vercel.app/" },
    { slug: "keepnnalive", title: "Keep Newcastle Alive With Possibilities", category: "Community & Civic Web", image: portfolioKeepNNAlive as string | null, href: "https://keepnnalive.org.za/" },
    { slug: "snesenzo", title: "Snesenzo Security Group", category: "Security · Brand & Web", image: null as string | null, href: "#" },
    { slug: "spazatap", title: "Spaza Tap", category: "Local Commerce App", image: null as string | null, href: "#" },
    { slug: "rnb-gathering", title: "RnB Soulful Groove Gathering", category: "Event Branding & Web", image: null as string | null, href: "#" },
    { slug: "auntywama", title: "Aunty Wama 2K", category: "Event · Brand & Promo Site", image: null as string | null, href: "#" },
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
      q: "How much does a website cost in Newcastle, KZN?",
      a: "Starter websites begin at R2,500, Business builds at R3,500, and Premium builds from R7,500. Most Newcastle small businesses launch on the Business package. Custom builds, e-commerce and booking systems are quoted after a short WhatsApp chat.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Starter sites typically launch in under a week. Business websites run a 72-hour design sprint and ship in 1–2 weeks. Larger custom builds, school sites and e-commerce stores usually take 2–4 weeks depending on content and approvals.",
    },
    {
      q: "Do you build websites for small businesses?",
      a: "Yes. Most of our clients are small businesses, sole traders and family-run shops across Newcastle, Madadeni, Osizweni, Dundee and the wider Amajuba District. We keep pricing fair and the process simple over WhatsApp.",
    },
    {
      q: "Do you build websites for schools and NGOs?",
      a: "Yes. We've built sites for KZN schools, NGOs, churches and community organisations — including Umzilikazi Senior Secondary, Nyatee Foundation and Keep Newcastle Alive With Possibilities. We understand budgets are tight and design accordingly.",
    },
    {
      q: "Can you help my business show on Google?",
      a: "Yes. Every website we build is structured for Google from day one — clean code, fast load, local schema, and proper page titles. We also help set up your Google Business Profile so customers in Newcastle and KZN can find and call you.",
    },
    {
      q: "Do you offer local SEO?",
      a: "Yes — local SEO for Newcastle and KZN is one of our core services. That includes town-targeted pages, local schema, Google Business Profile setup, and content built around what your customers actually search for.",
    },
    {
      q: "Can you connect WhatsApp, booking forms or payments?",
      a: "Yes. We add WhatsApp click-to-chat buttons, contact and booking forms, calendar bookings, and payment gateways (Payfast, Yoco, Stripe) depending on what your business needs.",
    },
    {
      q: "Do you offer website maintenance?",
      a: "Yes. We offer ongoing maintenance, content updates, hosting support and security checks — billed monthly or per change. Most clients message us on WhatsApp when something needs updating.",
    },
    {
      q: "Do I own my website after it is built?",
      a: "Yes. You fully own your website, domain, content and brand assets. We hand over all logins and files at launch — nothing is locked behind us.",
    },
    {
      q: "Can you redesign my old website?",
      a: "Yes. Website redesigns are a big part of what we do. We can rebuild your existing site on a faster, modern foundation, keep your content, and improve how it ranks on Google and converts visitors into calls.",
    },
  ],
  posts: [
    {
      slug: "why-northern-kzn-behind-online-how-to-lead",
      title: "Why Northern KZN Is Behind Online - And How Your Business Can Lead",
      category: "Northern KZN",
      date: "Apr 16, 2026",
      cover: blogNorthernKznBehind,
      excerpt: "Northern KZN lags behind Gauteng and Western Cape in online business presence. Here's why - and how forward-thinking local businesses can take the lead.",
      body: [
        "If you live in Newcastle, Madadeni, Dundee or anywhere across northern KZN, you've felt it: the local economy moves at a different pace online than Johannesburg or Cape Town. Search a service and you'll see ads from Gauteng companies long before any local listing appears.",
        "The gap isn't talent. The gap is presence. Most local businesses still rely on word-of-mouth and a Facebook page, while customers - and competitors - have moved to Google, WhatsApp Business, and TikTok.",
        "The fix is simpler than it sounds: a fast mobile site, a clear WhatsApp handoff, a Google Business profile that's actually filled out, and one weekly piece of local content. Do that for 90 days and you'll outrank most competitors in your town.",
        "Northern KZN doesn't need to copy Sandton. It needs to show up online with the same care it already shows in person.",
      ],
    },
    {
      slug: "vryheid-zululand-commerce-online",
      title: "Vryheid & Zululand Commerce - The Digital Opportunity",
      category: "Northern KZN",
      date: "Apr 16, 2026",
      cover: blogVryheidZululand,
      excerpt: "Vryheid, Pongola, Nongoma - Zululand District's commercial hubs are missing out online. Here's the digital blueprint for northern KZN businesses.",
      body: [
        "Zululand's commercial heart - Vryheid, Pongola, Nongoma - has serious buying power, but online discoverability is patchy. Search for an electrician in Vryheid and Google often shows results from Newcastle or Durban.",
        "That's not a customer problem; it's a presence problem. The businesses that rank are simply the ones that posted, replied, and updated their info.",
        "The blueprint: a one-page site optimised for your town name + service, a WhatsApp click-to-chat button, a Google Business profile updated weekly, and three short videos a month showing your work. Cheap to start, compounds fast.",
      ],
    },
    {
      slug: "northern-kzn-construction-trades-online",
      title: "Construction & Trades in Northern KZN - The Digital Playbook",
      category: "Northern KZN",
      date: "Apr 16, 2026",
      cover: blogConstructionTrades,
      excerpt: "Builders, plumbers, electricians, and contractors in northern KZN can dominate online with the right strategy. Here's how.",
      body: [
        "Trades are still won and lost on referrals - but the referral now starts with a Google search. If a homeowner in Newcastle searches \"plumber near me\" at 9pm, they want a number and a WhatsApp link, not a brochure.",
        "Build a site with three things on the home page: services in plain language, a phone + WhatsApp button above the fold, and proof (photos, reviews, areas you serve).",
        "Add a Google Business profile, post one job photo a week, and ask happy clients for a 1-line review. That's it. That's the playbook.",
      ],
    },
    {
      slug: "best-web-designer-newcastle-2026",
      title: "Best Web Designer in Newcastle - What to Look For in 2026",
      category: "Newcastle",
      date: "Apr 18, 2026",
      cover: blogNewcastleDesigner,
      excerpt: "Most Newcastle businesses pick a web designer on price alone - and pay for it later. Here's what actually matters when hiring locally in 2026.",
      body: [
        "Newcastle has more web designers than ever - most of them part-time, most of them building on free templates, almost none of them building for SEO. The price tag looks great until your site loads in 8 seconds and ranks nowhere.",
        "First filter: do they show real, live local work you can click? Templates and dribbble screenshots don't count. Ask for the URL. Open it on your phone. Time the load.",
        "Second filter: do they talk about Google Business Profile, schema markup, and local SEO? If your designer can't explain how you'll rank for 'web designer Newcastle' or 'plumber Madadeni', they're building you a brochure, not a lead engine.",
        "Third filter: how do they communicate? In Newcastle, WhatsApp is the lifeblood. If they default to long emails and weekly check-ins, your project will stall.",
        "Pricing in Newcastle ranges from R1,500 (template flips) to R25,000+ (custom builds). The sweet spot for most local businesses is R3,500–R7,500 - enough budget for a real strategy, not so much that you're paying agency overheads.",
        "Ntombii Tech sits in that range, ships in days not months, and every site we deliver is built to rank locally. See our work, then message us on WhatsApp.",
      ],
    },
    {
      slug: "how-much-does-website-cost-vryheid",
      title: "How Much Does a Website Cost in Vryheid? (2026 Guide)",
      category: "Vryheid",
      date: "Apr 20, 2026",
      cover: blogVryheidCost,
      excerpt: "A clear, honest breakdown of website pricing for Vryheid businesses - from R2,500 starters to R25,000+ custom builds. No hidden costs.",
      body: [
        "If you've asked three Vryheid web designers for a quote, you've probably gotten three wildly different numbers. Here's the actual breakdown of what a website costs in Vryheid in 2026, and what you should expect at each tier.",
        "R1,500–R2,500 (Starter): one-page site, WhatsApp button, contact form, mobile responsive. Good enough for a tradesman, salon, or solo professional. Anything cheaper is usually a free template with someone's logo slapped on.",
        "R3,500–R5,500 (Business): up to 6 pages, proper SEO setup, Google Maps integration, basic photography touch-ups, performance tuning. The right choice for most Vryheid retailers, schools, and service businesses.",
        "R7,500–R15,000 (Premium): up to 10 pages, custom UI, conversion-optimised structure, advanced SEO, brand identity work bundled in. Aimed at established Vryheid businesses (mining suppliers, lodges, agri-operations) that need real lead generation.",
        "R15,000+ (Custom): web apps, e-commerce, booking systems, internal tools. Quoted per project after a discovery call.",
        "What inflates the cost? Custom photography, complex e-commerce, multi-language (English/Zulu), and ongoing content management retainers. None of those are necessary day one.",
        "Talk to us on WhatsApp - we'll quote your Vryheid project in 24 hours, no agency runaround.",
      ],
    },
    {
      slug: "ladysmith-businesses-losing-customers-google",
      title: "Why Ladysmith Businesses Are Losing Customers to Google",
      category: "Ladysmith",
      date: "Apr 22, 2026",
      cover: blogLadysmithGoogle,
      excerpt: "Ladysmith has decades of brand equity offline - but customers now decide online. Here's how to stop losing them to bigger Newcastle and Durban competitors.",
      body: [
        "Walk down Murchison Street and you'll see businesses that have been trusted for 30+ years. Now Google 'mechanic Ladysmith' or 'plumber Ladysmith' - and the results are mostly Newcastle, Pietermaritzburg, or Durban operators paying for ads.",
        "That's not because Ladysmith businesses are worse. It's because they're invisible to the search engine. No website, no Google Business profile, no schema markup, no local SEO. Customers can't find what doesn't exist online.",
        "The fix is faster than you'd think. A clean one-page site mentioning Ladysmith, Steadville, Ezakheni, and Acaciavale ranks within weeks. Add a Google Business profile (free), ask three customers for reviews, and you'll outrank most Newcastle competitors for local Ladysmith searches.",
        "Tourism operators - especially around the Battlefields - are the biggest losers right now. Most travellers book through Google. If your B&B isn't there, you simply don't exist to them.",
        "Ladysmith businesses don't need to copy Sandton. They just need to show up online with the same care they show in person. We can help - message us on WhatsApp.",
      ],
    },
    {
      slug: "madadeni-osizweni-getting-found-online",
      title: "Madadeni & Osizweni - Getting Your Township Business Found Online",
      category: "Madadeni",
      date: "Apr 24, 2026",
      cover: blogMadadeniOsizweni,
      excerpt: "Madadeni and Osizweni have thousands of small businesses but almost zero online presence. Here's the simple playbook to be the first one your customers find.",
      body: [
        "Madadeni and Osizweni are two of the largest townships in South Africa, with thriving local economies - spazas, salons, schools, funeral parlours, trades, transport. But search any of those services on Google and you'll see almost nothing local.",
        "That's a massive opportunity. Whoever shows up first online wins for years. The bar is incredibly low: you don't need a R20,000 site, you need a clear one-pager that mentions your section (Section 1, Section 2, etc.), your service, and a WhatsApp button.",
        "Step one: a starter site (R2,500) with your name, what you do, your area, and click-to-WhatsApp. Step two: a free Google Business Profile, properly filled out, with photos. Step three: ask three happy customers for a Google review.",
        "That's it. Three steps. Most Madadeni and Osizweni businesses haven't done any of them - which means doing all three puts you ahead of 95% of your local competition.",
        "We build these sites in days, not months, and we communicate entirely on WhatsApp. Drop us a message.",
      ],
    },
    {
      slug: "utrecht-dundee-small-business-digital-guide",
      title: "Utrecht & Dundee - Small Business Digital Guide for 2026",
      category: "Northern KZN",
      date: "Apr 26, 2026",
      cover: blogUtrechtDundee,
      excerpt: "A practical digital guide for Utrecht, Dundee, Glencoe, and Dannhauser small businesses - including farms, lodges, trades, and tourism operators.",
      body: [
        "If you run a business in Utrecht, Dundee, Glencoe, or Dannhauser, your customer base is bigger than your town - it's the whole catchment plus everyone passing through to the Battlefields, the Berg, or up to Mpumalanga. A website is how you capture that wider audience.",
        "Tourism operators (B&Bs, lodges, game parks, museums) need photo-heavy sites with booking enquiries via WhatsApp. Search 'Battlefields accommodation' and the listings that load fast and look modern win every time.",
        "Trades and agri-suppliers need credibility sites - capability statements, areas served, certifications, contact info above the fold. A R3,500 Business build is the right tier here.",
        "Schools and community organisations benefit hugely from a simple, modern site that parents and donors trust. Old, broken sites actively hurt enrolment and donations.",
        "The common thread: mobile-first, fast-loading, and locally optimised. We've shipped all of these across Northern KZN. Talk to us on WhatsApp.",
      ],
    },
    {
      slug: "northern-kzn-local-seo-checklist",
      title: "Northern KZN Local SEO Checklist - The 10 Steps That Actually Work",
      category: "Northern KZN",
      date: "Apr 28, 2026",
      cover: blogSeoChecklist,
      excerpt: "A free, practical local SEO checklist for any Northern KZN business - Newcastle, Vryheid, Ladysmith, Dundee, Utrecht and beyond. No fluff, just what works.",
      body: [
        "Local SEO isn't magic - it's a checklist. If you do these 10 things, you will outrank most Northern KZN competitors within 60–90 days. Guaranteed.",
        "1. Mobile-first website that loads in under 2 seconds. Test on your phone, on data, not WiFi.",
        "2. Your town name in your page title (e.g. 'Plumber in Vryheid - 24/7 Service'). This is the single biggest local SEO lever.",
        "3. Google Business Profile, fully filled out - services, hours, photos, posts. Free, takes 30 minutes.",
        "4. NAP consistency: your Name, Address, Phone identical on your site, GBP, Facebook, and any directory.",
        "5. Schema markup (LocalBusiness, FAQPage, Service). Most local sites skip this - that's free ranking points for you.",
        "6. A page per town you serve. Don't cram 'Newcastle, Vryheid, Ladysmith' onto one page. Build a clean page per town.",
        "7. Real photos of real work. Stock photos kill local trust signals.",
        "8. 5+ Google reviews. Ask every happy customer in person. One sentence is enough.",
        "9. Local backlinks: chamber of commerce, school newsletters, Facebook community groups, Brabys.",
        "10. One blog post a month answering a real local question ('How much does X cost in [town]?'). Compounds for years.",
        "Want help executing all 10? That's literally what we do - message us on WhatsApp.",
      ],
    },
  ],
};

export type Post = (typeof SITE.posts)[number];
