import type { Metadata } from "next";
import { BadgeCheck, Mail, ShieldCheck } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsSurface } from "@/components/admin/SettingsSurface";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Profile Admin",
  description: "Halaman profil admin SatuJanji.",
};

export default function AdminProfilePage() {
  return (
    <AdminShell>
      <SettingsSurface
        eyebrow="Profile"
        title="Admin SatuJanji"
        description="Kelola identitas admin, akses dashboard, dan informasi kontak operasional."
        cards={[
          {
            title: "Identitas Admin",
            description: "Nama tampilan admin saat ini adalah Admin SatuJanji.",
            icon: BadgeCheck,
          },
          {
            title: "Email Operasional",
            description: "Gunakan email bisnis untuk menerima pembaruan sistem.",
            icon: Mail,
          },
          {
            title: "Keamanan Akun",
            description: "Sesi admin dilindungi cookie autentikasi dan middleware.",
            icon: ShieldCheck,
          },
        ]}
      />
    </AdminShell>
  );
}
