"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Template", href: "/#template" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Fitur", href: "/#fitur" },
  { label: "Harga", href: "/#harga" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-xl">
      <nav
        className="section-shell flex min-h-20 items-center justify-between gap-4"
        aria-label="Navigasi utama"
      >
        <Link href="/#home" className="focus-ring flex items-center gap-3 rounded-full">
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
          <Button href="/masuk" variant="ghost">
            Masuk
          </Button>
          <Button href="/daftar">
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
        <div className="fixed inset-x-0 top-20 z-[60] border-t border-gray-100 bg-white shadow-soft lg:hidden">
          <div className="section-shell max-h-[calc(100svh-5rem)] overflow-y-auto py-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring flex min-h-12 items-center rounded-lg px-4 text-sm font-semibold text-gray-800 transition hover:bg-cream hover:text-gray-950"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
              <Button href="/masuk" variant="secondary" onClick={() => setOpen(false)}>
                Masuk
              </Button>
              <Button href="/daftar" onClick={() => setOpen(false)}>
                Daftar
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {open ? (
        <button
          type="button"
          className="fixed inset-0 top-20 z-[55] bg-gray-950/20 lg:hidden"
          aria-label="Tutup menu navigasi"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
