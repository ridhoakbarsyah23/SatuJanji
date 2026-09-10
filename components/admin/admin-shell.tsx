"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { useToast } from "@/lib/stores/toast-store";
import { ToastContainer } from "@/components/ui/toast";
import { Sidebar } from "@/components/admin/Sidebar";
import { TopNavbar } from "@/components/admin/TopNavbar";

type AdminShellProps = {
  children: ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const searchParams = useSearchParams();
  const { addToast } = useToast();
  const notifiedRef = useRef(false);

  useEffect(() => {
    if (notifiedRef.current) {
      return;
    }

    const notice = searchParams.get("notice");
    if (notice !== "deleted") {
      return;
    }

    notifiedRef.current = true;
    addToast({
      type: "success",
      message: "Data berhasil dihapus.",
      description: "Data admin sudah diperbarui.",
    });
  }, [searchParams, addToast]);

  return (
    <main className="admin-surface min-h-svh overflow-x-hidden bg-[#F6F7FB] font-sans text-slate-900">
      <div className="flex min-h-svh">
        <Sidebar />
        <div className="relative min-w-0 flex-1 overflow-x-hidden">
          <TopNavbar />
          <div className="mx-auto w-full max-w-[1520px] px-3 py-5 min-[380px]:px-4 sm:px-6 sm:py-7 lg:px-7 xl:px-10 xl:py-9">
            {children}
          </div>
          <ToastContainer />
        </div>
      </div>
    </main>
  );
}
