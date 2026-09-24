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
        <article className="overflow-hidden rounded-3xl border border-ink/5 bg-canvas shadow-card">
          <div className="flex items-center justify-between bg-brand px-6 py-4 text-white">
            <p className="text-sm font-bold tracking-wide">
              Household · Kumar Family
            </p>
            <p className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              1 worker
            </p>
          </div>
          <div className="space-y-3 p-6">
            <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-card">
              <div>
                <p className="text-sm font-semibold text-ink">Lakshmi</p>
                <p className="text-xs text-ink-soft">
                  Domestic Worker · Since Jan 2024
                </p>
              </div>
              <p className="text-sm font-bold text-brand">₹18,000/mo</p>
            </div>
            {[
              { month: "September 2026", status: "Paid" },
              { month: "August 2026", status: "Paid" },
              { month: "July 2026", status: "Paid" },
            ].map((row) => (
              <div
                key={row.month}
                className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm"
              >
                <span className="font-medium text-ink">{row.month}</span>
                <span className="rounded-full bg-mint-soft px-3 py-1 text-xs font-semibold text-brand-dark">
                  {row.status}
                </span>
              </div>
            ))}
            <p className="px-1 pt-1 text-xs leading-relaxed text-ink-soft">
              Every payment links to a Servy invoice and the worker&apos;s
              salary slip.
            </p>
          </div>
        </article>
      </Reveal>
    </div>
  </section>
);

export default Households;
