// Northern KZN service-area data - drives /areas/:slug pages and SEO schemas.

export type Location = {
  slug: string;
  name: string;
  region: string;
  district: string;
  intro: string;
  hook: string;
  industries: string[];
  neighborhoods: string[];
  landmarks: string[];
  geo: { lat: number; lng: number };
  faqs: Array<{ q: string; a: string }>;
};

export const LOCATIONS: Location[] = [
  {
    slug: "newcastle",
    name: "Newcastle",
    region: "Amajuba District, KZN",
    district: "Amajuba",
    intro:
      "Newcastle is the third-largest city in KwaZulu-Natal - a manufacturing and retail hub with serious online catch-up to do. Most local businesses still rely on Facebook pages and word of mouth while customers search Google first.",
    hook: "If a Newcastle customer searches for your service tonight, do they find you - or someone in Durban?",
    industries: ["Manufacturing", "Retail", "Mining suppliers", "Schools", "Hospitality", "Trades"],
    neighborhoods: ["Madadeni", "Osizweni", "Lennoxton", "Aviary Hill", "Arbor Park", "Suncrest", "Schuinshoogte", "Hutten Heights"],
    landmarks: ["Amcor Dam", "Chief Albert Luthuli Stadium", "Newcastle Mall", "Drakensberg foothills"],
    geo: { lat: -27.7574, lng: 29.9318 },
    faqs: [
      { q: "How much does a website cost in Newcastle?", a: "Our Newcastle starter sites begin at R2,500 and most local businesses launch on Business at R3,500. Custom builds for manufacturers and schools start at R7,500." },
      { q: "Do you serve Madadeni and Osizweni?", a: "Yes. We're based in Newcastle and work with clients across Madadeni, Osizweni, Aviary Hill and the wider Amajuba district - most communication runs on WhatsApp." },
      { q: "How fast can a Newcastle business get a website?", a: "Starter sites can launch in under a week. Business builds typically run a 72-hour design sprint and ship in 1–2 weeks." },
    ],
  },
  {
    slug: "madadeni",
    name: "Madadeni",
    region: "Amajuba District, KZN",
    district: "Amajuba",
    intro:
      "Madadeni is one of the largest townships in South Africa, with thousands of small businesses, schools, and faith communities that are massively underrepresented online. The opportunity here is huge for any business that shows up first.",
    hook: "Madadeni's economy moves faster on WhatsApp than on Google - your site needs to bridge both.",
    industries: ["Spaza & retail", "Salons & barbershops", "Schools & ECDs", "Funeral parlours", "Trades", "Community NGOs"],
    neighborhoods: ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7", "Section 8"],
    landmarks: ["Madadeni Hospital", "Madadeni Stadium", "Lennoxton border"],
    geo: { lat: -27.7833, lng: 29.9833 },
    faqs: [
      { q: "Do Madadeni businesses really need a website?", a: "Yes - even a one-page site with a WhatsApp button outranks a Facebook-only competitor and lets customers find you on Google instead of just on referral." },
      { q: "What's the cheapest option for a Madadeni small business?", a: "Our Starter Website at R2,500 covers a one-pager with WhatsApp click-to-chat, contact form, and Google Maps - enough to look professional and capture leads." },
    ],
  },
  {
    slug: "osizweni",
    name: "Osizweni",
    region: "Amajuba District, KZN",
    district: "Amajuba",
    intro:
      "Osizweni's commercial scene runs on local trust - but trust is now built online too. A clean website, a Google Business profile, and one weekly post is enough to outrank most competitors in this area.",
    hook: "Osizweni customers will Google you before they call. Make sure they find you, not your competitor.",
    industries: ["Retail", "Trades", "Schools", "Transport & logistics", "Catering"],
    neighborhoods: ["Section A", "Section B", "Section C", "Section D"],
    landmarks: ["Osizweni Mall", "Osizweni Stadium"],
    geo: { lat: -27.8167, lng: 30.0333 },
    faqs: [
      { q: "Do you build sites for Osizweni informal businesses?", a: "Absolutely - we specialise in mobile-first one-pagers built for South African data realities. Most of our Osizweni clients are spazas, salons, and trades." },
    ],
  },
  {
    slug: "vryheid",
    name: "Vryheid",
    region: "Zululand District, KZN",
    district: "Zululand",
    intro:
      "Vryheid is the commercial heart of Zululand - coal, agriculture, education and trade all converge here. Yet search 'electrician Vryheid' and Google often returns Newcastle or Durban results. That's a presence gap, not a demand gap.",
    hook: "Vryheid has the buying power. The businesses that win are simply the ones that show up online.",
    industries: ["Coal mining", "Agriculture", "Schools", "Hospitality", "Engineering & trades"],
    neighborhoods: ["Lakeside", "Bhekuzulu", "Mondlo"],
    landmarks: ["Vryheid Mountain", "Lucas Meijer Resort", "Vryheid Hill Nature Reserve"],
    geo: { lat: -27.7697, lng: 30.7914 },
    faqs: [
      { q: "Do you work with Vryheid businesses remotely?", a: "Yes - every project runs on WhatsApp with scheduled video calls. We've shipped sites for Zululand-district clients without a single in-person meeting." },
      { q: "Can you set up local SEO for Vryheid?", a: "Yes. Each site we ship in Vryheid includes Google Business profile setup, local schema markup, and town-targeted page copy." },
    ],
  },
  {
    slug: "ladysmith",
    name: "Ladysmith",
    region: "uThukela District, KZN",
    district: "uThukela",
    intro:
      "Ladysmith is uThukela's commercial centre - historic, industrial, and full of established businesses that haven't updated their digital presence in years. There's serious ground to take here for any business that moves first.",
    hook: "Ladysmith has decades of brand equity offline. The first ones to translate it online win the next decade.",
    industries: ["Manufacturing", "Retail", "Tourism (Battlefields)", "Schools", "Hospitality"],
    neighborhoods: ["Steadville", "Ezakheni", "Acaciavale", "Hospital Park", "Roosboom"],
    landmarks: ["Ladysmith Siege Museum", "Wagon Hill", "Spioenkop Dam"],
    geo: { lat: -28.5599, lng: 29.7795 },
    faqs: [
      { q: "Do you build sites for Ladysmith tourism businesses?", a: "Yes - Battlefields lodges, B&Bs and tour operators are a strong fit. We design booking-ready sites with WhatsApp enquiry handoffs." },
      { q: "How much does branding cost in Ladysmith?", a: "Branding is bundled into our website packages from R3,500. Standalone identity systems start at R5,000." },
    ],
  },
  {
    slug: "dundee",
    name: "Dundee",
    region: "uMzinyathi District, KZN",
    district: "uMzinyathi",
    intro:
      "Dundee is the gateway to the Battlefields and a regional service hub for surrounding farms and trades. Local search demand is rising fast - but local supply of well-built sites is almost zero.",
    hook: "Dundee searches happen daily. Almost no local business is ranking for them yet.",
    industries: ["Agriculture", "Tourism", "Coal", "Trades", "Schools"],
    neighborhoods: ["Sibongile", "Glencoe (adjacent)", "Aviation Park"],
    landmarks: ["Talana Museum", "Talana Hill", "Indumeni Mountain"],
    geo: { lat: -28.165, lng: 30.235 },
    faqs: [
      { q: "Do you serve Dundee farms and agri-businesses?", a: "Yes. We build clean, fast-loading sites for agri-suppliers, farm stays, and Battlefields tourism operators across uMzinyathi." },
    ],
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    region: "Amajuba District, KZN",
    district: "Amajuba",
    intro:
      "Utrecht is small, tight-knit, and surrounded by coal and game reserves. Local businesses here often feel 'too small to need a website' - until a customer in Newcastle or Vryheid can't find them on Google.",
    hook: "Being the only Utrecht business that ranks on Google is easier than you think.",
    industries: ["Coal mining", "Game reserves & hunting", "Agriculture", "Trades"],
    neighborhoods: ["Amantungwa", "Town centre"],
    landmarks: ["Balele Game Park", "Utrecht Coal mines"],
    geo: { lat: -27.6647, lng: 30.3275 },
    faqs: [
      { q: "Is a website worth it for a small Utrecht business?", a: "Yes - small towns reward early movers. A R2,500 starter site puts you ahead of every competitor still relying on word of mouth." },
    ],
  },
  {
    slug: "pongola",
    name: "Pongola",
    region: "Zululand District, KZN",
    district: "Zululand",
    intro:
      "Pongola sits on the N2 between Durban and the Mozambique border, with strong agriculture, sugar, and a growing tourism corridor. Online presence here lags behind demand - a clean site instantly stands out.",
    hook: "Pongola travellers, farmers, and agents all search before they buy. Be the result that loads.",
    industries: ["Sugar & agriculture", "Tourism (Pongolapoort Dam)", "Logistics", "Lodges & game"],
    neighborhoods: ["Belgrade", "Ncotshane"],
    landmarks: ["Pongolapoort Dam (Lake Jozini)", "Ithala Game Reserve"],
    geo: { lat: -27.3767, lng: 31.6138 },
    faqs: [
      { q: "Do you build booking sites for Pongola lodges?", a: "Yes - we specialise in mobile-first lodge and hospitality sites with WhatsApp enquiry buttons and integrated maps." },
    ],
  },
  {
    slug: "nongoma",
    name: "Nongoma",
    region: "Zululand District, KZN",
    district: "Zululand",
    intro:
      "Nongoma is the cultural heart of the Zulu nation and a growing rural commercial centre. Most local businesses are completely invisible online - a fast site with a WhatsApp button is a step-change advantage.",
    hook: "In Nongoma, online presence is the rarest competitive edge there is.",
    industries: ["Retail", "Trades", "Schools", "Cultural tourism", "Agriculture"],
    neighborhoods: ["Town centre", "KwaNongoma"],
    landmarks: ["KwaKhangelamankengane Royal Palace", "Ophathe Game Reserve"],
    geo: { lat: -27.9, lng: 31.6333 },
    faqs: [
      { q: "Do you work with rural Nongoma businesses?", a: "Yes - every project runs on WhatsApp, so location is no barrier. We've worked across Zululand without an in-person meeting." },
    ],
  },
  {
    slug: "glencoe",
    name: "Glencoe",
    region: "uMzinyathi District, KZN",
    district: "uMzinyathi",
    intro:
      "Glencoe is closely tied to Dundee and the wider Battlefields economy. Trades, schools, and small retail dominate - and almost none rank on Google for their own town name yet.",
    hook: "Type 'plumber Glencoe' into Google. Almost nothing local. That's your opening.",
    industries: ["Trades", "Coal", "Retail", "Schools"],
    neighborhoods: ["Sithembile", "Town"],
    landmarks: ["Glencoe railway station", "Indumeni Mountain"],
    geo: { lat: -28.1833, lng: 30.15 },
    faqs: [
      { q: "How fast can a Glencoe trade business get a site live?", a: "Under a week for a Starter. Most Glencoe trades launch with a one-pager, WhatsApp button, and service area map." },
    ],
  },
  {
    slug: "dannhauser",
    name: "Dannhauser",
    region: "Amajuba District, KZN",
    district: "Amajuba",
    intro:
      "Dannhauser is a coal and agricultural town between Newcastle and Dundee. Local businesses here serve a wide rural catchment - but the catchment increasingly searches Google before driving to town.",
    hook: "Dannhauser's customers travel far. Make sure they find you before they choose someone closer to home.",
    industries: ["Coal mining", "Agriculture", "Trades", "Retail"],
    neighborhoods: ["Durnacol", "Hattingspruit", "Buffalo Flats"],
    landmarks: ["Dannhauser town hall", "Durnacol mine"],
    geo: { lat: -28.0167, lng: 30.0667 },
    faqs: [
      { q: "Do you build for Dannhauser mining suppliers?", a: "Yes - clean B2B sites with capability statements, downloadable PDFs, and lead capture are a strong fit for Amajuba mining suppliers." },
    ],
  },
  {
    slug: "estcourt",
    name: "Estcourt",
    region: "uThukela District, KZN",
    district: "uThukela",
    intro:
      "Estcourt is a manufacturing and agricultural town on the N3 between Durban and Joburg - heavy traffic, real foot traffic, and very little local digital competition.",
    hook: "Estcourt sees thousands of N3 travellers daily. Capture them online before they pass through.",
    industries: ["Manufacturing", "Agriculture", "Logistics", "Hospitality"],
    neighborhoods: ["Wembezi", "Forderville", "Cornfields"],
    landmarks: ["Wagendrift Dam", "Estcourt town hall"],
    geo: { lat: -29.0083, lng: 29.8731 },
    faqs: [
      { q: "Do you build for Estcourt N3 hospitality stops?", a: "Yes - quick-loading sites with menus, hours, fuel/charging info, and Google Maps integration are a sweet spot for N3 stops." },
    ],
  },
  {
    slug: "bergville",
    name: "Bergville",
    region: "uThukela District, KZN",
    district: "uThukela",
    intro:
      "Bergville is the gateway to the Northern Drakensberg - a tourism, farming, and adventure economy where being discoverable online directly drives bookings.",
    hook: "Berg tourists plan online. If your lodge or activity isn't ranking, you're invisible to most of your market.",
    industries: ["Tourism & lodges", "Adventure activities", "Agriculture", "Trades"],
    neighborhoods: ["Emmaus", "Geluksburg", "Winterton (adjacent)"],
    landmarks: ["Drakensberg (uKhahlamba)", "Sterkfontein Dam", "Royal Natal National Park"],
    geo: { lat: -28.7333, lng: 29.35 },
    faqs: [
      { q: "Do you build for Bergville lodges and tour operators?", a: "Yes - booking-ready sites with photo galleries, WhatsApp enquiries, and seasonal landing pages." },
    ],
  },
  {
    slug: "ulundi",
    name: "Ulundi",
    region: "Zululand District, KZN",
    district: "Zululand",
    intro:
      "Ulundi is the historic capital of the Zulu Kingdom and a major government and cultural centre. Local commerce is growing fast - but online discoverability is one of the weakest in the province.",
    hook: "Ulundi has government, culture, and commerce. What it doesn't have yet is a competitive online business scene.",
    industries: ["Government", "Cultural tourism", "Retail", "Schools", "Trades"],
    neighborhoods: ["Cezwana", "KwaCeza", "Mahlabathini"],
    landmarks: ["Ondini Cultural Museum", "Ulundi Airport", "King Cetshwayo monument"],
    geo: { lat: -28.3333, lng: 31.4167 },
    faqs: [
      { q: "Do you serve Ulundi cultural and tourism operators?", a: "Yes - heritage tourism is a perfect fit for our storytelling-led design approach." },
    ],
  },
  {
    slug: "paulpietersburg",
    name: "Paulpietersburg",
    region: "Zululand District, KZN",
    district: "Zululand",
    intro:
      "Paulpietersburg is a small forestry and farming town in northern Zululand. Local searches are low-volume but high-intent - and almost completely unclaimed online.",
    hook: "In Paulpietersburg, ranking #1 is mostly about being the only one trying.",
    industries: ["Forestry", "Agriculture", "Trades", "Tourism"],
    neighborhoods: ["eDumbe", "Bilanyoni"],
    landmarks: ["Natal Spa hot springs", "eDumbe Mountain"],
    geo: { lat: -27.4197, lng: 30.8125 },
    faqs: [
      { q: "Is it worth building a website for a Paulpietersburg business?", a: "Yes - even low-volume search markets reward early movers. A R2,500 starter site captures 100% of the local Google traffic that exists." },
    ],
  },
  {
    slug: "durban",
    name: "Durban",
    region: "eThekwini Metro, KZN",
    district: "eThekwini",
    intro:
      "Durban is South Africa's third-largest city and KZN's economic engine - a port, tourism and manufacturing powerhouse where digital competition is real. Standing out here requires sharper design, faster sites, and tighter local SEO than anywhere else in the province.",
    hook: "In Durban, a slow site is the same as no site. Speed, schema, and clarity win.",
    industries: ["Logistics & port", "Tourism & hospitality", "Manufacturing", "Retail & franchises", "Healthcare", "Professional services"],
    neighborhoods: ["Umhlanga", "Ballito", "Berea", "Morningside", "Westville", "Hillcrest", "Pinetown", "Chatsworth", "Phoenix", "Amanzimtoti"],
    landmarks: ["Moses Mabhida Stadium", "uShaka Marine World", "Suncoast", "Gateway Theatre of Shopping", "Durban Harbour"],
    geo: { lat: -29.8587, lng: 31.0218 },
    faqs: [
      { q: "Do you work with Durban businesses remotely from Newcastle?", a: "Yes - every project runs on WhatsApp and video calls. Distance is no obstacle; we've shipped builds for Durban and Umhlanga clients without an in-person meeting." },
      { q: "How much does a website cost in Durban?", a: "Our Starter sites begin at R2,500 and most Durban SMEs launch on Business at R3,500. Larger Umhlanga and Ballito brands typically run R7,500–R25,000 for custom builds." },
      { q: "Can you handle Durban local SEO and Google Business Profile?", a: "Yes. Every Durban build includes Google Business Profile setup, local schema markup, and area-targeted page copy for suburbs like Umhlanga, Berea, and Westville." },
    ],
  },
  {
    slug: "johannesburg",
    name: "Johannesburg",
    region: "Gauteng",
    district: "City of Johannesburg",
    intro:
      "Johannesburg is South Africa's commercial capital - fast, competitive, and unforgiving for businesses that don't show up online with conviction. We build Joburg brands clean, fast websites that look as serious as the deals being closed in them.",
    hook: "Joburg moves fast. Your website should load faster.",
    industries: ["Finance & fintech", "Mining & engineering", "Retail & franchises", "Logistics", "Tech startups", "Professional services"],
    neighborhoods: ["Sandton", "Rosebank", "Fourways", "Randburg", "Bryanston", "Midrand", "Soweto", "Roodepoort", "Centurion-adjacent", "Melville"],
    landmarks: ["Sandton City", "Nelson Mandela Square", "Constitution Hill", "Soweto Towers", "OR Tambo International"],
    geo: { lat: -26.2041, lng: 28.0473 },
    faqs: [
      { q: "Do you serve Johannesburg from KZN?", a: "Yes - 100% remote delivery via WhatsApp and Zoom. We've worked with Sandton and Rosebank clients across full project lifecycles without an in-person handover." },
      { q: "How long does a Johannesburg business website take?", a: "Starter sites ship in under a week. Business builds run a 72-hour design sprint and ship in 1–2 weeks. Custom Joburg brand builds take 3–6 weeks." },
      { q: "Can you compete with Joburg agencies on quality?", a: "Yes - and on price. Most Joburg agencies quote R20,000+ for what we deliver from R3,500 with the same React/Vite stack, Core Web Vitals tuning, and schema markup." },
    ],
  },
  {
    slug: "pretoria",
    name: "Pretoria",
    region: "Gauteng (Tshwane Metro)",
    district: "City of Tshwane",
    intro:
      "Pretoria is the administrative capital - government, embassies, universities, and serious B2B service firms. The bar for credibility is high here, and a polished website is non-negotiable for any business pitching to corporate or government clients.",
    hook: "In Pretoria, your website is your first interview. Dress it sharp.",
    industries: ["Government & public sector", "Education & universities", "Engineering & consulting", "Embassies & NGOs", "Automotive", "Professional services"],
    neighborhoods: ["Centurion", "Hatfield", "Brooklyn", "Menlyn", "Waterkloof", "Lynnwood", "Arcadia", "Mamelodi", "Atteridgeville", "Pretoria North"],
    landmarks: ["Union Buildings", "Voortrekker Monument", "Menlyn Park", "University of Pretoria", "Loftus Versfeld"],
    geo: { lat: -25.7479, lng: 28.2293 },
    faqs: [
      { q: "Do you build websites for Pretoria consulting and B2B firms?", a: "Yes - clean, credibility-first sites with capability statements, downloadable PDFs, case studies, and lead-capture forms are a strong fit for Pretoria's B2B economy." },
      { q: "Can you help Pretoria businesses tender for government work?", a: "Yes. We build sites with the corporate polish, supplier directories, and BEE-friendly content structure tender adjudicators expect to see." },
    ],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    region: "Nationwide",
    district: "National",
    intro:
      "Ntombii Tech serves businesses across South Africa - from Cape Town to Polokwane, Gqeberha to Mbombela. Every project runs on WhatsApp and video calls, so wherever you are, you get a Newcastle-based studio delivering work that competes nationally.",
    hook: "You don't need to be in our city. You just need a site that gets you found in yours.",
    industries: ["SMEs across all sectors", "Schools & education", "Non-profits & NGOs", "E-commerce", "Hospitality & tourism", "Professional services"],
    neighborhoods: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Free State", "Limpopo", "Mpumalanga", "North West", "Northern Cape"],
    landmarks: ["Table Mountain", "Cradle of Humankind", "Drakensberg", "Kruger National Park", "Robben Island"],
    geo: { lat: -28.4793, lng: 24.6727 },
    faqs: [
      { q: "Do you work with clients outside KwaZulu-Natal?", a: "Yes. We've shipped websites for clients across South Africa - Gauteng, Western Cape, Eastern Cape, and Limpopo. WhatsApp + Zoom is our standard workflow." },
      { q: "How much does a small business website cost in South Africa?", a: "Our Starter package is R2,500 for a one-page site. Most SMEs launch on Business at R3,500. Custom builds for e-commerce, schools, and corporates start at R7,500." },
      { q: "Can you provide local SEO for any South African city?", a: "Yes. Every build includes Google Business Profile setup, local schema markup, and city-targeted page copy - whether you're in Johannesburg, Cape Town, Durban, or anywhere else in SA." },
      { q: "Do you accept EFT and card payments?", a: "Yes - EFT, card via Yoco/Stripe, and 50% deposit terms for projects over R5,000. Full invoice issued for SARS compliance." },
    ],
  },
];

export const getLocation = (slug?: string) =>
  LOCATIONS.find((l) => l.slug === slug);
