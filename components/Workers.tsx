import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { workerFeatures, workerMonthlyFlow } from "@/data/content";

const Workers = () => (
  <section
    id="for-workers"
    aria-labelledby="for-workers-heading"
    className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="for-workers-heading"
          eyebrow="For Domestic Workers"
          title={
            <>
              Your work deserves{" "}
              <span className="text-brand">recognition.</span>
            </>
          }
          description="Domestic workers work every day, but their employment and income are often not formally documented. Servy helps create an organized record of work and salary."
        />
      </Reveal>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {workerMonthlyFlow.map((step) => (
          <Reveal key={step.number} delay={0.05} distance={18}>
            <li className="h-full rounded-3xl border border-ink/5 bg-canvas p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-brand">
                {step.number}
              </p>
              <p className="mt-2 text-lg font-bold text-ink">{step.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {workerFeatures.map((feature, index) => (
          <Reveal key={feature.title} delay={0.05 * index} distance={18}>
            <article className="flex h-full items-start gap-3 rounded-2xl bg-mint-soft/60 p-4 ring-1 ring-inset ring-mint/20">
              <span
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-mint text-white"
                aria-hidden="true"
              >
                <feature.icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-ink">
                  {feature.title}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">
                  {feature.description}
                </span>
              </span>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 text-base font-semibold text-brand-dark transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          Create My Servy Profile
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Workers;
