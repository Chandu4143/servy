import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StoreButtons from "@/components/ui/StoreButtons";
import { appHighlights, workerAppHighlights } from "@/data/content";

const AppShowcase = () => (
  <section
    id="download"
    aria-labelledby="download-heading"
    className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="download-heading"
          eyebrow="Servy App"
          title="Your household workforce. Your records. One app."
          description="Manage workers, payments, invoices and salary slips — right from your phone."
        />
      </Reveal>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
        <Reveal>
          <article className="rounded-3xl border border-ink/5 bg-white p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Household App
            </p>
            <p className="mt-1 text-lg font-bold text-ink">
              Workers · Salary · Payments · Invoices · Records
            </p>
            <ul className="mt-5 space-y-4">
              {appHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-xl bg-lavender text-brand"
                    aria-hidden="true"
                  >
                    <item.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-[300px] lg:max-w-[320px]">
          <Image
            src="/app-screens/servy-app-home.webp"
            alt="Servy app with workers, payments and records"
            width={941}
            height={1672}
            sizes="(min-width: 1024px) 320px, 70vw"
            className="h-auto w-full"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className="rounded-3xl bg-brand p-6 text-white shadow-float">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Worker App
            </p>
            <p className="mt-1 text-lg font-bold">
              Employer · Salary · Salary Slips · Payments · History
            </p>
            <ul className="mt-5 space-y-4">
              {workerAppHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15 text-mint"
                    aria-hidden="true"
                  >
                    <item.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-white/75">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>

      <Reveal className="mt-12 flex justify-center">
        <StoreButtons tone="dark" className="justify-center" />
      </Reveal>
    </div>
  </section>
);

export default AppShowcase;
