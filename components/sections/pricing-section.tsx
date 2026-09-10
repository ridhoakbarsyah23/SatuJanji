import { Check, Crown, Gem, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/ui/icon-badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPackageInquiryLink, createWhatsAppLink } from "@/lib/whatsapp";

const plans = [
  {
    name: "Basic",
    description: "Untuk undangan digital sederhana yang tetap elegan.",
    icon: Sparkles,
    features: ["1 template premium", "RSVP online", "Google Maps", "Masa aktif 3 bulan"],
    highlighted: false,
  },
  {
    name: "Premium",
    description: "Paket favorit dengan fitur lengkap untuk hari bahagia.",
    icon: Crown,
    features: [
      "Semua fitur Basic",
      "Galeri foto",
      "Buku tamu",
      "Musik latar",
      "Amplop digital",
    ],
    highlighted: true,
  },
  {
    name: "Exclusive",
    description: "Untuk pengalaman undangan yang lebih personal dan eksklusif.",
    icon: Gem,
    features: [
      "Semua fitur Premium",
      "Custom warna",
      "Love story lengkap",
      "Prioritas bantuan",
      "Masa aktif 12 bulan",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="harga" className="relative overflow-hidden py-20 sm:py-28">
      <div className="section-orb section-orb-left" aria-hidden="true" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pilihan Paket"
          title="Pilih layanan sesuai kebutuhan hari bahagiamu"
          description="Ceritakan kebutuhan acaramu. Tim SatuJanji akan membantu memilih paket, fitur, dan template yang paling sesuai."
        />

        <Reveal className="mx-auto mt-8 flex max-w-2xl justify-center">
          <Button
            href={createWhatsAppLink(
              "Halo tim SatuJanji, saya ingin berkonsultasi mengenai paket undangan pernikahan digital.",
            )}
            target="_blank"
            rel="noreferrer"
            className="w-full min-[380px]:w-auto min-[380px]:min-w-52"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Konsultasi Gratis
          </Button>
        </Reveal>

        <div className="relative mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Reveal key={plan.name} delay={index * 0.08}>
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 shadow-[0_18px_55px_rgba(23,23,23,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(23,23,23,0.12)] sm:p-7 ${
                    plan.highlighted
                      ? "border-gold bg-gray-950 text-white lg:-translate-y-3 lg:hover:-translate-y-4"
                      : "border-gray-100 bg-white text-gray-950"
                  }`}
                >
                  {plan.highlighted ? (
                    <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-glow">
                      Terpopuler
                    </span>
                  ) : null}
                  <IconBadge icon={Icon} variant={plan.highlighted ? "dark" : "light"} />
                  <h3 className="mt-7 text-xl font-semibold">{plan.name}</h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      plan.highlighted ? "text-white/70" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <p
                    className={`mt-6 rounded-lg px-4 py-3 text-sm font-semibold ${
                      plan.highlighted
                        ? "bg-white/10 text-white"
                        : "bg-cream text-gray-900"
                    }`}
                  >
                    Penawaran disesuaikan dengan kebutuhan acara
                  </p>
                  <ul className="mt-7 grid gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <span
                          className={`grid size-5 shrink-0 place-items-center rounded-full ${
                            plan.highlighted
                              ? "bg-gold text-white"
                              : "bg-gold/10 text-gold"
                          }`}
                        >
                          <Check className="size-3.5" strokeWidth={2} aria-hidden="true" />
                        </span>
                        <span className={plan.highlighted ? "text-white/80" : "text-gray-700"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={createPackageInquiryLink(plan.name)}
                    target="_blank"
                    rel="noreferrer"
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Pilih Paket Ini
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
