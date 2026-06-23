import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProofStrip from "@/components/ProofStrip";
import IntroColumns from "@/components/IntroColumns";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import DispatchForm from "@/components/DispatchForm";
import Footer from "@/components/Footer";
import StatusIndicator from "@/components/StatusIndicator";
import GuaranteeBanner from "@/components/GuaranteeBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProofStrip />
        <IntroColumns />
        <ServicesSection />
        <HowItWorks />
        <TrustSection />
        <GuaranteeBanner />
        <TestimonialsSection />
        <LocationsSection />
        <FAQSection />
        <DispatchForm />
      </main>
      <Footer />
      <StatusIndicator />
    </div>
  );
};

export default Index;
