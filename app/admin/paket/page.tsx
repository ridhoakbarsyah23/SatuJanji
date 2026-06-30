import type { Metadata } from "next";
import { AdminPanel, AdminRow } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { getAdminItems } from "@/lib/admin-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kelola Paket",
  description: "Halaman admin untuk mengelola paket SatuJanji.",
};

export default async function AdminPaketPage() {
  const plans = await getAdminItems("plans");

  return (
    <AdminShell>
      <AdminPanel
        title="Kelola Paket"
        description="Ubah deskripsi paket dan daftar fitur yang ditawarkan."
        entity="Paket"
        collection="plans"
      >
        <div className="grid gap-3">
          {plans.map((plan) => (
            <AdminRow
              key={plan.id}
              id={plan.id}
              entity="Paket"
              collection="plans"
              title={plan.title}
              meta={plan.meta}
              status={plan.status}
            />
          ))}
        </div>
      </AdminPanel>
    </AdminShell>
  );
}
