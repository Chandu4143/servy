import { CircleCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { whoServesHousehold, whoServesWorker } from "@/data/content";

const WhoServes = () => (
  <section
    aria-labelledby="who-serves-heading"
    className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="who-serves-heading"
          eyebrow="Who Servy Serves"
          title={
            <>
              One platform. <span className="text-brand">Two benefits.</span>
            </>
          }
          description="Servy creates a bridge between informal domestic work and organized financial records."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-3xl border border-ink/5 bg-white p-7 shadow-card sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              For Households
            </p>
            <h3 className="mt-2 text-2xl font-bold text-ink">
              Pay → Receive Invoice → Keep Records
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Organize your domestic workforce.
            </p>
            <ul className="mt-5 space-y-2.5">
              {whoServesHousehold.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-ink"
                >
                  <CircleCheck
                    className="size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-3xl bg-brand p-7 text-white shadow-float sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              For Domestic Workers
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              Work → Receive Salary Slip → Build Work History
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Build recognition for your work.
            </p>
            <ul className="mt-5 space-y-2.5">
              {whoServesWorker.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-white"
                >
                  <CircleCheck
                    className="size-4 shrink-0 text-mint"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export default WhoServes;
