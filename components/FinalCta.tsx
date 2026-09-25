/**
 * FinalCta (`#contact`) — closing indigo CTA band + contact email.
 * Mirrors the hero palette to bookend the page. Contains Get Started /
 * Login placeholders, the support email from `siteConfig`, and store
 * badges. The `contact` id is what footer "Contact" links scroll to.
 */
import { ArrowRight, LogIn } from "lucide-react";
import DotGrid from "@/components/ui/DotGrid";
import Reveal from "@/components/ui/Reveal";
import StoreButtons from "@/components/ui/StoreButtons";
import { siteConfig } from "@/data/site";

const FinalCta = () => (
  <section
    id="contact"
    aria-labelledby="final-cta-heading"
    className="relative isolate scroll-mt-24 overflow-hidden bg-brand px-5 py-20 text-center text-white sm:px-8 lg:py-24"
  >
    <span
      className="absolute inset-0 -z-10 bg-gradient-to-br from-brand via-brand-dark to-brand"
      aria-hidden="true"
    />
    <span
      className="absolute -left-20 bottom-0 -z-10 size-72 rounded-full bg-mint/20 blur-3xl"
      aria-hidden="true"
    />
    <DotGrid
      className="absolute right-6 top-8 -z-10 hidden text-white/40 lg:grid"
      columns={6}
      rows={6}
    />
    <DotGrid
      className="absolute bottom-8 left-6 -z-10 hidden text-white/30 lg:grid"
      columns={5}
      rows={5}
    />

    <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
          Servy — Your work deserves a financial identity
        </p>
        <h2
          id="final-cta-heading"
          className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-5xl"
        >
          One platform. Two sides. Better records.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Helping households manage domestic employment and records while
          giving workers documented proof of their work and income.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-9 w-full">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Started
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            <LogIn className="size-4" aria-hidden="true" />
            Login
          </a>
        </div>
        <p className="mt-4 text-sm text-white/70">
          Contact us at{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-semibold text-white underline underline-offset-4"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mt-10">
        <StoreButtons tone="light" className="justify-center" />
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
