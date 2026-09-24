import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { journeySteps } from "@/data/content";

const Journey = () => (
  <section
    aria-labelledby="journey-heading"
    className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="journey-heading"
          eyebrow="The booking experience"
          title="From search to service complete."
          description="One clear path through the Servy app — you always know what happens next."
        />
      </Reveal>

      <div className="relative mt-14 lg:mt-20">
        <span
          className="absolute left-0 right-0 top-6 hidden bg-gradient-to-r from-brand via-mint to-brand lg:block"
          style={{ height: 2 }}
          aria-hidden="true"
        />

        <ol className="grid gap-8 lg:grid-cols-6 lg:gap-4">
          {journeySteps.map((step, index) => (
            <li key={step.title} className="min-w-0">
              <Reveal
                delay={0.06 * index}
                distance={18}
                className="flex items-start gap-5 lg:flex-col lg:items-center lg:text-center"
              >
                <span
                  className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-white text-brand ring-2 ring-brand/15 lg:size-13"
                  aria-hidden="true"
                >
                  <step.icon className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-semibold text-ink">
                    {step.title}
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </span>
                </span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Journey;