import {
  CalendarDays,
  Check,
  Gift,
  Heart,
  MapPin,
  MessageCircleHeart,
  Music2,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const checklist = [
  "RSVP Online",
  "Buku Tamu",
  "Galeri Foto",
  "Musik",
  "Google Maps",
  "Amplop Digital",
];

export function HeroSection() {
  return (
    <section id="home" className="overflow-hidden pb-20 pt-12 sm:pb-28 lg:pt-20">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white px-4 py-2 text-sm font-semibold text-gold shadow-sm">
              <Check className="size-4" aria-hidden="true" />
              Satu Janji, Satu Cerita, Satu Momen Bahagia.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl lg:text-7xl">
              Buat Website Undangan Pernikahan Digital yang Elegan
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Buat undangan pernikahan digital dengan mudah hanya dalam beberapa
              menit. Pilih template favorit, sesuaikan dengan cerita cintamu,
              lalu bagikan kepada keluarga dan sahabat.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700">
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
              <Button href="#harga">Buat Sekarang</Button>
              <Button href="/demo/aira-rama" variant="secondary">
                Lihat Demo
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[32rem]">
          <div className="absolute left-0 top-8 hidden rounded-lg border border-gray-100 bg-white p-4 shadow-soft sm:block">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-cream text-gold">
                <Users className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs text-gray-500">RSVP masuk</p>
                <p className="text-lg font-bold text-gray-950">128 tamu</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 right-0 hidden rounded-lg border border-gray-100 bg-white p-4 shadow-soft sm:block">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gray-950 text-gold">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs text-gray-500">Template</p>
                <p className="text-lg font-bold text-gray-950">Aira</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-[min(82vw,22rem)] rounded-[2.2rem] border border-gray-200 bg-gray-950 p-3 shadow-soft">
            <div className="overflow-hidden rounded-[1.7rem] bg-white">
              <div className="h-8 bg-gray-950" />
              <div className="bg-cream px-5 pb-7 pt-6">
                <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-gold/40" />
                <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <div className="grid aspect-[5/3] place-items-center bg-[#F4E9EA]">
                    <div className="grid size-20 place-items-center rounded-full bg-white/85 text-gold shadow-sm">
                      <Heart className="size-8 fill-current" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    The Wedding Of
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-semibold text-gray-950">
                    Aira & Rama
                  </h2>
                    <p className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-gray-600">
                      <CalendarDays className="size-3.5 text-gold" aria-hidden="true" />
                      Sabtu, 27 Juni 2026
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["12", "08", "45"].map((value, index) => (
                    <div key={value} className="rounded-lg bg-white py-3 text-center shadow-sm">
                      <p className="text-lg font-bold text-gray-950">{value}</p>
                      <p className="text-[10px] uppercase text-gray-500">
                        {["Hari", "Jam", "Menit"][index]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <Users className="size-5 text-gold" aria-hidden="true" />
                    <div>
                      <span className="block text-sm font-medium text-gray-700">
                        Konfirmasi Kehadiran
                      </span>
                      <span className="text-xs text-gray-500">128 tamu hadir</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                    <MessageCircleHeart className="size-5 text-gold" aria-hidden="true" />
                    <div>
                      <span className="block text-sm font-medium text-gray-700">
                        Ucapan dan Doa
                      </span>
                      <span className="text-xs text-gray-500">42 pesan terkirim</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="grid place-items-center rounded-lg bg-white p-3 shadow-sm">
                      <MapPin className="size-5 text-gold" aria-hidden="true" />
                    </div>
                    <div className="grid place-items-center rounded-lg bg-white p-3 shadow-sm">
                      <Music2 className="size-5 text-gold" aria-hidden="true" />
                    </div>
                    <div className="grid place-items-center rounded-lg bg-white p-3 shadow-sm">
                      <Gift className="size-5 text-gold" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
