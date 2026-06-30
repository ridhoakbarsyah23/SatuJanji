import { FAQSection } from "@/components/sections/faq-section";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TemplateSection } from "@/components/sections/template-section";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <TemplateSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
