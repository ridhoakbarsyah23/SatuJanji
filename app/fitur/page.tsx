import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
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
        <section className="bg-white py-16 sm:py-20">
          <div className="section-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Fitur
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl">
              Semua kebutuhan undangan digital dalam alur yang sederhana
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Lihat fitur utama yang membantu pasangan menyiapkan informasi
              acara, respons tamu, dan halaman undangan yang nyaman dibuka.
            </p>
          </div>
        </section>
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
