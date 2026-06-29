import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Lupa Akses",
  description:
    "Pulihkan akses akun SatuJanji untuk kembali mengelola undangan pernikahan digital.",
};

export default function LupaAksesPage() {
  const recoveryLink = createWhatsAppLink(
    "Halo admin SatuJanji, saya lupa akses akun dan ingin dibantu memulihkan akun.",
  );

  return (
    <AuthShell
      eyebrow="Lupa Akses"
      title="Pulihkan akses akun"
      description="Masukkan email atau nomor WhatsApp yang pernah digunakan. Admin dapat membantu mencocokkan data akun undanganmu."
      footer={
        <>
          Sudah ingat akses akun?{" "}
          <Link href="/masuk" className="font-semibold text-gold hover:text-[#a87f36]">
            Masuk kembali
          </Link>
        </>
      }
    >
      <form className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-gray-700">
          Email akun
          <span className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="nama@email.com"
              className="focus-ring min-h-12 w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm font-normal text-gray-900 outline-none placeholder:text-gray-400"
            />
          </span>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-gray-700">
          Nomor WhatsApp
          <span className="relative">
            <Phone className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="08xxxxxxxxxx"
              className="focus-ring min-h-12 w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm font-normal text-gray-900 outline-none placeholder:text-gray-400"
            />
          </span>
        </label>

        <button
          type="button"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
        >
          Kirim Permintaan Pemulihan
        </button>

        <a
          href={recoveryLink}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-soft transition hover:-translate-y-0.5 hover:border-gold/40"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Hubungi Admin Sekarang
        </a>
      </form>
    </AuthShell>
  );
}
