"use client";

import { motion } from "framer-motion";

export function WelcomeCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[20px] border border-[#ECE8E2] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)] sm:p-8"
    >
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-[#C79A4A]">Halo, Admin</p>
          <h2
            className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal text-[#111827] sm:text-4xl"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Selamat datang kembali di Dashboard SatuJanji.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B7280] sm:text-base">
            Kelola template, paket, FAQ, dan calon pelanggan dengan lebih mudah.
          </p>
        </div>

        <div className="hidden justify-end lg:flex">
          <WeddingLineArt />
        </div>
      </div>
    </motion.section>
  );
}

function WeddingLineArt() {
  return (
    <svg
      viewBox="0 0 320 220"
      className="h-48 w-72 text-[#C79A4A]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M96 156c18-28 44-42 78-42s60 14 78 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M106 157h136c8 0 15 7 15 15v18H91v-18c0-8 7-15 15-15z"
        stroke="#111827"
        strokeWidth="2"
        opacity="0.22"
      />
      <path
        d="M160 45c18 0 33 15 33 33 0 33-33 48-33 48s-33-15-33-48c0-18 15-33 33-33z"
        stroke="#111827"
        strokeWidth="2"
        opacity="0.28"
      />
      <path
        d="M160 83c10-16 26-24 48-24 23 0 42 13 52 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.32"
      />
      <path
        d="M160 83c-10-16-26-24-48-24-23 0-42 13-52 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.32"
      />
      <path
        d="M233 42c11-3 18-10 21-21 3 11 10 18 21 21-11 3-18 10-21 21-3-11-10-18-21-21z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}
