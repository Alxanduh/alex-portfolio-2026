import Link from "next/link";

/* Stripe heights from the Figma SVG: 4,6,8,10,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46 */
/* Gaps between: 32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32 (each rect starts 32+h after prev) */
const stripes = [4,6,8,10,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46];

export default function Footer() {
  return (
    <footer>
      {/* Rule + labels */}
      <div className="site-container">
        <div className="rule-solid" />
        <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-xs) 0 0" }}>
          <p className="footer-label">The<br />Footer</p>
          <p className="footer-coords">39.7548° N<br />104.9723° W</p>
        </div>
      </div>

      {/* Two columns: Explore + Let's chat */}
      <div className="footer-cols">
        <div className="footer-col">
          <h2 className="footer-col-label">Explore</h2>
          <div>
            <Link href="/" className="footer-col-link">Works</Link>
            <Link href="/about" className="footer-col-link">About</Link>
            <Link href="/projects" className="footer-col-link">Archives</Link>
          </div>
        </div>
        <div className="footer-col">
          <h2 className="footer-col-label">Let&apos;s chat</h2>
          <a href="mailto:hello@alxander.studio" className="footer-col-link">
            hello@alxander.studio
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[0, 1].map((half) => (
            <div key={half} className="marquee-half" aria-hidden={half === 1 ? "true" : undefined}>
              {["var(--color-muted)", "var(--color-fg)", "var(--color-muted)", "var(--color-fg)"].map((c, i) => (
                <span key={i} className="marquee-text" style={{ color: c }}>SCHULTZ.DESIGN</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom credits */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">Proudly MFG in  CO, USA</p>
        <p className="footer-bottom-text">Schultz™®©</p>
      </div>

      {/* Stripes — full width, no radius, no padding */}
      <div className="stripes-full">
        {stripes.map((h, i) => {
          /* Calculate gap: from the SVG, gaps between rects are ~(32 - prev_h) ish, but let's use the actual Y offsets */
          const gaps = [0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32];
          return (
            <div
              key={i}
              className="stripe-rect"
              style={{
                height: h,
                marginTop: i === 0 ? 0 : gaps[i],
              }}
            />
          );
        })}
      </div>
    </footer>
  );
}
