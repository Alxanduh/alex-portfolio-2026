"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/content";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./CaseStudyHero.module.css";

interface CaseStudyHeroProps {
  project: CaseStudy;
}

/**
 * Hero section for case study pages.
 *
 * Sticky text area with parallax drift — as you scroll,
 * the text drifts upward and fades while the image section
 * scrolls over it naturally.
 */
export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = textRef.current;
      if (!el) return;

      ctx = gsap.context(() => {
        gsap.to(el, {
          yPercent: -15,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles.hero}>
      {/* Sticky text — drifts up + fades as you scroll */}
      <div className={styles.stickyWrap}>
        <div className="container">
          <div ref={textRef} className={styles.textInner}>
            <FadeIn>
              <p className={`label-m text-secondary ${styles.eyebrow}`}>
                {project.eyebrow}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className={`headline-l ${styles.title}`}>{project.title}</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className={styles.divider} />
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className={styles.metaRow}>
                {project.meta.map((pair, i) => (
                  <div key={i} className={styles.metaPair}>
                    <span className="label-s text-secondary">{pair.label}</span>
                    <span className="body-m">{pair.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Hero image — scrolls over the sticky text */}
      <div className={styles.imageSection}>
        <div className={styles.heroImageWrap}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
