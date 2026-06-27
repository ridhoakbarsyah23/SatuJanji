"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Template", href: "#template" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const registrationLink = createWhatsAppLink(
    "Halo admin SatuJanji, saya ingin daftar dan membuat undangan pernikahan digital.",
  );
  const loginHelpLink = createWhatsAppLink(
    "Halo admin SatuJanji, saya ingin bertanya tentang akses masuk akun SatuJanji.",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/85 backdrop-blur-xl">
      <nav
        className="section-shell flex min-h-20 items-center justify-between gap-4"
        aria-label="Navigasi utama"
      >
        <Link href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid size-10 place-items-center rounded-full bg-gold text-white shadow-glow">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold text-gray-950">
            SatuJanji
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full text-sm font-medium text-gray-600 transition hover:text-gray-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={loginHelpLink} target="_blank" rel="noreferrer" variant="ghost">
            Masuk
          </Button>
          <Button href={registrationLink} target="_blank" rel="noreferrer">
            Daftar
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full border border-gray-200 bg-white text-gray-900 lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button
                href={loginHelpLink}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                Masuk
              </Button>
              <Button
                href={registrationLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Daftar
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
