import type { CaseStudy } from "@/content";
import styles from "./CaseStudyMeta.module.css";

interface CaseStudyMetaProps {
  project: CaseStudy;
}

export default function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  return (
    <section className="section--s">
      <div className="container">
        <div className={styles.meta}>
          <div className={styles.metaGroup}>
            <span className={`label-s ${styles.metaLabel}`}>Role</span>
            <span className="body-m">{project.role}</span>
          </div>
          <div className={styles.metaGroup}>
            <span className={`label-s ${styles.metaLabel}`}>Client</span>
            <span className="body-m">{project.client}</span>
            <span className={`label-s ${styles.metaLabel}`}>Duration</span>
            <span className="body-m">{project.duration}</span>
          </div>
          <div className={styles.metaGroup}>
            <span className={`label-s ${styles.metaLabel}`}>Tools</span>
            <div className={styles.toolList}>
              {project.tools.map((tool) => (
                <span key={tool} className="body-m">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
