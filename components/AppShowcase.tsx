import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StoreButtons from "@/components/ui/StoreButtons";
import { appHighlights } from "@/data/content";

const AppShowcase = () => {
  const leftCards = appHighlights.slice(0, 2);
  const rightCards = appHighlights.slice(2);

  const cardClass =
    "flex items-start gap-4 rounded-3xl border border-ink/5 bg-white p-5 shadow-card transition-transform duration-300 hover:-translate-y-1";

  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <Reveal>
          <SectionHeading
            id="download-heading"
            eyebrow="Download"
            title="Everything you need, right in your pocket."
            description="Discover professionals, compare options, book services and keep track of your bookings — all from the Servy app."
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            {leftCards.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * index}>
                <article className={cardClass}>
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-2xl bg-mint-soft text-mint"
                    aria-hidden="true"
                  >
                    <item.icon className="size-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-base font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </span>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="order-1 mx-auto w-full max-w-[335px] lg:order-2 lg:max-w-[360px]">
            <Image
              src="/app-screens/servy-app-home.webp"
              alt="Servy app screen showing services available to book nearby"
              width={941}
              height={1672}
              sizes="(min-width: 1024px) 360px, 70vw"
              className="h-auto w-full"
            />
          </Reveal>

          <div className="order-3 flex flex-col gap-5">
            {rightCards.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * index}>
                <article className={cardClass}>
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-2xl bg-lavender text-brand"
                    aria-hidden="true"
                  >
                    <item.icon className="size-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-base font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </span>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <StoreButtons tone="dark" className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
};

export default AppShowcase;
