import { footerLinks, siteConfig } from "@/data/site";

const Footer = () => (
  <footer className="border-b border-black/10 bg-[#faf9f7]">
    <div className="mx-auto w-full max-w-[1240px] px-5 pt-14 sm:px-8">
      <div className="grid gap-10 pb-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="text-2xl font-black tracking-tight text-ink">
            Servy
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Work. Income. Identity.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {siteConfig.footerNote}
          </p>
          <p className="mt-4 text-sm text-ink-soft">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-medium text-brand underline underline-offset-4"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3"
        >
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <p className="border-t border-black/10 py-6 text-center text-xs text-ink-muted">
        © 2026 {siteConfig.copyrightHolder}. All rights reserved.
      </p>
    </div>

    <div aria-hidden="true" className="relative select-none">
      <p className="whitespace-nowrap text-center text-[clamp(110px,22.5vw,400px)] font-black uppercase leading-[0.82] tracking-[-0.045em] text-[#d6d3ce]">
        Servy
      </p>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-[#faf9f7] via-[#faf9f7]/70 to-transparent"
      />
    </div>
  </footer>
);

export default Footer;
