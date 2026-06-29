import type { Metadata } from "next";
import { AdminPanel, AdminRow } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { adminTemplates } from "@/lib/admin-data";

export const metadata: Metadata = {
  title: "Kelola Template",
  description: "Halaman admin untuk mengelola template SatuJanji.",
};

export default function AdminTemplatePage() {
  return (
    <AdminShell>
      <AdminPanel
        title="Kelola Template"
        description="Atur nama, tema, tag, dan status template yang tampil di landing."
        entity="Template"
      >
        <div className="grid gap-3">
          {adminTemplates.map((template) => (
            <AdminRow
              key={template.slug}
              entity="Template"
              title={template.name}
              meta={`${template.theme} - ${template.tags.join(", ")}`}
              status={template.status}
            />
          ))}
        </div>
      </AdminPanel>
    </AdminShell>
  );
}
