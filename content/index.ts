/**
 * CASE STUDY REGISTRY
 *
 * Import each case study and add it to the array.
 * The rest of the site (homepage, work index, routing)
 * reads from this single source — no manual wiring needed.
 *
 * To add a new project:
 * 1. Create content/case-studies/your-project.ts
 * 2. Import it below
 * 3. Add it to the caseStudies array
 * That's it — the site handles the rest.
 */

import { CaseStudy } from "./types";
import mcgrath from "./case-studies/mcgrath";
import grow from "./case-studies/grow";
import runnr from "./case-studies/runnr";
import atlas from "./case-studies/atlas";
import nomad from "./case-studies/nomad";
import apex from "./case-studies/apex";

export const caseStudies: CaseStudy[] = [mcgrath, grow, runnr, atlas, nomad, apex];

/** Published (non-draft) projects, sorted by order */
export const publishedCaseStudies = caseStudies
  .filter((cs) => !cs.draft)
  .sort((a, b) => a.order - b.order);

/** Featured projects for the homepage */
export const featuredCaseStudies = publishedCaseStudies.filter(
  (cs) => cs.featured
);

/** Get a single case study by slug */
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((cs) => cs.slug === slug);

/** Get next/prev for navigation within published projects */
export const getAdjacentCaseStudies = (
  slug: string
): { prev: CaseStudy | null; next: CaseStudy | null } => {
  const index = publishedCaseStudies.findIndex((cs) => cs.slug === slug);
  return {
    prev: index > 0 ? publishedCaseStudies[index - 1] : null,
    next:
      index < publishedCaseStudies.length - 1
        ? publishedCaseStudies[index + 1]
        : null,
  };
};

export type { CaseStudy, CaseStudyModule } from "./types";
