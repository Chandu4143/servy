import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply to using the Servy marketing website and the Servy mobile app.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    heading: "About these terms",
    body: "These terms cover your use of the Servy marketing website. Using the Servy app is also governed by the terms shown inside the app.",
  },
  {
    heading: "Using this website",
    body: "You may browse this website and use its links to download the Servy app. Please do not misuse the site or attempt to interfere with it.",
  },
  {
    heading: "Services and professionals",
    body: "Servy connects customers with independent service professionals. The details of a booking, including timing and pricing, are shown in the app before you confirm.",
  },
  {
    heading: "Content",
    body: "The Servy name, wordmark and app screens belong to Servy. The information on this website is provided in good faith and may change as the product evolves.",
  },
  {
    heading: "Contact",
    body: `If you have a question about these terms, write to ${siteConfig.contactEmail}.`,
  },
];

const TermsPage = () => (
  <LegalDoc
    title="Terms & Conditions"
    intro={`These terms explain the basis on which you may use the ${siteConfig.name} website.`}
    sections={sections}
  />
);

export default TermsPage;