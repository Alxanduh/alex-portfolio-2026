"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

/* Line pattern bars: exact heights from Figma SVG (23 bars).
   Note the repeated 10px at indices 3-4. Gap is 32px (--space-stack). */
const LINE_HEIGHTS = [
  4, 6, 8, 10, 10, 12, 14, 16, 18, 20,
  22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  42, 44, 46,
];

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const track = marqueeRef.current;
      if (!track) return;

      ctx = gsap.context(() => {
        gsap.to(track, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: "none",
        });
      });
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <footer className={styles.footer}>
      {/* ———— Upper: Divider + meta + columns ———— */}
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.divider} />

        <div className={styles.contentInner}>
          {/* Meta row */}
          <div className={styles.metaRow}>
            <span className="label-m text-secondary">The Footer</span>
            <span className="label-m text-secondary">
              39.7548° N, 104.9723° W
            </span>
          </div>

          {/* Two-column links */}
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className="headline-l text-secondary">Explore</h3>
              <div className={styles.linkGroup}>
                <Link href="/" className={`headline-l ${styles.link}`}>
                  Work
                </Link>
                <Link href="/about" className={`headline-l ${styles.link}`}>
                  About
                </Link>
                <span className={`headline-l ${styles.linkDisabled}`}>
                  Archives
                </span>
              </div>
            </div>
            <div className={styles.column}>
              <h3 className="headline-l text-secondary">Let&apos;s chat</h3>
              <a
                href="mailto:hello@alxander.studio"
                className={`headline-l ${styles.link}`}
              >
                hello@alxander.studio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ———— Marquee — full width, no container ———— */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack} ref={marqueeRef}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`display-m ${styles.marqueeText}`}>
              SCHULTZ.DESIGN
            </span>
          ))}
        </div>
      </div>

      {/* Bottom meta */}
      <div className="container">
        <div className={styles.bottomMeta}>
          <span className="label-m text-secondary">© Alex Schultz</span>
          <span className="label-m text-secondary">
            Proudly MFG. in CO, USA
          </span>
        </div>
      </div>

      {/* ———— Line pattern — full width ———— */}
      <div className={styles.linePattern} aria-hidden="true">
        {LINE_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className={styles.lineBar}
            style={{ height: h }}
          />
        ))}
      </div>

      {/* ———— Peace hand ———— */}
      <div className={styles.peaceHand}>
        <Image
          src="/images/image-peace.png"
          alt="Peace"
          width={71}
          height={96}
        />
      </div>
    </footer>
  );
}
