/**
 * IdentitySection (`#financial-identity`) — indigo "financial identity" band.
 * Left: mock worker profile card (stats are hardcoded demo values).
 * Right: explainer + compliance disclaimer ("Servy creates the record.
 * Institutions decide." — keep this wording, don't promise loans/credit).
 */
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "2 yrs 8 mos", label: "Employment" },
  { value: "₹18,000", label: "Current Monthly Salary" },
  { value: "32", label: "Salary Records" },
  { value: "2", label: "Employment Records" },
];

const IdentitySection = () => (
  <section
    id="financial-identity"
    aria-labelledby="financial-identity-heading"
    className="scroll-mt-24 bg-brand px-5 py-20 text-white sm:px-8 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1240px]">
      <Reveal>
        <SectionHeading
          id="financial-identity-heading"
          tone="light"
          eyebrow="Financial Identity"
          title="From monthly work to a documented work history."
          description="Servy helps create organized records of employment and income. These records may help workers demonstrate their work and income history when institutions request such documentation."
        />
      </Reveal>

      <div className="mt-12 grid items-start gap-8 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <article className="rounded-3xl bg-white p-7 text-ink shadow-float sm:p-8">
            <div className="flex items-center gap-4">
              <span
                className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand text-xl font-bold text-white"
                aria-hidden="true"
              >
                L
              </span>
              <div>
                <p className="text-xl font-bold">Lakshmi</p>
                <p className="text-sm text-ink-soft">Servy Worker Profile</p>
              </div>
              <p className="ml-auto hidden rounded-full bg-mint-soft px-3 py-1 text-xs font-bold text-brand-dark sm:block">
                Active
              </p>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-canvas p-4"
                >
                  <dd className="text-xl font-bold text-brand">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-ink-soft">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-canvas px-3 py-1.5 text-ink">
                Payment History: Available
              </span>
              <span className="rounded-full bg-canvas px-3 py-1.5 text-ink">
                Salary Slips: Available
              </span>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="rounded-3xl bg-white/10 p-7 ring-1 ring-inset ring-white/15 backdrop-blur-sm sm:p-8">
            <h3 className="text-xl font-bold">
              Servy creates the record. Institutions decide.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Every paid month adds a salary slip, a payment entry and another
              line in the worker&apos;s employment history. Over time, informal
              work becomes organized, demonstrable income history.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/85">
              <li>✓ Employment period, role and employer on record</li>
              <li>✓ Monthly salary and payment dates documented</li>
              <li>✓ Downloadable slips and history in one profile</li>
            </ul>
            <p className="mt-5 rounded-2xl bg-white/10 p-4 text-xs leading-relaxed text-white/75 ring-1 ring-inset ring-white/15">
              Servy does not promise guaranteed loans, credit scores or bank
              approvals. Financial institutions make their own decisions.
            </p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
);

export default IdentitySection;
