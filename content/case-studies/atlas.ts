import { CaseStudy } from "../types";

const atlas: CaseStudy = {
  title: "Logofolio",
  slug: "atlas",
  year: "2024",
  eyebrow: "Crafting an industrial identity",
  role: "Brand Identity, Packaging, Art Direction",
  client: "Logofolio",
  duration: "6 weeks",
  tools: ["Figma", "Illustrator", "After Effects"],
  meta: [
    { label: "Industry", value: "Manufacturing" },
    { label: "Services", value: "Brand, Packaging" },
    { label: "Timeline", value: "6 Weeks" },
  ],
  summary:
    "A comprehensive brand identity and packaging system for an industrial manufacturer embracing modern design.",
  coverImage: "/images/atlas/cover.jpg",
  heroImage: "/images/atlas/hero.jpg",
  order: 4,
  featured: true,
  draft: false,
  seoTitle: "Logofolio — Studio Schultz",
  seoDescription:
    "Brand identity and packaging design for Logofolio, an industrial manufacturer.",
  modules: [
    {
      type: "intro",
      heading: "Industrial clarity",
      body: "Logofolio needed a brand that honored its industrial roots while projecting modern confidence. We distilled the identity down to its essentials — bold geometry, a restrained palette, and type that commands.\n\nA brand, at its strongest, is a decision that has found its resolve to stand the growth, and questions that arrive in a competitive market.\n\nThe design emphasizes reliability and efficiency, key factors needed to build trust and credibility as they expand to new markets.",
    },
    {
      type: "media-full",
      image: "/images/atlas/cover.jpg",
      alt: "Logofolio brand system overview",
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
          label: "Unified",
          value: "Brand system",
          description:
            "Consolidated a fragmented visual identity into a single, cohesive system spanning print and digital.",
        },
        {
          label: "24",
          value: "Packaging SKUs",
          description:
            "Designed a scalable packaging system covering the full product range with consistent brand presence.",
        },
        {
          label: "↑",
          value: "Market perception",
          description:
            "Post-rebrand surveys showed a significant shift in how trade partners perceived the brand's quality tier.",
        },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/atlas/cover.jpg", alt: "Logofolio detail" },
        { src: "/images/atlas/cover.jpg", alt: "Logofolio detail" },
      ],
    },
    {
      type: "media-full",
      image: "/images/atlas/cover.jpg",
      alt: "Logofolio packaging system",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/atlas/cover.jpg", alt: "Logofolio detail" },
        { src: "/images/atlas/cover.jpg", alt: "Logofolio detail" },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/atlas/cover.jpg", alt: "Logofolio detail" },
        { src: "/images/atlas/cover.jpg", alt: "Logofolio detail" },
      ],
    },
    {
      type: "media-full",
      image: "/images/atlas/cover.jpg",
      alt: "Logofolio brand final overview",
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in industrial markets.\n\nLogofolio sought to refresh their brand to reflect their growth and adaptability. We developed a bold new identity, a refined color scheme, and updated packaging to ensure consistency across all touchpoints.\n\nThe design emphasized reliability and efficiency, key attributes valued by their partners.",
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in B2B markets.\n\nWe developed a bold new logo, a refined color scheme, and updated marketing materials to ensure consistency across all touchpoints.\n\nIt's a design of structured reliability and efficiency that carries the brand effortlessly across every channel.",
    },
  ],
};

export default atlas;
