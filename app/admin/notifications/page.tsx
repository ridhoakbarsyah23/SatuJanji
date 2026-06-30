import type { Metadata } from "next";
import { Bell, CheckCircle2, MessageSquareText } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsSurface } from "@/components/admin/SettingsSurface";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Notifications Admin",
  description: "Halaman notifikasi dashboard admin SatuJanji.",
};

export default function AdminNotificationsPage() {
  return (
    <AdminShell>
      <SettingsSurface
        eyebrow="Notifications"
        title="Pusat Notifikasi"
        description="Pantau pembaruan penting terkait konten, leads, dan aktivitas admin."
        cards={[
          {
            title: "Notifikasi Leads",
            description: "Gunakan halaman Leads untuk memantau calon pelanggan terbaru.",
            icon: Bell,
          },
          {
            title: "Status Konten",
            description: "Perubahan template, paket, dan FAQ akan tercermin di dashboard.",
            icon: CheckCircle2,
          },
          {
            title: "Pesan Operasional",
            description: "Ruang ini siap dikembangkan untuk pesan internal admin.",
            icon: MessageSquareText,
          },
        ]}
      />
    </AdminShell>
  );
}
