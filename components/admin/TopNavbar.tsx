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
    <header className="sticky top-0 z-40 border-b border-[#ECE8E2] bg-[#FAFAF8]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1440px] flex-wrap items-center gap-2.5 px-4 py-3 sm:gap-3 sm:px-6 lg:flex-nowrap lg:px-8">
        <MobileSidebarTrigger />

        <div className="min-w-0 flex-1 lg:flex-none">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C79A4A]">
            Admin
          </p>
          <h1
            className="truncate text-xl font-semibold text-[#111827] sm:text-2xl"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {pathname === "/admin" ? "Dashboard SatuJanji" : title}
          </h1>
        </div>

        <label className="relative order-last w-full lg:order-none lg:mx-auto lg:block lg:max-w-md xl:max-w-xl">
          <span className="sr-only">Cari konten admin</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Cari template, paket, FAQ..."
            className="focus-ring h-10 w-full rounded-2xl border border-[#ECE8E2] bg-white pl-11 pr-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C79A4A] focus:bg-white sm:h-11"
          />
        </label>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="/admin/notifications"
            className="focus-ring grid size-10 place-items-center rounded-2xl border border-[#ECE8E2] bg-white text-[#6B7280] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F7F3EE] hover:text-[#111827] sm:size-11"
            aria-label="Notifikasi"
          >
            <Bell className="size-5" aria-hidden="true" />
          </Link>

          <div className="relative">
            <button
              type="button"
              className="focus-ring flex min-h-10 items-center gap-2 rounded-2xl border border-[#ECE8E2] bg-white px-2 py-1.5 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F7F3EE] sm:min-h-11 sm:gap-3 sm:px-2.5"
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
                  className="fixed left-4 right-4 top-[4.75rem] z-50 rounded-3xl border border-[#ECE8E2] bg-white p-2 shadow-[0_24px_70px_rgba(17,24,39,0.12)] sm:absolute sm:left-auto sm:right-0 sm:top-14 sm:w-64"
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
