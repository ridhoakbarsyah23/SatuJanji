import { LayoutTemplate, MessageCircle } from "lucide-react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/services/whatsapp";

export function FloatingWhatsApp() {
  const whatsappLink = createWhatsAppLink(
    "Halo tim SatuJanji, saya ingin berkonsultasi mengenai undangan pernikahan digital.",
  );

  return (
    <>
      <div className="fixed bottom-6 right-5 z-50 hidden lg:block">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="focus-ring group flex items-center gap-3 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
        >
          <span className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/10 text-gold">
            <MessageCircle className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs font-medium text-white/60">
              Butuh bantuan?
            </span>
            Konsultasi
          </span>
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-100 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_35px_rgba(23,23,23,0.08)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-2 min-[380px]:gap-3">
          <Link
            href="/#template"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900"
          >
            <LayoutTemplate className="size-4" strokeWidth={1.75} aria-hidden="true" />
            Template
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden="true" />
            Konsultasi
          </a>
        </div>
      </div>
    </>
  );
}
