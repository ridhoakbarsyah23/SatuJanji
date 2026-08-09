"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { useToast } from "@/lib/toast-store";
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
    <main className="min-h-svh overflow-x-hidden bg-[#FAFAF8] font-sans text-[#111827]">
      <div className="flex min-h-svh">
        <Sidebar />
        <div className="relative min-w-0 flex-1 overflow-x-hidden">
          <TopNavbar />
          <div className="mx-auto w-full max-w-[1440px] px-4 py-5 sm:px-6 lg:px-6 lg:py-6 xl:px-8 xl:py-8">
            {children}
          </div>
          <ToastContainer />
        </div>
      </div>
    </main>
  );
}
