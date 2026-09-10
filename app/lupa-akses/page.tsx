import type { Metadata } from "next";
import { MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { createWhatsAppLink } from "@/lib/services/whatsapp";

export const metadata: Metadata = {
  title: "Pemulihan Akses",
  description:
    "Pulihkan akses akun SatuJanji untuk kembali mengelola undangan pernikahan digital.",
};

export default function LupaAksesPage() {
  const recoveryLink = createWhatsAppLink(
    "Halo tim SatuJanji, saya memerlukan bantuan untuk memulihkan akses pengelola.",
  );

  return (
    <AuthShell
      eyebrow="Pemulihan Akses"
      title="Kami bantu pulihkan aksesmu"
      description="Hubungi tim SatuJanji melalui WhatsApp untuk memulai verifikasi identitas dan memulihkan akses pengelola."
      footer={
        <>
          Sudah ingat kredensial?{" "}
          <Link href="/masuk" className="font-semibold text-gold hover:text-[#a87f36]">
            Masuk kembali
          </Link>
        </>
      }
    >
      <div className="mt-8 grid gap-5">
        <div className="rounded-2xl border border-gold/15 bg-cream/70 p-5">
          <span className="grid size-11 place-items-center rounded-2xl bg-white text-gold shadow-sm">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-semibold text-gray-950">Verifikasi secara aman</h3>
          <p className="mt-2 text-sm leading-7 text-gray-600">
            Siapkan email pengelola dan nomor WhatsApp yang terdaftar. Tim kami akan mencocokkan informasi sebelum membantu memulihkan akses.
          </p>
        </div>
        <a
          href={recoveryLink}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Mulai Pemulihan via WhatsApp
        </a>
      </div>
    </AuthShell>
  );
}
