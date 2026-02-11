import Link from "next/link";

export default function StyleGuide() {
  return (
    <main>
      <div className="site-container">
        {/* Header */}
        <section style={{ paddingTop: 140, paddingBottom: 80 }}>
          <h1 className="heading-display">Style guide</h1>
        </section>

        {/* ======================== */}
        {/* TEXT STYLES              */}
        {/* ======================== */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 8 }}>Text styles</p>
            <div className="divider" />
          </div>

          {/* Display */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 48 }}>
            <p className="label">Display — clamp(3.5rem, 8vw, 7rem)</p>
            <p className="heading-display">Heading Display</p>
          </div>

          {/* XL */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 48 }}>
            <p className="label">H1 XL — clamp(2.5rem, 5.5vw, 4.2rem)</p>
            <p className="heading-xl">Heading XL</p>
          </div>

          {/* LG */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 48 }}>
            <p className="label">H2 LG — clamp(2rem, 4vw, 3rem)</p>
            <p className="heading-lg">Heading LG</p>
          </div>

          {/* MD */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 48 }}>
            <p className="label">H3 MD — clamp(1.25rem, 2vw, 1.5rem)</p>
            <p className="heading-md">Heading MD</p>
          </div>

          {/* SM */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 48 }}>
            <p className="label">H4 SM — 1.1rem</p>
            <p className="heading-sm">Heading SM</p>
          </div>

          {/* Accent */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 48 }}>
            <p className="label">Accent — Denton Light Italic</p>
            <p className="heading-xl"><span className="heading-accent">Accent Heading</span></p>
          </div>

          {/* Stat */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 48 }}>
            <p className="label">Stat Value — 2.2rem</p>
            <p className="stat-value">10%</p>
          </div>

          <div className="divider" style={{ marginBottom: 40 }} />

          {/* Body styles */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 32 }}>
            <p className="label">Text Big — 1.1rem/1.6</p>
            <p className="text-big">Big text for introductions and callouts that need more visual weight than body copy.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 32 }}>
            <p className="label">Text Body — 0.875rem/1.65</p>
            <p className="text-body">Body text for paragraphs, descriptions, and general content. This is the workhorse of the typographic system.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 32 }}>
            <p className="label">Text Small — 0.78rem/1.5</p>
            <p className="text-small">Small text for card descriptions, captions, metadata, and supplementary information.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 32 }}>
            <p className="label">Label — 0.7rem uppercase</p>
            <p className="label">Label Text Example</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline", marginBottom: 32 }}>
            <p className="label">Label SM — 0.65rem uppercase</p>
            <p className="label-sm">Small Label Text Example</p>
          </div>
        </section>

        {/* ======================== */}
        {/* COLORS                   */}
        {/* ======================== */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 8 }}>Colors</p>
            <div className="divider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              { name: "Dark (bg)", color: "#141414", border: true },
              { name: "Light (fg)", color: "#fffff0", border: false },
              { name: "Gray (muted)", color: "#7e7e7e", border: false },
              { name: "Accent", color: "#c8ff00", border: false },
            ].map((c) => (
              <div key={c.name}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    backgroundColor: c.color,
                    borderRadius: 8,
                    border: c.border ? "1px solid rgba(255,255,245,0.15)" : "none",
                    marginBottom: 12,
                  }}
                />
                <p className="label">{c.name}</p>
                <p className="text-small" style={{ marginTop: 4 }}>{c.color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================== */}
        {/* BUTTONS                  */}
        {/* ======================== */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 8 }}>Buttons</p>
            <div className="divider" />
          </div>

          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32, flexWrap: "wrap" }}>
            <a href="#" className="btn btn-primary">Primary Button</a>
            <a href="#" className="btn btn-secondary">Secondary Button</a>
            <a href="#" className="btn btn-ghost">Ghost Button →</a>
          </div>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#" className="btn btn-primary btn-sm">Small Primary</a>
            <a href="#" className="btn btn-secondary btn-sm">Small Secondary</a>
            <a href="#" className="btn btn-primary btn-lg">Large Primary</a>
          </div>
        </section>

        {/* ======================== */}
        {/* LINKS                    */}
        {/* ======================== */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 8 }}>Links</p>
            <div className="divider" />
          </div>

          <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
            <a href="#" className="link text-body" style={{ color: "ivory" }}>Default Link</a>
            <a href="#" className="link-muted text-body">Muted Link</a>
          </div>
        </section>

        {/* ======================== */}
        {/* DIVIDERS                 */}
        {/* ======================== */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 8 }}>Dividers</p>
            <div className="divider" />
          </div>

          <p className="label" style={{ marginBottom: 12 }}>Standard</p>
          <div className="divider" style={{ marginBottom: 32 }} />

          <p className="label" style={{ marginBottom: 12 }}>Subtle</p>
          <div className="divider-subtle" />
        </section>

        {/* ======================== */}
        {/* IMAGE PLACEHOLDERS       */}
        {/* ======================== */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 8 }}>Image Placeholders</p>
            <div className="divider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24, alignItems: "end" }}>
            {[
              { name: "Portrait 4:5", ratio: "portrait" },
              { name: "Landscape 16:9", ratio: "landscape" },
              { name: "Wide 5:3", ratio: "wide" },
              { name: "Photo 4:3", ratio: "photo" },
              { name: "Square 1:1", ratio: "square" },
            ].map((img) => (
              <div key={img.name}>
                <div className={`img-placeholder ratio-${img.ratio}`} style={{ marginBottom: 12 }} />
                <p className="label">{img.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================== */}
        {/* FONTS                    */}
        {/* ======================== */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 8 }}>Font Families</p>
            <div className="divider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, marginBottom: 40 }}>
            <p className="label">Sans — Neue Haas Grotesk Display Pro</p>
            <p className="font-sans" style={{ fontSize: "2rem", fontWeight: 400 }}>AaBbCcDd 0123456789</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, marginBottom: 40 }}>
            <p className="label">Body — Aktiv Grotesk</p>
            <p className="font-body" style={{ fontSize: "2rem", fontWeight: 400 }}>AaBbCcDd 0123456789</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, marginBottom: 40 }}>
            <p className="label">Serif — Denton Light Italic</p>
            <p className="font-serif" style={{ fontSize: "2rem", fontWeight: 300, fontStyle: "italic" }}>AaBbCcDd 0123456789</p>
          </div>
        </section>

        {/* ======================== */}
        {/* SPACING                  */}
        {/* ======================== */}
        <section style={{ paddingBottom: 120 }}>
          <div style={{ marginBottom: 48 }}>
            <p className="label" style={{ marginBottom: 8 }}>Layout</p>
            <div className="divider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, marginBottom: 24 }}>
            <p className="label">Site Padding</p>
            <p className="text-body">clamp(24px, 5vw, 80px) — scales with viewport, aligns nav + content + footer</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, marginBottom: 24 }}>
            <p className="label">Grid Gaps</p>
            <p className="text-body">24px (tight), 40px (standard), 80px (section breaks)</p>
          </div>
        </section>
      </div>
    </main>
  );
}
