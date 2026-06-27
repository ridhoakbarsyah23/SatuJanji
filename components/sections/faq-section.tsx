import { HelpCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "Apakah SatuJanji bisa digunakan tanpa coding?",
    answer:
      "Bisa. Kamu cukup memilih template, mengisi data pernikahan, mengunggah foto, lalu membagikan link undangan.",
  },
  {
    question: "Apakah undangan bisa dibuka di smartphone?",
    answer:
      "Ya. Semua template dibuat responsif agar tampil rapi di smartphone, tablet, dan desktop.",
  },
  {
    question: "Bisakah tamu melakukan RSVP online?",
    answer:
      "Bisa. Tamu dapat mengonfirmasi kehadiran langsung dari halaman undangan digital.",
  },
  {
    question: "Apakah bisa menambahkan lokasi Google Maps?",
    answer:
      "Bisa. Kamu dapat menambahkan lokasi akad, resepsi, atau acara lain agar tamu mudah menemukan alamat.",
  },
  {
    question: "Berapa lama undangan aktif?",
    answer:
      "Masa aktif mengikuti paket yang dipilih. Kamu bisa memilih paket sesuai kebutuhan acara.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering ditanyakan"
          description="Beberapa hal penting sebelum kamu mulai membuat undangan pernikahan digital."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <details className="group rounded-lg border border-gray-100 bg-white p-5 shadow-soft open:border-gold/25">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-gray-950">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="size-5 shrink-0 text-gold" aria-hidden="true" />
                    {faq.question}
                  </span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cream text-gold transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-8 text-sm leading-7 text-gray-600">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
