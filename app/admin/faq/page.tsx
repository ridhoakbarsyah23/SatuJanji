import type { Metadata } from "next";
import { AdminPanel, AdminRow } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { getAdminItems } from "@/lib/stores/admin-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pertanyaan Umum",
  description: "Halaman admin untuk mengelola FAQ SatuJanji.",
};

export default async function AdminFaqPage() {
  const faqs = await getAdminItems("faqs");

  return (
    <AdminShell>
      <AdminPanel
        title="Pertanyaan Umum"
        description="Kelola jawaban atas pertanyaan yang paling sering disampaikan pelanggan."
        entity="Pertanyaan"
        collection="faqs"
      >
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <AdminRow
              key={faq.id}
              id={faq.id}
              entity="Pertanyaan"
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
