import type { Metadata } from "next";
import { AdminPanel, AdminRow } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { adminPlans } from "@/lib/admin-data";

export const metadata: Metadata = {
  title: "Kelola Paket",
  description: "Halaman admin untuk mengelola paket SatuJanji.",
};

export default function AdminPaketPage() {
  return (
    <AdminShell>
      <AdminPanel
        title="Kelola Paket"
        description="Ubah deskripsi paket dan daftar fitur yang ditawarkan."
        entity="Paket"
      >
        <div className="grid gap-3">
          {adminPlans.map((plan) => (
            <AdminRow
              key={plan.name}
              entity="Paket"
              title={plan.name}
              meta={`${plan.description} ${plan.features.join(", ")}`}
              status={plan.status}
            />
          ))}
        </div>
      </AdminPanel>
    </AdminShell>
  );
}
