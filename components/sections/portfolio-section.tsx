import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { systemPreviewItems } from "@/lib/site-content";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Gambaran sederhana sistem SatuJanji"
          description="Fokus utama sistem adalah membantu pasangan mengubah data acara menjadi halaman undangan yang jelas, rapi, dan mudah dibagikan."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {systemPreviewItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="flex h-full flex-col rounded-lg border border-gray-100 bg-white p-7 shadow-soft">
                  <div className="grid size-12 place-items-center rounded-lg bg-cream text-gold">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-8 flex max-w-xl justify-center">
          <Button
            href={createWhatsAppLink(
              "Halo admin SatuJanji, saya ingin memahami cara kerja sistem undangan digital SatuJanji.",
            )}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Tanya Cara Kerja
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
