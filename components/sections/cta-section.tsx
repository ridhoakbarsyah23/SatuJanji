import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="overflow-hidden rounded-lg bg-gray-950 px-6 py-14 text-center text-white shadow-soft sm:px-10 lg:px-16">
            <div className="mx-auto grid size-12 place-items-center rounded-lg bg-white/10 text-gold">
              <Sparkles className="size-6" aria-hidden="true" />
            </div>
            <h2 className="mx-auto mt-7 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Siap Membuat Undangan Pernikahan Digital?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
              Mulai dari template elegan, isi detail pernikahan, lalu bagikan
              undangan digital yang indah kepada orang-orang tersayang.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href={createWhatsAppLink(
                  "Halo admin SatuJanji, saya siap membuat undangan pernikahan digital. Bisa dibantu mulai sekarang?",
                )}
                target="_blank"
                rel="noreferrer"
                className="min-w-44"
              >
                Mulai Sekarang
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
