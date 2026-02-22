import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  publishedCaseStudies,
  getCaseStudyBySlug,
} from "@/content";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyRenderer from "@/components/case-study/CaseStudyRenderer";
import RelatedProjects from "@/components/case-study/RelatedProjects";

/**
 * generateStaticParams tells Next.js which slugs to
 * pre-render at build time. Only non-draft projects.
 */
export function generateStaticParams() {
  return publishedCaseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

/**
 * Dynamic metadata per project for SEO.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project || project.draft) {
    return { title: "Not Found — Studio Schultz" };
  }
  return {
    title: project.seoTitle,
    description: project.seoDescription,
  };
}

/**
 * Case study page layout:
 * Hero (eyebrow + title + meta tags + hero image)
 * → Modules (intro, media, metrics, text blocks, quotes)
 * → Next/Prev navigation
 * → Related projects
 *
 * No separate Meta component — that info is now
 * integrated into the hero as a compact tag row,
 * matching the mockup.
 */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project || project.draft) {
    notFound();
  }

  return (
    <>
      <CaseStudyHero project={project} />
      <div style={{ position: "relative", zIndex: 1, backgroundColor: "var(--color-surface-primary)" }}>
        <CaseStudyRenderer modules={project.modules} />
        <RelatedProjects currentSlug={slug} />
      </div>
    </>
  );
}
