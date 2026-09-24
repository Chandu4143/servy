import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { benefits } from "@/data/content";

const WhyServy = () => (
  <section
    id="why-servy"
    aria-labelledby="why-servy-heading"
    className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="why-servy-heading"
          eyebrow="Why Servy"
          title="Built around the way you live."
          description="Every part of Servy is designed to keep booking help simple, clear and stress free."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Reveal key={benefit.title} delay={0.05 * index} distance={20}>
            <article className="group h-full rounded-3xl border border-ink/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
              <span
                className="grid size-11 place-items-center rounded-2xl bg-mint-soft text-mint transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <benefit.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {benefit.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyServy;
