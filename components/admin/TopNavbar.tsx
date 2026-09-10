"use client";

import { ArrowUpRight, Bell, ChevronDown, Settings, UserRound } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileSidebarTrigger } from "@/components/admin/Sidebar";

function getPageTitle(pathname: string) {
  if (pathname === "/admin") return { section: "Ringkasan", title: "Beranda" };
  if (pathname === "/admin/undangan/baru") return { section: "Undangan", title: "Buat Undangan" };
  if (pathname.includes("/undangan/") && pathname.endsWith("/edit")) return { section: "Undangan", title: "Edit Undangan" };
  if (pathname.startsWith("/admin/undangan")) return { section: "Kelola", title: "Undangan" };
  if (pathname.startsWith("/admin/template")) return { section: "Kelola", title: "Template" };
  if (pathname.startsWith("/admin/paket")) return { section: "Kelola", title: "Paket Harga" };
  if (pathname.startsWith("/admin/faq")) return { section: "Kelola", title: "Pertanyaan Umum" };
  if (pathname.startsWith("/admin/leads")) return { section: "Pelanggan", title: "Permintaan Konsultasi" };
  if (pathname.startsWith("/admin/profile")) return { section: "Akun", title: "Profil" };
  if (pathname.startsWith("/admin/settings")) return { section: "Akun", title: "Pengaturan" };
  if (pathname.startsWith("/admin/notifications")) return { section: "Akun", title: "Notifikasi" };
  return { section: "Panel Pengelola", title: "SatuJanji" };
}

export function TopNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const page = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#F6F7FB]/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1520px] items-center gap-3 px-4 sm:px-6 lg:px-7 xl:px-10">
        <MobileSidebarTrigger />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span>{page.section}</span><span aria-hidden="true">/</span><span className="truncate text-slate-600">{page.title}</span>
          </div>
          <h1 className="mt-1 truncate text-lg font-bold tracking-[-0.02em] text-slate-950 sm:text-xl">{page.title}</h1>
        </div>

        <Link href="/" target="_blank" className="focus-ring hidden min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-[#D6AE62]/50 hover:text-slate-950 md:inline-flex">
          Buka website <ArrowUpRight className="size-4 text-[#B4883D]" strokeWidth={1.8} aria-hidden="true" />
        </Link>

        <Link href="/admin/notifications" className="focus-ring relative grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950" aria-label="Buka notifikasi">
          <Bell className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
        </Link>

        <div className="relative">
          <button type="button" className="focus-ring flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white p-1.5 pr-2 text-left shadow-sm transition hover:-translate-y-0.5" aria-label="Buka menu akun" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            <span className="grid size-8 place-items-center rounded-lg bg-[#171827] text-xs font-bold text-white">A</span>
            <span className="hidden text-sm font-semibold text-slate-800 sm:block">Admin</span>
            <ChevronDown className={`hidden size-4 text-slate-400 transition sm:block ${open ? "rotate-180" : ""}`} strokeWidth={1.8} aria-hidden="true" />
          </button>

          <AnimatePresence>
            {open ? (
              <motion.div className="fixed left-4 right-4 top-[4.75rem] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:absolute sm:left-auto sm:right-0 sm:top-14 sm:w-64" initial={{ opacity: 0, y: -6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.98 }} transition={{ duration: 0.18 }}>
                <div className="rounded-xl bg-slate-50 px-3 py-3"><p className="text-sm font-bold text-slate-900">Admin SatuJanji</p><p className="mt-1 text-xs text-slate-500">Pengelola utama</p></div>
                <AccountLink href="/admin/profile" icon={UserRound} label="Lihat profil" onClick={() => setOpen(false)} />
                <AccountLink href="/admin/settings" icon={Settings} label="Buka pengaturan" onClick={() => setOpen(false)} />
                <AccountLink href="/admin/notifications" icon={Bell} label="Lihat notifikasi" onClick={() => setOpen(false)} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

function AccountLink({ href, icon: Icon, label, onClick }: { href: string; icon: typeof UserRound; label: string; onClick: () => void }) {
  return <Link href={href} className="focus-ring mt-1 flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-slate-600 transition hover:bg-[#F7F1E7] hover:text-slate-950" onClick={onClick}><Icon className="size-[18px] text-[#B4883D]" strokeWidth={1.8} aria-hidden="true" />{label}</Link>;
}
