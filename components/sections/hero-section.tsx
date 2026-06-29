import { Check, ClipboardList, Link2, PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { heroHighlights } from "@/lib/site-content";

const heroSteps = [
  { label: "Pilih template yang sesuai", icon: PanelsTopLeft },
  { label: "Lengkapi informasi acara", icon: ClipboardList },
  { label: "Bagikan link ke tamu", icon: Link2 },
];

export function HeroSection() {
  return (
    <section id="home" className="overflow-hidden pb-20 pt-12 sm:pb-28 lg:pt-20">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white px-4 py-2 text-sm font-semibold text-gold shadow-sm">
              <Check className="size-4" aria-hidden="true" />
              Satu Janji, satu halaman undangan.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-balance-safe max-w-4xl font-serif text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl lg:text-7xl">
              Buat undangan digital yang jelas dan mudah dibagikan
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              SatuJanji membantu pasangan menyiapkan halaman undangan yang rapi:
              pilih template, isi data acara, lalu bagikan link ke tamu.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 min-[380px]:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item} className="flex min-w-0 items-center gap-2 text-sm font-medium text-gray-700">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#harga">Mulai Konsultasi</Button>
              <Button href="#template" variant="secondary">
                Lihat Template
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto w-full max-w-[32rem]">
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-soft sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Alur Sistem
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950">
              Dari data acara menjadi link undangan.
            </h2>
            <div className="mt-7 grid gap-4">
              {heroSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-4 rounded-lg bg-cream/70 p-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white text-gold shadow-sm">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                        Langkah {index + 1}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-gray-950">
                        {step.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
