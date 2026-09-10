import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { InvitationEditor } from "@/components/admin/invitation-editor";
import { getInvitationById } from "@/lib/invitations-store";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Edit Undangan" };

export default async function EditInvitationPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ error?: string }> }) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const invitation = await getInvitationById(id);
  if (!invitation) notFound();

  return (
    <AdminShell>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/admin/undangan" className="focus-ring rounded-md text-sm font-semibold text-[#6B7280] hover:text-[#C79A4A]">← Kembali ke daftar</Link>
          <h1 className="mt-3 text-2xl font-semibold text-[#111827]">Edit {invitation.groom} &amp; {invitation.bride}</h1>
        </div>
        <Link href={`/admin/undangan/${invitation.id}/preview`} className="focus-ring inline-flex min-h-10 items-center justify-center rounded-xl border border-[#DED8CF] bg-white px-4 text-sm font-semibold text-[#374151] hover:text-[#C79A4A]">Buka Preview</Link>
      </div>
      <InvitationEditor invitation={invitation} error={query.error} />
    </AdminShell>
  );
}
