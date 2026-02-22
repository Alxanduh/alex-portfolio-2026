"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Applies a subtle parallax effect to children on scroll.
 * `speed` controls intensity — negative = slower than scroll,
 * positive = faster. Default is a gentle -30px shift.
 *
 * GPU-accelerated via transform only.
 * Respects prefers-reduced-motion.
 */
export default function Parallax({
  children,
  speed = -30,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

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

      const el = ref.current;
      if (!el) return;

      ctx = gsap.context(() => {
        gsap.to(el, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    })();

    return () => ctx?.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
