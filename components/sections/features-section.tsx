import { Reveal } from "@/components/ui/reveal";
import { IconBadge } from "@/components/ui/icon-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/lib/site-content";

export function FeaturesSection() {
  return (
    <section id="fitur" className="relative overflow-hidden bg-[#FCFBF8] py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Fitur"
          title="Fitur yang paling dibutuhkan tamu"
          description="Fitur dibuat secukupnya agar informasi utama tetap mudah ditemukan."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.05}>
                <article className="group h-full rounded-[24px] border border-gray-100 bg-white p-5 shadow-[0_14px_45px_rgba(23,23,23,0.055)] transition duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_24px_65px_rgba(23,23,23,0.09)] sm:p-6">
                  <div className="flex items-start gap-4">
                    <IconBadge icon={Icon} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_35px_rgba(181,137,64,0.2)]" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-950">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
