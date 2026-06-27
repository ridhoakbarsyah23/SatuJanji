import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    couple: "Naya & Dimas",
    city: "Bandung",
    template: "Sagara",
    message:
      "Undangannya terlihat rapi dan elegan saat dibuka dari HP keluarga. Admin juga cepat bantu revisi detail acara.",
  },
  {
    couple: "Laras & Aditya",
    city: "Yogyakarta",
    template: "Laras",
    message:
      "Kami suka karena tampilannya tetap modern tapi masih terasa hangat. Link undangan mudah dibagikan ke semua tamu.",
  },
  {
    couple: "Aira & Rama",
    city: "Jakarta",
    template: "Aira",
    message:
      "Fitur RSVP dan maps membantu banget. Tamu langsung bisa konfirmasi dan cari lokasi tanpa tanya ulang.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimoni"
          title="Dipilih pasangan yang ingin undangannya terasa personal"
          description="SatuJanji membantu pasangan membuat undangan digital yang mudah dibagikan, enak dibaca, dan tetap terasa istimewa."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.couple} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-lg border border-gray-100 bg-white p-7 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-1 text-gold" aria-label="Rating 5 bintang">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="size-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote className="size-7 text-gold/40" aria-hidden="true" />
                </div>

                <p className="mt-6 flex-1 text-sm leading-7 text-gray-600">
                  {testimonial.message}
                </p>

                <div className="mt-7 border-t border-gray-100 pt-5">
                  <p className="font-serif text-2xl font-semibold text-gray-950">
                    {testimonial.couple}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {testimonial.city} - Template {testimonial.template}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
