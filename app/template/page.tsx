export default function TemplatePage() {
  return (
    <main>
      <div className="site-container" style={{ paddingTop: 248, paddingBottom: 120 }}>
        <h1 className="heading-display" style={{ marginBottom: 16 }}>Style Guide</h1>
        <p className="text-big" style={{ color: "#7e7e7e" }}>Unified design system — mapped from Home, About &amp; Project Figma exports</p>
      </div>

      {/* HEADINGS */}
      <div className="site-container" style={{ paddingBottom: 120 }}>
        <div className="divider" style={{ marginBottom: 48 }} />
        <p className="label" style={{ marginBottom: 32 }}>Headings (NHGD)</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {[
            { cls: "heading-tagline", spec: "224/224 w450", text: "Tagline", src: "Home" },
            { cls: "heading-display-alt", spec: "132/124 w450", text: "Check out", src: "Project" },
            { cls: "heading-display", spec: "128/128 w450", text: "Hero display", src: "Home" },
            { cls: "heading-xl", spec: "96/96 w450", text: "Section heading", src: "All pages" },
            { cls: "heading-lg", spec: "116/116 w450", text: "Footer email", src: "Footer" },
            { cls: "heading-focus", spec: "64/72 w450", text: "Focus column", src: "About" },
            { cls: "heading-md-lg", spec: "40/48 w450", text: "Related card title", src: "Project" },
            { cls: "heading-md", spec: "32/40 w450", text: "Card title / caption", src: "Home, Project" },
          ].map((h) => (
            <div key={h.cls}>
              <p className="text-small" style={{ marginBottom: 8 }}>.{h.cls} — NHGD {h.spec} — {h.src}</p>
              <p className={h.cls}>{h.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DENTON */}
      <div className="site-container" style={{ paddingBottom: 120 }}>
        <div className="divider" style={{ marginBottom: 48 }} />
        <p className="label" style={{ marginBottom: 32 }}>Denton Accents</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.heading-accent — inherits size, #7e7e7e — All pages</p>
            <p className="heading-xl"><span className="heading-accent">Exhibitions</span></p>
          </div>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.heading-accent-light — inherits size, #fffff0 — Home hero</p>
            <p className="heading-display"><span className="heading-accent-light">Digital experiences</span></p>
          </div>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.stat-value — DT 88/88 w300 — Project highlights</p>
            <p className="stat-value">10%</p>
          </div>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.heading-highlight — DT 80/80 w300 #7e7e7e — Project</p>
            <p className="heading-highlight">Project highlights</p>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="site-container" style={{ paddingBottom: 120 }}>
        <div className="divider" style={{ marginBottom: 48 }} />
        <p className="label" style={{ marginBottom: 32 }}>Body Text (AG)</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            { cls: "text-big", spec: "24/32 w400", use: "Bio, intro, stat titles" },
            { cls: "text-list", spec: "24/48 w400", use: "Footer links, focus lists" },
            { cls: "text-body", spec: "18/24 w400", use: "Card desc, general body" },
            { cls: "text-body-tight", spec: "18/26 w400", use: "Meta values" },
            { cls: "text-body-light", spec: "18/32 w300", use: "Image caption body" },
            { cls: "text-body-thin", spec: "18/26 w300", use: "Stat card body" },
            { cls: "text-small", spec: "14/21", use: "Descriptive / helper" },
          ].map((t) => (
            <div key={t.cls}>
              <p className="text-small" style={{ marginBottom: 8 }}>.{t.cls} — AG {t.spec} — {t.use}</p>
              <p className={t.cls}>{t.use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LABELS */}
      <div className="site-container" style={{ paddingBottom: 120 }}>
        <div className="divider" style={{ marginBottom: 48 }} />
        <p className="label" style={{ marginBottom: 32 }}>Labels</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            { cls: "label", spec: "16/24 w500", use: "Home card labels, intro label" },
            { cls: "label-light", spec: "16/24 w400", use: "Project meta labels, related card labels" },
            { cls: "label-thin", spec: "16/24 w300", use: "Image caption subtitles" },
            { cls: "label-footer", spec: "24/32 w400 -0.04em", use: "Footer info bar" },
            { cls: "nav-link", spec: "18/112% w400", use: "Navigation" },
          ].map((l) => (
            <div key={l.cls}>
              <p className="text-small" style={{ marginBottom: 8 }}>.{l.cls} — AG {l.spec} — {l.use}</p>
              <p className={l.cls} style={{ color: l.cls === "nav-link" ? "#fffff0" : undefined }}>{l.use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GRIDS */}
      <div className="site-container" style={{ paddingBottom: 120 }}>
        <div className="divider" style={{ marginBottom: 48 }} />
        <p className="label" style={{ marginBottom: 32 }}>Grid Variants</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            [".grid-2col", "var(--site-px) ≈ 96px gap", "Home project cards"],
            [".grid-2col-tight", "64px gap", "Project 2-up images, related cards"],
            [".grid-3col", "var(--site-px) ≈ 96px gap", "About focus columns"],
            [".grid-4col", "32px gap", "About photo grid"],
          ].map(([cls, gap, use]) => (
            <div key={cls} style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="text-body">{cls}</p>
              <p style={{ fontFamily: "monospace", fontSize: 14, color: "#7e7e7e" }}>{gap} — {use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* COMPONENTS */}
      <div className="site-container" style={{ paddingBottom: 120 }}>
        <div className="divider" style={{ marginBottom: 48 }} />
        <p className="label" style={{ marginBottom: 32 }}>Components</p>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", marginBottom: 48 }}>
          <a className="btn btn-primary">Primary</a>
          <a className="btn btn-secondary">Secondary</a>
          <a className="btn btn-ghost">Ghost →</a>
        </div>

        <p className="text-small" style={{ marginBottom: 16 }}>Stat Card (Project page)</p>
        <div className="stat-card" style={{ maxWidth: 447 }}>
          <div className="divider" />
          <div style={{ display: "flex", flexDirection: "column", gap: 88, paddingTop: 16 }}>
            <p className="stat-value">10%</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p className="text-big">A title goes here</p>
              <p className="text-body-thin">Description body text goes here in the stat card</p>
            </div>
          </div>
        </div>
      </div>

      {/* SPACING */}
      <div className="site-container" style={{ paddingBottom: 196 }}>
        <div className="divider" style={{ marginBottom: 48 }} />
        <p className="label" style={{ marginBottom: 32 }}>Spacing Tokens (from Figma)</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            ["Site padding", "clamp(24px, 6.5vw, 124px)"],
            ["Home card gap (grid-2col)", "var(--site-px) ≈ 96px"],
            ["Project image gap (grid-2col-tight)", "64px"],
            ["About photo gap (grid-4col)", "32px"],
            ["Section spacing (major)", "196px"],
            ["Section spacing (minor)", "96px"],
            ["Content padding (images)", "64px / 32px"],
            ["Nav top padding", "96px"],
            ["Stat card internal gap", "88px (stat → text)"],
            ["Stat card padding", "48px"],
            ["Stripe gap", "32px (heights 4→46)"],
            ["Footer bottom", "64px"],
            ["Image border-radius", "12px"],
          ].map(([l, v]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="text-body">{l}</p>
              <p style={{ fontFamily: "monospace", fontSize: 14, color: "#7e7e7e" }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
