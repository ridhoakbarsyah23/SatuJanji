"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Template", href: "/#template" },
  { label: "Fitur", href: "/#fitur" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Harga", href: "/#harga" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/template/") ||
    pathname.startsWith("/undangan/")
  ) {
    return null;
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100/70 bg-white/85 shadow-[0_8px_30px_rgba(23,23,23,0.04)] backdrop-blur-xl">
        <nav
          className="section-shell flex min-h-20 items-center justify-between gap-4"
          aria-label="Navigasi utama"
        >
          <Link href="/#home" className="focus-ring rounded-lg">
            <Image
              src="/logo.svg"
              alt="SatuJanji"
              width={196}
              height={60}
              priority
              unoptimized
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-gray-100 bg-gray-50/80 p-1.5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-3.5 py-2 text-sm font-semibold text-gray-600 transition hover:bg-white hover:text-gray-950 hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/daftar">
              Konsultasi
              <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
            </Button>
          </div>

          <button
            type="button"
            className="focus-ring grid size-11 place-items-center rounded-full border border-gray-200 bg-white text-gray-900 lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </nav>

        {open ? (
          <div className="fixed inset-x-0 top-20 z-[60] border-t border-gray-100 bg-white/98 shadow-soft backdrop-blur-xl lg:hidden">
            <div className="section-shell max-h-[calc(100svh-5rem)] overflow-y-auto py-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                  className="focus-ring flex min-h-12 items-center justify-between rounded-2xl px-4 text-sm font-semibold text-gray-800 transition hover:bg-cream hover:text-gray-950"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}<ArrowRight className="size-4 text-gray-300" strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                ))}
              </div>

              <div className="mt-4 grid gap-3 border-t border-gray-100 pt-4">
                <Button href="/daftar" onClick={() => setOpen(false)}>
                  Konsultasi
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
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
