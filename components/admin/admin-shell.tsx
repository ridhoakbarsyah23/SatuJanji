"use client";

import {
  ClipboardList,
  HelpCircle,
  LayoutTemplate,
  PackageCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { LogoutButton } from "@/components/auth/logout-button";

const navItems = [
  { label: "Ringkasan", href: "/admin", icon: ClipboardList },
  { label: "Template", href: "/admin/template", icon: LayoutTemplate },
  { label: "Paket", href: "/admin/paket", icon: PackageCheck },
  { label: "FAQ", href: "/admin/faq", icon: HelpCircle },
  { label: "Leads", href: "/admin/leads", icon: UsersRound },
];

type AdminShellProps = {
  children: ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();

  return (
    <main className="min-h-svh bg-gray-50 text-gray-950">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Admin
            </p>
            <h1 className="truncate font-serif text-2xl font-semibold">
              Dashboard SatuJanji
            </h1>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-8 sm:px-6 lg:grid-cols-[16rem_1fr] lg:px-8">
        <aside className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:h-fit">
          <nav className="grid gap-1" aria-label="Admin navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`focus-ring flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold transition ${
                    active
                      ? "bg-cream text-gray-950"
                      : "text-gray-700 hover:bg-cream hover:text-gray-950"
                  }`}
                >
                  <Icon className="size-4 text-gold" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <section className="min-w-0">{children}</section>
      </div>
    </main>
  );
}
