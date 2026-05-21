// Data for 60 local SEO pages: 6 services × 10 towns.

export type Town = {
  slug: string;
  name: string;
  nearby: string[];
};

export const TOWNS: Town[] = [
  { slug: "newcastle", name: "Newcastle", nearby: ["Madadeni", "Osizweni", "Dannhauser"] },
  { slug: "madadeni", name: "Madadeni", nearby: ["Newcastle", "Osizweni", "Ngagane"] },
  { slug: "osizweni", name: "Osizweni", nearby: ["Madadeni", "Newcastle", "Charlestown"] },
  { slug: "dannhauser", name: "Dannhauser", nearby: ["Newcastle", "Hattingspruit", "Utrecht"] },
  { slug: "utrecht", name: "Utrecht", nearby: ["Dannhauser", "Newcastle", "Vryheid"] },
  { slug: "ladysmith", name: "Ladysmith", nearby: ["Colenso", "Estcourt", "Bergville"] },
  { slug: "dundee", name: "Dundee", nearby: ["Glencoe", "Nquthu", "Wasbank"] },
  { slug: "glencoe", name: "Glencoe", nearby: ["Dundee", "Wasbank", "Greytown"] },
  { slug: "estcourt", name: "Estcourt", nearby: ["Colenso", "Weenen", "Bergville"] },
  { slug: "bergville", name: "Bergville", nearby: ["Estcourt", "Winterton", "Ladysmith"] },
];

export type Card = { title: string; body: string };

export type LocationService = {
  key: string;
  navLabel: string;
  eyebrow: string;
  heroTitle: (t: string) => string;
  heroItalic: string;
  heroBody: (t: string) => string;
  heroCta: string;
  heroCtaMessage: (t: string) => string;
  s1Label: string;
  s1Heading: (t: string) => string;
  s1Body?: (t: string) => string;
  s1Cards: Card[];
  s2Label: string;
  s2Heading: (t: string) => string;
  s2Body: (t: string, nearby: string[]) => string;
  s2Cards?: Card[];
  s3Label: string;
  s3Heading: string;
  s3Body?: (t: string) => string;
  ctaButton: string;
  ctaMessage: (t: string) => string;
  seoTitle: (t: string) => string;
  seoDescription: (t: string) => string;
  keywords: (t: string) => string;
  parentHref: string;
};

const nearbyList = (nearby: string[]) =>
  nearby.length === 0
    ? ""
    : nearby.length === 1
      ? nearby[0]
      : `${nearby.slice(0, -1).join(", ")} and ${nearby[nearby.length - 1]}`;

export const LOCATION_SERVICES: LocationService[] = [
  {
    key: "graphic-design",
    navLabel: "Graphic Design",
    eyebrow: "Graphic Design",
    heroTitle: (t) => `Graphic design services in ${t}.`,
    heroItalic: "Professional. Fast. Print-ready.",
    heroBody: (t) =>
      `Ntombii Tech provides professional graphic design to businesses in ${t} and surrounding areas. Flyers, business cards, social media graphics, brochures and more — designed fast and delivered digitally or to print.`,
    heroCta: "Send your brief on WhatsApp",
    heroCtaMessage: (t) =>
      `Hi Ntombii Tech — I need graphic design in ${t}. Here's my brief:`,
    s1Label: "What we design",
    s1Heading: (t) => `What we design for ${t} businesses.`,
    s1Cards: [
      { title: "Flyers & event posters", body: "Eye-catching A5/A4 designs for events, promotions and sale announcements. Print-ready files delivered fast." },
      { title: "Business cards", body: "Professional cards in single or double-sided layouts. Gloss, matte or soft-touch finish options." },
      { title: "Social media graphics", body: "Post designs, story templates and profile banners that stay consistent across every platform." },
      { title: "Brochures & catalogues", body: "Multi-page folded brochures and product catalogues designed to sell." },
      { title: "Signage artwork", body: "Print-ready signage files at the correct size, bleed and resolution for any sign maker." },
      { title: "Certificates & programmes", body: "Award certificates and event programmes for schools, organisations and ceremonies." },
      { title: "Presentation decks", body: "PowerPoint and PDF pitch decks designed to impress in any boardroom." },
    ],
    s2Label: "Serving the area",
    s2Heading: (t) => `Serving ${t}.`,
    s2Body: (t, nearby) =>
      `We work with businesses, schools, NGOs and entrepreneurs in ${t} and nearby areas including ${nearbyList(nearby)}. Fast turnaround — most jobs within 24 to 48 hours. Files delivered digitally or we manage print and delivery for you.`,
    s3Label: "Get started",
    s3Heading: "Ready to look the part?",
    s3Body: () =>
      `WhatsApp us your brief — tell us what you need and when. We'll send a quote fast.`,
    ctaButton: "WhatsApp Ntombii Tech",
    ctaMessage: (t) => `Hi Ntombii Tech — I'd like a graphic design quote in ${t}.`,
    seoTitle: (t) => `Graphic Design Services ${t} KZN | Ntombii Tech`,
    seoDescription: (t) =>
      `Professional graphic design in ${t}, KwaZulu-Natal. Flyers, business cards, social media and more. Fast turnaround. WhatsApp Ntombii Tech for a free quote.`,
    keywords: (t) =>
      `${t} graphic design, graphic design services ${t} KZN, flyer design ${t}, business card design ${t}, social media graphics ${t}`,
    parentHref: "/services/graphic-design",
  },

  {
    key: "printing-services",
    navLabel: "Printing Services",
    eyebrow: "Printing Services",
    heroTitle: (t) => `Professional printing in ${t}.`,
    heroItalic: "Order on WhatsApp. Delivered to your door.",
    heroBody: (t) =>
      `Ntombii Tech handles professional printing for businesses, schools, NGOs and organisations in ${t}. Business cards, flyers, brochures, banners and more. One contact — we manage everything.`,
    heroCta: "Get a print quote",
    heroCtaMessage: (t) => `Hi Ntombii Tech — I need printing in ${t}. Quantity / details:`,
    s1Label: "What we print",
    s1Heading: () => "What we print.",
    s1Cards: [
      { title: "Business cards", body: "Gloss, matte or soft-touch. Single or double-sided." },
      { title: "Flyers", body: "A5, A4 and custom sizes. Any quantity." },
      { title: "Brochures", body: "Tri-fold and saddle-stitched. Professional finish." },
      { title: "Posters", body: "A3 to large format. Indoor and outdoor." },
      { title: "Banners", body: "Vinyl banners and roller banners for events." },
      { title: "Stickers & labels", body: "Custom shapes and sizes." },
      { title: "Certificates", body: "Printed on certificate paper or card." },
      { title: "Branded stationery", body: "Letterheads, compliment slips and envelopes." },
    ],
    s2Label: "Delivery",
    s2Heading: (t) => `Delivery to ${t}.`,
    s2Body: (t, nearby) =>
      `We deliver printed materials directly to businesses in ${t}. You don't need to travel or deal with multiple suppliers. Brief us on WhatsApp, approve your proof, and receive your print. We also serve ${nearbyList(nearby)}.`,
    s3Label: "Get started",
    s3Heading: "What do you need printed?",
    s3Body: () =>
      `Send us a WhatsApp — tell us what you need and when. We'll send a quote fast and sort the rest.`,
    ctaButton: "Order print on WhatsApp",
    ctaMessage: (t) => `Hi Ntombii Tech — I'd like a printing quote in ${t}.`,
    seoTitle: (t) => `Printing Services ${t} KZN | Ntombii Tech`,
    seoDescription: (t) =>
      `Professional printing in ${t}, KwaZulu-Natal. Flyers, business cards, brochures, banners delivered to your door. WhatsApp Ntombii Tech for a fast quote.`,
    keywords: (t) =>
      `printing services ${t}, flyer printing ${t} KZN, business card printing ${t}, banner printing ${t}, brochure printing ${t}`,
    parentHref: "/services/printing",
  },

  {
    key: "branding",
    navLabel: "Branding & Identity",
    eyebrow: "Branding & Identity",
    heroTitle: (t) => `Brand identity for ${t} businesses.`,
    heroItalic: "Look serious. Build trust. Win clients.",
    heroBody: (t) =>
      `Ntombii Tech builds professional brand identities for businesses in ${t} — from logo design to full brand systems. Whether you're starting fresh or rebranding, we give your business the visual identity it deserves.`,
    heroCta: "Start your brand",
    heroCtaMessage: (t) =>
      `Hi Ntombii Tech — I'd like a branding & identity quote in ${t}.`,
    s1Label: "What's included",
    s1Heading: () => "What's included.",
    s1Cards: [
      { title: "Logo design", body: "Primary logo, alternate versions and icon mark. Vector files included." },
      { title: "Colour palette", body: "Defined brand colours for print, screen and signage." },
      { title: "Typography", body: "Font selection and usage guidelines." },
      { title: "Brand guidelines", body: "Simple document for consistent use across all materials." },
      { title: "Business stationery", body: "Cards, letterheads and email signatures." },
      { title: "Social media kit", body: "Profile images, cover photos and post templates." },
    ],
    s2Label: "For local businesses",
    s2Heading: (t) => `For ${t} businesses.`,
    s2Body: (t, nearby) =>
      `We work with startups, established businesses, NGOs and entrepreneurs in ${t} and surrounding areas including ${nearbyList(nearby)}. A strong brand is the foundation of everything — your website, your print, your signage, your staff uniforms. Get it right from the start.`,
    s3Label: "Get started",
    s3Heading: "Ready to build a brand that means business?",
    s3Body: () =>
      `WhatsApp us for a free quote. No forms. No waiting. Just a conversation.`,
    ctaButton: "WhatsApp us for a free quote",
    ctaMessage: (t) =>
      `Hi Ntombii Tech — I'd like to start a branding project in ${t}.`,
    seoTitle: (t) => `Branding & Logo Design ${t} KZN | Ntombii Tech`,
    seoDescription: (t) =>
      `Professional branding and logo design in ${t}, KwaZulu-Natal. Full brand identity systems for businesses, NGOs and startups. Free quote on WhatsApp.`,
    keywords: (t) =>
      `branding services ${t}, logo design ${t} KZN, brand identity ${t}, corporate identity ${t}, rebranding ${t}`,
    parentHref: "/services/branding",
  },

  {
    key: "ink-toner",
    navLabel: "Ink & Toner Supply",
    eyebrow: "Ink & Toner Supply",
    heroTitle: (t) => `Ink & toner delivered in ${t}.`,
    heroItalic: "Never run out at the wrong time.",
    heroBody: (t) =>
      `Ntombii Tech supplies premium ink and toner cartridges to businesses, schools and offices in ${t}. Order on WhatsApp and get your cartridges delivered — no queues, no delays.`,
    heroCta: "Order cartridges now",
    heroCtaMessage: (t) =>
      `Hi Ntombii Tech — I need ink/toner delivered in ${t}. Printer model:`,
    s1Label: "What we supply",
    s1Heading: () => "What we supply.",
    s1Cards: [
      { title: "Ink cartridges", body: "HP, Canon, Epson, Brother and all major brands." },
      { title: "Toner cartridges", body: "HP, Samsung, Xerox, Ricoh, Kyocera and more." },
      { title: "Bulk orders", body: "Regular supply for high-volume offices and businesses." },
      { title: "Fast delivery", body: "Delivered to your door in the area and nearby towns." },
    ],
    s2Label: "How to order",
    s2Heading: () => "How to order.",
    s2Body: (t) =>
      `WhatsApp us your printer make and model (or the cartridge number) and we'll confirm availability and price immediately. We deliver across ${t} and the wider Northern KZN region.`,
    s2Cards: [
      { title: "WhatsApp your printer model", body: "Send us your printer brand and model number or your cartridge number." },
      { title: "Get your quote", body: "We confirm stock and price immediately. No hidden fees." },
      { title: "Receive delivery", body: "Cartridges delivered to your address. Pay on delivery or EFT." },
    ],
    s3Label: "Get started",
    s3Heading: "Running low on ink?",
    s3Body: () => `WhatsApp us your printer model and we'll sort you out fast.`,
    ctaButton: "Order ink or toner now",
    ctaMessage: (t) =>
      `Hi Ntombii Tech — I need ink/toner in ${t}. My printer is:`,
    seoTitle: (t) => `Ink & Toner Cartridge Delivery ${t} KZN | Ntombii Tech`,
    seoDescription: (t) =>
      `Premium ink and toner cartridges delivered in ${t}, KwaZulu-Natal. All major printer brands. Fast delivery. Order on WhatsApp — Ntombii Tech.`,
    keywords: (t) =>
      `ink cartridges ${t}, toner supply ${t} KZN, printer cartridges ${t}, HP toner ${t}, Canon ink ${t}`,
    parentHref: "/services/ink-toner",
  },

  {
    key: "signage",
    navLabel: "Signage Solutions",
    eyebrow: "Signage Solutions",
    heroTitle: (t) => `Signage solutions in ${t}.`,
    heroItalic: "Make your business impossible to miss.",
    heroBody: (t) =>
      `Ntombii Tech designs and delivers professional signage for businesses in ${t} — from shop fronts to vehicle branding, banners to office signs. Get noticed. Get remembered.`,
    heroCta: "Get a signage quote",
    heroCtaMessage: (t) =>
      `Hi Ntombii Tech — I need a signage quote in ${t}. Details:`,
    s1Label: "Signage we provide",
    s1Heading: () => "Signage we provide.",
    s1Cards: [
      { title: "Shop front signage", body: "Fascia boards, built-up lettering and name boards." },
      { title: "Vehicle branding", body: "Full and half wraps, decals and fleet branding." },
      { title: "Vinyl banners", body: "Large format outdoor and event banners." },
      { title: "Pull-up stands", body: "Roller banners for exhibitions and in-store use." },
      { title: "Pavement signs", body: "A-frames and pavement boards for daily specials." },
      { title: "Office & directional", body: "Internal wayfinding and reception boards." },
    ],
    s2Label: "Serving the area",
    s2Heading: (t) => `Serving ${t}.`,
    s2Body: (t, nearby) =>
      `We work with businesses, retailers, schools and organisations in ${t} and surrounding areas including ${nearbyList(nearby)}. Your signage works 24 hours a day — it's your most consistent marketing asset. We handle design, production and delivery so you don't have to manage multiple suppliers.`,
    s3Label: "Get started",
    s3Heading: "Let's get your business noticed.",
    s3Body: () =>
      `WhatsApp us for a free signage quote. Tell us what you need and we'll get back to you fast.`,
    ctaButton: "Get a free signage quote",
    ctaMessage: (t) => `Hi Ntombii Tech — I'd like a signage quote in ${t}.`,
    seoTitle: (t) => `Signage Solutions ${t} KZN | Ntombii Tech`,
    seoDescription: (t) =>
      `Professional signage for businesses in ${t}, KwaZulu-Natal. Shop fronts, vehicle branding, banners and more. WhatsApp Ntombii Tech for a free quote.`,
    keywords: (t) =>
      `signage ${t}, sign company ${t} KZN, shop front signage ${t}, vehicle branding ${t}, vinyl banners ${t}`,
    parentHref: "/services/signage",
  },

  {
    key: "corporate-gifts",
    navLabel: "Corporate Gifts",
    eyebrow: "Corporate Gifts",
    heroTitle: (t) => `Corporate gifts in ${t}.`,
    heroItalic: "Branded. Delivered. Remembered.",
    heroBody: (t) =>
      `Ntombii Tech sources and delivers branded corporate gifts for businesses, NGOs, schools and events in ${t}. Staff gifts, client gifts, event giveaways and year-end packs — all carrying your logo.`,
    heroCta: "Get a gifts quote",
    heroCtaMessage: (t) =>
      `Hi Ntombii Tech — I'd like a corporate gifts quote in ${t}. Occasion / quantity:`,
    s1Label: "What we supply",
    s1Heading: () => "What we supply.",
    s1Cards: [
      { title: "Branded clothing", body: "Golf shirts, caps and jackets with your logo." },
      { title: "Promotional items", body: "Pens, notebooks, mugs, USB drives and water bottles." },
      { title: "Executive gifts", body: "Premium branded items for key clients." },
      { title: "Year-end packs", body: "Staff and client appreciation gifts." },
      { title: "Event giveaways", body: "Branded items for conferences and ceremonies." },
      { title: "Gift hampers", body: "Curated branded hampers for VIP clients." },
    ],
    s2Label: "Local businesses & organisations",
    s2Heading: (t) => `For ${t} businesses & organisations.`,
    s2Body: (t, nearby) =>
      `We supply corporate gifts to businesses, government departments, schools, NGOs and community organisations in ${t} and surrounding areas including ${nearbyList(nearby)}. No order too small — we work with any budget and any quantity. Delivery to your ${t} address included.`,
    s3Label: "Get started",
    s3Heading: "Reward your team. Impress your clients.",
    s3Body: () =>
      `WhatsApp us to discuss your corporate gifting needs. No order too small, no brief too big.`,
    ctaButton: "WhatsApp us for a quote",
    ctaMessage: (t) =>
      `Hi Ntombii Tech — I'd like a corporate gifts quote in ${t}.`,
    seoTitle: (t) => `Corporate Gifts ${t} KZN | Ntombii Tech`,
    seoDescription: (t) =>
      `Branded corporate gifts delivered in ${t}, KwaZulu-Natal. Staff gifts, client gifts, event giveaways and year-end packs. WhatsApp Ntombii Tech.`,
    keywords: (t) =>
      `corporate gifts ${t}, branded gifts ${t} KZN, promotional items ${t}, staff gifts ${t}, year-end gifts ${t}`,
    parentHref: "/services/corporate-gifts",
  },
];

export const getLocationService = (key: string) =>
  LOCATION_SERVICES.find((s) => s.key === key);

export const getTown = (slug: string) => TOWNS.find((t) => t.slug === slug);
