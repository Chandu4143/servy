/**
 * Home page (`/`).
 *
 * This is a static single-page marketing site — NOT the Servy product.
 * There is no auth, booking, payments, or backend here, only anchor
 * sections rendered top-to-bottom. To reorder the page, just reorder
 * the components below. To edit copy, see `data/content.ts` and
 * `data/site.ts` first — most text lives there, not in the components.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServyModel from "@/components/ServyModel";
import Households from "@/components/Households";
import InvoiceSection from "@/components/InvoiceSection";
import Workers from "@/components/Workers";
import SalarySlipSection from "@/components/SalarySlipSection";
import IdentitySection from "@/components/IdentitySection";
import HowItWorks from "@/components/HowItWorks";
import WhoServes from "@/components/WhoServes";
import TrustSecurity from "@/components/TrustSecurity";
import AppShowcase from "@/components/AppShowcase";
import AboutServy from "@/components/AboutServy";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServyModel />
        <Households />
        <InvoiceSection />
        <Workers />
        <SalarySlipSection />
        <IdentitySection />
        <HowItWorks />
        <WhoServes />
        <TrustSecurity />
        <AppShowcase />
        <AboutServy />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
