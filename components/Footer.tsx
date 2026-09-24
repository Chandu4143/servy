import { siteConfig } from "@/data/site";

const footerSocials = [
  { label: "Youtube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Email", href: `mailto:${siteConfig.contactEmail}` },
];

/** Small stemmed flower that sits on the "Y", mimicking the reference. */
const FlowerMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 40" fill="none" aria-hidden="true" className={className}>
    <path
      d="M16 22v14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <g fill="currentColor">
      <ellipse cx="16" cy="7" rx="4.6" ry="6" />
      <ellipse cx="8.6" cy="12.4" rx="4.6" ry="6" transform="rotate(-52 8.6 12.4)" />
      <ellipse cx="23.4" cy="12.4" rx="4.6" ry="6" transform="rotate(52 23.4 12.4)" />
      <ellipse cx="10.6" cy="19.4" rx="4.2" ry="5.4" transform="rotate(-24 10.6 19.4)" />
      <ellipse cx="21.4" cy="19.4" rx="4.2" ry="5.4" transform="rotate(24 21.4 19.4)" />
    </g>
  </svg>
);

const Footer = () => (
  <footer className="overflow-hidden border-b border-black/10 bg-[#faf9f7]">
    <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
      <nav aria-label="Social">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 pt-14 sm:gap-x-14">
          {footerSocials.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13px] font-medium tracking-tight text-[#1d1d1f] underline decoration-black/70 underline-offset-4 transition-opacity duration-200 hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* Oversized cropped wordmark with bottom fade, like the reference. */}
    <div
      aria-hidden="true"
      className="relative mt-8 select-none sm:mt-10"
    >
      <p className="whitespace-nowrap text-center text-[clamp(110px,22.5vw,400px)] font-black uppercase leading-[0.82] tracking-[-0.045em] text-[#d6d3ce]">
        Serv
        <span className="relative inline-block">
          y
          <FlowerMark className="absolute -top-[0.16em] left-1/2 h-[0.17em] w-auto -translate-x-[22%] text-[#cfccc6]" />
        </span>
      </p>
      {/* Fade the bottom of the letters into the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-[#faf9f7] via-[#faf9f7]/70 to-transparent"
      />
    </div>
  </footer>
);

export default Footer;