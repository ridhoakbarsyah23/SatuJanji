import { Instagram, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Link from "next/link";

const menu = [
  { label: "Home", href: "#home" },
  { label: "Template", href: "#template" },
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
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
            Platform undangan pernikahan digital yang elegan, modern, dan mudah
            digunakan untuk merayakan satu janji terindah.
          </p>
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
                className="focus-ring rounded-full text-sm text-gray-600 transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-950">
            Kontak
          </h2>
          <div className="mt-5 grid gap-3 text-sm text-gray-600">
            <p className="flex min-w-0 items-center gap-3 break-words">
              <Mail className="size-4 text-gold" aria-hidden="true" />
              halo@satujanji.id
            </p>
            <p className="flex min-w-0 items-center gap-3">
              <Phone className="size-4 text-gold" aria-hidden="true" />
              +62 813 9027 7240
            </p>
            <p className="flex min-w-0 items-center gap-3">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              Jakarta, Indonesia
            </p>
            <p className="flex min-w-0 items-center gap-3">
              <Instagram className="size-4 text-gold" aria-hidden="true" />
              @satujanji.id
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-5">
        <div className="section-shell flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 SatuJanji. All rights reserved.</p>
          <p>Satu Janji, Satu Cerita, Satu Momen Bahagia.</p>
        </div>
      </div>
    </footer>
  );
}
