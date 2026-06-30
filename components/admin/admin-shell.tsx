"use client";

import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Sidebar } from "@/components/admin/Sidebar";
import { TopNavbar } from "@/components/admin/TopNavbar";

const toastDurationMs = 10000;

type AdminShellProps = {
  children: ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  return (
    <main className="min-h-svh bg-[#FAFAF8] font-sans text-[#111827]">
      <div className="flex min-h-svh">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <TopNavbar />
          <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </div>
      </div>

      <AdminRouteNotice />
    </main>
  );
}

function AdminRouteNotice() {
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);
  const notice = searchParams.get("notice");

  useEffect(() => {
    if (!notice) {
      setShow(false);
      return;
    }

    setShow(true);
    const timeout = window.setTimeout(() => setShow(false), toastDurationMs);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  if (!show || notice !== "deleted") {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed right-4 top-4 z-[160] flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-2xl border border-green-100 bg-white p-4 text-[#111827] shadow-[0_24px_70px_rgba(17,24,39,0.12)] sm:right-6 sm:top-6"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-green-50 text-[#22C55E]">
        <CheckCircle2 className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold">Data berhasil dihapus.</p>
        <p className="mt-1 text-sm leading-6 text-[#6B7280]">
          Data admin sudah diperbarui.
        </p>
      </div>
    </div>
  );
}
