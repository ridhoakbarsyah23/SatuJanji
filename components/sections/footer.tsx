import {
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/services/whatsapp";

const menu = [
  { label: "Template", href: "/#template" },
  { label: "Fitur", href: "/#fitur" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Harga", href: "/#harga" },
  { label: "Portfolio", href: "/portfolio" },
];

const whatsappLink = createWhatsAppLink(
  "Halo tim SatuJanji, saya ingin berkonsultasi mengenai undangan pernikahan digital.",
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-[#FCFBF8] text-gray-950">
      <div className="section-shell py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-lg">
            <Link
              href="/#home"
              className="focus-ring inline-flex items-center gap-3 rounded-xl"
            >
              <span className="grid size-10 place-items-center rounded-2xl border border-gold/15 bg-white text-gold shadow-sm">
                <Sparkles className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="font-serif text-2xl font-semibold">SatuJanji</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Undangan digital yang membantu setiap cerita istimewa tampil
              indah, personal, dan mudah dibagikan.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-gray-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gold"
          >
            <MessageCircle className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
            Konsultasi WhatsApp
          </a>
        </div>

        <div className="mt-9 flex flex-col gap-6 border-t border-gray-200/80 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Navigasi footer">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md text-sm font-medium text-gray-600 transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:halo@satujanji.id"
              className="focus-ring grid size-10 place-items-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-gold/30 hover:text-gold"
              aria-label="Kirim email ke SatuJanji"
            >
              <Mail className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/satujanji.id"
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid size-10 place-items-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-gold/30 hover:text-gold"
              aria-label="Buka Instagram SatuJanji"
            >
              <Instagram className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} SatuJanji. Seluruh hak dilindungi.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/masuk" className="focus-ring rounded-md transition hover:text-gold">
              Akses Pengelola
            </Link>
            <a
              href="https://eldorado-tech.com"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1 rounded-md transition hover:text-gold"
            >
              Eldorado Tech
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
