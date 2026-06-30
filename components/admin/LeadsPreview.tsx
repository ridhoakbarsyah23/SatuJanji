import type { Lead } from "@/lib/leads-store";
import { EmptyState } from "@/components/admin/EmptyState";
import { StatusBadge } from "@/components/admin/admin-content";

export function LeadsPreview({ leads }: { leads: Lead[] }) {
  const latestLeads = leads.slice(0, 5);

  return (
    <section className="rounded-[20px] border border-[#ECE8E2] bg-white p-6 shadow-[0_14px_40px_rgba(17,24,39,0.045)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#111827]">Leads Preview</h2>
          <p className="mt-1 text-sm text-[#6B7280]">Lima calon pelanggan terbaru.</p>
        </div>
      </div>

      <div className="mt-6">
        {latestLeads.length ? (
          <div className="overflow-hidden rounded-2xl border border-[#ECE8E2]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAFAF8] text-xs font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
                <tr>
                  <th className="px-4 py-3">Nama</th>
                  <th className="hidden px-4 py-3 md:table-cell">Email</th>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE8E2] bg-white">
                {latestLeads.map((lead) => (
                  <tr key={lead.id} className="transition hover:bg-[#F7F3EE]">
                    <td className="px-4 py-4 font-semibold text-[#111827]">{lead.name}</td>
                    <td className="hidden px-4 py-4 text-[#6B7280] md:table-cell">
                      {lead.email}
                    </td>
                    <td className="px-4 py-4 text-[#6B7280]">{lead.eventDate}</td>
                    <td className="px-4 py-4">
                      <StatusBadge status={lead.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            title="Belum ada leads."
            description="Bagikan website agar mulai menerima calon pelanggan."
            actionLabel="Lihat Landing Page"
            actionHref="/"
          />
        )}
      </div>
    </section>
  );
}
