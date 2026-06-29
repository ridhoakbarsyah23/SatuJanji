import type { Metadata } from "next";
import { AdminPanel, LeadsTable } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { getLeads } from "@/lib/leads-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Leads Pendaftar",
  description: "Halaman admin untuk melihat leads SatuJanji.",
};

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <AdminShell>
      <AdminPanel
        title="Leads Pendaftar"
        description="Data dari halaman daftar nantinya akan masuk ke daftar ini."
        entity="Lead"
      >
        <LeadsTable leads={leads} />
      </AdminPanel>
    </AdminShell>
  );
}
