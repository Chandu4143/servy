/**
 * Privacy Policy page (`/privacy`).
 * Static copy rendered through the shared `LegalDoc` layout.
 * NOTE: this is a plain-language placeholder — have it reviewed by
 * legal before launch. Edit the `sections` array below to change copy.
 */
import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Servy handles the information you share on this marketing website.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: "This website is a marketing site for the Servy app. It does not offer accounts, bookings or payments, and it does not collect personal information from you while you browse.",
  },
  {
    heading: "Links to the Servy app",
    body: "Booking, payments and account information are handled inside the Servy app. The privacy practices of the app are explained within the app itself.",
  },
  {
    heading: "Contacting us",
    body: "If you email us, we use your message and address only to reply to your question or enquiry.",
  },
  {
    heading: "Cookies and analytics",
    body: "If analytics or cookies are added to this website later, this page will be updated to describe what is measured and why.",
  },
  {
    heading: "Updates",
    body: "We may update this summary as Servy evolves. The latest version will always appear on this page.",
  },
];

const PrivacyPage = () => (
  <LegalDoc
    title="Privacy Policy"
    intro={`This policy explains how ${siteConfig.name} handles information in connection with this marketing website.`}
    sections={sections}
  />
);

export default PrivacyPage;