import { Eye, MessageCircle } from "lucide-react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const whatsappLink = createWhatsAppLink(
    "Halo admin SatuJanji, saya ingin konsultasi undangan pernikahan digital.",
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
          <span className="grid size-10 place-items-center rounded-full bg-gold text-white">
            <MessageCircle className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs font-medium text-white/60">
              Butuh bantuan?
            </span>
            Tanya Admin
          </span>
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-100 bg-white/95 p-3 shadow-soft backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/demo/aira-rama"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900"
          >
            <Eye className="size-4" aria-hidden="true" />
            Lihat Demo
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Tanya Admin
          </a>
        </div>
      </div>
    </>
  );
}
