"use client";

import { LogOut, ShieldAlert, X } from "lucide-react";
import { useState } from "react";

export function LogoutButton() {
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    window.location.assign("/api/admin/logout");
  };

  return (
    <>
      <button
        type="button"
        className="focus-ring group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gold/20 hover:bg-cream hover:text-gray-950 hover:shadow-soft"
        onClick={() => setOpen(true)}
      >
        <span className="grid size-8 place-items-center rounded-full bg-cream text-gold transition group-hover:bg-white">
          <LogOut className="size-4" aria-hidden="true" />
        </span>
        Keluar
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-gray-950/45 px-5 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="logout-title"
        >
          <section className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-5 text-gray-950 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-red-50 text-red-700">
                <ShieldAlert className="size-5" aria-hidden="true" />
              </span>
              <button
                type="button"
                className="focus-ring grid size-9 shrink-0 place-items-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                aria-label="Tutup konfirmasi logout"
                onClick={() => setOpen(false)}
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <h2 id="logout-title" className="mt-5 text-lg font-semibold text-gray-950">
              Keluar dari dashboard?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Sesi admin akan diakhiri dan kamu perlu login lagi untuk membuka
              dashboard.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-800 transition hover:border-gold/20 hover:bg-cream hover:text-gray-950"
                onClick={() => setOpen(false)}
              >
                Batal
              </button>
              <button
                type="button"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-gray-950 px-4 text-sm font-semibold text-white transition hover:bg-gold disabled:cursor-wait disabled:opacity-70"
                disabled={loggingOut}
                onClick={handleLogout}
              >
                {loggingOut ? "Keluar..." : "Keluar"}
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
