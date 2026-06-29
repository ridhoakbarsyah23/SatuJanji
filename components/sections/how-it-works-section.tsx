import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "@/lib/site-content";

export function HowItWorksSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Dari template ke link undangan dalam tiga langkah"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="relative h-full rounded-lg border border-gray-100 bg-white p-7 shadow-soft">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-lg bg-gray-950 text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <span className="font-serif text-5xl font-semibold text-gold/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
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
