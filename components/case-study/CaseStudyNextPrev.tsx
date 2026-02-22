import Link from "next/link";
import type { CaseStudy } from "@/content";
import styles from "./CaseStudyNextPrev.module.css";

interface CaseStudyNextPrevProps {
  prev: CaseStudy | null;
  next: CaseStudy | null;
}

export default function CaseStudyNextPrev({
  prev,
  next,
}: CaseStudyNextPrevProps) {
  if (!prev && !next) return null;

  return (
    <section className="section--m">
      <div className="container">
        <nav className={styles.nav}>
          {prev ? (
            <Link href={`/work/${prev.slug}`} className={styles.navItem}>
              <span className={`label-s ${styles.navLabel}`}>Previous</span>
              <span className="title-s">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className={`${styles.navItem} ${styles.navItemNext}`}
            >
              <span className={`label-s ${styles.navLabel}`}>Next</span>
              <span className="title-s">{next.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </section>
  );
}
