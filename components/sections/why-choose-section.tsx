import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { reasons } from "@/lib/site-content";

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Kenapa SatuJanji"
          title="Dibuat agar proses undangan lebih jelas"
          description="Tidak perlu banyak menu. Cukup pilih desain, isi data, lalu bagikan link."
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
