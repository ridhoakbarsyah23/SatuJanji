import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioItems } from "@/lib/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Contoh undangan yang siap dibagikan ke tamu"
          description="Lihat bagaimana template SatuJanji bisa terasa berbeda untuk setiap pasangan, mulai dari tampilan, cerita, sampai fitur interaktifnya."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.couple} delay={index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-gold/25">
                <div
                  className="relative min-h-72 p-5"
                  style={{
                    background: `linear-gradient(160deg, ${item.accent}22 0%, #fff8f0 48%, #ffffff 100%)`,
                  }}
                >
                  <div className="absolute right-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                    Template {item.template}
                  </div>

                  <div className="flex h-full min-h-60 flex-col justify-end rounded-lg border border-white/80 bg-white/72 p-6 shadow-sm backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      The Wedding Of
                    </p>
                    <h3 className="mt-3 font-serif text-4xl font-semibold text-gray-950">
                      {item.couple}
                    </h3>
                    <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="size-4 text-gold" aria-hidden="true" />
                      {item.city} - {item.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-7 text-gray-600">{item.description}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {item.stats.map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-cream p-4">
                        <p className="text-2xl font-bold text-gray-950">{stat.value}</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Button href={item.href} variant="secondary">
                      Lihat Contoh
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Button>
                    <Button
                      href={createWhatsAppLink(
                        `Halo admin SatuJanji, saya tertarik membuat undangan seperti contoh ${item.couple}.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      Tanya
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
