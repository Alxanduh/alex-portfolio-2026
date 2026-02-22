import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import type { CaseStudyModule } from "@/content";
import styles from "./CaseStudyRenderer.module.css";

interface CaseStudyRendererProps {
  modules: CaseStudyModule[];
}

/** Media module types that always use tight spacing between each other */
const MEDIA_TYPES = new Set(["media-full", "media-2up", "media-3up"]);

/**
 * Renders typed content modules into visual blocks.
 *
 * Spacing logic:
 * - Media modules use tight spacing (16px each side = 32px gap)
 * - Text, metrics, headings etc. use section-s (96px) or section-m (120px)
 */
export default function CaseStudyRenderer({ modules }: CaseStudyRendererProps) {
  return (
    <div>
      {modules.map((mod, index) => {
        const key = `${mod.type}-${index}`;
        const isMedia = MEDIA_TYPES.has(mod.type);

        // Media always tight, text/headings get full spacing
        const mediaSectionClass = isMedia ? styles.sectionTight : "section--s";

        switch (mod.type) {
          case "intro":
            return (
              <FadeIn key={key}>
                <section className="section--s">
                  <div className="container">
                    <div className={styles.introWrap}>
                      <div className={styles.intro}>
                        <span className="label-l text-secondary">
                          {mod.heading}
                        </span>
                        <div className={styles.bodyStack}>
                          {mod.body.split("\n\n").map((p, i) => (
                            <p key={i} className="body-l">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </FadeIn>
            );

          case "text-block":
            return (
              <FadeIn key={key}>
                <section className="section--s">
                  <div className="container">
                    {mod.heading ? (
                      <div className={styles.textBlock}>
                        <span className="label-l text-secondary">
                          {mod.heading}
                        </span>
                        <div className={styles.bodyStack}>
                          {mod.body.split("\n\n").map((p, i) => (
                            <p key={i} className="body-l">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={styles.textBlockCentered}>
                        <div className={styles.bodyStack}>
                          {mod.body.split("\n\n").map((p, i) => (
                            <p key={i} className="body-l">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              </FadeIn>
            );

          case "metrics":
            return (
              <FadeIn key={key}>
                <section className={styles.sectionMetricsWrap}>
                  <div className="container">
                    <div className={styles.metrics}>
                      {mod.items.map((item) => (
                        <div key={item.label} className={styles.metricItem}>
                          <div className={styles.metricDivider} />
                          <div className={styles.metricContent}>
                            <span className="title-l">{item.label}</span>
                            {item.description && (
                              <p className="body-s text-secondary">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </FadeIn>
            );

          case "media-full":
            return (
              <FadeIn key={key}>
                <section className={mediaSectionClass}>
                  <div className="container">
                    <div className={styles.mediaFull}>
                      <Image
                        src={mod.image}
                        alt={mod.alt}
                        fill
                        sizes="100vw"
                        className={styles.mediaFullImage}
                      />
                    </div>
                    {mod.caption && (
                      <p className={`label-m text-secondary ${styles.mediaCaption}`}>
                        {mod.caption}
                      </p>
                    )}
                  </div>
                </section>
              </FadeIn>
            );

          case "media-2up":
            return (
              <FadeIn key={key}>
                <section className={mediaSectionClass}>
                  <div className="container">
                    <div className={styles.media2up}>
                      {mod.images.map((img) => (
                        <div key={img.src} className={styles.mediaItem}>
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="50vw"
                            className={styles.mediaItemImage}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </FadeIn>
            );

          case "media-3up":
            return (
              <FadeIn key={key}>
                <section className={mediaSectionClass}>
                  <div className="container">
                    <div className={styles.media3up}>
                      {mod.images.map((img) => (
                        <div key={img.src} className={styles.mediaItem}>
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="33vw"
                            className={styles.mediaItemImage}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </FadeIn>
            );

          case "quote":
            return (
              <FadeIn key={key}>
                <section className="section--s">
                  <div className="container">
                    <blockquote className={styles.quote}>
                      <p className="title-l">
                        &ldquo;{mod.text}&rdquo;
                      </p>
                      {mod.author && (
                        <footer className={styles.quoteAttribution}>
                          <span className="label-m">{mod.author}</span>
                          {mod.role && (
                            <span className="label-m text-secondary">
                              {" — "}{mod.role}
                            </span>
                          )}
                        </footer>
                      )}
                    </blockquote>
                  </div>
                </section>
              </FadeIn>
            );

          case "section-heading":
            return (
              <FadeIn key={key}>
                <section className={styles.sectionHeadingWrap}>
                  <div className="container">
                    <div className={styles.sectionHeading}>
                      <h2 className="headline-s">{mod.heading}</h2>
                    </div>
                  </div>
                </section>
              </FadeIn>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
