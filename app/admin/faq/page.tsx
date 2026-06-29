import type { Metadata } from "next";
import { AdminPanel, AdminRow } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { adminFaqs } from "@/lib/admin-data";

export const metadata: Metadata = {
  title: "Kelola FAQ",
  description: "Halaman admin untuk mengelola FAQ SatuJanji.",
};

export default function AdminFaqPage() {
  return (
    <AdminShell>
      <AdminPanel
        title="Kelola FAQ"
        description="Pertanyaan yang sering ditanyakan calon customer."
        entity="FAQ"
      >
        <div className="grid gap-3">
          {adminFaqs.map((faq) => (
            <AdminRow
              key={faq.question}
              entity="FAQ"
              title={faq.question}
              meta={faq.answer}
              status={faq.status}
            />
          ))}
        </div>
      </AdminPanel>
    </AdminShell>
  );
}
