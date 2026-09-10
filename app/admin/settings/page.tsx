import type { Metadata } from "next";
import { Database, Palette, SlidersHorizontal } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsSurface } from "@/components/admin/SettingsSurface";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pengaturan Admin",
  description: "Kelola preferensi dan konfigurasi operasional SatuJanji.",
};

export default function AdminSettingsPage() {
  return (
    <AdminShell>
      <SettingsSurface
        eyebrow="Pengaturan"
        title="Pengaturan Pengelolaan"
        description="Kenali tampilan dan menu yang tersedia untuk mengelola layanan SatuJanji."
        cards={[
          {
            title: "Preferensi Tampilan",
            description: "Navigasi gelap dan kartu berwarna membantu kamu menemukan menu dan membaca ringkasan dengan mudah.",
            icon: Palette,
          },
          {
            title: "Pengelolaan Informasi",
            description: "Kelola desain undangan, paket, pertanyaan umum, dan permintaan pelanggan melalui menu yang tersedia.",
            icon: Database,
          },
          {
            title: "Alur Kerja",
            description: "Gunakan setiap menu untuk menjaga informasi layanan tetap akurat dan mudah dipantau.",
            icon: SlidersHorizontal,
          },
        ]}
      />
    </AdminShell>
  );
}
