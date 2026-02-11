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
  subtitle: string;          // Denton italic line(s) — use \n for line breaks
  description: string;       // Short desc for home page cards

  // Card display
  label: string;             // e.g. "Branding • UI • UX"
  homeLayout: "paired" | "solo" | "hidden";  // how it shows on home page
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
    homeLayout: "paired",
    homeOrder: 1,
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
      { stat: "↑", title: "Brand consistency", body: "A unified design system brought coherence across twelve product surfaces and three distinct user roles." },
    ],
    sections: [
      { type: "full", caption: { label: "Brand system", title: "Building trust at scale", body: "The visual identity balances warm approachability with the precision expected in financial services. Every touchpoint reinforces reliability." } },
      { type: "pair" },
      { type: "full" },
      { type: "pair", caption: { label: "Product design", title: "Dashboard that works harder", body: "Relationship managers see exactly what matters. The interface strips away complexity to surface actionable insights at a glance." } },
      { type: "full" },
      { type: "full" },
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
    homeLayout: "paired",
    homeOrder: 2,
    meta: [
      { label: "Industry", value: "Healthcare" },
      { label: "Services", value: "UI, UX, Branding" },
      { label: "Year", value: "2024" },
    ],
    intro: "Grow Therapy is a mental health platform connecting patients with therapists. The goal was to create a digital experience that feels genuinely warm and human — not clinical — while handling the complexity of insurance, scheduling, and provider matching.",
    highlights: [
      { stat: "10%", title: "Booking completion", body: "By unlocking high differentiation, the client enjoyed outsized market share gains relative to spend. Broadened the client's relevance, opening new markets." },
      { stat: "↑", title: "Provider satisfaction", body: "Therapists reported higher satisfaction with the streamlined onboarding and scheduling tools, reducing admin burden." },
      { stat: "10%", title: "Patient retention", body: "Improved matching algorithms and a smoother booking flow kept patients engaged through their care journey." },
      { stat: "↑", title: "Brand perception", body: "Research showed users perceived the brand as more trustworthy and approachable after the redesign." },
    ],
    sections: [
      { type: "full", caption: { label: "Patient experience", title: "Finding the right therapist", body: "The matching flow asks the right questions without feeling like a medical intake form. Warm illustrations and conversational copy guide users through." } },
      { type: "pair" },
      { type: "full" },
      { type: "pair", caption: { label: "Provider tools", title: "Built for therapists, not admins", body: "The provider dashboard puts clinical work first. Scheduling, notes, and insurance are handled without pulling focus from patient care." } },
      { type: "full" },
      { type: "full" },
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
    homeLayout: "solo",
    homeOrder: 3,
    meta: [
      { label: "Industry", value: "Fintech" },
      { label: "Services", value: "UI, UX, Motion" },
      { label: "Year", value: "2023" },
    ],
    intro: "Braintree processes billions in payments for companies like Uber, Airbnb, and GitHub. The brief was to evolve the developer experience — making complex payment integrations feel elegant and even beautiful.",
    highlights: [
      { stat: "↑", title: "Developer NPS", body: "The redesigned documentation and SDK experience dramatically improved developer satisfaction scores." },
      { stat: "50%", title: "Faster integration", body: "New interactive code previews and streamlined onboarding cut average integration time in half." },
      { stat: "↑", title: "Brand differentiation", body: "The code-as-art visual direction set Braintree apart in a sea of generic fintech aesthetics." },
      { stat: "2x", title: "Docs engagement", body: "Time spent in documentation doubled as developers actually enjoyed exploring the new interactive guides." },
    ],
    sections: [
      { type: "full", caption: { label: "Visual direction", title: "Where code meets craft", body: "We treated code snippets as visual artifacts — syntax highlighting became a design element, and documentation pages became gallery spaces." } },
      { type: "pair" },
      { type: "full" },
      { type: "full" },
      { type: "pair", caption: { label: "Developer experience", title: "Documentation as product", body: "Interactive previews let developers see results before writing a line of code. The sandbox environment became the primary onboarding tool." } },
      { type: "full" },
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
    homeLayout: "paired",
    homeOrder: 4,
    meta: [
      { label: "Industry", value: "Beverage / CPG" },
      { label: "Services", value: "Branding, Packaging" },
      { label: "Year", value: "2023" },
    ],
    intro: "Northside Bottling Works is a craft beverage company rooted in traditional methods. The brand needed to honor that heritage while standing out on crowded shelves. Every detail — from label typography to cap color — was considered.",
    highlights: [
      { stat: "↑", title: "Shelf visibility", body: "The distinctive label system commands attention in retail environments, outperforming category norms in eye-tracking studies." },
      { stat: "12", title: "SKU system", body: "A flexible brand architecture accommodates twelve distinct products while maintaining family cohesion across the line." },
      { stat: "↑", title: "Premium positioning", body: "The refined packaging enabled a price-point increase while maintaining volume — customers perceived higher quality." },
      { stat: "3x", title: "Social sharing", body: "The photogenic packaging drove organic social media engagement, becoming the brand's primary awareness channel." },
    ],
    sections: [
      { type: "full", caption: { label: "Brand identity", title: "Roots run deep", body: "The identity draws from industrial-era typography and production ephemera — reinterpreted with modern restraint. Nothing decorative without purpose." } },
      { type: "pair" },
      { type: "full" },
      { type: "pair", caption: { label: "Packaging", title: "Designed for the shelf and the hand", body: "Label hierarchy prioritizes scannability at distance while rewarding closer inspection with craft details and production stories." } },
      { type: "full" },
      { type: "full" },
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
    homeLayout: "paired",
    homeOrder: 5,
    meta: [
      { label: "Industry", value: "Travel" },
      { label: "Services", value: "Branding, UI, UX" },
      { label: "Year", value: "2024" },
    ],
    intro: "Simple Trips is a travel planning platform that strips away the noise of modern booking. No algorithm-driven upsells, no dark patterns — just a clean, opinionated tool that helps you plan trips that actually feel like vacations.",
    highlights: [
      { stat: "↑", title: "Trip completion", body: "The streamlined planning flow reduced abandoned trips by removing decision fatigue at every step." },
      { stat: "4.8", title: "App store rating", body: "Users consistently praised the calm, focused interface in reviews — a stark contrast to competitor clutter." },
      { stat: "↑", title: "Repeat bookings", body: "The low-friction experience drove strong repeat usage, with users returning for every trip rather than defaulting to incumbents." },
      { stat: "60%", title: "Less time planning", body: "Opinionated defaults and smart suggestions cut average trip planning time by more than half." },
    ],
    sections: [
      { type: "full", caption: { label: "Brand", title: "Calm is the feature", body: "The visual identity uses generous whitespace, soft photography, and restrained typography to evoke the feeling of already being on vacation." } },
      { type: "pair" },
      { type: "full" },
      { type: "pair", caption: { label: "Product", title: "Decisions, not options", body: "Instead of showing 400 hotels, the app shows three great ones. Every screen asks one question and makes the best answer obvious." } },
      { type: "full" },
      { type: "full" },
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
    homeLayout: "solo",
    homeOrder: 6,
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
      { type: "full" },
      { type: "pair" },
      { type: "full" },
      { type: "pair" },
      { type: "full" },
      { type: "pair" },
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
    .filter((p) => p.homeLayout !== "hidden")
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
