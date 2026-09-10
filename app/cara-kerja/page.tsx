import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Cara Kerja SatuJanji",
  description:
    "Pelajari alur membuat undangan digital di SatuJanji, dari memilih template, mengisi data, sampai membagikan link.",
};

export default function CaraKerjaPage() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <PageHero
          eyebrow="Cara Kerja"
          title="Dari pilihan template sampai link siap dibagikan"
          description="Prosesnya dirancang ringkas agar setiap pasangan dapat menyiapkan undangan digital dengan mudah dan nyaman."
          targetId="cara-kerja"
        />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
