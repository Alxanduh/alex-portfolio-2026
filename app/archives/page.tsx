import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Archives — Studio Schultz",
  description: "An archive of past work and experiments.",
};

export default function ArchivesPage() {
  return (
    <section className="section--l">
      <div className="container">
        <FadeIn>
          <div className="stack">
            <p className="label-s text-secondary">Coming soon</p>
            <h1 className="headline-l">Archives</h1>
            <p className="body-m text-secondary">
              A growing collection of past work, experiments, and side projects.
              Check back soon.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
