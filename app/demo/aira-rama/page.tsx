import type { Metadata } from "next";
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock3,
  Gift,
  Heart,
  HeartHandshake,
  Home,
  MapPin,
  MessageCircle,
  Music2,
  Navigation,
  Send,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Demo Undangan Aira & Rama - SatuJanji",
  description:
    "Contoh website undangan pernikahan digital SatuJanji dengan RSVP, galeri, love story, lokasi, dan buku tamu.",
};

const eventDetails = [
  {
    title: "Akad Nikah",
    date: "Sabtu, 27 Juni 2026",
    time: "09.00 WIB",
    place: "Masjid Istiqlal, Jakarta",
  },
  {
    title: "Resepsi",
    date: "Sabtu, 27 Juni 2026",
    time: "11.00 - 14.00 WIB",
    place: "The Langham Ballroom, Jakarta",
  },
];

const stories = [
  {
    year: "2021",
    title: "Pertemuan Pertama",
    description:
      "Berawal dari obrolan singkat setelah acara kampus, cerita kami tumbuh perlahan menjadi kebiasaan saling mencari.",
  },
  {
    year: "2023",
    title: "Lamaran",
    description:
      "Di hadapan keluarga, kami mengikat niat untuk melangkah bersama dengan restu dan doa orang-orang tercinta.",
  },
  {
    year: "2026",
    title: "Hari Bahagia",
    description:
      "Dengan penuh syukur, kami mengundang keluarga dan sahabat untuk menjadi bagian dari momen sakral ini.",
  },
];

const gallery = [
  { label: "Prewedding", accent: "bg-[#E9F4EE]" },
  { label: "Engagement", accent: "bg-cream" },
  { label: "Family", accent: "bg-[#F4E9EA]" },
  { label: "Reception", accent: "bg-[#EEF0F5]" },
];

const guestMessages = [
  {
    name: "Dinda",
    message: "Selamat Aira dan Rama. Semoga menjadi keluarga yang penuh berkah.",
  },
  {
    name: "Bagas",
    message: "Bahagia selalu. Semoga acaranya lancar sampai hari H.",
  },
];

export default function AiraRamaDemoPage() {
  const adminLink = createWhatsAppLink(
    "Halo admin SatuJanji, saya sudah melihat demo undangan Aira & Rama dan ingin membuat undangan seperti ini.",
  );

  return (
    <main className="bg-white text-gray-950">
      <section className="relative overflow-hidden bg-cream">
        <div className="section-shell min-h-screen py-8 sm:py-10">
          <nav className="flex items-center justify-between gap-4" aria-label="Demo navigation">
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm"
            >
              <Home className="size-4" aria-hidden="true" />
              SatuJanji
            </Link>
            <a
              href={adminLink}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white shadow-glow"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Buat Seperti Ini
            </a>
          </nav>

          <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gold shadow-sm">
                  <Sparkles className="size-4" aria-hidden="true" />
                  Demo Undangan Digital
                </p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                  The Wedding Of
                </p>
                <h1 className="mt-4 font-serif text-6xl font-semibold leading-none text-gray-950 sm:text-7xl lg:text-8xl">
                  Aira <span className="text-gold">&</span> Rama
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i
                  untuk hadir dan memberikan doa restu pada hari bahagia kami.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#rsvp"
                    className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    Isi RSVP
                  </a>
                  <a
                    href="#lokasi"
                    className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-soft transition hover:-translate-y-0.5 hover:border-gold/40"
                  >
                    <Navigation className="size-4" aria-hidden="true" />
                    Lihat Lokasi
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mx-auto max-w-md rounded-[2rem] border border-white/70 bg-white p-4 shadow-soft">
                <div className="overflow-hidden rounded-[1.5rem] bg-gray-950 text-white">
                  <div className="p-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Save The Date
                    </p>
                    <h2 className="mt-4 font-serif text-5xl font-semibold">
                      27.06.2026
                    </h2>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[
                        ["120", "Hari"],
                        ["08", "Jam"],
                        ["45", "Menit"],
                      ].map(([value, label]) => (
                        <div key={label} className="rounded-lg bg-white/10 py-4">
                          <p className="text-2xl font-bold">{value}</p>
                          <p className="text-xs text-white/60">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-white/10">
                    {["Akad", "Resepsi", "RSVP", "Maps"].map((item) => (
                      <div key={item} className="bg-gray-950 p-5 text-center text-sm font-semibold">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Bride & Groom
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Dua hati, satu janji
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              ["Aira Nadhifa", "Putri dari Bapak Arman & Ibu Lestari"],
              ["Rama Pradipta", "Putra dari Bapak Surya & Ibu Ratih"],
            ].map(([name, family], index) => (
              <Reveal key={name} delay={index * 0.08}>
                <article className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-soft">
                  <div className="mx-auto grid size-24 place-items-center rounded-full bg-cream text-gold">
                    <Heart className="size-9" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl font-semibold">{name}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{family}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Detail Acara
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Waktu dan tempat
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {eventDetails.map((event, index) => (
              <Reveal key={event.title} delay={index * 0.08}>
                <article className="rounded-lg bg-white p-7 shadow-soft">
                  <CalendarDays className="size-8 text-gold" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-semibold">{event.title}</h3>
                  <div className="mt-5 grid gap-3 text-sm text-gray-600">
                    <p className="flex items-center gap-3">
                      <CalendarDays className="size-4 text-gold" aria-hidden="true" />
                      {event.date}
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock3 className="size-4 text-gold" aria-hidden="true" />
                      {event.time}
                    </p>
                    <p className="flex items-center gap-3">
                      <MapPin className="size-4 text-gold" aria-hidden="true" />
                      {event.place}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Love Story
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Perjalanan kami
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5">
            {stories.map((story, index) => (
              <Reveal key={story.title} delay={index * 0.08}>
                <article className="rounded-lg border border-gray-100 bg-white p-6 shadow-soft sm:flex sm:items-start sm:gap-6">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gray-950 font-serif text-xl font-semibold text-gold">
                    {story.year.slice(2)}
                  </span>
                  <div className="mt-5 sm:mt-0">
                    <p className="text-sm font-semibold text-gold">{story.year}</p>
                    <h3 className="mt-1 text-xl font-semibold">{story.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {story.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Galeri
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Momen pilihan
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <figure className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-soft">
                  <div className={`grid aspect-[4/5] place-items-center ${item.accent}`}>
                    <Camera className="size-10 text-gold" aria-hidden="true" />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-semibold text-gray-700">
                    {item.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="lokasi" className="bg-cream py-20 sm:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Lokasi
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
                The Langham Ballroom, Jakarta
              </h2>
              <p className="mt-5 text-base leading-8 text-gray-600">
                Jl. Jend. Sudirman Kav. 52-53, Senayan, Jakarta Selatan.
                Tamu dapat membuka rute lokasi langsung melalui Google Maps.
              </p>
              <div className="mt-7">
                <Button href="https://maps.google.com" target="_blank" rel="noreferrer">
                  <Navigation className="size-4" aria-hidden="true" />
                  Buka Maps
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-lg bg-white p-5 shadow-soft">
              <div className="grid min-h-80 place-items-center rounded-lg bg-gray-100 text-center">
                <div>
                  <MapPin className="mx-auto size-12 text-gold" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold text-gray-700">
                    Preview Google Maps
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="rsvp" className="py-20 sm:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-lg border border-gray-100 bg-white p-7 shadow-soft">
              <UsersRound className="size-8 text-gold" aria-hidden="true" />
              <h2 className="mt-5 font-serif text-4xl font-semibold">RSVP Online</h2>
              <div className="mt-6 grid gap-4">
                {["Nama Tamu", "Jumlah Kehadiran", "Konfirmasi Kehadiran"].map((label) => (
                  <label key={label} className="grid gap-2 text-sm font-semibold text-gray-700">
                    {label}
                    <span className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-left font-normal text-gray-400">
                      Contoh input {label.toLowerCase()}
                    </span>
                  </label>
                ))}
                <button
                  type="button"
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
                >
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  Kirim Konfirmasi
                </button>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-lg border border-gray-100 bg-white p-7 shadow-soft">
              <HeartHandshake className="size-8 text-gold" aria-hidden="true" />
              <h2 className="mt-5 font-serif text-4xl font-semibold">Buku Tamu</h2>
              <div className="mt-6 grid gap-4">
                {guestMessages.map((guest) => (
                  <div key={guest.name} className="rounded-lg bg-cream p-4">
                    <p className="font-semibold text-gray-950">{guest.name}</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {guest.message}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-950 py-20 text-white sm:py-28">
        <div className="section-shell text-center">
          <Reveal>
            <Music2 className="mx-auto size-10 text-gold" aria-hidden="true" />
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">
              Jadikan momenmu terasa personal bersama SatuJanji
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
              Demo ini bisa dikembangkan sesuai warna, cerita, foto, lokasi,
              dan kebutuhan undangan pernikahanmu.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={adminLink} target="_blank" rel="noreferrer">
                <Gift className="size-4" aria-hidden="true" />
                Buat Undangan Saya
              </Button>
              <Button href="/" variant="secondary">
                Kembali ke Landing
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
