import { publishedCaseStudies } from "@/content";
import type { CaseStudy } from "@/content";
import ProjectCard from "@/components/work/ProjectCard";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./RelatedProjects.module.css";

interface RelatedProjectsProps {
  currentSlug: string;
}

/**
 * "More Stuff" section at the bottom of case study pages.
 *
 * Figma layout:
 * - Section header: label-m "More Stuff" + divider + headline-l "Check these too"
 * - 50/50 grid of project cards with stack gap
 */
export default function RelatedProjects({
  currentSlug,
}: RelatedProjectsProps) {
  const related = publishedCaseStudies
    .filter((cs: CaseStudy) => cs.slug !== currentSlug)
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <FadeIn>
          <div className={styles.sectionHeader}>
            <p className="label-m text-secondary">More Stuff</p>
            <div className={styles.divider} />
            <h2 className="headline-l">Check these too</h2>
          </div>
          <div className={styles.grid}>
            {related.map((project: CaseStudy) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
