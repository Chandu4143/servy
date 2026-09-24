import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DotGrid from "@/components/ui/DotGrid";
import Reveal from "@/components/ui/Reveal";
import { providerFeatures } from "@/data/content";

const ProviderSection = () => (
  <section
    id="for-professionals"
    aria-labelledby="for-professionals-heading"
    className="relative isolate scroll-mt-24 overflow-hidden px-5 py-20 text-white sm:px-8 lg:py-24"
  >
    <span
      className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-dark via-brand to-brand-mid"
      aria-hidden="true"
    />
    <DotGrid
      className="absolute -left-6 top-10 -z-10 hidden text-white/40 lg:grid"
      columns={6}
      rows={7}
    />
    <DotGrid
      className="absolute -right-4 bottom-8 -z-10 hidden text-white/35 lg:grid"
      columns={6}
      rows={6}
    />

    <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-0 lg:grid-cols-2 lg:gap-16">
      <div>
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-mint">
            For Professionals
          </p>
          <h2
            id="for-professionals-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl"
          >
            Have a skill? Turn it into income.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Join Servy and connect with customers looking for reliable
            professionals like you.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {providerFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={0.06 * index} distance={18}>
              <article className="flex h-full items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-inset ring-white/15 backdrop-blur-sm">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15 text-mint"
                  aria-hidden="true"
                >
                  <feature.icon className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold">{feature.title}</span>
                  <span className="mt-1 text-xs leading-relaxed text-white/75">
                    {feature.description}
                  </span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-9">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Become a Professional
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="relative">
        <Image
          src="/images/servy-app-on-desk.webp"
          alt="Phone showing the Servy app on a desk, used to manage professional bookings"
          width={1672}
          height={941}
          sizes="(min-width: 1024px) 560px, 92vw"
          className="h-full w-full rounded-3xl object-cover shadow-float ring-1 ring-white/20"
        />
      </Reveal>
    </div>
  </section>
);

export default ProviderSection;
