"use client";

import { LogOut, ShieldAlert, X } from "lucide-react";
import { motion } from "framer-motion";
import { ModalLayer } from "@/components/admin/modal-layer";
import type { ReactNode } from "react";
import { useState } from "react";

type LogoutConfirmDialogProps = {
  className?: string;
  children?: ReactNode;
  onConfirm?: () => void;
};

export function LogoutConfirmDialog({
  className,
  children,
  onConfirm,
}: LogoutConfirmDialogProps) {
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    onConfirm?.();
    window.location.assign("/api/admin/logout");
  };

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children ?? (
          <>
            <LogOut className="size-4" aria-hidden="true" />
            Keluar
          </>
        )}
      </button>

        {open ? (
          <ModalLayer labelledBy="admin-logout-title" onClose={() => { if (!loggingOut) setOpen(false); }}>
          <motion.div
            className="fixed inset-0 grid place-items-center overflow-y-auto bg-[#111827]/45 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.section
              className="max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-[20px] border border-[#ECE8E2] bg-white p-5 text-[#111827] shadow-[0_24px_70px_rgba(17,24,39,0.18)]"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-red-50 text-[#EF4444]">
                  <ShieldAlert className="size-6" aria-hidden="true" />
                </span>
                <button
                  type="button"
                  className="focus-ring grid size-9 shrink-0 place-items-center rounded-xl text-[#6B7280] hover:bg-[#F7F3EE] hover:text-[#111827]"
                  aria-label="Tutup konfirmasi keluar"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>

              <h2 id="admin-logout-title" className="mt-5 text-lg font-semibold">
                Keluar dari dashboard?
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                Sesi admin akan diakhiri. Kamu perlu login lagi untuk membuka
                Dashboard SatuJanji.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="focus-ring inline-flex min-h-11 items-center justify-center rounded-xl border border-[#ECE8E2] bg-white px-4 text-sm font-semibold text-[#111827] transition hover:bg-[#F7F3EE]"
                  onClick={() => setOpen(false)}
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="focus-ring inline-flex min-h-11 items-center justify-center rounded-xl bg-[#EF4444] px-4 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-wait disabled:opacity-70"
                  disabled={loggingOut}
                  onClick={handleLogout}
                >
                  {loggingOut ? "Keluar..." : "Ya, keluar"}
                </button>
              </div>
            </motion.section>
          </motion.div>
          </ModalLayer>
        ) : null}
    </>
  );
}
