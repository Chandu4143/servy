import { ArrowRight, CircleCheck, Download, Share2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const SalarySlipSection = () => (
  <section
    id="salary-slips"
    aria-labelledby="salary-slips-heading"
    className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="salary-slips-heading"
          eyebrow="Salary Slip"
          title={
            <>
              Proof that <span className="text-brand">your work is real.</span>
            </>
          }
          description="A worker can download or share a salary slip when documentation of employment or income is needed."
        />
      </Reveal>

      <div className="mt-12 grid items-start gap-8 lg:mt-16 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <article className="overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-card">
            <div className="flex items-center justify-between bg-brand px-6 py-4 text-white sm:px-8">
              <p className="text-lg font-bold tracking-wide">
                SERVY SALARY SLIP
              </p>
              <p className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-brand-dark">
                PAID
              </p>
            </div>
            <div className="px-6 py-6 sm:px-8">
              <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Employee
                  </dt>
                  <dd className="mt-1 font-semibold text-ink">Lakshmi</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Employer
                  </dt>
                  <dd className="mt-1 font-medium text-ink">Kumar Household</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Role
                  </dt>
                  <dd className="mt-1 font-medium text-ink">Domestic Worker</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Salary Month
                  </dt>
                  <dd className="mt-1 font-medium text-ink">September 2026</dd>
                </div>
              </dl>
              <div className="mt-6 space-y-2 rounded-2xl bg-canvas p-5 text-sm">
                <p className="flex justify-between">
                  <span className="text-ink-soft">Basic Salary</span>
                  <span className="font-semibold text-ink">₹18,000</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-ink-soft">Deductions</span>
                  <span className="font-semibold text-ink">₹0</span>
                </p>
                <p className="flex justify-between border-t border-ink/10 pt-3 text-base">
                  <span className="font-bold text-ink">Net Salary</span>
                  <span className="font-bold text-brand">₹18,000</span>
                </p>
              </div>
              <dl className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Payment Date
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    30 September 2026
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Servy Employment ID
                  </dt>
                  <dd className="mt-1 font-medium text-ink">SVY-XXXXX</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download Slip
                </a>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-5 py-2.5 text-sm font-semibold text-ink"
                >
                  <Share2 className="size-4" aria-hidden="true" />
                  Share Slip
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="rounded-3xl border border-ink/5 bg-white p-7 shadow-card">
            <h3 className="text-xl font-bold text-ink">For Domestic Workers</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
              {[
                "Receive a digital salary slip every month.",
                "Keep your work and income records safe.",
                "Use salary slips to show proof of employment and income.",
                "Build a financial identity over time.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <CircleCheck
                    className="mt-0.5 size-4 shrink-0 text-mint"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
            <a
              href="#financial-identity"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              See how history builds
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export default SalarySlipSection;
