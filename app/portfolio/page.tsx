import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Portfolio Undangan Digital",
  description:
    "Lihat pendekatan dan contoh tampilan undangan digital SatuJanji yang rapi, responsif, dan mudah dibagikan.",
};

export default function PortfolioPage() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <PageHero
          eyebrow="Portfolio"
          title="Inspirasi undangan untuk setiap cerita yang istimewa"
          description="Temukan cara SatuJanji menyusun detail acara menjadi pengalaman undangan yang rapi, hangat, dan mudah dinikmati."
          targetId="portfolio"
        />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
