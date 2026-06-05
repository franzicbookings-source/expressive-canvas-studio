// Detailed content for the 6 individual service pages.
export type ServiceCard = { title: string; body: string };

export type ServiceDetail = {
  slug: string;
  navLabel: string;
  // SEO
  seoTitle: string;
  seoDescription: string;
  keywords?: string;
  // Hero
  eyebrow: string;
  headline: string; // plain
  headlineItalic: string; // italic serif part
  body: string;
  ctaLabel: string;
  ctaMessage: string; // WhatsApp prefilled message
  // Section 01 - What we do / What we design / What we print / What we supply / What we offer
  s1Label: string;
  s1Heading: string;
  s1Body: string;
  s1Cards: ServiceCard[];
  // Section 02 - Who/Why/Turnaround
  s2Label: string;
  s2Heading: string;
  s2Body?: string;
  s2Cards?: ServiceCard[];
  // Section 03 - Process / How it works
  s3Label: string;
  s3Heading: string;
  s3Body?: string;
  s3Cards: ServiceCard[]; // numbered 01/02/03 from index
  // Section 04 - CTA
  ctaHeading: string;
  ctaBody: string;
  ctaButton: string;
  ctaButtonMessage: string;
  // Related internal links
  related: Array<{ label: string; href: string }>;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  // ───────────────────────── BRANDING & IDENTITY ─────────────────────────
  {
    slug: "branding",
    navLabel: "Branding & Identity",
    seoTitle: "Branding & Identity Services Newcastle KZN | Ntombii Tech",
    seoDescription:
      "Professional branding and logo design services in Newcastle, KwaZulu-Natal. Serving Amajuba District, Ladysmith, Dundee and wider KZN. Get a free quote on WhatsApp.",
    keywords:
      "branding Newcastle, logo design KZN, brand identity Amajuba, corporate identity Ladysmith, rebranding Northern KZN",
    eyebrow: "Branding & Identity",
    headline: "Your brand is the first thing they judge.",
    headlineItalic: "Make it count.",
    body:
      "Before a client reads your proposal, visits your store, or picks up the phone - they've already formed an opinion. We build brand identities that make that first impression work in your favour. Based in Newcastle, serving businesses across the Amajuba District and wider KZN.",
    ctaLabel: "Start your brand",
    ctaMessage:
      "Hi Ntombii Tech - I'd like to start a branding & identity project.",
    s1Label: "What we do",
    s1Heading: "Brand identity that goes beyond a logo.",
    s1Body:
      "A logo is just the start. We build complete brand systems - the visual language that runs across everything your business touches. From your business card to your shopfront, your social media to your letterhead, everything speaks the same language.",
    s1Cards: [
      {
        title: "Logo design",
        body:
          "Primary logo, alternate versions, icon mark. Built in vector, delivered in every format you'll ever need.",
      },
      {
        title: "Colour systems",
        body:
          "A defined palette that works in print, on screen, and in signage. No more guessing which shade of blue is 'your blue.'",
      },
      {
        title: "Typography",
        body:
          "Font pairings chosen for your industry and audience. Professional, readable, on-brand.",
      },
      {
        title: "Brand guidelines",
        body:
          "A simple document your team, printer, and designer can all follow. One standard, every time.",
      },
      {
        title: "Business stationery",
        body:
          "Business cards, letterheads, email signatures and compliment slips. Ready to print.",
      },
      {
        title: "Social media kit",
        body:
          "Profile images, cover photos, post templates. Consistent across every platform.",
      },
    ],
    s2Label: "Who this is for",
    s2Heading: "Built for businesses that are ready to look serious.",
    s2Body:
      "Whether you're launching a new business, rebranding after years of inconsistency, or finally formalising what you've been doing informally - this is for you. We work with local businesses, NGOs, schools, and entrepreneurs across Newcastle, Dannhauser, Utrecht, Ladysmith, Dundee and surrounding KZN towns.",
    s3Label: "Process",
    s3Heading: "Three steps. One brand.",
    s3Cards: [
      {
        title: "Discovery",
        body:
          "We learn your business, your audience, your competitors, and what 'winning' looks like for your brand.",
      },
      {
        title: "Design",
        body:
          "We present 2–3 brand directions. You choose. We refine until it's right.",
      },
      {
        title: "Delivery",
        body:
          "Final files in every format. Print-ready. Screen-ready. Future-ready.",
      },
    ],
    ctaHeading: "Ready to build a brand that means business?",
    ctaBody:
      "WhatsApp us for a free quote. No forms. No waiting. Just a conversation.",
    ctaButton: "Get a free quote",
    ctaButtonMessage:
      "Hi Ntombii Tech - I'd like a free quote for branding & identity.",
    related: [
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Printing Services", href: "/services/printing" },
    ],
  },

  // ───────────────────────── GRAPHIC DESIGN ─────────────────────────
  {
    slug: "graphic-design",
    navLabel: "Graphic Design",
    seoTitle: "Graphic Design Services Newcastle KZN | Ntombii Tech",
    seoDescription:
      "Flyers, posters, business cards, brochures and social media design in Newcastle, KwaZulu-Natal. Fast turnaround. Serving Amajuba District and wider KZN.",
    keywords:
      "graphic design Newcastle, flyer design KZN, poster design Madadeni, brochure design Ladysmith, social media design Northern KZN",
    eyebrow: "Graphic Design",
    headline: "Design that does the talking.",
    headlineItalic: "For every platform. Every purpose.",
    body:
      "From a flyer for tomorrow's event to a full marketing campaign - we design print-ready and digital graphics that make your business look the part. Fast turnaround. Professional finish. Based in Newcastle, serving clients across KZN.",
    ctaLabel: "Send us your brief",
    ctaMessage:
      "Hi Ntombii Tech - I have a graphic design brief I'd like to share.",
    s1Label: "What we design",
    s1Heading: "Everything your business needs to look professional.",
    s1Body:
      "Good design isn't a luxury - it's the difference between a client taking you seriously and scrolling past. We handle all the design work that keeps your business looking sharp, consistently.",
    s1Cards: [
      {
        title: "Flyers & posters",
        body:
          "Event flyers, promotional posters, sale announcements. Print-ready files delivered fast.",
      },
      {
        title: "Business cards",
        body:
          "Professional cards that people actually keep. Multiple finishes available.",
      },
      {
        title: "Brochures & catalogues",
        body:
          "Multi-page folded brochures and product catalogues. Designed to sell.",
      },
      {
        title: "Social media graphics",
        body:
          "Post designs, story templates, profile banners. Consistent across all platforms.",
      },
      {
        title: "Signage artwork",
        body:
          "Design files ready for any sign maker or printer. Correct sizes, bleed and resolution.",
      },
      {
        title: "Certificates & awards",
        body:
          "Professional certificate and award designs for events, schools and organisations.",
      },
      {
        title: "Event programmes",
        body:
          "Formal programmes for award ceremonies, graduations, gala dinners and community events.",
      },
      {
        title: "Presentation decks",
        body:
          "PowerPoint or PDF pitch decks designed to impress in any boardroom.",
      },
    ],
    s2Label: "Turnaround",
    s2Heading: "Fast when you need it. Polished every time.",
    s2Body:
      "We understand that deadlines are real. Most standard design jobs are turned around within 24–48 hours. Rush jobs can be accommodated - just tell us when you need it and we'll make a plan. We serve clients in Newcastle, Madadeni, Osizweni, Ladysmith, Dundee, Glencoe, Dannhauser and across the Amajuba and uMzinyathi districts.",
    s3Label: "How it works",
    s3Heading: "Three steps. Done.",
    s3Cards: [
      {
        title: "Brief",
        body:
          "Send us your brief on WhatsApp. Tell us what you need, your deadline, and any brand colours or logos you have.",
      },
      {
        title: "Design",
        body:
          "We produce your design and send you a proof for feedback.",
      },
      {
        title: "Approve & receive",
        body:
          "You approve, we send you the final print-ready or digital files. Simple.",
      },
    ],
    ctaHeading: "Tell us what you need.",
    ctaBody:
      "WhatsApp us your brief - even a voice note works. We'll get back to you with a quote fast.",
    ctaButton: "Send your brief on WhatsApp",
    ctaButtonMessage:
      "Hi Ntombii Tech - here's my graphic design brief:",
    related: [
      { label: "Printing Services", href: "/services/printing" },
      { label: "Signage Solutions", href: "/services/signage" },
    ],
  },

  // ───────────────────────── PRINTING ─────────────────────────
  {
    slug: "printing",
    navLabel: "Printing Services",
    seoTitle: "Printing Services Newcastle KZN | Ntombii Tech",
    seoDescription:
      "Professional printing services in Newcastle, KwaZulu-Natal. Flyers, business cards, brochures, banners and more. Delivered across Amajuba District and KZN.",
    keywords:
      "printing Newcastle, business card printing KZN, flyer printing Madadeni, brochure printing Ladysmith, banner printing Northern KZN",
    eyebrow: "Printing Services",
    headline: "Professionally printed. Delivered to your door.",
    headlineItalic: "Order on WhatsApp. We handle the rest.",
    body:
      "We source and manage professional printing for businesses, schools, NGOs and organisations across Newcastle and KZN. You get print-ready quality without the hassle of dealing with multiple suppliers. One call. One contact. Done.",
    ctaLabel: "Get a print quote",
    ctaMessage: "Hi Ntombii Tech - I'd like a quote for printing.",
    s1Label: "What we print",
    s1Heading: "Print for every business need.",
    s1Body:
      "Whether you need 50 business cards or 5 000 event flyers, we handle the brief, manage the print, and get your materials to you on time.",
    s1Cards: [
      {
        title: "Business cards",
        body: "Single or double-sided. Gloss, matte or soft-touch laminate.",
      },
      {
        title: "Flyers",
        body: "A5, A4 and custom sizes. Single or double-sided. Any quantity.",
      },
      {
        title: "Brochures",
        body: "Tri-fold, Z-fold and saddle-stitched. Professional finish.",
      },
      {
        title: "Posters",
        body: "A3, A2, A1 and large format. Indoor and outdoor options.",
      },
      {
        title: "Banners & pull-ups",
        body:
          "Roller banners, vinyl banners and pull-up stands for events and exhibitions.",
      },
      {
        title: "Stickers & labels",
        body:
          "Custom stickers for products, packaging, events and promotions.",
      },
      {
        title: "Letterheads & compliment slips",
        body: "Branded stationery printed to a professional standard.",
      },
      {
        title: "Certificates",
        body:
          "Printed on certificate paper or card. Ideal for schools, awards and events.",
      },
    ],
    s2Label: "How it works",
    s2Heading: "Order in three steps.",
    s2Cards: [
      {
        title: "Tell us what you need",
        body:
          "WhatsApp us the quantity, size, and when you need it. If you don't have a design, we can design it for you.",
      },
      {
        title: "We send you a quote",
        body:
          "Fast turnaround on quotes. You approve the price and design proof.",
      },
      {
        title: "Delivery to your door",
        body:
          "Your printed materials are delivered across Newcastle and the wider KZN area.",
      },
    ],
    s3Label: "Why Ntombii Tech",
    s3Heading: "One contact. No runaround.",
    s3Body:
      "We handle the whole process - design, print, delivery. You don't need to deal with multiple suppliers or chase anyone. We serve businesses in Newcastle CBD, Madadeni, Osizweni, Lennoxton, Hutten Heights, Dannhauser, Utrecht, Ladysmith, Dundee, Glencoe and surrounding towns.",
    s3Cards: [
      {
        title: "Design + print + deliver",
        body:
          "End-to-end from artwork to doorstep. One brief, one invoice, one point of contact.",
      },
      {
        title: "Trade-grade quality",
        body:
          "Proper paper stocks, correct bleed and resolution, professional finishing.",
      },
      {
        title: "Local turnaround",
        body:
          "Most jobs delivered within 3–5 working days across Amajuba and Northern KZN.",
      },
    ],
    ctaHeading: "What do you need printed?",
    ctaBody:
      "Send us a WhatsApp - tell us what you need and when you need it. We'll sort the rest.",
    ctaButton: "Order your print on WhatsApp",
    ctaButtonMessage:
      "Hi Ntombii Tech - I'd like to order print. Here's what I need:",
    related: [
      { label: "Ink & Toner Supply", href: "/services/ink-toner" },
      { label: "Graphic Design", href: "/services/graphic-design" },
    ],
  },

  // ───────────────────────── INK & TONER ─────────────────────────
  {
    slug: "ink-toner",
    navLabel: "Ink & Toner Supply",
    seoTitle: "Ink & Toner Cartridge Supply Newcastle KZN | Ntombii Tech",
    seoDescription:
      "Premium ink and toner cartridges delivered to your door in Newcastle, KwaZulu-Natal. All major brands. Serving Amajuba District, Ladysmith, Dundee and KZN.",
    keywords:
      "ink cartridges Newcastle, toner Newcastle KZN, HP toner Madadeni, printer cartridges Ladysmith, office supplies Amajuba",
    eyebrow: "Ink & Toner Supply",
    headline: "Never run out of ink again.",
    headlineItalic: "Premium cartridges. Fast delivery. No fuss.",
    body:
      "We supply premium quality ink and toner cartridges for businesses, schools, and offices across Newcastle and KZN. Order on WhatsApp and get your cartridges delivered - no queues, no delays, no stress.",
    ctaLabel: "Order cartridges now",
    ctaMessage: "Hi Ntombii Tech - I'd like to order ink/toner cartridges.",
    s1Label: "What we supply",
    s1Heading: "Cartridges for every printer.",
    s1Body:
      "We stock and source ink and toner cartridges compatible with all major printer brands. Whether you're running one office printer or a full print room, we keep you stocked.",
    s1Cards: [
      {
        title: "Ink cartridges",
        body:
          "Compatible with HP, Canon, Epson, Brother and all major brands. Black and colour.",
      },
      {
        title: "Toner cartridges",
        body:
          "Laser printer toner for HP, Samsung, Xerox, Ricoh, Kyocera and more.",
      },
      {
        title: "Bulk supply",
        body:
          "Regular supply agreements for businesses with high print volumes. Never run low.",
      },
      {
        title: "Office delivery",
        body:
          "Cartridges delivered directly to your office or business across Newcastle and KZN.",
      },
    ],
    s2Label: "Why order from us",
    s2Heading: "Premium quality. Local service.",
    s2Cards: [
      {
        title: "Top quality products",
        body:
          "We supply premium quality cartridges that give vibrant, reliable prints every time.",
      },
      {
        title: "Fast delivery",
        body:
          "Order on WhatsApp and get your cartridges delivered fast across Newcastle, Madadeni, Osizweni, Dannhauser, Utrecht and surrounding areas.",
      },
      {
        title: "Affordable prices",
        body:
          "Competitive pricing for businesses of all sizes. No middleman markup.",
      },
      {
        title: "Dependable supply",
        body:
          "We keep track of your needs and can set up a regular supply schedule so you never run out at the wrong time.",
      },
    ],
    s3Label: "How to order",
    s3Heading: "Order in under a minute.",
    s3Body:
      "WhatsApp us your printer make and model (or the cartridge number if you have it) and we'll confirm availability and price immediately. We deliver across the Amajuba District and wider Northern KZN.",
    s3Cards: [
      {
        title: "WhatsApp us",
        body:
          "Send your printer brand, model, and how many cartridges you need.",
      },
      {
        title: "Get your quote",
        body:
          "We confirm availability and send you a price. No hidden costs.",
      },
      {
        title: "Receive delivery",
        body:
          "Your cartridges delivered to your door. Pay on delivery or EFT.",
      },
    ],
    ctaHeading: "Running low? We've got you.",
    ctaBody:
      "WhatsApp us now - tell us your printer make and model and we'll sort you out.",
    ctaButton: "Order ink or toner on WhatsApp",
    ctaButtonMessage:
      "Hi Ntombii Tech - I need ink/toner. My printer brand and model is:",
    related: [
      { label: "Printing Services", href: "/services/printing" },
      { label: "Corporate Gifts", href: "/services/corporate-gifts" },
    ],
  },

  // ───────────────────────── SIGNAGE ─────────────────────────
  {
    slug: "signage",
    navLabel: "Signage Solutions",
    seoTitle: "Signage Solutions Newcastle KZN | Ntombii Tech",
    seoDescription:
      "Professional signage for businesses in Newcastle, KwaZulu-Natal. Shop fronts, vehicle branding, banners and more. Serving Amajuba District and wider KZN.",
    keywords:
      "signage Newcastle, shop front signs KZN, vehicle branding Madadeni, vinyl banners Ladysmith, billboards Northern KZN",
    eyebrow: "Signage Solutions",
    headline: "Your name, impossible to miss.",
    headlineItalic: "Signage that works as hard as you do.",
    body:
      "From shop fronts to vehicle branding, we design and deliver professional signage for businesses across Newcastle and KZN. Make your business visible. Make it memorable.",
    ctaLabel: "Get a signage quote",
    ctaMessage: "Hi Ntombii Tech - I'd like a quote for signage.",
    s1Label: "What we do",
    s1Heading: "Every type of signage your business needs.",
    s1Body:
      "Whether you're opening a new shop, branding a fleet of vehicles, or need banners for an upcoming event - we handle the design, production and delivery of your signage end to end.",
    s1Cards: [
      {
        title: "Shop front signage",
        body:
          "Fascia boards, built-up lettering, illuminated signs and shop name boards. Professional finish that draws customers in.",
      },
      {
        title: "Vehicle branding",
        body:
          "Full wraps, half wraps, and decal branding for cars, bakkies, trucks and fleet vehicles.",
      },
      {
        title: "Banners & vinyl",
        body:
          "Large format printed vinyl banners for events, promotions and outdoor advertising.",
      },
      {
        title: "Pull-up & display stands",
        body:
          "Portable roller banners and display stands for exhibitions, trade shows and in-store promotions.",
      },
      {
        title: "Pavement signs",
        body:
          "A-frame and pavement boards for daily specials, directions and promotions.",
      },
      {
        title: "Directional & office signage",
        body:
          "Internal wayfinding signs, reception boards, room labels and office branding.",
      },
      {
        title: "Billboards & large format",
        body:
          "Large outdoor advertising boards for maximum visibility along busy roads.",
      },
    ],
    s2Label: "Why it matters",
    s2Heading: "Signage is your 24/7 salesperson.",
    s2Body:
      "Your signage works for you around the clock - while you're closed, while you're busy, while you're sleeping. A poorly branded shopfront loses customers before they even walk in. A well-branded vehicle turns every trip into a marketing opportunity. We help businesses in Newcastle, Madadeni, Osizweni, Dannhauser, Utrecht, Ladysmith, Dundee, Glencoe and across KZN get noticed.",
    s3Label: "Process",
    s3Heading: "Three steps. One bold presence.",
    s3Cards: [
      {
        title: "Consult",
        body:
          "Tell us what you need, where it will be placed, and your timeline. We advise on the best solution.",
      },
      {
        title: "Design & proof",
        body:
          "We design your signage artwork and send you a visual proof for approval.",
      },
      {
        title: "Produce & install",
        body:
          "We manage production and arrange installation or delivery. You just say yes.",
      },
    ],
    ctaHeading: "Make your business impossible to miss.",
    ctaBody:
      "WhatsApp us for a free signage quote. Tell us what you need and we'll get back to you fast.",
    ctaButton: "Get a free signage quote",
    ctaButtonMessage:
      "Hi Ntombii Tech - I'd like a free quote for signage.",
    related: [
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Branding & Identity", href: "/services/branding" },
    ],
  },

  // ───────────────────────── CORPORATE GIFTS ─────────────────────────
  {
    slug: "corporate-gifts",
    navLabel: "Corporate Gifts",
    seoTitle: "Corporate Gifts Newcastle KZN | Ntombii Tech",
    seoDescription:
      "Branded corporate gifts and promotional items in Newcastle, KwaZulu-Natal. Staff gifts, client gifts, event giveaways. Serving Amajuba District and wider KZN.",
    keywords:
      "corporate gifts Newcastle, branded clothing KZN, promotional items Amajuba, staff gifts Ladysmith, year-end gifts Northern KZN",
    eyebrow: "Corporate Gifts",
    headline: "Gifts that represent your brand.",
    headlineItalic: "Branded. Memorable. Delivered.",
    body:
      "Corporate gifts that go beyond generic. We source, brand and deliver gifts for client appreciation, staff recognition, events and year-end functions - all carrying your company name and logo. Based in Newcastle, serving businesses across KZN.",
    ctaLabel: "Get a gifts quote",
    ctaMessage:
      "Hi Ntombii Tech - I'd like a quote for branded corporate gifts.",
    s1Label: "What we offer",
    s1Heading: "Branded gifts for every occasion.",
    s1Body:
      "From a single executive gift to 500 branded items for a year-end function - we handle the sourcing, branding and delivery. You choose what you need. We make it happen.",
    s1Cards: [
      {
        title: "Branded clothing",
        body:
          "Golf shirts, caps, jackets and workwear branded with your logo. Perfect for staff uniforms and giveaways.",
      },
      {
        title: "Promotional items",
        body:
          "Branded pens, notebooks, USB drives, mugs, water bottles, tote bags and more.",
      },
      {
        title: "Executive gifts",
        body:
          "Premium branded gifts for key clients and senior staff. Makes the right impression.",
      },
      {
        title: "Year-end gifts",
        body:
          "Staff appreciation and client year-end gift packs. Custom assembled and branded.",
      },
      {
        title: "Event giveaways",
        body:
          "Branded items for conferences, trade shows, award ceremonies and community events.",
      },
      {
        title: "Gift hampers",
        body:
          "Curated branded hampers for clients, partners and VIP guests.",
      },
    ],
    s2Label: "Why branded gifts",
    s2Heading: "A gift with your logo is a marketing tool.",
    s2Body:
      "Every time someone uses a branded pen, wears a branded cap, or drinks from a branded mug - your business gets seen. Corporate gifting builds loyalty, creates goodwill and keeps your name top of mind long after the event is over. We supply businesses, NGOs, schools and government departments across Newcastle, Ladysmith, Dundee, Vryheid, Estcourt and the wider KZN region.",
    s3Label: "How it works",
    s3Heading: "Three steps. Done.",
    s3Cards: [
      {
        title: "Tell us your budget & occasion",
        body:
          "WhatsApp us what the gift is for, how many you need, and your budget per unit.",
      },
      {
        title: "We recommend & quote",
        body:
          "We suggest the right products and send you a quote with branding options.",
      },
      {
        title: "Approve & receive",
        body:
          "You approve the proof, we produce and deliver to your door or event venue.",
      },
    ],
    ctaHeading: "Impress your clients. Reward your staff.",
    ctaBody:
      "WhatsApp us to discuss your corporate gifting needs. No order too small, no brief too big.",
    ctaButton: "Get a corporate gifts quote",
    ctaButtonMessage:
      "Hi Ntombii Tech - I'd like a quote for branded corporate gifts.",
    related: [
      { label: "Branding & Identity", href: "/services/branding" },
      { label: "Printing Services", href: "/services/printing" },
    ],
  },

  // ───────────────────────── WEB DESIGN ─────────────────────────
  {
    slug: "web-design",
    navLabel: "Web Design",
    seoTitle: "Web Design Newcastle KZN | Professional Website Design | Ntombii Tech",
    seoDescription:
      "Professional web design in Newcastle, KwaZulu-Natal. Mobile-first websites for small businesses, schools and organisations across South Africa. Free WhatsApp quote.",
    keywords:
      "web design Newcastle, website design KZN, web designer Amajuba, professional website South Africa, small business website Newcastle",
    eyebrow: "Web Design",
    headline: "Websites that look professional",
    headlineItalic: "and actually bring you customers.",
    body:
      "We design clean, fast, mobile-first websites for South African businesses. Based in Newcastle, serving Amajuba, KZN and the rest of South Africa. Every site is built to be found on Google and easy to update.",
    ctaLabel: "Get a website quote",
    ctaMessage: "Hi Ntombii Tech - I'd like a quote for a website.",
    s1Label: "What you get",
    s1Heading: "Everything a small business needs to look serious online.",
    s1Body:
      "We design the kind of website your business deserves - one that loads fast, works on every phone, and gives customers a reason to call or WhatsApp you.",
    s1Cards: [
      { title: "Mobile-first design", body: "Designed for the phone first, then desktop. Because 80% of your visitors are on mobile." },
      { title: "Fast, modern build", body: "Built on React for speed. Pages load in under 2 seconds - Google rewards that." },
      { title: "On-page SEO", body: "Proper titles, meta descriptions, headings, schema and image alt text on every page." },
      { title: "WhatsApp & call buttons", body: "Sticky CTAs so visitors can reach you in one tap. We track them too." },
      { title: "Contact forms", body: "Forms that deliver enquiries to your email and WhatsApp - no leads lost." },
      { title: "Easy to update", body: "We hand it over with a simple guide, or stay on as your maintainer. Your call." },
    ],
    s2Label: "Who this is for",
    s2Heading: "Small businesses, schools and professionals who want to be taken seriously.",
    s2Body:
      "If you're still relying on a Facebook page or a free site builder, you're losing customers to competitors with proper websites. We work with retailers, tradespeople, schools, salons, restaurants, professionals and NGOs across Newcastle, Madadeni, Vryheid, Ladysmith, Dundee, Utrecht and wider KZN.",
    s2Cards: [
      { title: "Starting price", body: "From R4 500 for a 5-page small business website. See Pricing for full packages." },
      { title: "Turnaround", body: "Most sites delivered in 7–14 working days from approved brief." },
      { title: "Hosting & domain", body: "We set up your domain and hosting. You own everything from day one." },
      { title: "Support after launch", body: "30 days of free tweaks. Optional monthly care plan after." },
    ],
    s3Label: "How it works",
    s3Heading: "Three steps from idea to live site.",
    s3Cards: [
      { title: "Brief & quote", body: "WhatsApp us what you do and what you need. We send a fixed quote within 24 hours." },
      { title: "Design & build", body: "We design the site, you approve, we build. WhatsApp check-ins, no surprises." },
      { title: "Launch & train", body: "We launch on your domain and show you how to update it. You're in control." },
    ],
    ctaHeading: "Ready for a website that actually works for your business?",
    ctaBody: "WhatsApp us your idea - even a voice note works. We'll send you a quote and timeline fast.",
    ctaButton: "Start your website on WhatsApp",
    ctaButtonMessage: "Hi Ntombii Tech - I'd like to start a website project.",
    related: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "E-commerce", href: "/services/ecommerce" },
      { label: "Local SEO", href: "/services/local-seo" },
    ],
  },

  // ───────────────────────── WEB DEVELOPMENT ─────────────────────────
  {
    slug: "web-development",
    navLabel: "Web Development",
    seoTitle: "Web Development Newcastle KZN | React Developers | Ntombii Tech",
    seoDescription:
      "Custom web development in Newcastle, KZN. React-based production builds, integrations, dashboards and web apps for South African businesses.",
    keywords:
      "web development Newcastle, React developer KZN, custom web development South Africa, web developer Amajuba",
    eyebrow: "Web Development",
    headline: "Production-grade web development,",
    headlineItalic: "built in Newcastle.",
    body:
      "When a template won't cut it, we build it from scratch. Modern React + TypeScript stacks, proper integrations, real performance. For businesses that need their website to do real work.",
    ctaLabel: "Discuss your project",
    ctaMessage: "Hi Ntombii Tech - I'd like to discuss a web development project.",
    s1Label: "What we build",
    s1Heading: "Custom websites and web apps engineered to last.",
    s1Body:
      "We don't drop a template and call it a day. We build with React, TypeScript and Tailwind - the same stack used by global companies - tuned for South African connections and devices.",
    s1Cards: [
      { title: "Custom websites", body: "Bespoke designs, custom features, custom CMS. Whatever your business needs to do, we build it." },
      { title: "Web applications", body: "Dashboards, booking systems, calculators, member portals, internal tools." },
      { title: "API integrations", body: "Connect to WhatsApp Business, payment gateways, CRMs, email marketing - anything with an API." },
      { title: "Performance optimisation", body: "Sub-2-second load times. Core Web Vitals green. Built for SA network conditions." },
      { title: "Headless CMS", body: "Edit your own content without breaking the design. Sanity, Supabase or custom admin." },
      { title: "Maintenance & upgrades", body: "Ongoing care plans. Security, backups, bug fixes, new features." },
    ],
    s2Label: "Who this is for",
    s2Heading: "Businesses with a real brief, not just a brochure site.",
    s2Body:
      "If you've outgrown WordPress, your developer ghosted you, or you need something genuinely custom - talk to us. We work with growing businesses across South Africa from our base in Newcastle, KZN.",
    s3Label: "How it works",
    s3Heading: "We scope properly. Then we build.",
    s3Cards: [
      { title: "Discovery call", body: "A proper conversation about what you actually need. No assumptions." },
      { title: "Scope & quote", body: "A written scope, fixed quote, and timeline. You know exactly what you're getting." },
      { title: "Build & deploy", body: "Weekly demos, transparent progress. Launch when it's right - not when it's late." },
    ],
    ctaHeading: "Have a real build in mind?",
    ctaBody: "WhatsApp us a short brief. If it's a fit, we'll set up a call this week.",
    ctaButton: "Send your brief",
    ctaButtonMessage: "Hi Ntombii Tech - here's my web development brief:",
    related: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Web Apps", href: "/services/web-apps" },
      { label: "E-commerce", href: "/services/ecommerce" },
    ],
  },

  // ───────────────────────── E-COMMERCE ─────────────────────────
  {
    slug: "ecommerce",
    navLabel: "E-commerce Websites",
    seoTitle: "E-commerce Website Design Newcastle KZN | Online Stores | Ntombii Tech",
    seoDescription:
      "Online store development in Newcastle, KZN. Sell your products online with a fast, secure e-commerce site. Payment gateways, delivery, WhatsApp checkout.",
    keywords:
      "ecommerce Newcastle, online store KZN, online shop South Africa, ecommerce website Amajuba, Shopify alternative Newcastle",
    eyebrow: "E-commerce",
    headline: "Sell online,",
    headlineItalic: "without selling your soul to fees.",
    body:
      "We build online stores for South African businesses - proper checkout, local payment gateways, WhatsApp order confirmations and shipping that actually works in SA.",
    ctaLabel: "Get an online store quote",
    ctaMessage: "Hi Ntombii Tech - I'd like a quote for an online store.",
    s1Label: "What's included",
    s1Heading: "Everything you need to start selling.",
    s1Body:
      "From product photos to checkout to delivery - we build the whole engine, not just a storefront.",
    s1Cards: [
      { title: "Product catalogue", body: "Unlimited products with images, variants, stock tracking and categories." },
      { title: "SA payment gateways", body: "PayFast, Yoco, Peach, Stripe - accept cards, EFT, SnapScan and Zapper." },
      { title: "Shipping & delivery", body: "Courier integrations, pickup points, local delivery zones for KZN." },
      { title: "WhatsApp order alerts", body: "You get notified the moment an order comes in - and so does the customer." },
      { title: "Mobile checkout", body: "One-page checkout that works on every phone. No abandoned carts because of bad UX." },
      { title: "SEO for products", body: "Every product page gets proper schema, meta and structured data - Google can sell for you." },
    ],
    s2Label: "Who this is for",
    s2Heading: "Retailers, makers and brands ready to sell beyond the shop floor.",
    s2Body:
      "Whether you sell 5 products or 5 000, we'll build a store sized to your business. We work with retailers and manufacturers across Newcastle, KZN and South Africa.",
    s3Label: "How it works",
    s3Heading: "From catalogue to checkout in 3 steps.",
    s3Cards: [
      { title: "Plan", body: "We map your products, payment, shipping and tax setup before we touch the design." },
      { title: "Build", body: "Storefront, checkout, admin and integrations - all built and tested." },
      { title: "Launch & train", body: "We load your first products with you and train you to run the store yourself." },
    ],
    ctaHeading: "Ready to sell online?",
    ctaBody: "WhatsApp us about your products. We'll send a quote with options for your stage of business.",
    ctaButton: "Start your online store",
    ctaButtonMessage: "Hi Ntombii Tech - I'd like to start an online store.",
    related: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Branding & Identity", href: "/services/branding" },
    ],
  },

  // ───────────────────────── SCHOOL WEBSITES ─────────────────────────
  {
    slug: "school-websites",
    navLabel: "School Websites",
    seoTitle: "School Website Design Newcastle KZN | Schools & Colleges | Ntombii Tech",
    seoDescription:
      "Professional school websites in Newcastle, KZN. Application forms, news, calendars, photo galleries and parent portals for primary and high schools across South Africa.",
    keywords:
      "school website design Newcastle, school website KZN, high school website South Africa, primary school website Amajuba",
    eyebrow: "School Websites",
    headline: "Websites that make your school",
    headlineItalic: "the obvious choice for parents.",
    body:
      "We design and build websites for primary schools, high schools and colleges across KZN and South Africa - built around what parents actually need to find: fees, admissions, news, contact.",
    ctaLabel: "Get a school website quote",
    ctaMessage: "Hi Ntombii Tech - I'd like a quote for a school website.",
    s1Label: "What's included",
    s1Heading: "Built for the real questions parents ask.",
    s1Body:
      "Most school sites bury the information parents want. We put it front and centre - admissions, fees, term dates, contact - then layer in the rest.",
    s1Cards: [
      { title: "Admissions & forms", body: "Online application forms that deliver to the office email, with PDF downloads." },
      { title: "News & announcements", body: "Easy to update news section so the principal can post without calling us." },
      { title: "Calendar & events", body: "Term dates, sports fixtures, parent meetings - all in one place." },
      { title: "Photo galleries", body: "Showcase school life, events, sports and achievements." },
      { title: "Staff & departments", body: "Profiles for leadership and academic teams. Builds trust before the first visit." },
      { title: "POPIA-compliant", body: "Privacy policy, consent on forms, and secure handling of learner data." },
    ],
    s2Label: "Who this is for",
    s2Heading: "Public, private and independent schools that want to compete on more than reputation.",
    s2Body:
      "Parents Google your school before they enquire. If your site looks dated, they assume the school is too. We help schools across Newcastle, Madadeni, Vryheid, Ladysmith and KZN show up properly.",
    s3Label: "How it works",
    s3Heading: "Three steps. Live before the next intake.",
    s3Cards: [
      { title: "Discovery", body: "We meet with the school to understand departments, programmes and brand." },
      { title: "Design & build", body: "We design, you approve at the SGB level, we build and load content." },
      { title: "Launch & training", body: "We train the school's chosen person to update news and events." },
    ],
    ctaHeading: "Ready to give your school the website it deserves?",
    ctaBody: "WhatsApp us - we'll send a quote and examples of school sites we've built.",
    ctaButton: "Get a school website quote",
    ctaButtonMessage: "Hi Ntombii Tech - I'd like a quote for a school website.",
    related: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Branding & Identity", href: "/services/branding" },
      { label: "Printing Services", href: "/services/printing" },
    ],
  },

  // ───────────────────────── LOCAL SEO ─────────────────────────
  {
    slug: "local-seo",
    navLabel: "Local SEO",
    seoTitle: "Local SEO Newcastle KZN | Get Found on Google | Ntombii Tech",
    seoDescription:
      "Local SEO services in Newcastle, KZN. Get your business found on Google for the searches your customers actually type. Google Business Profile, on-page, local schema.",
    keywords:
      "local SEO Newcastle, SEO KZN, Google Business Newcastle, SEO services Amajuba, get found on Google South Africa",
    eyebrow: "Local SEO",
    headline: "Get found by the customers",
    headlineItalic: "already searching for you.",
    body:
      "Local SEO that gets you into the Google Map pack, on the first page for your services + town, and recommended by AI search like ChatGPT and Gemini. Built for South African small businesses.",
    ctaLabel: "Get a local SEO audit",
    ctaMessage: "Hi Ntombii Tech - I'd like a local SEO audit.",
    s1Label: "What we do",
    s1Heading: "The full local SEO stack - not just keywords.",
    s1Body:
      "Local SEO is part technical, part content, part listings, part reputation. We do all four, in the right order, with monthly reporting.",
    s1Cards: [
      { title: "Google Business Profile", body: "Full setup or rescue. Categories, services, photos, posts and review strategy." },
      { title: "On-page SEO", body: "Titles, meta, headings, schema, internal linking on every page that matters." },
      { title: "Location pages", body: "Dedicated pages for each town and service combination - built to rank." },
      { title: "Local citations", body: "Consistent name, address, phone across SA directories and platforms." },
      { title: "Reviews strategy", body: "A system for getting more Google reviews - ethically, consistently." },
      { title: "AI search optimisation", body: "Entity, schema and content tuning so ChatGPT, Gemini and Perplexity recommend you." },
    ],
    s2Label: "Who this is for",
    s2Heading: "Local businesses tired of being invisible on Google.",
    s2Body:
      "If you're not in the Google Map pack for your service in your town, you're losing customers daily to competitors who are. We help businesses across Newcastle, Madadeni, Vryheid, Ladysmith, Dundee and wider KZN climb the rankings.",
    s2Cards: [
      { title: "Starting price", body: "Audits from R1 500. Ongoing local SEO from R2 500/month." },
      { title: "First results", body: "Google Business wins in 2–4 weeks. Organic rankings 60–90 days." },
      { title: "Reporting", body: "Monthly report: rankings, traffic, calls, directions, leads." },
      { title: "No lock-in", body: "Month-to-month. Stay because it works, not because of a contract." },
    ],
    s3Label: "How it works",
    s3Heading: "Audit. Fix. Grow.",
    s3Cards: [
      { title: "Audit", body: "We benchmark your site, listings, reviews and competitors. You get a written report." },
      { title: "Fix the foundations", body: "Technical SEO, Google Business, schema, location pages - all sorted first." },
      { title: "Grow rankings", body: "Monthly content, citations, reviews and link-building to push you up." },
    ],
    ctaHeading: "Want to know where you stand on Google?",
    ctaBody: "WhatsApp us your website and town. We'll do a free quick check before quoting.",
    ctaButton: "Request a free SEO check",
    ctaButtonMessage: "Hi Ntombii Tech - please do a free local SEO check on my business.",
    related: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Branding & Identity", href: "/services/branding" },
    ],
  },

  // ───────────────────────── LOGO DESIGN ─────────────────────────
  {
    slug: "logo-design",
    navLabel: "Logo Design",
    seoTitle: "Logo Design Newcastle KZN | Professional Logos | Ntombii Tech",
    seoDescription:
      "Professional logo design in Newcastle, KZN. Custom logos for small businesses, schools and startups across South Africa. Vector files, all formats included.",
    keywords:
      "logo design Newcastle, logo designer KZN, custom logo South Africa, business logo Amajuba",
    eyebrow: "Logo Design",
    headline: "A logo that earns",
    headlineItalic: "your business respect.",
    body:
      "Custom logo design for South African businesses, schools and startups. Original concepts, proper vector files, every format you'll ever need. Based in Newcastle, KZN.",
    ctaLabel: "Get a logo quote",
    ctaMessage: "Hi Ntombii Tech - I'd like a quote for a logo.",
    s1Label: "What you get",
    s1Heading: "More than a picture - a working brand mark.",
    s1Body:
      "A logo isn't art. It's a tool. We design logos that work small, big, in colour, in black, on a t-shirt, on a sign, online and on a business card.",
    s1Cards: [
      { title: "Primary logo", body: "Full horizontal/stacked logo with your name and mark." },
      { title: "Logo variations", body: "Alternate layouts for tight spaces, dark backgrounds and social icons." },
      { title: "Icon mark", body: "A standalone symbol for favicons, app icons and watermarks." },
      { title: "Vector files", body: "AI, SVG, EPS - scale to any size without losing quality." },
      { title: "Web & print files", body: "PNG, JPG and PDF in correct colour profiles for screen and print." },
      { title: "Mini brand sheet", body: "Your colours, fonts and clear-space rules on a one-page reference." },
    ],
    s2Label: "Who this is for",
    s2Heading: "Anyone starting up, rebranding, or finally going pro.",
    s2Body:
      "New businesses, side hustles going formal, churches, schools, NGOs, sports teams - if it needs a logo, we'll design one that fits.",
    s2Cards: [
      { title: "Starting price", body: "From R1 500 for a logo + variations + files." },
      { title: "Turnaround", body: "First concepts in 3–5 working days." },
      { title: "Concepts", body: "2–3 directions per round. Two revision rounds included." },
      { title: "Ownership", body: "Full ownership and copyright handed to you on final payment." },
    ],
    s3Label: "How it works",
    s3Heading: "Brief. Design. Deliver.",
    s3Cards: [
      { title: "Brief", body: "We ask the right questions about your business, audience and competition." },
      { title: "Concepts", body: "We send 2–3 distinct directions. You pick one to refine." },
      { title: "Deliver", body: "Final files in every format, plus a mini brand sheet." },
    ],
    ctaHeading: "Need a logo that doesn't look like everyone else's?",
    ctaBody: "WhatsApp us your business name and a sentence about what you do.",
    ctaButton: "Start your logo on WhatsApp",
    ctaButtonMessage: "Hi Ntombii Tech - I'd like a quote for a logo.",
    related: [
      { label: "Branding & Identity", href: "/services/branding" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Printing Services", href: "/services/printing" },
    ],
  },

  // ───────────────────────── WEB APPS ─────────────────────────
  {
    slug: "web-apps",
    navLabel: "Web Apps",
    seoTitle: "Web App Development Newcastle KZN | Custom Digital Systems | Ntombii Tech",
    seoDescription:
      "Custom web app development in Newcastle, KZN. Dashboards, booking systems, member portals and internal tools for South African businesses.",
    keywords:
      "web app development Newcastle, custom software KZN, internal tools South Africa, booking system Amajuba, dashboard developer Newcastle",
    eyebrow: "Web Apps",
    headline: "Custom digital systems",
    headlineItalic: "that run your business.",
    body:
      "When spreadsheets stop scaling and off-the-shelf software doesn't fit, we build the system you actually need. Built on modern, maintainable stacks - owned by you.",
    ctaLabel: "Discuss your web app",
    ctaMessage: "Hi Ntombii Tech - I'd like to discuss a web app project.",
    s1Label: "What we build",
    s1Heading: "Software shaped exactly to your operation.",
    s1Body:
      "Every business has those processes that everyone hates because no software does it right. We build the one that does.",
    s1Cards: [
      { title: "Booking & scheduling", body: "Service bookings, appointments, room reservations - with reminders and payments." },
      { title: "Admin dashboards", body: "Custom dashboards for your team - orders, jobs, customers, reports in one place." },
      { title: "Member & client portals", body: "Logged-in areas for clients to view documents, status, invoices and history." },
      { title: "Internal tools", body: "Replace messy spreadsheets with a real interface your team will actually use." },
      { title: "Workflow automation", body: "Forms that route, notify, calculate and trigger the next step automatically." },
      { title: "Integrations", body: "Connect to WhatsApp, accounting, payments, email - anything with an API." },
    ],
    s2Label: "Who this is for",
    s2Heading: "Businesses ready to invest in proper systems.",
    s2Body:
      "If you've outgrown spreadsheets, paid for SaaS you don't use, or have a process only one person knows how to run - let's talk. We work with SMEs across KZN and South Africa from our Newcastle base.",
    s3Label: "How it works",
    s3Heading: "Scope first. Build right. Hand over clean.",
    s3Cards: [
      { title: "Discovery & scope", body: "We map your workflow, users and data. You get a clear scope and quote." },
      { title: "Build in sprints", body: "Two-week sprints with demos. You see progress weekly, not at the end." },
      { title: "Launch & support", body: "We deploy, train your team, and support you as you grow." },
    ],
    ctaHeading: "Got a process begging for proper software?",
    ctaBody: "WhatsApp us a short description. We'll set up a free scoping call.",
    ctaButton: "Discuss your web app",
    ctaButtonMessage: "Hi Ntombii Tech - I'd like to discuss a web app:",
    related: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "E-commerce", href: "/services/ecommerce" },
      { label: "Web Design", href: "/services/web-design" },
    ],
  },
];

export const getServiceDetail = (slug: string) =>
  SERVICE_DETAILS.find((s) => s.slug === slug);
