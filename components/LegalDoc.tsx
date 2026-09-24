import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export type LegalSection = {
  heading: string;
  body: string;
};

type LegalDocProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Shared layout for the static Privacy Policy and Terms pages. The copy is a
 * plain-language summary and should be reviewed before the site goes live.
 */
const LegalDoc = ({ title, intro, sections }: LegalDocProps) => (
  <>
    <Navbar />
    <main className="flex-1 bg-white px-5 pb-20 pt-32 sm:px-8 lg:pt-36">
      <article className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{intro}</p>
        <p className="mt-6 rounded-2xl bg-canvas p-4 text-sm leading-relaxed text-ink-soft">
          This page is a plain-language summary for the Servy marketing website.
          It will be replaced with the final reviewed document.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-ink">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-ink-muted">
          Questions about this page? Write to us at{" "}
          <a
            href="mailto:hello@servy.in"
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            hello@servy.in
          </a>
          .
        </p>
      </article>
    </main>
    <Footer />
  </>
);

export default LegalDoc;