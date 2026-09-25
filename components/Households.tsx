import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { householdFeatures } from "@/data/content";

const Households = () => (
  <section
    id="for-households"
    aria-labelledby="for-households-heading"
    className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-2">
      <div>
        <Reveal>
          <SectionHeading
            id="for-households-heading"
            align="left"
            eyebrow="For Households"
            title={
              <>
                Manage your domestic workforce.{" "}
                <span className="text-brand">Keep your records organized.</span>
              </>
            }
            description="Servy helps households manage their domestic workers and maintain documentation for payments and services."
          />
        </Reveal>
        <div className="mt-8 space-y-4">
          {householdFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={0.05 * index} distance={18}>
              <article className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-canvas p-4">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-white"
                  aria-hidden="true"
                >
                  <feature.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-base font-semibold text-ink">
                    {feature.title}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-ink-soft">
                    {feature.description}
                  </span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-8">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Create Household Account
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <Image
          src="/images/household-man.webp"
          alt="Household member managing workers and salary payments on the Servy app"
          width={1448}
          height={1086}
          sizes="(min-width: 1024px) 560px, 90vw"
          loading="lazy"
          className="h-auto w-full rounded-3xl object-cover shadow-float"
        />
      </Reveal>
    </div>
  </section>
);

export default Households;
