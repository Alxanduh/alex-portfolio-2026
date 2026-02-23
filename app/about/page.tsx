import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import ScrollHighlight from "@/components/motion/ScrollHighlight";
import DragScroll from "@/components/motion/DragScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Studio Schultz",
  description:
    "Founded by Alex Schultz and Lola Sue Schultz. An independent brand and digital design studio.",
};

/**
 * About page.
 *
 * Typography mapping (verified against Figma):
 * - Hero:             display-s (164/172)
 * - Photo captions:   title-s name (24/32), body-s role (16/24)
 * - Bio:              headline-l (96/104) with color split
 * - Section labels:   label-m (18/24 demibold secondary)
 * - Section headings: headline-l (96/104)
 * - Disciplines h:    headline-m (72/80)
 * - Discipline title: title-l (40/48)
 * - Discipline desc:  title-s (24/32 secondary)
 * - Capabilities h:   headline-m (72/80)
 * - Cap group title:  title-l (40/48)
 * - Cap items:        title-s (24/32 secondary)
 * - Testimonial quote: title-m (32/40)
 * - Testimonial author: label-l (24/30 demibold secondary)
 * - Testimonial role:   label-s (14/20 demibold secondary)
 */
export default function AboutPage() {
  return (
    <>
      {/* ———— Hero + Photo Grid ———— */}
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <h1 className={`display-s ${styles.heroTitle}`}>
              Design, skateboarding,
              <br />
              and rock &apos;n roll
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className={styles.photoGrid}>
              <div className={styles.photoCol}>
                <div className={styles.photoItem}>
                  <img
                    src="/images/image-alex-about.jpg"
                    alt="Alex Schultz at a waterfall"
                    className={styles.photoVideo}
                  />
                </div>
                <div className={styles.photoCaption}>
                  <span className="title-s">Alex Schultz</span>
                  <span className="body-s text-secondary">
                    Co–Founder, Brand Designer
                  </span>
                </div>
              </div>
              <div className={`${styles.photoCol} ${styles.photoColOffset}`}>
                <div className={styles.photoItem}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.photoVideo}
                    src="/videos/video-lola.mp4"
                  />
                </div>
                <div className={styles.photoCaption}>
                  <span className="title-s">Lola Sue Schultz</span>
                  <span className="body-s text-secondary">
                    Co–Founder, Art Director
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ———— Bio ———— */}
      <section className="section--xl">
        <div className="container">
          <ScrollHighlight className="headline-l">
            Founded by Alex Schultz and Lola Sue Schultz, Studio Schultz was born from a shared passion for clean, functional design that empowers humans and the humans behind the brand.
          </ScrollHighlight>
        </div>
      </section>

      {/* ———— Fields of Practice ———— */}
      <section className="section--m">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <p className={`label-m text-secondary ${styles.sectionHeaderLabel}`}>
                How we can help
              </p>
              <div className={styles.sectionDivider} />
              <h2 className="headline-l">Fields of practice</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className={`headline-s ${styles.disciplinesHeading}`}>Disciplines</h3>
            <div className={styles.disciplineGrid}>
              <div className={styles.disciplineItem}>
                <span className="title-m">Brand Strategy</span>
                <p className="body-s text-secondary">
                  Capture hearts, spark curiosity, and leave a lasting impression
                </p>
              </div>
              <div className={styles.disciplineItem}>
                <span className="title-m">Design &amp; Illustration</span>
                <p className="body-s text-secondary">
                  Diverse skillsets able to tackle any design challenge
                </p>
              </div>
              <div className={styles.disciplineItem}>
                <span className="title-m">Creative Direction</span>
                <p className="body-s text-secondary">
                  Your creative ally with extensive experience
                </p>
              </div>
              <div className={styles.disciplineItem}>
                <span className="title-m">UI &amp; UX</span>
                <p className="body-s text-secondary">
                  A critical eye on the consumer web &amp; product experience
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ———— Capabilities ———— */}
      <section className="section--m">
        <div className="container">
          <FadeIn>
            <h2 className={`headline-s ${styles.capHeading}`}>Capabilities</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.capGrid}>
              {[
                { title: "Scaled systems", items: ["Brand Strategy", "Visual Identity System", "Voice & Tone", "Brand Guidelines", "Subbrands", "Programs", "Events"] },
                { title: "Sales & Marketing", items: ["Brand Strategy", "Visual Identity System", "Voice & Tone", "Brand Guidelines", "Subbrands", "Programs", "Events"] },
                { title: "Digital & web", items: ["Brand Strategy", "Visual Identity System", "Voice & Tone", "Brand Guidelines", "Subbrands", "Programs", "Events"] },
                { title: "Social media", items: ["Brand Strategy", "Visual Identity System", "Voice & Tone", "Brand Guidelines", "Subbrands", "Programs", "Events"] },
                { title: "OOH (Out of Home)", items: ["Brand Strategy", "Visual Identity System", "Voice & Tone", "Brand Guidelines", "Subbrands", "Programs", "Events"] },
                { title: "Promo material", items: ["Brand Strategy", "Visual Identity System", "Voice & Tone", "Brand Guidelines", "Subbrands", "Programs", "Events"] },
              ].map((group) => (
                <div key={group.title} className={styles.capGroup}>
                  <span className={`title-l ${styles.capGroupTitle}`}>
                    {group.title}
                  </span>
                  {group.items.map((item, i) => (
                    <span key={i} className="body-m text-secondary">
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ———— When we're not at the computer ———— */}
      <section className="section--xl">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <p className={`label-m text-secondary ${styles.sectionHeaderLabel}`}>
                Naps, explores, shreds and more
              </p>
              <div className={styles.sectionDivider} />
              <h2 className="headline-l">
                When we&apos;re
                <br />
                not at the computer
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.offdutyGrid}>
              <div className={styles.polaroid}>
                <div className={styles.polaroidMedia}>
                  <video autoPlay muted loop playsInline className={styles.offdutyVideo} src="/videos/lola-bandw.mov" />
                </div>
              </div>
              <div className={styles.polaroid}>
                <div className={styles.polaroidMedia}>
                  <video autoPlay muted loop playsInline className={styles.offdutyVideo} src="/videos/san-juan-valley.mov" />
                </div>
              </div>
              <div className={styles.polaroid}>
                <div className={styles.polaroidMedia}>
                  <video autoPlay muted loop playsInline className={styles.offdutyVideo} src="/videos/driving.mov" />
                </div>
              </div>
              <div className={styles.polaroid}>
                <div className={styles.polaroidMedia}>
                  <video autoPlay muted loop playsInline className={styles.offdutyVideo} src="/videos/skate-bruh.mov" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ———— Client Appreciation ———— */}
      <section className="section--m">
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <p className={`label-m text-secondary ${styles.sectionHeaderLabel}`}>
                Words from good folks
              </p>
              <div className={styles.sectionDivider} />
              <h2 className="headline-l">Client Appreciation</h2>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <DragScroll className={styles.testimonialRow}>
            {[
              { text: "Working with Alex was transformative for our brand. The clarity and precision they brought to our identity was exactly what we needed to stand out in a crowded market.", author: "Jesse McGrath", role: "Principal and founder at McGrath Architects" },
              { text: "The system Studio Schultz built for us scales effortlessly. Every new portfolio company we launch slots right into the parent brand with zero friction.", author: "Sarah Chen", role: "VP of Marketing at Grow Therapy" },
              { text: "They don't just design — they think. Every decision had a reason behind it, and the result speaks for itself.", author: "Marcus Rivera", role: "CEO at Black River Barbershop" },
              { text: "Most agencies hand you a logo and call it a day. Schultz handed us a system that our entire team could run with from day one.", author: "Priya Patel", role: "Head of Brand at Braintree" },
              { text: "The attention to craft is unreal. Every detail, down to the spacing and type choices, felt intentional. Nothing was arbitrary.", author: "Tom Lindqvist", role: "Creative Director at Simple Trips" },
              { text: "We came in thinking we needed a refresh. They showed us we needed a complete rethink — and they were right.", author: "Dana Woodward", role: "Founder at Atlas Creative" },
            ].map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <p className="title-m">&ldquo;{t.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <span className="label-l text-secondary">{t.author}</span>
                  <span className="label-s text-secondary">{t.role}</span>
                </div>
              </div>
            ))}
          </DragScroll>
        </FadeIn>
      </section>
    </>
  );
}
