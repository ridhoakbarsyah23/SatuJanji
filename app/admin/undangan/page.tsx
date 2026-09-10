import type { Metadata } from "next";
import { Eye, FilePenLine, Plus, Send } from "lucide-react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { getInvitations } from "@/lib/invitations-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kelola Undangan",
  description: "Buat, preview, dan terbitkan undangan digital SatuJanji.",
};

export default async function InvitationsPage({
  searchParams,
}: {
  searchParams: Promise<{ notice?: string }>;
}) {
  const [invitations, query] = await Promise.all([getInvitations(), searchParams]);

  return (
    <AdminShell>
      <section className="rounded-[20px] border border-[#ECE8E2] bg-white p-4 shadow-[0_14px_40px_rgba(17,24,39,0.045)] sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#C79A4A]">Workspace Undangan</p>
            <h1 className="mt-2 text-xl font-semibold text-[#111827] sm:text-2xl">Kelola Undangan</h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6B7280]">Buat draft, periksa hasil desain, lalu terbitkan undangan melalui alamat publik yang unik.</p>
          </div>
          <Link href="/admin/undangan/baru" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#111827] px-4 text-sm font-semibold text-white transition hover:bg-[#C79A4A]">
            <Plus className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
            Buat Undangan
          </Link>
        </div>

        {query.notice === "saved" ? (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700" role="status">Undangan berhasil disimpan.</div>
        ) : null}

        <div className="mt-6 grid gap-3">
          {invitations.map((invitation) => (
            <article key={invitation.id} className="rounded-[20px] border border-[#ECE8E2] bg-[#FAFAF8] p-4 sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-semibold text-[#111827]">{invitation.groom} &amp; {invitation.bride}</h2>
                    <Status status={invitation.status} />
                  </div>
                  <p className="mt-2 break-all text-sm text-[#6B7280]">/undangan/{invitation.slug}</p>
                  <p className="mt-1 text-xs text-[#9CA3AF]">Diperbarui {new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(new Date(invitation.updatedAt))}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex">
                  <Link href={`/admin/undangan/${invitation.id}/preview`} className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#DED8CF] bg-white px-3 text-sm font-semibold text-[#374151] transition hover:border-[#C79A4A]/40 hover:text-[#C79A4A]">
                    <Eye className="size-4" strokeWidth={1.75} aria-hidden="true" /> Preview
                  </Link>
                  <Link href={`/admin/undangan/${invitation.id}/edit`} className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#DED8CF] bg-white px-3 text-sm font-semibold text-[#374151] transition hover:border-[#C79A4A]/40 hover:text-[#C79A4A]">
                    <FilePenLine className="size-4" strokeWidth={1.75} aria-hidden="true" /> Edit
                  </Link>
                  {invitation.status === "published" ? (
                    <Link href={`/undangan/${invitation.slug}`} target="_blank" className="focus-ring col-span-2 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#111827] px-3 text-sm font-semibold text-white transition hover:bg-[#C79A4A]">
                      <Send className="size-4" strokeWidth={1.75} aria-hidden="true" /> Buka Publik
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}

function Status({ status }: { status: "draft" | "published" }) {
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${status === "published" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{status === "published" ? "Terbit" : "Draft"}</span>;
}
