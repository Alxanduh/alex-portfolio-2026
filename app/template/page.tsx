import ProjectCard from "@/components/ProjectCard";

export default function TemplatePage() {
  return (
    <main>
      <div className="site-container" style={{ paddingTop: "var(--space-hero)", paddingBottom: "var(--space-xl)" }}>
        <h1 className="heading-display" style={{ marginBottom: "var(--space-xs)" }}>Style Guide</h1>
        <p className="text-big" style={{ color: "var(--color-fg-muted)" }}>Unified design system — mapped from Home, About &amp; Project Figma exports</p>
      </div>

      {/* ============ COLORS ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Colors</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { name: "Background", var: "--color-bg", hex: "#141414", light: true },
            { name: "Foreground", var: "--color-fg", hex: "#fffff0", light: false },
            { name: "Muted / Gray", var: "--color-fg-muted", hex: "#7e7e7e", light: false },
            { name: "Accent", var: "--color-accent", hex: "#c8ff00", light: false },
          ].map((c) => (
            <div key={c.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{
                width: 120, height: 80, borderRadius: 8,
                background: c.hex,
                border: "1px solid rgba(255,255,240,0.15)",
              }} />
              <p className="text-small" style={{ color: "var(--color-fg)" }}>{c.name}</p>
              <p style={{ fontFamily: "monospace", fontSize: 12, color: "var(--color-fg-muted)" }}>
                {c.hex}<br />var({c.var})
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ HEADINGS ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Headings (Neue Haas Grotesk Display)</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {[
            { cls: "heading-tagline", spec: "clamp(3rem,14vw,14rem) w450", text: "Tagline", src: "Home" },
            { cls: "heading-display-alt", spec: "clamp(2.75rem,8.5vw,8.25rem) w450", text: "Check out", src: "Project" },
            { cls: "heading-display", spec: "clamp(2.75rem,8vw,8rem) w450", text: "Hero display", src: "Home" },
            { cls: "heading-xl", spec: "clamp(2.25rem,6vw,6rem) w450", text: "Section heading", src: "All pages" },
            { cls: "heading-lg", spec: "clamp(1.75rem,7.5vw,7.25rem) w450", text: "Footer email", src: "Footer" },
            { cls: "heading-focus", spec: "clamp(1.75rem,4vw,4rem) w450", text: "Focus column", src: "About" },
            { cls: "heading-md-lg", spec: "clamp(1.5rem,2.5vw,2.5rem) w450", text: "Related card title", src: "Project" },
            { cls: "heading-md", spec: "clamp(1.25rem,2vw,2rem) w450", text: "Card title / caption", src: "Home, Project" },
          ].map((h) => (
            <div key={h.cls}>
              <p className="text-small" style={{ marginBottom: 8 }}>.{h.cls} — {h.spec} — {h.src}</p>
              <p className={h.cls}>{h.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ DENTON ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Denton Accents (Denton Light Italic)</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.heading-accent — inherits size, #7e7e7e, display:block — All pages</p>
            <p className="heading-xl"><span className="heading-accent">Exhibitions</span></p>
          </div>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.heading-accent-light — inherits size, #fffff0, display:block — Project subtitles</p>
            <p className="heading-display"><span className="heading-accent-light">Digital experiences</span></p>
          </div>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.stat-value — clamp(2.5rem,5.5vw,5.5rem) w300 — Project highlights</p>
            <p className="stat-value">10%</p>
          </div>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.heading-highlight — clamp(2rem,5vw,5rem) w300 #7e7e7e — Project</p>
            <p className="heading-highlight">Project highlights</p>
          </div>
        </div>
      </div>

      {/* ============ BODY ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Body Text (Aktiv Grotesk)</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          {[
            { cls: "text-big", spec: "clamp(1rem,1.5vw,1.5rem) w400", use: "Bio, intro, stat titles" },
            { cls: "text-list", spec: "clamp(1rem,1.5vw,1.5rem) lh2.0 w400", use: "Footer links, focus lists" },
            { cls: "text-body", spec: "1.125rem w400", use: "Card desc, general body" },
            { cls: "text-body-tight", spec: "1.125rem lh1.444 w400", use: "Meta values" },
            { cls: "text-body-light", spec: "1.125rem lh1.778 w300", use: "Image caption body" },
            { cls: "text-body-thin", spec: "1.125rem lh1.444 w300", use: "Stat card body" },
            { cls: "text-small", spec: "0.875rem lh1.5 #7e7e7e", use: "Descriptive / helper" },
          ].map((t) => (
            <div key={t.cls}>
              <p className="text-small" style={{ marginBottom: 8 }}>.{t.cls} — AG {t.spec} — {t.use}</p>
              <p className={t.cls}>{t.use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ LABELS ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Labels</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          {[
            { cls: "label", spec: "1rem w500 #7e7e7e", use: "Home card labels, intro label" },
            { cls: "label-light", spec: "1rem w400 #7e7e7e", use: "Project meta labels" },
            { cls: "label-thin", spec: "1rem w300 #7e7e7e", use: "Image caption subtitles" },
            { cls: "label-footer", spec: "clamp(0.875rem,1.5vw,1.5rem) w400 -0.04em #7e7e7e", use: "Footer info bar" },
            { cls: "nav-link", spec: "clamp(0.875rem,1.1vw,1.125rem) w400", use: "Navigation" },
          ].map((l) => (
            <div key={l.cls}>
              <p className="text-small" style={{ marginBottom: 8 }}>.{l.cls} — AG {l.spec} — {l.use}</p>
              <p className={l.cls} style={{ color: l.cls === "nav-link" ? "#fffff0" : undefined }}>{l.use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ COMPONENTS ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Components</p>

        {/* Buttons */}
        <p className="text-small" style={{ marginBottom: 16 }}>Buttons</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", marginBottom: "var(--space-md)" }}>
          <a className="btn btn-primary">Primary</a>
          <a className="btn btn-secondary">Secondary</a>
          <a className="btn btn-ghost">Ghost →</a>
        </div>

        {/* Project Card — Paired */}
        <p className="text-small" style={{ marginBottom: 16 }}>Project Card — Paired (with divider, used on Home)</p>
        <div className="grid-2col" style={{ marginBottom: "var(--space-md)" }}>
          <ProjectCard
            slug="amount"
            label="Branding • UI • UX"
            title="Amount"
            description="Reimagining digital lending experiences"
            layout="paired"
          />
          <ProjectCard
            slug="grow-therapy"
            label="Branding • UI • UX"
            title="Grow Therapy"
            description="Designing care that actually shows up"
            layout="paired"
          />
        </div>

        {/* Project Card — Solo */}
        <p className="text-small" style={{ marginBottom: 16 }}>Project Card — Solo (full width, used on Home)</p>
        <div style={{ marginBottom: "var(--space-md)" }}>
          <ProjectCard
            slug="braintree"
            label="UI • UX • Motion"
            title="Braintree"
            description="Code as art at a leading online payments platform"
            layout="solo"
          />
        </div>

        {/* Project Card — Large */}
        <p className="text-small" style={{ marginBottom: 16 }}>Project Card — Large with light label (used in Related Projects)</p>
        <div className="grid-2col-tight" style={{ marginBottom: "var(--space-md)" }}>
          <ProjectCard
            slug="amount"
            label="Fintech • UI • UX"
            title="Amount"
            description="Reimagining digital lending experiences"
            size="large"
            labelWeight="light"
          />
          <ProjectCard
            slug="grow-therapy"
            label="Healthcare • UI • UX"
            title="Grow Therapy"
            description="Designing care that actually shows up"
            size="large"
            labelWeight="light"
          />
        </div>

        {/* Stat Card */}
        <p className="text-small" style={{ marginBottom: 16 }}>Stat Card (Project page — drag-scrollable)</p>
        <div style={{ display: "flex", gap: "var(--space-sm)" }}>
          <div className="stat-card">
            <div className="divider" />
            <div className="stat-card-inner">
              <p className="stat-value">10%</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                <p className="text-big">Booking completion</p>
                <p className="text-body-thin">Description body text goes here in the stat card</p>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="divider" />
            <div className="stat-card-inner">
              <p className="stat-value">↑</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                <p className="text-big">Provider match rate</p>
                <p className="text-body-thin">Another stat card description goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ DIVIDERS ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Dividers</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.divider — #fffff0, 1px</p>
            <div className="divider" />
          </div>
          <div>
            <p className="text-small" style={{ marginBottom: 8 }}>.divider-subtle — rgba(255,255,240,0.15), 1px</p>
            <div className="divider-subtle" />
          </div>
        </div>
      </div>

      {/* ============ GRIDS ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Grid Variants</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            [".grid-2col", "clamp(16px, 2.5vw, 48px)", "Home project cards — 1fr on ≤768px, 72px mobile gap"],
            [".grid-2col-tight", "clamp(12px, 2vw, 32px)", "Project 2-up images, related cards — 1fr on ≤768px"],
            [".grid-3col", "clamp(16px, 2.5vw, 48px)", "About focus columns — 1fr on ≤1024px"],
            [".grid-4col", "clamp(8px, 1.5vw, 24px)", "About photo grid — 2col on ≤768px"],
          ].map(([cls, gap, use]) => (
            <div key={cls as string} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <p className="text-body">{cls}</p>
              <p style={{ fontFamily: "monospace", fontSize: 13, color: "#7e7e7e" }}>{gap} — {use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ IMAGE RATIOS ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Image Placeholders &amp; Ratios</p>
        <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
          {[
            { cls: "ratio-landscape", label: "16:9 Landscape" },
            { cls: "ratio-square", label: "1:1 Square" },
            { cls: "ratio-portrait", label: "4:5 Portrait" },
            { cls: "ratio-photo", label: "4:3 Photo" },
          ].map((r) => (
            <div key={r.cls} style={{ width: 200 }}>
              <div className={`img-placeholder ${r.cls}`} style={{ marginBottom: 8 }} />
              <p className="text-small">.{r.cls} — {r.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ SPACING ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Spacing Tokens (fluid via clamp)</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            ["--site-px", "clamp(20px, 4vw, 80px)", "Site horizontal padding"],
            ["--space-hero", "clamp(140px, 12vw, 200px)", "Project/About hero top padding"],
            ["--space-hero-divider", "clamp(20px, 2.5vw, 40px)", "Hero text → divider gap"],
            ["--space-xl", "clamp(48px, 7vw, 120px)", "Major section gaps"],
            ["--space-lg", "clamp(32px, 4vw, 64px)", "Card rows, minor sections"],
            ["--space-md", "clamp(20px, 2.5vw, 40px)", "Content blocks, image gaps"],
            ["--space-sm", "clamp(12px, 1.5vw, 24px)", "Tight elements"],
            ["--space-xs", "clamp(8px, 0.75vw, 12px)", "Minimal gaps"],
            [".card-row-gap", "var(--space-lg) / 72px mobile", "Between card rows on Home"],
            ["Stat card inner", "88px / 32px mobile", "Stat value → text gap"],
            ["Image border-radius", "12px / 8px stat cards mobile", "Rounded corners"],
          ].map(([token, value, use]) => (
            <div key={token as string} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <p className="text-body">{token}</p>
              <p style={{ fontFamily: "monospace", fontSize: 13, color: "#7e7e7e" }}>{value} — {use}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ BREAKPOINTS ============ */}
      <div className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="divider" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Breakpoints</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            ["≤ 1024px (Tablet)", "3-col → 1-col"],
            ["≤ 768px (Mobile)", "2-col → 1-col, meta stacks, footer stacks, card divider visible, nav compact"],
          ].map(([bp, changes]) => (
            <div key={bp as string} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <p className="text-body">{bp}</p>
              <p style={{ fontFamily: "monospace", fontSize: 13, color: "#7e7e7e" }}>{changes}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
