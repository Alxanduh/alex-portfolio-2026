/* ============================================ */
/* PROJECT DATA                                 */
/*                                              */
/* Single source of truth for:                  */
/*   - Home page project cards                  */
/*   - Dynamic [slug] project pages             */
/*                                              */
/* To add a project: add an object to this      */
/* array. It auto-appears everywhere.           */
/*                                              */
/* Section types:                               */
/*   "full"  → 16:9 full-width image            */
/*   "pair"  → two 1:1 square images            */
/*   Any section can optionally have a caption   */
/*                                              */
/* IMAGES: To revert to gray placeholders,      */
/* delete heroImage values and image/images      */
/* from sections. They fall back automatically.  */
/* ============================================ */

export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectHighlight {
  stat: string;
  title: string;
  body: string;
}

export interface SectionFull {
  type: "full";
  image?: string;       // path — falls back to placeholder
  caption?: {
    label?: string;
    title?: string;
    body?: string;
  };
}

export interface SectionPair {
  type: "pair";
  images?: [string, string];  // falls back to placeholders
  caption?: {
    label?: string;
    title?: string;
    body?: string;
  };
}

export type ProjectSection = SectionFull | SectionPair;

export interface Project {
  // Identity
  slug: string;
  title: string;
  subtitle: string;          // Subtitle line(s) — use \n for line breaks
  description: string;       // Short desc for home page cards

  // Card display
  label: string;             // e.g. "Branding • UI • UX"
  showOnHome: boolean;       // whether this project appears on home page
  homeOrder: number;         // sort order on home page

  // Project page meta
  meta: ProjectMeta[];
  intro: string;

  // Hero image (full-bleed)
  heroImage?: string;        // falls back to placeholder

  // Highlights (stat cards)
  highlights: ProjectHighlight[];

  // Content sections — flexible array of full/pair blocks
  sections: ProjectSection[];

  // Related projects (slugs) — shown at bottom of project page
  related: string[];
}

/* ============================================ */
/* AKOYA MOCKUP URLs (for testing layout)       */
/* Delete this block + all A[] refs to revert   */
/* to gray placeholders.                        */
/* ============================================ */
const CDN = "https://akoyamockups.com/cdn/shop/files";
const A = [
  /* 0  */ `${CDN}/Image_02_comp_e314234b-4a4a-49f7-ae60-d776c65615ed.jpg?v=1705233663&width=2000`,
  /* 1  */ `${CDN}/Image_01_comp_9c3440a9-91fa-4590-8e61-a5d36a570b62.jpg?v=1705233663&width=2000`,
  /* 2  */ `${CDN}/Image_03_comp_d99e3acc-a7dd-4f9e-ad84-7c72b888e113.jpg?v=1694957168&width=2000`,
  /* 3  */ `${CDN}/Image_02_comp_11c6240c-bf93-43fd-8a78-3ca257eac67b.jpg?v=1716219622&width=2000`,
  /* 4  */ `${CDN}/Image_01_comp_2d19f037-3830-40cc-87f7-f8726018f1b6.jpg?v=1716219622&width=2000`,
  /* 5  */ `${CDN}/Image_02_b18cce19-6653-410e-98fd-c0cba76b1e87.jpg?v=1761825091&width=2000`,
  /* 6  */ `${CDN}/IPHONE-MOCKUP-044-copy.jpg?v=1752138983&width=2000`,
  /* 7  */ `${CDN}/Image_01_comp_593ae18b-3393-4f4d-af21-6e2b631001b5.jpg?v=1752138983&width=2000`,
  /* 8  */ `${CDN}/MACBOOK-MOCKUP-03-copy.jpg?v=1752139604&width=2000`,
  /* 9  */ `${CDN}/Image_01_87aa1644-75a4-4b80-9235-f9832ef4f7ae.jpg?v=1752139604&width=2000`,
  /* 10 */ `${CDN}/Image_02_comp_4abd356d-f753-4850-b1e1-8a7c4fcb2707.jpg?v=1752139729&width=2000`,
  /* 11 */ `${CDN}/Image_02_comp_f297b001-e18f-436d-a57e-6f28bab48ae2.jpg?v=1755220152&width=2000`,
  /* 12 */ `${CDN}/Image_04_comp_d1c0ee55-caf1-414a-ac77-04424812172b.jpg?v=1752139228&width=2000`,
  /* 13 */ `${CDN}/Image_02_comp_38dd1eef-09d4-4e9a-a92b-e07eb374605e.jpg?v=1752139633&width=2000`,
  /* 14 */ `${CDN}/Image_02_comp_66c77ba9-9d4f-40c2-a224-2b5c89cb7b45.jpg?v=1752139299&width=2000`,
  /* 15 */ `${CDN}/Image_03_comp_96dc7826-0aec-432b-a3b9-e54b87dd30d9.jpg?v=1755220313&width=2000`,
  /* 16 */ `${CDN}/Image_02_a40ceea6-455c-4b5e-8092-ae33de7f1e9b.jpg?v=1752139674&width=2000`,
  /* 17 */ `${CDN}/Image_04_comp_2736b6aa-dc59-4457-b8b4-0aad083970cd.jpg?v=1718644712&width=2000`,
  /* 18 */ `${CDN}/Image_03_comp.jpg?v=1705913743&width=2000`,
  /* 19 */ `${CDN}/Image_02_comp_bf0f1304-3452-4208-b337-ce5b78c7bbbd.jpg?v=1738014314&width=2000`,
  /* 20 */ `${CDN}/Image_02_comp_30ddfa1c-e504-4f5c-9deb-00beccc77d40.jpg?v=1744015819&width=2000`,
  /* 21 */ `${CDN}/IPHONE-MOCKUP-045-copy.jpg?v=1752139729&width=2000`,
  /* 22 */ `${CDN}/MACBOOK-MOCKUP-010-copy.jpg?v=1752139633&width=2000`,
  /* 23 */ `${CDN}/IPHONE-MOCKUP-034-copy.jpg?v=1752139537&width=2000`,
  /* 24 */ `${CDN}/IPHONE-MOCKUP-031-copy.jpg?v=1752139458&width=2000`,
  /* 25 */ `${CDN}/BOOK-MOCKUP-02-copy.jpg?v=1752139674&width=2000`,
  /* 26 */ `${CDN}/LABEL-MOCKUP-01-copy.jpg?v=1752139299&width=2000`,
  /* 27 */ `${CDN}/OOH-MOCKUP-05-copy.jpg?v=1752139228&width=2000`,
  /* 28 */ `${CDN}/compphaad01.jpg?v=1761825091&width=2000`,
  /* 29 */ `${CDN}/Image_03.jpg?v=1705233261&width=2000`,
];

/* ============================================ */
/* PROJECTS                                     */
/* ============================================ */

export const projects: Project[] = [
  /* ---- 1. Amount ---- */
  {
    slug: "amount",
    title: "Amount",
    subtitle: "Reimagining digital\nlending experiences",
    description: "Reimagining digital lending experiences",
    label: "Branding • UI • UX",
    showOnHome: true,
    homeOrder: 1,
    heroImage: A[3],
    meta: [
      { label: "Industry", value: "Fintech" },
      { label: "Services", value: "UI, UX, Branding" },
      { label: "Year", value: "2024" },
    ],
    intro: "Amount is a technology company that powers digital lending for banks and financial institutions. The challenge was creating a brand and product experience that balanced enterprise credibility with modern fintech energy.",
    highlights: [
      { stat: "40%", title: "Faster loan origination", body: "Streamlined the digital lending workflow, reducing average time-to-decision from days to hours for partner banks." },
      { stat: "↑", title: "Enterprise adoption", body: "The refreshed platform attracted tier-one banking clients by projecting both innovation and institutional trust." },
      { stat: "3x", title: "User engagement", body: "Redesigned dashboards saw a threefold increase in daily active usage across relationship managers." },
    ],
    sections: [
      { type: "full", image: A[4], caption: { body: "The visual identity balances warm approachability with the precision expected in financial services. Every touchpoint reinforces reliability." } },
      { type: "pair", images: [A[8], A[9]] },
      { type: "full", image: A[13], caption: { body: "Relationship managers see exactly what matters. The interface strips away complexity to surface actionable insights at a glance." } },
      { type: "pair", images: [A[22], A[20]] },
      { type: "full", image: A[5] },
    ],
    related: ["grow-therapy", "braintree"],
  },

  /* ---- 2. Grow Therapy ---- */
  {
    slug: "grow-therapy",
    title: "Grow Therapy",
    subtitle: "Designing care that\nactually shows up",
    description: "Designing care that actually shows up",
    label: "Branding • UI • UX",
    showOnHome: true,
    homeOrder: 2,
    heroImage: A[0],
    meta: [
      { label: "Industry", value: "Healthcare" },
      { label: "Services", value: "UI, UX, Branding" },
      { label: "Year", value: "2024" },
    ],
    intro: "Grow Therapy is a mental health platform connecting patients with therapists. The goal was to create a digital experience that feels genuinely warm and human — not clinical — while handling the complexity of insurance, scheduling, and provider matching.",
    highlights: [
      { stat: "10%", title: "Booking completion", body: "By unlocking high differentiation, the client enjoyed outsized market share gains relative to spend. Broadened the client's relevance, opening new markets." },
      { stat: "Unity", title: "Provider satisfaction", body: "Therapists reported higher satisfaction with the streamlined onboarding and scheduling tools, reducing admin burden." },
      { stat: "10%", title: "Patient retention", body: "Improved matching algorithms and a smoother booking flow kept patients engaged through their care journey." },
    ],
    sections: [
      { type: "full", image: A[1], caption: { body: "The matching flow asks the right questions without feeling like a medical intake form. Warm illustrations and conversational copy guide users through." } },
      { type: "pair", images: [A[2], A[29]] },
      { type: "full", image: A[17], caption: { body: "The provider dashboard puts clinical work first. Scheduling, notes, and insurance are handled without pulling focus from patient care." } },
      { type: "pair", images: [A[18], A[14]] },
      { type: "full", image: A[26] },
    ],
    related: ["amount", "simple-trips"],
  },

  /* ---- 3. Braintree ---- */
  {
    slug: "braintree",
    title: "Braintree",
    subtitle: "Code as art at a leading\nonline payments platform",
    description: "Code as art at a leading online payments platform",
    label: "UI • UX • Motion",
    showOnHome: true,
    homeOrder: 3,
    heroImage: A[6],
    meta: [
      { label: "Industry", value: "Fintech" },
      { label: "Services", value: "UI, UX, Motion" },
      { label: "Year", value: "2023" },
    ],
    intro: "Braintree processes billions in payments for companies like Uber, Airbnb, and GitHub. The brief was to evolve the developer experience — making complex payment integrations feel elegant and even beautiful.",
    highlights: [
      { stat: "↑", title: "Developer NPS", body: "The redesigned documentation and SDK experience dramatically improved developer satisfaction scores." },
      { stat: "50%", title: "Faster integration", body: "New interactive code previews and streamlined onboarding cut average integration time in half." },
      { stat: "2x", title: "Docs engagement", body: "Time spent in documentation doubled as developers actually enjoyed exploring the new interactive guides." },
    ],
    sections: [
      { type: "full", image: A[7], caption: { body: "We treated code snippets as visual artifacts — syntax highlighting became a design element, and documentation pages became gallery spaces." } },
      { type: "pair", images: [A[10], A[21]] },
      { type: "full", image: A[11] },
      { type: "full", image: A[23] },
      { type: "pair", images: [A[15], A[24]], caption: { body: "Interactive previews let developers see results before writing a line of code. The sandbox environment became the primary onboarding tool." } },
    ],
    related: ["amount", "northside-bottling-works"],
  },

  /* ---- 4. Northside Bottling Works ---- */
  {
    slug: "northside-bottling-works",
    title: "Northside Bottling Works",
    subtitle: "Heritage meets craft\nin every detail",
    description: "Heritage meets craft in every detail",
    label: "Branding • Packaging",
    showOnHome: true,
    homeOrder: 4,
    heroImage: A[12],
    meta: [
      { label: "Industry", value: "Beverage / CPG" },
      { label: "Services", value: "Branding, Packaging" },
      { label: "Year", value: "2023" },
    ],
    intro: "Northside Bottling Works is a craft beverage company rooted in traditional methods. The brand needed to honor that heritage while standing out on crowded shelves. Every detail — from label typography to cap color — was considered.",
    highlights: [
      { stat: "↑", title: "Shelf visibility", body: "The distinctive label system commands attention in retail environments, outperforming category norms in eye-tracking studies." },
      { stat: "12", title: "SKU system", body: "A flexible brand architecture accommodates twelve distinct products while maintaining family cohesion across the line." },
      { stat: "3x", title: "Social sharing", body: "The photogenic packaging drove organic social media engagement, becoming the brand's primary awareness channel." },
    ],
    sections: [
      { type: "full", image: A[27], caption: { body: "The identity draws from industrial-era typography and production ephemera — reinterpreted with modern restraint. Nothing decorative without purpose." } },
      { type: "pair", images: [A[25], A[16]] },
      { type: "full", image: A[19], caption: { body: "Label hierarchy prioritizes scannability at distance while rewarding closer inspection with craft details and production stories." } },
      { type: "pair", images: [A[28], A[9]] },
      { type: "full", image: A[14] },
    ],
    related: ["logofolio", "simple-trips"],
  },

  /* ---- 5. Simple Trips ---- */
  {
    slug: "simple-trips",
    title: "Simple Trips",
    subtitle: "Travel planning without\nthe overwhelm",
    description: "Travel planning without the overwhelm",
    label: "Branding • UI • UX",
    showOnHome: true,
    homeOrder: 5,
    heroImage: A[19],
    meta: [
      { label: "Industry", value: "Travel" },
      { label: "Services", value: "Branding, UI, UX" },
      { label: "Year", value: "2024" },
    ],
    intro: "Simple Trips is a travel planning platform that strips away the noise of modern booking. No algorithm-driven upsells, no dark patterns — just a clean, opinionated tool that helps you plan trips that actually feel like vacations.",
    highlights: [
      { stat: "↑", title: "Trip completion", body: "The streamlined planning flow reduced abandoned trips by removing decision fatigue at every step." },
      { stat: "4.8", title: "App store rating", body: "Users consistently praised the calm, focused interface in reviews — a stark contrast to competitor clutter." },
      { stat: "60%", title: "Less time planning", body: "Opinionated defaults and smart suggestions cut average trip planning time by more than half." },
    ],
    sections: [
      { type: "full", image: A[20], caption: { body: "The visual identity uses generous whitespace, soft photography, and restrained typography to evoke the feeling of already being on vacation." } },
      { type: "pair", images: [A[6], A[7]] },
      { type: "full", image: A[10], caption: { body: "Instead of showing 400 hotels, the app shows three great ones. Every screen asks one question and makes the best answer obvious." } },
      { type: "pair", images: [A[23], A[15]] },
      { type: "full", image: A[0] },
    ],
    related: ["grow-therapy", "northside-bottling-works"],
  },

  /* ---- 6. Logofolio ---- */
  {
    slug: "logofolio",
    title: "Logofolio",
    subtitle: "A collection of marks\nand identities",
    description: "A collection of marks and identities",
    label: "Branding • Identity",
    showOnHome: true,
    homeOrder: 6,
    heroImage: A[25],
    meta: [
      { label: "Type", value: "Collection" },
      { label: "Services", value: "Logo, Identity" },
      { label: "Period", value: "2020–2024" },
    ],
    intro: "A curated selection of logos and brand marks created over the past four years. Each one started as a conversation about what a company stands for — and ended as a single, distilled symbol.",
    highlights: [
      { stat: "30+", title: "Marks designed", body: "A breadth of work spanning startups, institutions, and personal projects across industries." },
      { stat: "↑", title: "Range of expression", body: "From geometric precision to hand-drawn warmth — each mark finds the voice its brand needs." },
    ],
    sections: [
      { type: "full", image: A[16] },
      { type: "pair", images: [A[26], A[18]] },
      { type: "full", image: A[8] },
      { type: "pair", images: [A[4], A[17]] },
      { type: "full", image: A[1] },
      { type: "pair", images: [A[11], A[12]] },
    ],
    related: ["northside-bottling-works", "braintree"],
  },
];

/* ============================================ */
/* HELPERS                                      */
/* ============================================ */

/** Get all projects visible on home page, sorted */
export function getHomeProjects(): Project[] {
  return projects
    .filter((p) => p.showOnHome)
    .sort((a, b) => a.homeOrder - b.homeOrder);
}

/** Get a project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Get related projects as full objects */
export function getRelatedProjects(slugs: string[]): Project[] {
  return slugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is Project => p !== undefined);
}

/** Get all slugs (for static generation) */
export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
