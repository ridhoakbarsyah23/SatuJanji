import { Reveal } from "@/components/ui/reveal";
import { IconBadge } from "@/components/ui/icon-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { reasons } from "@/lib/content/site-content";

export function WhyChooseSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Kenapa SatuJanji"
          title="Dibuat agar proses undangan lebih jelas"
          description="Tidak perlu banyak menu. Cukup pilih desain, isi data, lalu bagikan link."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.06}>
                <article className="group h-full rounded-[24px] border border-gray-100 bg-gradient-to-b from-white to-cream/35 p-6 shadow-[0_14px_45px_rgba(23,23,23,0.05)] transition duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_24px_65px_rgba(23,23,23,0.09)]">
                  <IconBadge icon={Icon} className="transition group-hover:-translate-y-0.5" />
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
