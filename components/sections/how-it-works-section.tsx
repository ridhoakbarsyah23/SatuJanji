import { Reveal } from "@/components/ui/reveal";
import { IconBadge } from "@/components/ui/icon-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "@/lib/content/site-content";

export function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="relative overflow-hidden bg-gray-950 py-20 text-white sm:py-28">
      <div className="section-shell">
        <div className="dark-section-heading">
          <SectionHeading
            eyebrow="Cara Kerja"
            title="Dari template ke link undangan dalam tiga langkah"
          />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09] sm:p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <IconBadge icon={Icon} variant="dark" />
                    <span className="font-serif text-5xl font-semibold text-white/10">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {step.description}
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
