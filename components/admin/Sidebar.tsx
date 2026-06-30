"use client";

import {
  Bell,
  ChevronRight,
  HelpCircle,
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
    label: "Dashboard",
    items: [
      {
        label: "Dashboard",
        description: "Ringkasan performa",
        href: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Content",
    items: [
      {
        label: "Template",
        description: "Kelola desain undangan",
        href: "/admin/template",
        icon: LayoutTemplate,
      },
      {
        label: "Paket",
        description: "Atur paket layanan",
        href: "/admin/paket",
        icon: PackageCheck,
      },
      {
        label: "FAQ",
        description: "Pertanyaan pelanggan",
        href: "/admin/faq",
        icon: HelpCircle,
      },
    ],
  },
  {
    label: "Customer",
    items: [
      {
        label: "Leads",
        description: "Calon pelanggan",
        href: "/admin/leads",
        icon: UsersRound,
      },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        label: "Profile",
        description: "Identitas admin",
        href: "/admin/profile",
        icon: UserRound,
      },
      {
        label: "Settings",
        description: "Preferensi dashboard",
        href: "/admin/settings",
        icon: Settings,
      },
      {
        label: "Notifications",
        description: "Pusat notifikasi",
        href: "/admin/notifications",
        icon: Bell,
      },
    ],
  },
];

export function MobileSidebarTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="focus-ring grid size-11 place-items-center rounded-xl border border-[#ECE8E2] bg-white text-[#111827] shadow-sm lg:hidden"
        aria-label="Buka menu admin"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[120] bg-[#111827]/30 lg:hidden"
              aria-label="Tutup menu admin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-0 z-[130] flex h-[100svh] w-full flex-col overflow-hidden bg-white shadow-[0_30px_90px_rgba(17,24,39,0.22)] sm:inset-y-0 sm:left-0 sm:right-auto sm:w-[24rem] sm:max-w-[90vw] sm:rounded-r-[28px] sm:border-r sm:border-[#ECE8E2] lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div className="flex min-h-20 shrink-0 items-center justify-between gap-3 border-b border-[#ECE8E2] px-5">
                <BrandLockup className="h-11" />
                <button
                  type="button"
                  className="focus-ring grid size-11 place-items-center rounded-2xl border border-[#ECE8E2] text-[#6B7280] transition hover:bg-[#F7F3EE] hover:text-[#111827]"
                  aria-label="Tutup menu admin"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5">
                <div className="mb-5 rounded-[20px] border border-[#ECE8E2] bg-[#FAFAF8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C79A4A]">
                    Admin Menu
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Pilih halaman untuk mengelola SatuJanji.
                  </p>
                </div>
                <SidebarNav mode="mobile" onNavigate={() => setOpen(false)} />
              </div>
              <div className="shrink-0 border-t border-[#ECE8E2] bg-[#FAFAF8] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C79A4A]">
                  SatuJanji
                </p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Premium wedding invitation dashboard
                </p>
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
    <aside className="sticky top-0 hidden h-svh w-[17.5rem] shrink-0 overflow-y-auto border-r border-[#ECE8E2] bg-white/95 px-5 py-5 backdrop-blur-xl lg:block">
      <div className="mb-7 flex min-h-14 items-center">
        <BrandLockup />
      </div>
      <div className="mb-6 rounded-[20px] border border-[#ECE8E2] bg-[#FAFAF8] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C79A4A]">
          Workspace
        </p>
        <p className="mt-2 truncate text-sm font-semibold text-[#111827]">
          SatuJanji Admin
        </p>
        <p className="mt-1 text-xs text-[#6B7280]">Premium dashboard</p>
      </div>
      <SidebarNav mode="desktop" />
    </aside>
  );
}

function BrandLockup({ className = "h-12" }: { className?: string }) {
  return (
    <Link href="/admin" className="focus-ring inline-flex items-center rounded-xl">
      <Image
        src="/logo.svg"
        alt="SatuJanji"
        width={176}
        height={54}
        priority
        unoptimized
        className={`${className} w-auto`}
      />
    </Link>
  );
}

function SidebarNav({
  mode = "desktop",
  onNavigate,
}: {
  mode?: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isMobile = mode === "mobile";

  return (
    <nav className={isMobile ? "grid gap-5" : "grid gap-6"} aria-label="Admin navigation">
      {menuGroups.map((group) => (
        <div key={group.label} className="grid gap-2.5">
          <p
            className="px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]"
          >
            {group.label}
          </p>
          <div className="grid gap-1.5">
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={`${group.label}-${item.label}`}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  title={item.label}
                  className={`focus-ring group flex items-center gap-3 rounded-2xl text-sm font-semibold transition duration-300 ${
                    active
                      ? "bg-[#F7F3EE] text-[#111827] shadow-sm ring-1 ring-[#ECE8E2]"
                      : "text-[#6B7280] hover:bg-[#F7F3EE] hover:text-[#111827]"
                  } ${
                    isMobile
                      ? "min-h-14 justify-start px-3.5 py-2.5"
                      : "min-h-12 justify-start px-3 py-2.5"
                  }`}
                  onClick={onNavigate}
                >
                  <span
                    className={`grid shrink-0 place-items-center rounded-xl ${
                      isMobile ? "size-10" : "size-10"
                    } ${
                      active
                        ? "bg-white text-[#C79A4A]"
                        : "bg-white text-[#9CA3AF] group-hover:text-[#C79A4A]"
                    }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate">{item.label}</span>
                    {isMobile ? (
                      <span className="mt-0.5 block truncate text-xs font-medium text-[#9CA3AF]">
                        {item.description}
                      </span>
                    ) : null}
                  </span>
                  {active ? (
                    <ChevronRight
                      className="ml-auto size-4 text-[#C79A4A]"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      <LogoutConfirmDialog
        className={`focus-ring flex items-center gap-3 rounded-2xl text-sm font-semibold text-[#EF4444] transition duration-300 hover:bg-red-50 ${
          isMobile
            ? "min-h-14 justify-start px-3.5 py-2.5"
            : "min-h-12 justify-start px-3 py-2.5"
        }`}
        onConfirm={onNavigate}
      >
        <span
          className={`grid shrink-0 place-items-center rounded-xl ${
            isMobile ? "size-10 bg-red-50" : "size-10 bg-red-50"
          }`}
        >
          <LogOut className="size-5" aria-hidden="true" />
        </span>
        <span>Logout</span>
      </LogoutConfirmDialog>
    </nav>
  );
}
