/**
 * Single source of truth for site-wide content and links.
 *
 * Links marked as placeholders do not have a final destination yet — replace the
 * values below once the real URLs / email addresses are available. Nothing on this
 * website performs real bookings, payments or account actions.
 */
export const siteConfig = {
  name: "Servy",
  title: "Servy — Your work deserves a financial identity",
  description:
    "Helping households manage domestic employment and records while giving workers documented proof of their work and income.",
  url: "https://servy.in",
  tagline: "Your work deserves a financial identity.",
  footerNote:
    "Servy creates a bridge between informal domestic work and organized financial records.",
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
  { label: "For Households", href: "#for-households" },
  { label: "For Workers", href: "#for-workers" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Financial Identity", href: "#financial-identity" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/** Section ids observed by the navbar scroll-spy. */
export const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "For Households", href: "#for-households" },
      { label: "For Workers", href: "#for-workers" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Invoices", href: "#invoices" },
      { label: "Salary Slips", href: "#salary-slips" },
      { label: "Financial Identity", href: "#financial-identity" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Trust & Security", href: "#trust-security" },
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
