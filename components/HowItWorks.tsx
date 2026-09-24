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
          eyebrow="How It Works"
          title="Getting help is simple."
          description="Find the right professional, choose your time and let Servy handle the rest."
        />
      </Reveal>

      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-0">
        {howItWorksSteps.map((step, index) => {
          const isFirst = index === 0;
          const isLast = index === howItWorksSteps.length - 1;

          return (
            <li key={step.number} className="min-w-0">
              <Reveal
                delay={0.08 * index}
                className="flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0"
              >
                <div className="flex items-center lg:mb-8 lg:w-full">
                  <span
                    className={`servy-dashed-line hidden h-0.5 flex-1 lg:block ${
                      isFirst ? "lg:opacity-0" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className="grid size-16 shrink-0 place-items-center rounded-full text-xl font-bold text-white lg:size-20 lg:text-2xl"
                    style={{
                      background:
                        "linear-gradient(150deg, #283593 0%, #3a4bbd 45%, #1d276f 100%)",
                    }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <span
                    className={`servy-dashed-line hidden h-0.5 flex-1 lg:block ${
                      isLast ? "lg:opacity-0" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <div className="lg:px-3 lg:text-center">
                  <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
