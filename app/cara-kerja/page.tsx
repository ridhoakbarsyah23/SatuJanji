import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";

export const metadata: Metadata = {
  title: "Cara Kerja SatuJanji",
  description:
    "Pelajari alur membuat undangan digital di SatuJanji, dari memilih template, mengisi data, sampai membagikan link.",
};

export default function CaraKerjaPage() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <section className="bg-white py-16 sm:py-20">
          <div className="section-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Cara Kerja
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl">
              Dari pilihan template sampai link siap dibagikan
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Alurnya dibuat ringkas agar calon customer cepat memahami proses
              pembuatan undangan digital di SatuJanji.
            </p>
          </div>
        </section>
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
