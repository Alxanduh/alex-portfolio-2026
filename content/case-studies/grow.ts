import { CaseStudy } from "../types";

const grow: CaseStudy = {
  title: "Grow Therapy",
  slug: "grow",
  year: "2024",
  eyebrow: "Climate-tech meets design systems",
  role: "Brand Strategy, Visual Identity, Digital Product Design",
  client: "Grow Therapy",
  duration: "12 weeks",
  tools: ["Figma", "React", "TypeScript", "Framer Motion"],
  meta: [
    { label: "Industry", value: "Climate Tech" },
    { label: "Services", value: "Brand, Identity" },
    { label: "Timeline", value: "12 Weeks" },
  ],
  summary:
    "A digital-first brand and product design for a venture studio scaling climate-focused startups.",
  coverImage: "/images/grow/cover.jpg",
  heroImage: "/images/grow/hero.jpg",
  order: 2,
  featured: true,
  draft: false,
  seoTitle: "Grow Therapy — Studio Schultz",
  seoDescription:
    "Brand strategy and digital product design for Grow Therapy, a climate-tech venture studio.",
  modules: [
    {
      type: "intro",
      heading: "Scaling with intention",
      body: "Grow needed a brand that could flex across portfolio companies without losing its own identity. We built a system — not a logo — that acts as a container for growth. The visual language scales from pitch decks to product interfaces while maintaining the rigor of a single, confident voice.\n\nA brand, at its strongest, is a decision that has found its resolve to stand the growth, and questions that arrive in a competitive market.\n\nThe design emphasizes reliability and efficiency, key factors needed to build trust and credibility as they expand to new markets.",
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
          label: "Outcome",
          value: "12 portfolio brands",
          description:
            "A parent identity system flexible enough to house twelve distinct sub-brands while maintaining a cohesive visual language.",
        },
        {
          label: "Delivered",
          value: "Design system",
          description:
            "Component library with tokens, patterns, and templates for rapid deployment across all portfolio companies.",
        },
        {
          label: "Impact",
          value: "Series A closed",
          description:
            "Brand clarity contributed to a successful fundraising round within three months of launch.",
        },
      ],
    },
    {
      type: "media-full",
      image: "/images/grow/cover.jpg",
      alt: "Grow Therapy brand system overview",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/grow/cover.jpg", alt: "Grow brand elements" },
        { src: "/images/grow/cover.jpg", alt: "Grow interface design" },
      ],
    },
    {
      type: "media-full",
      image: "/images/grow/cover.jpg",
      alt: "Grow Therapy website on multiple devices",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/grow/cover.jpg", alt: "Grow detail" },
        { src: "/images/grow/cover.jpg", alt: "Grow detail" },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/grow/cover.jpg", alt: "Grow detail" },
        { src: "/images/grow/cover.jpg", alt: "Grow detail" },
      ],
    },
    {
      type: "media-full",
      image: "/images/grow/cover.jpg",
      alt: "Grow brand system final overview",
    },
    {
      type: "text-block",
      body: "The system uses a deliberately constrained color palette — mostly monochrome with a single accent per sub-brand. This forces clarity and ensures that when color does appear, it carries weight.\n\nTypography follows the same logic: one family, strict hierarchy, no exceptions. The result is a brand that feels both unified and adaptable — each sub-brand distinct but unmistakably part of the same family.\n\nThe design emphasized reliability and efficiency, key attributes valued by their clients. Objectives included increasing brand recognition, improving client retention, and supporting expansion efforts.",
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust across a complex portfolio structure.\n\nGrow sought to refresh their brand to reflect their growth and adaptability in the climate-tech industry. We developed a bold system, a refined color scheme, and updated marketing materials to ensure consistency across all touchpoints.\n\nIt's a design of structured reliability and efficiency that carries the brand effortlessly across every channel.",
    },
  ],
};

export default grow;
