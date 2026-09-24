import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const Services = () => (
  <section
    id="services"
    aria-labelledby="services-heading"
    className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title={
            <>
              Whatever you need.{" "}
              <span className="text-brand">We&apos;ve got someone for it.</span>
            </>
          }
          description="From everyday household tasks to essential home services, find the right professional for the job."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={0.05 * index} distance={20}>
            <article className="group h-full rounded-3xl border border-ink/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
              <span
                className="grid size-12 place-items-center rounded-2xl bg-lavender text-brand transition-transform duration-300 group-hover:scale-110 group-hover:bg-mint-soft group-hover:text-mint"
                aria-hidden="true"
              >
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
