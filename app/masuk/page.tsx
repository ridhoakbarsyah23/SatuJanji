import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { FormAlert } from "@/components/auth/form-alert";
import { PasswordField } from "@/components/auth/password-field";

export const metadata: Metadata = {
  title: "Masuk",
  description: "Masuk ke akun SatuJanji untuk mengelola undangan pernikahan digital.",
};

type MasukPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function MasukPage({ searchParams }: MasukPageProps) {
  const { error } = await searchParams;

  return (
    <AuthShell
      eyebrow="Masuk"
      title="Selamat datang kembali"
      description="Gunakan akun SatuJanji untuk melanjutkan pengaturan undangan atau membuka dashboard admin."
      footer={
        <>
          Belum punya akun?{" "}
          <Link href="/daftar" className="font-semibold text-gold hover:text-[#a87f36]">
            Daftar dulu
          </Link>
        </>
      }
    >
      {error === "customer-not-ready" ? (
        <FormAlert
          type="error"
          title="Login customer belum aktif"
          message="Akun customer sedang disiapkan. Jika kamu admin, gunakan email dan password admin di form ini."
        />
      ) : null}

      {error === "invalid" ? (
        <FormAlert
          type="error"
          title="Login gagal"
          message="Email atau password tidak sesuai."
        />
      ) : null}

      <form action="/api/login" method="post" className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-gray-700">
          Email
          <span className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="nama@email.com"
              required
              className="focus-ring min-h-12 w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm font-normal text-gray-900 outline-none placeholder:text-gray-400"
            />
          </span>
        </label>

        <PasswordField />

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 font-medium text-gray-600">
            <input type="checkbox" className="size-4 rounded border-gray-300 text-gold" />
            Ingat saya
          </label>
          <Link href="/lupa-akses" className="font-semibold text-gold hover:text-[#a87f36]">
            Lupa akses?
          </Link>
        </div>

        <button
          type="submit"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
        >
          Masuk
        </button>
      </form>

    </AuthShell>
  );
}
