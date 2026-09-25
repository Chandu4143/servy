/**
 * ServyModel (`#model`) — "One relationship. Two financial records."
 * Three-card diagram: Household → Servy (bridge) → Worker.
 * Middle card lists `servyModelItems` from `data/content.ts`.
 * Arrows show only on desktop; cards stack vertically on mobile.
 */
import { ArrowRight, House, UserRound } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { servyModelItems } from "@/data/content";

const ServyModel = () => (
  <section
    id="model"
    aria-labelledby="model-heading"
    className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="model-heading"
          eyebrow="The Servy Model"
          title={
            <>
              One relationship.{" "}
              <span className="text-brand">Two financial records.</span>
            </>
          }
          description="Servy acts as a trusted bridge between households and domestic workers."
        />
      </Reveal>

      <div className="mt-12 grid items-stretch gap-5 lg:mt-16 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
        <Reveal>
          <article className="flex h-full flex-col items-center rounded-3xl border border-ink/5 bg-white p-7 text-center shadow-card">
            <span
              className="grid size-14 place-items-center rounded-2xl bg-lavender text-brand"
              aria-hidden="true"
            >
              <House className="size-7" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-ink">Household</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Employs and pays domestic workers
            </p>
            <p className="mt-4 rounded-full bg-canvas px-4 py-2 text-sm font-semibold text-ink">
              ₹20,000 Salary
            </p>
          </article>
        </Reveal>

        <div
          className="hidden items-center lg:flex"
          aria-hidden="true"
        >
          <ArrowRight className="size-6 text-brand" />
        </div>

        <Reveal delay={0.08}>
          <article className="flex h-full flex-col rounded-3xl bg-brand p-7 text-white shadow-float">
            <span className="flex items-center gap-3">
              <span className="grid size-11 place-items-center overflow-hidden rounded-xl bg-white">
                <Image
                  src="/brand/servy-logo.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="text-xl font-bold">Servy</span>
            </span>
            <ul className="mt-5 space-y-2.5">
              {servyModelItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/90"
                >
                  <item.icon
                    className="size-4 shrink-0 text-mint"
                    aria-hidden="true"
                  />
                  {item.title}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <div
          className="hidden items-center lg:flex"
          aria-hidden="true"
        >
          <ArrowRight className="size-6 text-brand" />
        </div>

        <Reveal delay={0.14}>
          <article className="flex h-full flex-col items-center rounded-3xl border border-ink/5 bg-white p-7 text-center shadow-card">
            <span
              className="grid size-14 place-items-center rounded-2xl bg-mint-soft text-mint"
              aria-hidden="true"
            >
              <UserRound className="size-7" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-ink">Domestic Worker</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Receives salary and builds financial identity
            </p>
            <p className="mt-4 rounded-full bg-mint-soft px-4 py-2 text-sm font-semibold text-brand-dark">
              Salary Slip · ₹20,000
            </p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ServyModel;
