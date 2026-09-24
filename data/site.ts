/**
 * Single source of truth for site-wide content and links.
 *
 * Links marked as placeholders do not have a final destination yet — replace the
 * values below once the real URLs / email addresses are available. Nothing on this
 * website performs real bookings, payments or account actions.
 */
export const siteConfig = {
  name: "Servy",
  title: "Servy — Trusted Help, Right Around the Corner",
  description:
    "Find trusted professionals for cleaning, cooking, washing, ironing and everyday home services with Servy.",
  url: "https://servy.in",
  tagline: "Trusted help, right around the corner.",
  footerNote:
    "Making everyday services simpler, more accessible and more convenient.",
  /** Placeholders — swap in the published store listings. */
  appStoreUrl: "#download",
  playStoreUrl: "#download",
  /** Placeholder — replace with the real support address. */
  contactEmail: "hello@servy.in",
  copyrightHolder: "Servy",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Professionals", href: "#for-professionals" },
  { label: "Download", href: "#download" },
];

/** Section ids observed by the navbar scroll-spy. */
export const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "For Professionals", href: "#for-professionals" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#why-servy" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: `mailto:${siteConfig.contactEmail}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

/** Social profiles are placeholders until official handles are provided. */
export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
];
