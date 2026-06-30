"use client";

import {
  Bell,
  ChevronDown,
  LogOut,
  Search,
  Settings,
  UserRound,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoutConfirmDialog } from "@/components/admin/LogoutConfirmDialog";
import { MobileSidebarTrigger } from "@/components/admin/Sidebar";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/template": "Template",
  "/admin/paket": "Paket",
  "/admin/faq": "FAQ",
  "/admin/leads": "Leads",
  "/admin/profile": "Profile",
  "/admin/settings": "Settings",
  "/admin/notifications": "Notifications",
};

export function TopNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-40 border-b border-[#ECE8E2] bg-[#FAFAF8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <MobileSidebarTrigger />

        <div className="min-w-[7rem]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C79A4A]">
            Admin
          </p>
          <h1
            className="truncate text-2xl font-semibold text-[#111827]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {pathname === "/admin" ? "Dashboard SatuJanji" : title}
          </h1>
        </div>

        <label className="relative mx-auto hidden w-full max-w-xl md:block">
          <span className="sr-only">Cari konten admin</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Cari template, paket, FAQ..."
            className="focus-ring h-11 w-full rounded-2xl border border-[#ECE8E2] bg-white pl-11 pr-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C79A4A] focus:bg-white"
          />
        </label>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/admin/notifications"
            className="focus-ring grid size-11 place-items-center rounded-2xl border border-[#ECE8E2] bg-white text-[#6B7280] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F7F3EE] hover:text-[#111827]"
            aria-label="Notifikasi"
          >
            <Bell className="size-5" aria-hidden="true" />
          </Link>

          <div className="relative">
            <button
              type="button"
              className="focus-ring flex min-h-11 items-center gap-3 rounded-2xl border border-[#ECE8E2] bg-white px-2.5 py-1.5 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F7F3EE]"
              aria-label="Menu admin"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="grid size-8 place-items-center rounded-xl bg-[#111827] text-white">
                A
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block text-sm font-semibold text-[#111827]">Admin</span>
                <span className="block text-xs text-[#6B7280]">SatuJanji</span>
              </span>
              <ChevronDown
                className={`hidden size-4 text-[#9CA3AF] transition sm:block ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {open ? (
                <motion.div
                  className="absolute right-0 top-14 z-50 w-64 rounded-3xl border border-[#ECE8E2] bg-white p-2 shadow-[0_24px_70px_rgba(17,24,39,0.12)]"
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <div className="border-b border-[#ECE8E2] px-3 py-3">
                    <p className="text-sm font-semibold text-[#111827]">Admin SatuJanji</p>
                    <p className="mt-1 text-xs text-[#6B7280]">Premium dashboard</p>
                  </div>
                  <Link
                    href="/admin/profile"
                    className="focus-ring mt-2 flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-[#6B7280] transition hover:bg-[#F7F3EE] hover:text-[#111827]"
                    onClick={() => setOpen(false)}
                  >
                    <UserRound className="size-4" aria-hidden="true" />
                    Profile
                  </Link>
                  <Link
                    href="/admin/settings"
                    className="focus-ring flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-[#6B7280] transition hover:bg-[#F7F3EE] hover:text-[#111827]"
                    onClick={() => setOpen(false)}
                  >
                    <Settings className="size-4" aria-hidden="true" />
                    Settings
                  </Link>
                  <Link
                    href="/admin/notifications"
                    className="focus-ring flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-[#6B7280] transition hover:bg-[#F7F3EE] hover:text-[#111827]"
                    onClick={() => setOpen(false)}
                  >
                    <Bell className="size-4" aria-hidden="true" />
                    Notifications
                  </Link>
                  <LogoutConfirmDialog
                    className="focus-ring mt-1 flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-[#EF4444] transition hover:bg-red-50"
                    onConfirm={() => setOpen(false)}
                  >
                    <LogOut className="size-4" aria-hidden="true" />
                    Logout
                  </LogoutConfirmDialog>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
