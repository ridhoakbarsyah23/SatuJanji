import {
  Camera,
  HeartHandshake,
  MapPinned,
  MessageSquareHeart,
  Music,
  UsersRound,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "RSVP Online",
    description: "Pantau jumlah tamu yang akan hadir secara praktis dari dashboard.",
    icon: UsersRound,
  },
  {
    title: "Buku Tamu",
    description: "Kumpulkan ucapan, doa, dan pesan dari keluarga serta sahabat.",
    icon: MessageSquareHeart,
  },
  {
    title: "Galeri Foto",
    description: "Tampilkan momen prewedding dan kenangan terbaik dalam layout elegan.",
    icon: Camera,
  },
  {
    title: "Love Story",
    description: "Ceritakan perjalanan cinta dengan timeline yang rapi dan personal.",
    icon: HeartHandshake,
  },
  {
    title: "Google Maps",
    description: "Bantu tamu menemukan lokasi akad dan resepsi melalui peta digital.",
    icon: MapPinned,
  },
  {
    title: "Musik",
    description: "Tambahkan lagu pilihan untuk menciptakan suasana yang lebih hangat.",
    icon: Music,
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Fitur"
          title="Detail kecil yang membuat undangan terasa lengkap"
          description="Setiap fitur dirancang agar pasangan mudah mengatur undangan, dan tamu mudah menikmati informasinya."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.05}>
                <article className="group h-full rounded-lg border border-gray-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/25">
                  <div className="flex items-start gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-cream text-gold transition group-hover:bg-gold group-hover:text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-950">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {feature.description}
                      </p>
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
