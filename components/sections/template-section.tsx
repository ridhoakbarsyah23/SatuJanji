import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { templates } from "@/lib/templates";
import { createTemplateInquiryLink } from "@/lib/whatsapp";

export function TemplateSection() {
  return (
    <section id="template" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Template"
          title="Pilih tampilan yang mudah dibaca tamu"
          description="Template dibuat rapi, responsif, dan siap disesuaikan dengan kebutuhan acara."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => {
            const Icon = template.icon;

            return (
              <Reveal key={template.slug} delay={index * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-gold/25">
                  <div className="bg-cream p-5">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div
                        className="flex min-h-64 flex-col justify-between rounded-md border p-5"
                        style={{
                          borderColor: `${template.accent}33`,
                          background: `linear-gradient(180deg, ${template.accent}14, #ffffff 46%, #fff8f0 100%)`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                            {template.theme}
                          </span>
                          <span
                            className="grid size-9 place-items-center rounded-full text-white"
                            style={{ backgroundColor: template.accent }}
                          >
                            <Icon className="size-4" aria-hidden="true" />
                          </span>
                        </div>

                        <div className="text-center">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                            Preview Template
                          </p>
                          <h3 className="mt-3 break-words font-serif text-3xl font-semibold text-gray-950 sm:text-4xl">
                            {template.name}
                          </h3>
                          <p className="mt-3 text-sm text-gray-500">
                            Informasi acara tampil di sini
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

                    <div className="mt-6">
                      <Button
                        href={createTemplateInquiryLink(template.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        <MessageCircle className="size-4" aria-hidden="true" />
                        Konsultasi Template
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
