"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroParallax({ children }: { children: React.ReactNode }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = textRef.current;
    if (!el || isMobile) {
      if (el) el.style.transform = "none";
      return;
    }

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          el.style.transform = `translateY(-${scrollY * 0.6}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <section className="hero-accent hero-fixed">
      <div ref={textRef} className="hero-drift" style={{ willChange: isMobile ? "auto" : "transform" }}>
        {children}
      </div>
    </section>
  );
}
