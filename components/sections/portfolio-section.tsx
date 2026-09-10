import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/ui/icon-badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { systemPreviewItems } from "@/lib/site-content";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pengalaman Undangan"
          title="Setiap detail hadir dalam pengalaman yang utuh"
          description="Dari informasi acara hingga konfirmasi tamu, setiap bagian disusun agar mudah ditemukan dan nyaman dinikmati."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {systemPreviewItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="group flex h-full flex-col rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_14px_45px_rgba(23,23,23,0.055)] transition duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_24px_65px_rgba(23,23,23,0.09)] sm:p-7">
                  <IconBadge icon={Icon} className="transition group-hover:-translate-y-0.5" />
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
              "Halo tim SatuJanji, saya ingin mengetahui proses pembuatan undangan digital.",
            )}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Konsultasikan Undangan
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
