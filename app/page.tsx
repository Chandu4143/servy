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
