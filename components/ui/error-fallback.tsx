"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

type ErrorFallbackProps = {
  reset?: () => void;
};

export function ErrorFallback({ reset }: ErrorFallbackProps) {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-5 py-16 text-ink">
      <section className="w-full max-w-xl rounded-2xl border border-amber-200 bg-white p-7 text-center shadow-soft sm:p-10">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-amber-50 text-amber-700">
          <AlertTriangle className="size-6" aria-hidden="true" />
        </span>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold">
          Terjadi kendala
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-gray-950 sm:text-4xl">
          Halaman belum dapat ditampilkan
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600">
          Tenang, data yang sudah kamu isi tidak otomatis terhapus. Coba muat ulang halaman atau kembali ke beranda.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {reset ? (
            <button
              type="button"
              onClick={reset}
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              Coba Lagi
            </button>
          ) : (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              Muat Ulang
            </button>
          )}
          <Link
            href="/"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-gold/40"
          >
            <Home className="size-4" aria-hidden="true" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}
