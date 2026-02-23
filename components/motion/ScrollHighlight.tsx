"use client";

import { useRef, useEffect, type ReactNode } from "react";
import styles from "./ScrollHighlight.module.css";

interface ScrollHighlightProps {
  children: string;
  className?: string;
  /** Color for unhighlighted words — defaults to text-secondary */
  dimColor?: string;
  /** Color for highlighted words — defaults to text-primary */
  activeColor?: string;
}

/**
 * Splits text into individual words and highlights them
 * from gray → white, left-to-right, as the user scrolls.
 *
 * Uses GSAP ScrollTrigger scrub for smooth, scroll-linked animation.
 * Respects prefers-reduced-motion (shows all text in active color).
 */
export default function ScrollHighlight({
  children,
  className,
  dimColor = "var(--color-text-secondary)",
  activeColor = "var(--color-text-primary)",
}: ScrollHighlightProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const container = containerRef.current;
    if (!container) return;

    // If reduced motion, just show everything highlighted
    if (prefersReduced) {
      const words = container.querySelectorAll("span");
      words.forEach((w) => ((w as HTMLElement).style.color = activeColor));
      return;
    }

    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const words = container.querySelectorAll("span");
      if (!words.length) return;

      ctx = gsap.context(() => {
        gsap.fromTo(words, 
          { color: "#888888" },
          {
            color: "#FFFFF0",
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "bottom 40%",
              scrub: true,
            },
          }
        );
      });
    })();

    return () => ctx?.revert();
  }, [activeColor]);

  // Split into words, preserving whitespace
  const words = children.split(/(\s+)/);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) =>
        word.match(/^\s+$/) ? (
          word
        ) : (
          <span
            key={i}
            className={styles.word}
            style={{ color: dimColor }}
          >
            {word}
          </span>
        )
      )}
    </p>
  );
}
