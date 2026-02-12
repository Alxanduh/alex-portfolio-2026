"use client";

import { useEffect, useRef } from "react";

export default function ParallaxHero({ src, alt }: { src: string; alt: string }) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Simple: scroll position drives the drift
          const scrollY = window.scrollY;
          const drift = scrollY * 0.15; // image moves at 15% of scroll speed
          img.style.transform = `translateY(-${drift}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="parallax-hero">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "130%",
          display: "block",
          objectFit: "cover",
          willChange: "transform",
        }}
      />
    </div>
  );
}
