"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Wraps children in a div that fades in + translates up
 * when it enters the viewport via ScrollTrigger.
 *
 * Safety: starts hidden via CSS class, but a fallback timer
 * ensures content becomes visible even if GSAP fails to load.
 * This prevents the "all black" bug on mobile.
 */
export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Fallback: if GSAP hasn't animated within 2s, force visible
    const fallback = setTimeout(() => {
      const el = ref.current;
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    }, 2000);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Skip animation, show immediately
      const el = ref.current;
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
      clearTimeout(fallback);
      return;
    }

    let ctx: { revert: () => void } | undefined;

    (async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const el = ref.current;
        if (!el) return;

        clearTimeout(fallback);

        ctx = gsap.context(() => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                once: true,
              },
            }
          );
        });
      } catch {
        // GSAP failed to load — force visible
        const el = ref.current;
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      }
    })();

    return () => {
      clearTimeout(fallback);
      ctx?.revert();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(40px)" }}
    >
      {children}
    </div>
  );
}
