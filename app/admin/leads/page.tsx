import type { Metadata } from "next";
import { AdminPanel, LeadsTable } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { LeadActionDialog } from "@/components/admin/admin-action-dialog";
import { getLeads } from "@/lib/leads-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Permintaan Konsultasi",
  description: "Pantau dan tindak lanjuti permintaan konsultasi pelanggan SatuJanji.",
};

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <AdminShell>
      <AdminPanel
        title="Permintaan Konsultasi"
        description="Setiap permintaan dari halaman konsultasi akan tersimpan di sini untuk ditindaklanjuti."
        entity="Permintaan"
        actionSlot={<LeadActionDialog action="add" />}
      >
        <LeadsTable leads={leads} />
      </AdminPanel>
    </AdminShell>
  );
}
