"use client";

import { useEffect, useRef } from "react";

export default function HeroParallax({ children }: { children: React.ReactNode }) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Text rises UP inside the fixed hero at 60% scroll speed
          // It nearly keeps pace with the approaching content
          el.style.transform = `translateY(-${scrollY * 0.6}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero-accent hero-fixed">
      <div ref={textRef} className="hero-drift" style={{ willChange: "transform" }}>
        {children}
      </div>
    </section>
  );
}
