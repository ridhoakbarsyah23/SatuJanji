import type { Metadata } from "next";
import { CalendarDays, Mail, Phone, UserRound } from "lucide-react";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { FormAlert } from "@/components/auth/form-alert";

export const metadata: Metadata = {
  title: "Konsultasi Undangan",
  description: "Ceritakan rencana hari bahagiamu dan temukan layanan undangan digital yang paling sesuai bersama SatuJanji.",
};

type DaftarPageProps = {
  searchParams: Promise<{
    error?: string;
    success?: string;
  }>;
};

export default async function DaftarPage({ searchParams }: DaftarPageProps) {
  const { error, success } = await searchParams;

  return (
    <AuthShell
      eyebrow="Konsultasi Gratis"
      title="Ceritakan rencana hari bahagiamu"
      description="Lengkapi informasi singkat berikut agar tim SatuJanji dapat merekomendasikan desain dan layanan yang paling sesuai."
      footer={
        <>
          Akses khusus pengelola?{" "}
          <Link href="/masuk" className="font-semibold text-gold hover:text-[#a87f36]">
            Masuk ke dashboard
          </Link>
        </>
      }
    >
      {success === "1" ? (
        <FormAlert
          type="success"
          title="Permintaan konsultasi diterima"
          message="Terima kasih. Tim SatuJanji akan menghubungimu melalui WhatsApp untuk membahas kebutuhan undangan."
        />
      ) : null}

      {error === "required" ? (
        <FormAlert
          type="error"
          title="Informasi belum lengkap"
          message="Lengkapi nama, email, WhatsApp, dan pilihan paket agar kami dapat membantu dengan tepat."
        />
      ) : null}

      <form action="/api/leads" method="post" className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-gray-700">
          Nama lengkap kamu
          <span className="relative">
            <UserRound className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Nama kamu"
              required
              className="focus-ring min-h-12 w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm font-normal text-gray-900 outline-none placeholder:text-gray-400"
            />
          </span>
        </label>

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

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-gray-700">
            Nomor WhatsApp
            <span className="relative">
              <Phone className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="08xxxxxxxxxx"
                required
                className="focus-ring min-h-12 w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm font-normal text-gray-900 outline-none placeholder:text-gray-400"
              />
            </span>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-gray-700">
            Tanggal acara
            <span className="relative">
              <CalendarDays className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                name="eventDate"
                className="focus-ring min-h-12 w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm font-normal text-gray-900 outline-none"
              />
            </span>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-gray-700">
          Layanan yang diminati
          <select
            name="package"
            className="focus-ring min-h-12 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-normal text-gray-900 outline-none"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Pilih paket
            </option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="exclusive">Exclusive</option>
            <option value="konsultasi">Belum tahu, ingin konsultasi</option>
          </select>
        </label>

        <button
          type="submit"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
        >
          Kirim Permintaan Konsultasi
        </button>
      </form>
    </AuthShell>
  );
}
