import type { Metadata } from "next";
import { AdminPanel, AdminRow } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { getAdminItems } from "@/lib/admin-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kelola FAQ",
  description: "Halaman admin untuk mengelola FAQ SatuJanji.",
};

export default async function AdminFaqPage() {
  const faqs = await getAdminItems("faqs");

  return (
    <AdminShell>
      <AdminPanel
        title="Kelola FAQ"
        description="Pertanyaan yang sering ditanyakan calon customer."
        entity="FAQ"
        collection="faqs"
      >
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <AdminRow
              key={faq.id}
              id={faq.id}
              entity="FAQ"
              collection="faqs"
              title={faq.title}
              meta={faq.meta}
              status={faq.status}
            />
          ))}
        </div>
      </AdminPanel>
    </AdminShell>
  );
}
