import { CaseStudy } from "../types";

const apex: CaseStudy = {
  title: "Braintree",
  slug: "apex",
  year: "2025",
  eyebrow: "Precision meets personality",
  role: "Brand Strategy, UI/UX, Motion Design",
  client: "Braintree",
  duration: "14 weeks",
  tools: ["Figma", "Framer", "After Effects", "Three.js"],
  meta: [
    { label: "Industry", value: "Fintech" },
    { label: "Services", value: "Brand, UI/UX" },
    { label: "Timeline", value: "14 Weeks" },
  ],
  summary:
    "A precision-crafted brand and product experience for a fintech platform where performance meets personality.",
  coverImage: "/images/apex/cover.jpg",
  heroImage: "/images/apex/hero.jpg",
  order: 6,
  featured: true,
  draft: false,
  seoTitle: "Braintree — Studio Schultz",
  seoDescription:
    "Brand strategy and product design for Braintree, a precision fintech platform.",
  modules: [
    {
      type: "intro",
      heading: "Built for precision",
      body: "Braintree needed a brand that communicated trust without sacrificing personality. The solution was a system built on mathematical precision — every ratio, every spacing decision, every color relationship is intentional.\n\nA brand, at its strongest, is a decision that has found its resolve to stand the growth, and questions that arrive in a competitive market.\n\nThe design emphasizes reliability and efficiency, key factors needed to build trust and credibility as they expand to new markets.",
    },
    {
      type: "media-full",
      image: "/images/apex/cover.jpg",
      alt: "Braintree brand system overview",
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
          label: "40%",
          value: "Faster onboarding",
          description:
            "Streamlined the digital experience, reducing average onboarding time from days to hours for enterprise clients.",
        },
        {
          label: "↑",
          value: "Enterprise adoption",
          description:
            "The refreshed platform attracted tier-one clients by projecting both innovation and institutional trust.",
        },
        {
          label: "3x",
          value: "User engagement",
          description:
            "Redesigned dashboards saw a threefold increase in daily active usage across account managers.",
        },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/apex/cover.jpg", alt: "Braintree detail" },
        { src: "/images/apex/cover.jpg", alt: "Braintree detail" },
      ],
    },
    {
      type: "media-full",
      image: "/images/apex/cover.jpg",
      alt: "Braintree platform screens",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/apex/cover.jpg", alt: "Braintree detail" },
        { src: "/images/apex/cover.jpg", alt: "Braintree detail" },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/apex/cover.jpg", alt: "Braintree detail" },
        { src: "/images/apex/cover.jpg", alt: "Braintree detail" },
      ],
    },
    {
      type: "media-full",
      image: "/images/apex/cover.jpg",
      alt: "Braintree brand system final overview",
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in fintech markets.\n\nBraintree sought to refresh their brand to reflect their growth and adaptability in the payments industry. We developed a bold new identity, a refined color scheme, and updated marketing materials to ensure consistency across all touchpoints.\n\nThe design emphasized reliability and efficiency, key attributes valued by their clients.",
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in B2B markets.\n\nWe developed a bold new logo, a refined color scheme, and updated marketing materials to ensure consistency across all touchpoints.\n\nIt's a design of structured reliability and efficiency that carries the brand effortlessly across every channel.",
    },
  ],
};

export default apex;
