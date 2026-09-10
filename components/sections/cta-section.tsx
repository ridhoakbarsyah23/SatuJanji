import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { createWhatsAppLink } from "@/lib/services/whatsapp";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="cta-glow relative overflow-hidden rounded-[32px] bg-gray-950 px-5 py-14 text-center text-white shadow-[0_30px_90px_rgba(23,23,23,0.18)] sm:px-10 sm:py-20 lg:px-16">
            <div className="relative mx-auto grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-gold">
              <Sparkles className="size-6" aria-hidden="true" />
            </div>
            <h2 className="relative mx-auto mt-7 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Siap Mengabadikan Ceritamu Bersama SatuJanji?
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Ceritakan rencana hari bahagiamu. Kami akan membantu menyiapkan
              undangan digital yang personal, indah, dan mudah dibagikan.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button
                href={createWhatsAppLink(
                  "Halo tim SatuJanji, saya ingin berkonsultasi untuk membuat undangan pernikahan digital.",
                )}
                target="_blank"
                rel="noreferrer"
                className="min-w-44"
              >
                Konsultasi Sekarang
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
