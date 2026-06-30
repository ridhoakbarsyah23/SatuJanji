"use client";

import {
  Bell,
  ChevronRight,
  ClipboardList,
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
    items: [{ label: "Dashboard", href: "/admin", icon: LayoutDashboard }],
  },
  {
    label: "Content",
    items: [
      { label: "Template", href: "/admin/template", icon: LayoutTemplate },
      { label: "Paket", href: "/admin/paket", icon: PackageCheck },
      { label: "FAQ", href: "/admin/faq", icon: HelpCircle },
    ],
  },
  {
    label: "Customer",
    items: [{ label: "Leads", href: "/admin/leads", icon: UsersRound }],
  },
  {
    label: "Settings",
    items: [
      { label: "Profile", href: "/admin/profile", icon: UserRound },
      { label: "Settings", href: "/admin/settings", icon: Settings },
      { label: "Notifications", href: "/admin/notifications", icon: Bell },
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
              className="fixed inset-y-0 left-0 z-[130] w-[20rem] max-w-[86vw] bg-white p-4 shadow-2xl lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <BrandLockup />
                <button
                  type="button"
                  className="focus-ring grid size-10 place-items-center rounded-xl text-[#6B7280] hover:bg-[#F7F3EE]"
                  aria-label="Tutup menu admin"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>
              <SidebarNav onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-svh w-20 shrink-0 border-r border-[#ECE8E2] bg-white/90 px-3 py-5 backdrop-blur-xl lg:block xl:w-[260px]">
      <div className="mb-8 hidden px-2 xl:block">
        <BrandLockup />
      </div>
      <div className="mb-8 grid place-items-center xl:hidden">
        <Image src="/icon.svg" alt="SatuJanji" width={42} height={42} unoptimized />
      </div>
      <SidebarNav />
    </aside>
  );
}

function BrandLockup() {
  return (
    <Link href="/admin" className="focus-ring inline-flex items-center rounded-xl">
      <Image
        src="/logo.svg"
        alt="SatuJanji"
        width={176}
        height={54}
        priority
        unoptimized
        className="h-12 w-auto"
      />
    </Link>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="grid gap-6" aria-label="Admin navigation">
      {menuGroups.map((group) => (
        <div key={group.label} className="grid gap-2">
          <p className="hidden px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF] xl:block">
            {group.label}
          </p>
          <div className="grid gap-1">
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={`${group.label}-${item.label}`}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  title={item.label}
                  className={`focus-ring group flex min-h-11 items-center justify-center gap-3 rounded-2xl px-3 text-sm font-semibold transition duration-300 xl:justify-start ${
                    active
                      ? "bg-[#F7F3EE] text-[#111827] shadow-sm"
                      : "text-[#6B7280] hover:bg-[#F7F3EE] hover:text-[#111827]"
                  }`}
                  onClick={onNavigate}
                >
                  <Icon
                    className={`size-5 shrink-0 ${
                      active ? "text-[#C79A4A]" : "text-[#9CA3AF] group-hover:text-[#C79A4A]"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="hidden xl:inline">{item.label}</span>
                  {active ? (
                    <ChevronRight
                      className="ml-auto hidden size-4 text-[#C79A4A] xl:block"
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
        className="focus-ring flex min-h-11 items-center justify-center gap-3 rounded-2xl px-3 text-sm font-semibold text-[#EF4444] transition duration-300 hover:bg-red-50 xl:justify-start"
        onConfirm={onNavigate}
      >
        <LogOut className="size-5 shrink-0" aria-hidden="true" />
        <span className="hidden xl:inline">Logout</span>
      </LogoutConfirmDialog>
    </nav>
  );
}
