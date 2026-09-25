/**
 * AboutServy (`#about`) — Vision / Mission cards.
 * Static copy, no data dependency. Keep statements aspirational but
 * factual — don't add user counts, cities, or awards without proof
 * (see "Important Product Rules" in idea.md).
 */
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const AboutServy = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="about-heading"
          eyebrow="About Servy"
          title="We believe domestic work deserves recognition."
          description="Servy is building financial and employment infrastructure for domestic workers and the households that employ them. Our goal is simple: make domestic employment more organized, transparent and financially documented for both sides."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-3xl bg-brand p-7 text-white shadow-float sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Vision
            </p>
            <p className="mt-3 text-2xl font-bold leading-snug">
              A future where every domestic worker can prove their work and
              income.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-3xl border border-ink/5 bg-canvas p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Mission
            </p>
            <p className="mt-3 text-2xl font-bold leading-snug text-ink">
              To connect households and domestic workers through trusted
              employment and financial records.
            </p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutServy;
