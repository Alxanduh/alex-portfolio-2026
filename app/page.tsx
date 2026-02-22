import { featuredCaseStudies } from "@/content";
import ProjectCard from "@/components/work/ProjectCard";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./page.module.css";

/**
 * Homepage — Work + case study links
 *
 * Layout (top → bottom):
 * 1. Hero — Fixed red stage, 100vh. "Schultz™®©" at bottom.
 *           Content slides up over it (parallax).
 * 2. Content wrapper — dark bg, z-index above hero
 *   2a. Intro — label + divider + two-column
 *   2b. Selected projects — 12-col asymmetric grid
 *   2c. CTA — red manifesto section
 *
 * Project grid layout (12-col):
 *   Row 1: 8 + 4    Row 2: 12 (wide)
 *   Row 3: 4 + 8    Row 4: 12 (wide)
 */

const GRID_PATTERN: [number, boolean][] = [
  [8, false],
  [4, false],
  [12, true],
  [4, false],
  [8, false],
  [12, true],
];

const SPAN_CLASS: Record<number, string> = {
  4: styles.span4,
  6: styles.span6,
  8: styles.span8,
  12: styles.span12,
};

export default function HomePage() {
  return (
    <>
      {/* ———— 1. Hero — Fixed red stage ———— */}
      <section className={styles.hero}>
        <h1 className={`display-l ${styles.heroTitle}`}>
          Schultz<sup className={styles.superscript}>™®©</sup>
        </h1>
      </section>

      {/* ———— 2. Content — slides over hero ———— */}
      <div className={styles.content}>
        {/* Intro */}
        <section className={styles.introSection}>
          <div className="container">
            <FadeIn>
              <p className={`label-m text-secondary ${styles.introLabel}`}>
                A brief introduction
              </p>
              <div className={styles.introDivider} />
              <div className={styles.introGrid}>
                <div>
                  <h2 className="display-s">
                    Studio
                    <br />
                    Schultz
                  </h2>
                </div>
                <div className="stack">
                  <p className="body-l">
                    Studio Schultz is an independent brand and digital design
                    studio led by Alex Schultz, creating brands and digital
                    experiences rooted in clarity, systems thinking, and craft.
                  </p>
                  <p className="body-l">
                    Art direction provided intermittently by Lola. Scheduling
                    depends on naps.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Selected Projects */}
        <section className={styles.workSection}>
          <div className="container">
            <FadeIn>
              <p className={`label-m text-secondary ${styles.workLabel}`}>
                The work
              </p>
              <div className={styles.workDivider} />
              <h2 className={`headline-l ${styles.workHeading}`}>
                Selected projects
              </h2>
            </FadeIn>

            <div className={styles.projectGrid}>
              {featuredCaseStudies.map((project, i) => {
                const pattern = GRID_PATTERN[i % GRID_PATTERN.length];
                const [span, wide] = pattern;
                return (
                  <FadeIn key={project.slug} className={SPAN_CLASS[span]}>
                    <ProjectCard project={project} wide={wide} />
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <FadeIn>
              <p className={`label-m ${styles.ctaLabel}`}>
                Our
                <br />
                Philosophy
              </p>
            </FadeIn>
            <FadeIn>
                <h2 className={`display-m ${styles.ctaText}`}>
                What works,
                <br />
                no more, no less<sup className={styles.superscript}><strong>™®©</strong></sup>
              </h2>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
