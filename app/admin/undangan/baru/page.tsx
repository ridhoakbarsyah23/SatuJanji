import type { Metadata } from "next";
import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { InvitationEditor } from "@/components/admin/invitation-editor";

export const metadata: Metadata = { title: "Buat Undangan" };

export default async function NewInvitationPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const query = await searchParams;
  return (
    <AdminShell>
      <div className="mb-5">
        <Link href="/admin/undangan" className="focus-ring rounded-md text-sm font-semibold text-[#6B7280] hover:text-[#C79A4A]">← Kembali ke daftar</Link>
        <h1 className="mt-3 text-2xl font-semibold text-[#111827]">Buat Undangan Baru</h1>
        <p className="mt-2 text-sm text-[#6B7280]">Simpan sebagai draft untuk memeriksa desain sebelum diterbitkan.</p>
      </div>
      <InvitationEditor error={query.error} />
    </AdminShell>
  );
}
