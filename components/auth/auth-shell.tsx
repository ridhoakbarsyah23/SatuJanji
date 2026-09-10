import { ArrowLeft, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/whatsapp";

type AuthShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
};

const benefits = [
  "Pilihan desain yang dapat disesuaikan",
  "Informasi acara tersusun dengan rapi",
  "Pendampingan personal dari tim SatuJanji",
];

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  footer,
}: AuthShellProps) {
  const helpLink = createWhatsAppLink(
    "Halo tim SatuJanji, saya memerlukan bantuan terkait akses pengelola.",
  );

  return (
    <main className="auth-surface relative min-h-[calc(100svh-5rem)] overflow-hidden bg-cream">
      <div className="auth-orb auth-orb-left" aria-hidden="true" />
      <div className="auth-orb auth-orb-right" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(100svh-5rem)] items-center gap-10 py-6 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-12">
        <section className="hidden lg:block">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Kembali ke beranda
          </Link>

          <div className="mt-16 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white px-4 py-2 text-sm font-semibold text-gold shadow-sm">
              <Sparkles className="size-4" aria-hidden="true" />
              SatuJanji Wedding Invitation
            </span>
            <h1 className="text-balance-safe mt-7 font-serif text-5xl font-semibold leading-tight text-gray-950 xl:text-6xl">
              Setiap janji layak dirayakan dengan indah.
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Wujudkan undangan digital yang terasa personal, mudah dibagikan,
              dan tetap nyaman dinikmati oleh setiap tamu.
            </p>
          </div>

          <div className="mt-10 grid max-w-xl gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-gold shadow-sm">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-xl">
          <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Beranda
            </Link>
            <span className="font-serif text-xl font-semibold text-gray-950">
              SatuJanji
            </span>
          </div>

          <div className="auth-card rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-[0_30px_90px_rgba(70,50,25,0.12)] backdrop-blur sm:p-8 lg:p-9">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {eyebrow}
              </p>
              <h2 className="text-balance-safe mt-3 font-serif text-3xl font-semibold text-gray-950 sm:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">{description}</p>
            </div>

            {children}

            <div className="mt-7 border-t border-gray-100 pt-6 text-center text-sm text-gray-600">
              {footer}
            </div>
          </div>

          <Button
            href={helpLink}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="mt-5 w-full"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Konsultasi dengan tim kami
          </Button>
        </section>
      </div>
    </main>
  );
}
