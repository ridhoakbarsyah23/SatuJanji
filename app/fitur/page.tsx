import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyChooseSection } from "@/components/sections/why-choose-section";

export const metadata: Metadata = {
  title: "Fitur Undangan Digital",
  description:
    "Lihat fitur SatuJanji untuk undangan digital, mulai dari RSVP, galeri foto, buku tamu, lokasi, dan bantuan admin.",
};

export default function FiturPage() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <PageHero
          eyebrow="Fitur"
          title="Semua kebutuhan undangan digital dalam alur yang sederhana"
          description="Lihat fitur utama yang membantu pasangan menyiapkan informasi acara, respons tamu, dan halaman undangan yang nyaman dibuka."
          targetId="fitur"
        />
        <TrustBar />
        <WhyChooseSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
