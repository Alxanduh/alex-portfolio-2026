import { CaseStudy } from "../types";

const mcgrath: CaseStudy = {
  title: "McGrath Architects",
  slug: "mcgrath",
  year: "2024",
  eyebrow: "Designing care that actually shows up",
  role: "Art Direction, Web Design, 3D Rendering",
  client: "McGrath Architects",
  duration: "8 weeks",
  tools: ["Figma", "Next.js", "GSAP", "Sanity CMS"],
  meta: [
    { label: "Industry", value: "Healthcare" },
    { label: "Services", value: "UI, UX, Branding" },
    { label: "Services", value: "UI, UX, Branding" },
  ],
  summary:
    "A complete brand identity and digital presence for an architecture firm rooted in clarity, materiality, and restraint.",
  coverImage: "/images/mcgrath/cover.jpg",
  heroImage: "/images/mcgrath/hero.jpg",
  order: 1,
  featured: true,
  draft: false,
  seoTitle: "McGrath Architects — Studio Schultz",
  seoDescription:
    "Brand identity and web design for McGrath Architects. A project rooted in clarity, materiality, and restraint.",
  modules: [
    {
      type: "intro",
      heading: "A clean brief",
      body: "The process aimed to find the confidence of a well-typeset masthead. Quiet, assured, built to last. A brand, at its strongest, is a decision that doesn't need to explain itself.\n\nA brand, at its strongest, is a decision that has found its resolve to stand the growth, and questions that arrive in a competitive market.\n\nThe design emphasizes reliability and efficiency, key factors needed to build trust and credibility as they expand to new markets and projects that matter to the public's experience of built space.",
    },
    {
      type: "section-heading",
      label: "Approach",
      heading: "Project highlights",
    },
    {
      type: "metrics",
      items: [
        {
          label: "Acquired",
          value: "Strategic Clarity",
          description:
            "By unlocking high differentiation, the client enjoyed outsized market share gains relative to spend. Broadened the clients relevance, opening new markets",
        },
        {
          label: "14%",
          value: "Strategic Clarity",
          description:
            "By unlocking high differentiation, the client enjoyed outsized market share gains relative to spend. Broadened the clients relevance, opening new markets",
        },
        {
          label: "Scaled systems",
          value: "Strategic Clarity",
          description:
            "By unlocking high differentiation, the client enjoyed outsized market share gains relative to spend. Broadened the clients relevance, opening new markets",
        },
      ],
    },
    {
      type: "media-full",
      image: "/images/mcgrath/cover.jpg",
      alt: "McGrath Architects environmental design",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/mcgrath/cover.jpg", alt: "McGrath collateral" },
        { src: "/images/mcgrath/cover.jpg", alt: "McGrath signage" },
      ],
    },
    {
      type: "media-full",
      image: "/images/mcgrath/cover.jpg",
      alt: "McGrath Architects business cards on dark surface",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/mcgrath/cover.jpg", alt: "McGrath detail" },
        { src: "/images/mcgrath/cover.jpg", alt: "McGrath detail" },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/mcgrath/cover.jpg", alt: "McGrath detail" },
        { src: "/images/mcgrath/cover.jpg", alt: "McGrath detail" },
      ],
    },
    {
      type: "media-full",
      image: "/images/mcgrath/cover.jpg",
      alt: "McGrath brand system overview",
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in B2B markets.\n\nMcGrath Architects sought to refresh their brand to reflect their growth and adaptability in the logistics industry. We developed a bold new logo, a refined color scheme, and updated marketing materials to ensure consistency across all touchpoints.\n\nThe design emphasized reliability and efficiency, key attributes valued by their clients. Objectives included increasing brand recognition, improving client retention, and supporting Axis Logistics' expansion efforts",
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in B2B markets.\n\nMcGrath Architects sought to refresh their brand to reflect their growth and adaptability in the logistics industry. We developed a bold new logo, a refined color scheme, and updated marketing materials to ensure consistency across all touchpoints.\n\nIt's a design of structured reliability and efficiency that carries the firm's brand effortlessly across every channel, delivering quality that matters.",
    },
  ],
};

export default mcgrath;
