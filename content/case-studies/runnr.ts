import { CaseStudy } from "../types";

const runnr: CaseStudy = {
  title: "Black River Barbershop",
  slug: "runnr",
  year: "2025",
  eyebrow: "Movement meets identity",
  role: "Brand Identity, App Design, Motion",
  client: "Black River Barbershop",
  duration: "10 weeks",
  tools: ["Figma", "After Effects", "React Native", "GSAP"],
  meta: [
    { label: "Industry", value: "Fitness" },
    { label: "Services", value: "Brand, App Design" },
    { label: "Timeline", value: "10 Weeks" },
  ],
  summary:
    "A kinetic brand identity and mobile app design for a running community platform redefining how people train together.",
  coverImage: "/images/runnr/cover.jpg",
  heroImage: "/images/runnr/hero.jpg",
  order: 3,
  featured: true,
  draft: false,
  seoTitle: "Black River Barbershop — Studio Schultz",
  seoDescription:
    "Brand identity and app design for Black River Barbershop, a community-driven running platform.",
  modules: [
    {
      type: "intro",
      heading: "Motion as identity",
      body: "The brand needed to feel like it was already moving. We built a visual system rooted in kinetic energy — type that leans forward, color that pulses, and layout that breathes.\n\nA brand, at its strongest, is a decision that has found its resolve to stand the growth, and questions that arrive in a competitive market.\n\nThe design emphasizes reliability and efficiency, key factors needed to build trust and credibility as they expand to new markets.",
    },
    {
      type: "media-full",
      image: "/images/runnr/cover.jpg",
      alt: "Black River Barbershop brand overview",
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
          label: "4x",
          value: "Community growth",
          description:
            "The new brand attracted four times the organic community signups within the first quarter of launch.",
        },
        {
          label: "92%",
          value: "Retention rate",
          description:
            "App engagement metrics showed near-best-in-class retention, driven by the seamless brand-to-product experience.",
        },
        {
          label: "Shipped",
          value: "iOS + Android",
          description:
            "Full cross-platform launch with a unified design system powering both native applications.",
        },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/runnr/cover.jpg", alt: "Black River detail" },
        { src: "/images/runnr/cover.jpg", alt: "Black River detail" },
      ],
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in community-driven markets.\n\nBlack River sought to refresh their brand to reflect their growth and adaptability. We developed a bold new identity, a refined color scheme, and updated marketing materials to ensure consistency across all touchpoints.\n\nThe design emphasized reliability and efficiency, key attributes valued by their community.",
    },
    {
      type: "media-full",
      image: "/images/runnr/cover.jpg",
      alt: "Black River Barbershop app screens",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/runnr/cover.jpg", alt: "Black River detail" },
        { src: "/images/runnr/cover.jpg", alt: "Black River detail" },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/runnr/cover.jpg", alt: "Black River detail" },
        { src: "/images/runnr/cover.jpg", alt: "Black River detail" },
      ],
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in community-driven markets.\n\nWe developed a bold new identity, a refined color scheme, and updated marketing materials to ensure consistency across all touchpoints.\n\nIt's a design of structured reliability and efficiency that carries the brand effortlessly across every channel.",
    },
    {
      type: "media-full",
      image: "/images/runnr/cover.jpg",
      alt: "Black River brand system final overview",
    },
  ],
};

export default runnr;
