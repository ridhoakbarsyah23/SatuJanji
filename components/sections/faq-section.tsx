import { FAQAccordion } from "@/components/sections/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAdminItems } from "@/lib/admin-store";

export async function FAQSection() {
  const faqs = (await getAdminItems("faqs")).filter(
    (faq) => faq.status === "Aktif",
  );

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering ditanyakan"
          description="Beberapa hal penting sebelum kamu mulai membuat undangan pernikahan digital."
        />

        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
