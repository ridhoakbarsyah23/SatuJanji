import { LayoutTemplate, Rocket, Smartphone, WandSparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Mudah Digunakan",
    description: "Editor sederhana untuk mengisi data, foto, lokasi, dan cerita tanpa perlu coding.",
    icon: WandSparkles,
  },
  {
    title: "Template Elegan",
    description: "Pilihan desain premium yang dirancang khusus untuk momen pernikahan modern.",
    icon: LayoutTemplate,
  },
  {
    title: "Responsif di Semua Perangkat",
    description: "Undangan tampil rapi saat dibuka dari smartphone, tablet, maupun desktop.",
    icon: Smartphone,
  },
  {
    title: "Cepat Dibagikan",
    description: "Bagikan link undangan ke WhatsApp, Instagram, atau keluarga dalam hitungan detik.",
    icon: Rocket,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Kenapa SatuJanji"
          title="Semua yang dibutuhkan untuk undangan digital yang berkesan"
          description="Dibuat untuk pasangan yang ingin pengalaman undangan terasa personal, indah, dan tetap praktis."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.06}>
                <article className="h-full rounded-lg border border-gray-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/25">
                  <div className="grid size-12 place-items-center rounded-lg bg-cream text-gold">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-950">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
