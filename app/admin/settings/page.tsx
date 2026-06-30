import type { Metadata } from "next";
import { Database, Palette, SlidersHorizontal } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsSurface } from "@/components/admin/SettingsSurface";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Settings Admin",
  description: "Halaman pengaturan dashboard admin SatuJanji.",
};

export default function AdminSettingsPage() {
  return (
    <AdminShell>
      <SettingsSurface
        eyebrow="Settings"
        title="Pengaturan Dashboard"
        description="Pusat pengaturan pengalaman admin SatuJanji untuk tampilan, preferensi, dan data."
        cards={[
          {
            title: "Preferensi Tampilan",
            description: "Dashboard memakai gaya premium SaaS dengan palet gold dan cream.",
            icon: Palette,
          },
          {
            title: "Konfigurasi Data",
            description: "Konten admin disimpan di data lokal tanpa mengubah API yang sudah ada.",
            icon: Database,
          },
          {
            title: "Kontrol Dashboard",
            description: "Atur alur kerja admin dari halaman Template, Paket, FAQ, dan Leads.",
            icon: SlidersHorizontal,
          },
        ]}
      />
    </AdminShell>
  );
}
