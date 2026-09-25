/**
 * InvoiceSection (`#invoices`) — sample "SERVY INVOICE" document UI.
 * Left card is a static mock (Kumar Family / ₹18,000) showing what a
 * household receives monthly. Right card lists benefits. Buttons are
 * `#download` placeholders — they don't download a real file yet.
 * To use real data later, replace the hardcoded <dl> with props/API data.
 */
import { ArrowRight, CircleCheck, Download } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const InvoiceSection = () => (
  <section
    id="invoices"
    aria-labelledby="invoices-heading"
    className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="invoices-heading"
          eyebrow="Household Invoice"
          title={
            <>
              Every month, your household{" "}
              <span className="text-brand">gets a record.</span>
            </>
          }
          description="A Servy invoice documents the household service expense — for your own records."
        />
      </Reveal>

      <div className="mt-12 grid items-start gap-8 lg:mt-16 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <article className="overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-card">
            <div className="flex items-center justify-between border-b border-ink/5 px-6 py-4 sm:px-8">
              <p className="text-lg font-bold text-ink">SERVY INVOICE</p>
              <p className="rounded-full bg-mint-soft px-3 py-1 text-xs font-bold text-brand-dark">
                Paid
              </p>
            </div>
            <dl className="grid gap-x-8 gap-y-3 px-6 py-6 text-sm sm:grid-cols-2 sm:px-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Invoice No
                </dt>
                <dd className="mt-1 font-semibold text-ink">SVY-2026-000124</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Payment Status
                </dt>
                <dd className="mt-1 font-semibold text-ink">Paid</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Household
                </dt>
                <dd className="mt-1 font-medium text-ink">Kumar Family</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Worker
                </dt>
                <dd className="mt-1 font-medium text-ink">Lakshmi</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Service
                </dt>
                <dd className="mt-1 font-medium text-ink">
                  Domestic Household Services
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Service Period
                </dt>
                <dd className="mt-1 font-medium text-ink">September 2026</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Amount
                </dt>
                <dd className="mt-1 text-2xl font-bold text-brand">₹18,000</dd>
              </div>
            </dl>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="rounded-3xl bg-brand p-7 text-white shadow-float">
            <h3 className="text-xl font-bold">For Households</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/90">
              <li className="flex items-start gap-2.5">
                <CircleCheck
                  className="mt-0.5 size-4 shrink-0 text-mint"
                  aria-hidden="true"
                />
                Get an official Servy invoice document every month.
              </li>
              <li className="flex items-start gap-2.5">
                <CircleCheck
                  className="mt-0.5 size-4 shrink-0 text-mint"
                  aria-hidden="true"
                />
                Keep it with your household financial records.
              </li>
              <li className="flex items-start gap-2.5">
                <CircleCheck
                  className="mt-0.5 size-4 shrink-0 text-mint"
                  aria-hidden="true"
                />
                Where applicable, consult your tax professional regarding
                whether and how such expenses can be claimed or reported.
              </li>
            </ul>
            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-transform duration-200 hover:scale-[1.03]"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Invoice
            </a>
            <a
              href="#how-it-works"
              className="mt-3 inline-flex items-center gap-2 px-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              View Sample Invoice
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export default InvoiceSection;
