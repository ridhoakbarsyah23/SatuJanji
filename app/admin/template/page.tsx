import type { Metadata } from "next";
import { AdminPanel, AdminRow } from "@/components/admin/admin-content";
import { AdminShell } from "@/components/admin/admin-shell";
import { getAdminItems } from "@/lib/admin-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kelola Template",
  description: "Halaman admin untuk mengelola template SatuJanji.",
};

export default async function AdminTemplatePage() {
  const templates = await getAdminItems("templates");

  return (
    <AdminShell>
      <AdminPanel
        title="Kelola Template"
        description="Atur nama, tema, tag, dan status template yang tampil di landing."
        entity="Template"
        collection="templates"
      >
        <div className="grid gap-3">
          {templates.map((template) => (
            <AdminRow
              key={template.id}
              id={template.id}
              entity="Template"
              title={template.title}
              collection="templates"
              meta={template.meta}
              status={template.status}
            />
          ))}
        </div>
      </AdminPanel>
    </AdminShell>
  );
}
