/**
 * HowItWorks (`#how-it-works`) — 7-step onboarding timeline.
 * Steps come from `howItWorksSteps` in `data/content.ts`.
 * Row 1 shows steps 1–4 (brand numbers), row 2 shows steps 5–7
 * (mint numbers, the monthly invoice/slip payoff). Edit copy in data file.
 */
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { howItWorksSteps } from "@/data/content";

const HowItWorks = () => (
  <section
    id="how-it-works"
    aria-labelledby="how-it-works-heading"
    className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="How Servy Works"
          title="Simple for the household. Valuable for the worker."
          description="One flow creates two records — an invoice for the household and a salary slip for the worker."
        />
      </Reveal>

      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {howItWorksSteps.slice(0, 4).map((step, index) => (
          <li key={step.number} className="min-w-0">
            <Reveal delay={0.06 * index}>
              <p className="text-sm font-bold tracking-[0.2em] text-brand">
                {step.number}
              </p>
              <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
      <ol className="mt-8 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-3">
        {howItWorksSteps.slice(4).map((step, index) => (
          <li key={step.number} className="min-w-0">
            <Reveal delay={0.06 * index}>
              <p className="text-sm font-bold tracking-[0.2em] text-mint">
                {step.number}
              </p>
              <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
