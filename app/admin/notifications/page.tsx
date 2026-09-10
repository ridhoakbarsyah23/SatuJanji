import type { Metadata } from "next";
import { Bell, CheckCircle2, MessageSquareText } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsSurface } from "@/components/admin/SettingsSurface";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Notifikasi Admin",
  description: "Pantau informasi penting dan aktivitas terbaru SatuJanji.",
};

export default function AdminNotificationsPage() {
  return (
    <AdminShell>
      <SettingsSurface
        eyebrow="Notifikasi"
        title="Pusat Notifikasi"
        description="Pantau informasi penting terkait permintaan pelanggan, konten, dan aktivitas pengelolaan."
        cards={[
          {
            title: "Permintaan Pelanggan",
            description: "Pantau calon pasangan terbaru melalui halaman Permintaan Masuk.",
            icon: Bell,
          },
          {
            title: "Status Konten",
            description: "Pastikan informasi template, paket, dan FAQ selalu sesuai dengan layanan terbaru.",
            icon: CheckCircle2,
          },
          {
            title: "Pesan Operasional",
            description: "Gunakan pusat notifikasi untuk mengikuti informasi operasional yang memerlukan perhatian.",
            icon: MessageSquareText,
          },
        ]}
      />
    </AdminShell>
  );
}
