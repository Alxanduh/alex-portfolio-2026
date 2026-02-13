"use client";

import { useEffect, useRef, useState } from "react";

export default function ParallaxHero({ src, alt }: { src: string; alt: string }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img || isMobile) {
      // Reset transform on mobile
      if (img) img.style.transform = "none";
      return;
    }

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const drift = scrollY * 0.15;
          img.style.transform = `translateY(-${drift}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <div className="parallax-hero">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: isMobile ? "100%" : "130%",
          display: "block",
          objectFit: "cover",
          willChange: isMobile ? "auto" : "transform",
        }}
      />
    </div>
  );
}
