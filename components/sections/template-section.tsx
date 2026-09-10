import { Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { templates } from "@/lib/templates";
import { createTemplateInquiryLink } from "@/lib/whatsapp";

export function TemplateSection() {
  return (
    <section id="template" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="section-orb section-orb-right" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Koleksi Template"
          title="Temukan desain yang paling mewakili ceritamu"
          description="Setiap template dirancang agar kisah, detail acara, dan informasi penting tampil indah serta mudah dipahami tamu."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template, index) => {
            const Icon = template.icon;

            return (
              <Reveal key={template.slug} delay={index * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_55px_rgba(23,23,23,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_28px_80px_rgba(23,23,23,0.11)]">
                  <div className="bg-cream p-5">
                    <div className="rounded-[22px] bg-white p-3 shadow-sm sm:p-4">
                      <div
                        className="relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[18px] border p-5"
                        style={{
                          borderColor: `${template.accent}33`,
                          background: `linear-gradient(180deg, ${template.accent}14, #ffffff 46%, #fff8f0 100%)`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600 shadow-sm backdrop-blur">
                            {template.theme}
                          </span>
                          <span
                            className="grid size-10 place-items-center rounded-full border border-white/70 text-white shadow-[0_8px_24px_rgba(23,23,23,0.12)] transition group-hover:-translate-y-0.5"
                            style={{ backgroundColor: template.accent }}
                          >
                            <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
                          </span>
                        </div>

                        <div className="text-center">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                            Pilihan Desain
                          </p>
                          <h3 className="mt-3 break-words font-serif text-3xl font-semibold text-gray-950 sm:text-4xl">
                            {template.name}
                          </h3>
                          <p className="mt-3 text-sm text-gray-500">
                            Elegan di setiap layar
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {["RSVP", "Maps", "Galeri"].map((feature) => (
                            <span
                              key={feature}
                              className="rounded-md bg-white px-2 py-2 text-center text-[11px] font-semibold text-gray-600 shadow-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-950">
                          {template.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-gold">
                          {template.theme}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {template.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={`mt-6 grid gap-2 ${template.preview ? "sm:grid-cols-2" : ""}`}>
                      {template.preview ? (
                        <Button
                          href={`/template/${template.slug}`}
                          variant="secondary"
                          className="w-full px-3"
                        >
                          <Eye className="size-4" strokeWidth={1.75} aria-hidden="true" />
                          Lihat Desain
                        </Button>
                      ) : null}
                      <Button
                        href={createTemplateInquiryLink(template.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full px-3"
                      >
                        <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden="true" />
                        Pilih Template
                      </Button>
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
