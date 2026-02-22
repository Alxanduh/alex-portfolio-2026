import type { Metadata } from "next";
import { publishedCaseStudies } from "@/content";
import ProjectCard from "@/components/work/ProjectCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Style Guide — Studio Schultz",
  description: "Visual overview of the Studio Schultz design system.",
};

/* Data for the style guide — keeps the JSX clean */

const colors = [
  { name: "Mat Board", variable: "--color-surface-primary", hex: "#141414" },
  { name: "Crayon", variable: "--color-text-primary", hex: "#FFFFF0" },
  { name: "Felt", variable: "--color-text-secondary", hex: "#888888" },
  { name: "Swiss", variable: "--color-accent-primary", hex: "#F24A2E" },
];

const spacingTokens = [
  { name: "Section XL", variable: "--space-section-xl", value: "256px" },
  { name: "Section L", variable: "--space-section-l", value: "192px" },
  { name: "Section M", variable: "--space-section-m", value: "120px" },
  { name: "Section S", variable: "--space-section-s", value: "96px" },
  { name: "Block", variable: "--space-block", value: "64px" },
  { name: "Stack", variable: "--space-stack", value: "32px" },
  { name: "Tight", variable: "--space-tight", value: "24px" },
  { name: "Micro", variable: "--space-micro", value: "8px" },
];

const typeTokens = [
  { name: "Display L", class: "display-l", spec: "332/340 · Medium · -2%" },
  { name: "Display M", class: "display-m", spec: "192/200 · Medium · -2%" },
  { name: "Display S", class: "display-s", spec: "164/172 · Medium · -2%" },
  { name: "Headline L", class: "headline-l", spec: "96/104 · Medium · -2%" },
  { name: "Headline M", class: "headline-m", spec: "72/80 · Medium · 0" },
  { name: "Headline S", class: "headline-s", spec: "64/72 · Medium · 0" },
  { name: "Title L", class: "title-l", spec: "40/48 · Medium · 0" },
  { name: "Title M", class: "title-m", spec: "32/40 · Medium · 0" },
  { name: "Title S", class: "title-s", spec: "24/32 · Medium · 0" },
  { name: "Label L", class: "label-l", spec: "24/30 · DemiBold · 0" },
  { name: "Label M", class: "label-m", spec: "18/24 · DemiBold · 0" },
  { name: "Label S", class: "label-s", spec: "14/20 · DemiBold · 0" },
  { name: "Body L", class: "body-l", spec: "24/32 · Medium · 0" },
  { name: "Body M", class: "body-m", spec: "18/26 · Medium · 0" },
  { name: "Body S", class: "body-s", spec: "16/24 · Medium · 0" },
  { name: "Nav Primary", class: "nav-primary", spec: "18/26 · DemiBold · 0" },
];

const breakpoints = [
  {
    name: "Desktop",
    range: "≥ 1280px (default)",
    notes: "Full token values. 32px gutters. Multi-column grids.",
  },
  {
    name: "Tablet",
    range: "768 – 1279px",
    notes: "Display ~50%, headline ~65%, section spacing ~50%. 24px gutters. Project grid collapses to single column.",
  },
  {
    name: "Mobile",
    range: "< 768px",
    notes: "Display ~25%, headline ~40%. 16px gutters, 24px stack gap. All grids single-column.",
  },
];

const opacityTokens = [
  { name: "Hover", variable: "--opacity-hover", value: "0.7" },
  { name: "Disabled", variable: "--opacity-disabled", value: "0.35" },
];

export default function StyleGuidePage() {
  const previewProject = publishedCaseStudies[0];

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <p className="label-s text-secondary">System Reference</p>
          <h1 className="headline-l">Style Guide</h1>
        </div>
      </section>

      {/* ———— Colors ———— */}
      <section className={styles.guideSection}>
        <div className="container">
          <h2 className="title-l">Colors</h2>
          <div className={styles.swatchGrid}>
            {colors.map((color) => (
              <div key={color.variable} className={styles.swatch}>
                <div
                  className={styles.swatchBlock}
                  style={{ backgroundColor: color.hex }}
                />
                <span className="label-s">{color.name}</span>
                <span className="label-s text-secondary">{color.hex}</span>
                <span className="label-s text-secondary">
                  var({color.variable})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ———— Opacity ———— */}
      <section className={styles.guideSection}>
        <div className="container">
          <h2 className="title-l">Opacity</h2>
          <div className={styles.opacityRow}>
            {opacityTokens.map((token) => (
              <div key={token.variable} className={styles.opacityItem}>
                <div
                  className={styles.opacityDemo}
                  style={{ opacity: parseFloat(token.value) }}
                />
                <span className="label-s">{token.name}</span>
                <span className="label-s text-secondary">
                  var({token.variable}) — {token.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ———— Spacing ———— */}
      <section className={styles.guideSection}>
        <div className="container">
          <h2 className="title-l">Spacing Scale</h2>
          <div className={styles.spacingList}>
            {spacingTokens.map((token) => (
              <div key={token.variable} className={styles.spacingItem}>
                <div
                  className={styles.spacingBar}
                  style={{ width: `var(${token.variable})` }}
                />
                <span className="label-s">{token.name}</span>
                <span className="label-s text-secondary">
                  var({token.variable}) — {token.value} desktop
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ———— Typography ———— */}
      <section className={styles.guideSection}>
        <div className="container">
          <h2 className="title-l">Typography</h2>
          <div className={styles.typeList}>
            {typeTokens.map((token) => (
              <div key={token.class} className={styles.typeSample}>
                <p className={token.class}>
                  {token.name.startsWith("Display")
                    ? token.name.replace(" ", "")
                    : "The quick brown fox"}
                </p>
                <p className="label-s text-secondary">
                  .{token.class} — BDO Grotesk {token.spec}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ———— Responsive Breakpoints ———— */}
      <section className={styles.guideSection}>
        <div className="container">
          <h2 className="title-l">Responsive Breakpoints</h2>
          <div className={styles.breakpointList}>
            {breakpoints.map((bp) => (
              <div key={bp.name} className={styles.breakpointItem}>
                <span className="label-m">{bp.name}</span>
                <span className="label-s text-accent">{bp.range}</span>
                <p className="body-s text-secondary">{bp.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ———— Layout Primitives ———— */}
      <section className={styles.guideSection}>
        <div className="container">
          <h2 className="title-l">Layout Primitives</h2>
          <div className="stack">
            <div>
              <span className="label-m">.container</span>
              <p className="body-s text-secondary">
                max-width: 1920px · margin: 0 auto · padding: 0 var(--layout-gutter)
              </p>
            </div>
            <div>
              <span className="label-m">.section / .section--*</span>
              <p className="body-s text-secondary">
                Vertical padding between major layout sections (xl / l / m / s)
              </p>
            </div>
            <div>
              <span className="label-m">.stack</span>
              <p className="body-s text-secondary">
                Flex column with var(--space-stack) gap — vertical flow inside sections
              </p>
            </div>
            <div>
              <span className="label-m">.block</span>
              <p className="body-s text-secondary">
                Flex column with var(--space-block) gap — larger internal groupings
              </p>
            </div>
            <div>
              <span className="label-m">.tight</span>
              <p className="body-s text-secondary">
                Flex column with var(--space-tight) gap — closely related items
              </p>
            </div>
            <div>
              <span className="label-m">.readable / .readable-wide</span>
              <p className="body-s text-secondary">
                Content max-width constraints: 960px / 1200px
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ———— Grid Span Classes ———— */}
      <section className={styles.guideSection}>
        <div className="container">
          <h2 className="title-l">Grid Span Classes (Home)</h2>
          <div className={styles.spanDemo}>
            <div className={styles.spanItem12}>
              <span className="label-s">.span12</span>
            </div>
            <div className={styles.spanItem8}>
              <span className="label-s">.span8</span>
            </div>
            <div className={styles.spanItem4}>
              <span className="label-s">.span4</span>
            </div>
            <div className={styles.spanItem6}>
              <span className="label-s">.span6</span>
            </div>
            <div className={styles.spanItem6}>
              <span className="label-s">.span6</span>
            </div>
          </div>
        </div>
      </section>

      {/* ———— Component: ProjectCard ———— */}
      <section className={styles.guideSection}>
        <div className="container">
          <h2 className="title-l">Component: ProjectCard</h2>
          <div className={styles.cardPreviewGrid}>
            {previewProject && (
              <>
                <div>
                  <ProjectCard project={previewProject} />
                  <p className="label-s text-secondary">Default (4:3)</p>
                </div>
                <div>
                  <ProjectCard project={previewProject} wide />
                  <p className="label-s text-secondary">Wide (16:9)</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
