"use client";

import { ArrowRight, BookHeart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function WelcomeCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[28px] bg-[#171827] p-5 text-white shadow-[0_24px_70px_rgba(23,24,39,0.2)] sm:p-7 xl:p-9"
    >
      <div className="absolute -right-20 -top-24 size-72 rounded-full bg-[#D6AE62]/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-28 right-1/4 size-64 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-[#E7C887]">
            <Sparkles className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
            Selamat datang kembali
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl xl:text-[2.7rem]">
            Kelola setiap cerita istimewa dari satu tempat.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Buat undangan, periksa detail acara, dan tanggapi permintaan pelanggan dengan alur yang lebih sederhana.
          </p>
          <div className="mt-7 flex flex-col gap-3 min-[430px]:flex-row">
            <Link href="/admin/undangan/baru" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#D6AE62] px-5 text-sm font-bold text-[#171827] transition hover:-translate-y-0.5 hover:bg-[#E7C887]">
              <BookHeart className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              Buat undangan
            </Link>
            <Link href="/admin/undangan" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.1]">
              Lihat semua undangan <ArrowRight className="size-4" strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hidden size-44 place-items-center rounded-full border border-white/10 bg-white/[0.04] lg:grid xl:size-52">
          <div className="grid size-28 place-items-center rounded-full border border-[#D6AE62]/30 bg-[#D6AE62]/10 text-[#E7C887] xl:size-32">
            <BookHeart className="size-12" strokeWidth={1.25} aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
