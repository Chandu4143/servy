/**
 * TrustSecurity (`#trust-security`) — 7-card trust grid.
 * Cards come from `trustItems` in `data/content.ts` (icon + title + blurb).
 * 4 columns on desktop, 2 on tablet, 1 on mobile. Add/remove items in
 * the data file — the grid adapts automatically.
 */
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { trustItems } from "@/data/content";

const TrustSecurity = () => (
  <section
    id="trust-security"
    aria-labelledby="trust-security-heading"
    className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="trust-security-heading"
          eyebrow="Trust & Security"
          title="Your financial information deserves protection."
          description="Servy deals with salary and financial information — protection is built into every record."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {trustItems.map((item, index) => (
          <Reveal key={item.title} delay={0.04 * index} distance={20}>
            <article className="h-full rounded-3xl border border-ink/5 bg-canvas p-6">
              <span
                className="grid size-11 place-items-center rounded-2xl bg-brand text-white"
                aria-hidden="true"
              >
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSecurity;
