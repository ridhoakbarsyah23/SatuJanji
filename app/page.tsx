import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TemplateSection } from "@/components/sections/template-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyChooseSection } from "@/components/sections/why-choose-section";

export default function Home() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <TrustBar />
        <TemplateSection />
        <PortfolioSection />
        <WhyChooseSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
