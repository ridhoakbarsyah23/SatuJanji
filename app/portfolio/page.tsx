import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { PortfolioSection } from "@/components/sections/portfolio-section";

export const metadata: Metadata = {
  title: "Portfolio Undangan Digital",
  description:
    "Lihat pendekatan dan contoh tampilan undangan digital SatuJanji yang rapi, responsif, dan mudah dibagikan.",
};

export default function PortfolioPage() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <section className="bg-white py-16 sm:py-20">
          <div className="section-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Portfolio
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl">
              Gambaran sistem undangan yang siap dikembangkan
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Bagian ini menampilkan pendekatan SatuJanji dalam menyusun
              informasi acara menjadi pengalaman undangan yang rapi.
            </p>
          </div>
        </section>
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
