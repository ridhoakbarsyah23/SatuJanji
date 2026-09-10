"use client";

import {
  Bell,
  BookHeart,
  ChevronRight,
  CircleHelp,
  LayoutDashboard,
  LayoutTemplate,
  LogOut,
  Menu,
  PackageCheck,
  Settings,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoutConfirmDialog } from "@/components/admin/LogoutConfirmDialog";

const menuGroups = [
  {
    label: "Utama",
    items: [
      { label: "Beranda", description: "Ringkasan hari ini", href: "/admin", icon: LayoutDashboard },
    ],
  },
  {
    label: "Kelola",
    items: [
      { label: "Undangan", description: "Buat dan terbitkan", href: "/admin/undangan", icon: BookHeart },
      { label: "Template", description: "Atur pilihan desain", href: "/admin/template", icon: LayoutTemplate },
      { label: "Paket Harga", description: "Atur layanan", href: "/admin/paket", icon: PackageCheck },
      { label: "Pertanyaan Umum", description: "Jawaban untuk pelanggan", href: "/admin/faq", icon: CircleHelp },
    ],
  },
  {
    label: "Pelanggan",
    items: [
      { label: "Permintaan Konsultasi", description: "Calon pasangan masuk", href: "/admin/leads", icon: UsersRound },
    ],
  },
  {
    label: "Akun",
    items: [
      { label: "Profil", description: "Identitas pengelola", href: "/admin/profile", icon: UserRound },
      { label: "Pengaturan", description: "Preferensi aplikasi", href: "/admin/settings", icon: Settings },
      { label: "Notifikasi", description: "Pembaruan penting", href: "/admin/notifications", icon: Bell },
    ],
  },
];

export function MobileSidebarTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="focus-ring grid size-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
        aria-label="Buka menu pengelola"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" strokeWidth={1.8} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[120] bg-slate-950/55 backdrop-blur-sm lg:hidden"
              aria-label="Tutup menu pengelola"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="admin-sidebar fixed inset-y-0 left-0 z-[130] flex w-[min(22rem,92vw)] flex-col overflow-hidden border-r border-white/10 bg-[#171827] text-white shadow-2xl lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div className="flex min-h-20 shrink-0 items-center justify-between border-b border-white/10 px-5">
                <BrandLockup />
                <button type="button" className="focus-ring grid size-10 place-items-center rounded-xl bg-white/10 text-white/70 hover:bg-white/15 hover:text-white" aria-label="Tutup menu" onClick={() => setOpen(false)}>
                  <X className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
                <WorkspaceCard />
                <SidebarNav mobile onNavigate={() => setOpen(false)} />
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="admin-sidebar sticky top-0 hidden h-svh w-[18rem] shrink-0 overflow-y-auto border-r border-white/10 bg-[#171827] px-4 py-5 text-white shadow-[12px_0_40px_rgba(15,23,42,0.08)] lg:block">
      <div className="mb-6 flex min-h-14 items-center px-2"><BrandLockup /></div>
      <WorkspaceCard />
      <SidebarNav />
    </aside>
  );
}

function BrandLockup() {
  return (
    <Link href="/admin" className="focus-ring inline-flex items-center gap-3 rounded-xl">
      <span className="grid size-10 place-items-center rounded-xl bg-white shadow-lg shadow-black/10">
        <Image src="/icon.svg" alt="" width={28} height={28} priority unoptimized className="size-7" />
      </span>
      <span><span className="block font-serif text-xl font-semibold leading-none text-white">SatuJanji</span><span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">Panel Pengelola</span></span>
    </Link>
  );
}

function WorkspaceCard() {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-4">
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-xl bg-[#D6AE62] text-sm font-bold text-[#171827]">SJ</span>
        <div className="min-w-0"><p className="truncate text-sm font-semibold">Ruang Kerja Utama</p><p className="mt-0.5 text-xs text-white/45">Kelola layanan SatuJanji</p></div>
      </div>
    </div>
  );
}

function SidebarNav({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="grid gap-6" aria-label="Navigasi pengelola">
      {menuGroups.map((group) => (
        <div key={group.label} className="grid gap-2">
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">{group.label}</p>
          <div className="grid gap-1">
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(`${item.href}/`));
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={onNavigate} className={`focus-ring group relative flex min-h-12 items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition ${active ? "bg-white text-[#171827] shadow-lg shadow-black/10" : "text-white/60 hover:bg-white/[0.07] hover:text-white"}`}>
                  {active ? <span className="absolute -left-1 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-[#D6AE62]" /> : null}
                  <span className={`grid size-9 shrink-0 place-items-center rounded-xl transition ${active ? "bg-[#F5E9CF] text-[#A5792D]" : "bg-white/[0.06] text-white/50 group-hover:text-[#D6AE62]"}`}>
                    <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{item.label}</span>{mobile ? <span className={`mt-0.5 block truncate text-xs ${active ? "text-slate-500" : "text-white/35"}`}>{item.description}</span> : null}</span>
                  {active ? <ChevronRight className="size-4 text-[#A5792D]" strokeWidth={1.8} aria-hidden="true" /> : null}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
      <LogoutConfirmDialog className="focus-ring flex min-h-12 items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-500/10 hover:text-red-200" onConfirm={onNavigate}>
        <span className="grid size-9 place-items-center rounded-xl bg-red-500/10"><LogOut className="size-[18px]" strokeWidth={1.8} aria-hidden="true" /></span>
        Keluar dari akun
      </LogoutConfirmDialog>
    </nav>
  );
}
