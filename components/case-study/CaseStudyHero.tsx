"use client";

import { useRef, useEffect, useState } from "react";
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
 * Two parallax layers:
 * 1. Sticky text — drifts up + fades via GSAP ScrollTrigger
 * 2. Hero image — oversized (130% height), drifts up at 0.15x
 *    scroll speed via rAF for a subtle depth effect
 */
export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Text parallax — GSAP drift + fade
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

  // Image parallax — subtle upward drift at 15% scroll speed
  useEffect(() => {
    const img = imgRef.current;
    if (!img || isMobile) {
      if (img) img.style.transform = "none";
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          img.style.transform = `translateY(-${scrollY * 0.20}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

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

      {/* Hero image — parallax drift */}
      <div className={styles.imageSection}>
        <div className={styles.heroImageWrap}>
          <img
            ref={imgRef}
            src={project.heroImage}
            alt={project.title}
            className={styles.heroImage}
            style={{
              width: "100%",
              height: isMobile ? "100%" : "130%",
              display: "block",
              objectFit: "cover",
              willChange: isMobile ? "auto" : "transform",
            }}
          />
        </div>
      </div>
    </section>
  );
}
