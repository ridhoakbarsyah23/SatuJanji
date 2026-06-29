import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";

const menu = [
  { label: "Home", href: "/#home" },
  { label: "Template", href: "/#template" },
  { label: "Harga", href: "/#harga" },
  { label: "FAQ", href: "/#faq" },
  { label: "Fitur", href: "/fitur" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Cara Kerja", href: "/cara-kerja" },
];

const services = [
  "Undangan digital",
  "RSVP online",
  "Galeri foto",
  "Amplop digital",
];

const whatsappLink = createWhatsAppLink(
  "Halo admin SatuJanji, saya ingin konsultasi undangan pernikahan digital.",
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white text-gray-950">
      <div className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 rounded-lg border border-gray-100 bg-gray-50 p-5 shadow-sm sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold shadow-sm">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Konsultasi gratis
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-gray-950 sm:text-4xl">
              Siap buat undangan digital yang lebih rapi?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
              Ceritakan kebutuhan acara, admin SatuJanji akan bantu pilih paket,
              template, dan fitur yang paling sesuai.
            </p>
          </div>

          <Link
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Konsultasi via WhatsApp
          </Link>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.85fr_1fr]">
          <div>
            <Link href="#home" className="focus-ring inline-flex items-center gap-3 rounded-full">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-white">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold text-gray-950">
                SatuJanji
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
              Platform undangan pernikahan digital untuk membantu pasangan
              menyiapkan informasi acara, RSVP, dan link undangan dalam satu
              pengalaman yang rapi.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Responsif", "Dibantu admin", "Siap dibagikan"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-950">
              Menu
            </h2>
            <div className="mt-5 grid gap-3">
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring inline-flex w-fit rounded-full text-sm text-gray-600 transition hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-950">
              Layanan
            </h2>
            <div className="mt-5 grid gap-3">
              {services.map((item) => (
                <p key={item} className="text-sm text-gray-600">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-950">
              Kontak
            </h2>
            <div className="mt-5 grid gap-3 text-sm text-gray-600">
              <a
                href="mailto:halo@satujanji.id"
                className="focus-ring flex min-w-0 items-center gap-3 break-words rounded-lg transition hover:text-gold"
              >
                <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                halo@satujanji.id
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex min-w-0 items-center gap-3 rounded-lg transition hover:text-gold"
              >
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                +62 813 9027 7240
              </a>
              <p className="flex min-w-0 items-center gap-3">
                <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
                Purwokerto, Jawa Tengah
              </p>
              <a
                href="https://www.instagram.com/satujanji.id"
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex min-w-0 items-center gap-3 rounded-lg transition hover:text-gold"
              >
                <Instagram className="size-4 shrink-0 text-gold" aria-hidden="true" />
                @satujanji.id
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-5">
        <div className="section-shell flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} SatuJanji. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/masuk" className="focus-ring rounded-full hover:text-gold">
              Masuk
            </Link>
            <Link href="/daftar" className="focus-ring rounded-full hover:text-gold">
              Daftar
            </Link>
            <a
              href="https://eldorado-tech.com"
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-full hover:text-gold"
            >
              Developed by Eldorado Tech
            </a>
            <p>Satu Janji, Satu Cerita, Satu Momen Bahagia.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
