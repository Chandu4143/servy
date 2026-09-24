import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import AppShowcase from "@/components/AppShowcase";
import ProviderSection from "@/components/ProviderSection";
import WhyServy from "@/components/WhyServy";
import Journey from "@/components/Journey";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <ProviderSection />
        <AppShowcase />
        <WhyServy />
        <Journey />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}