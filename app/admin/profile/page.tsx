import type { Metadata } from "next";
import { BadgeCheck, Mail, ShieldCheck } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { SettingsSurface } from "@/components/admin/SettingsSurface";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Profil Admin",
  description: "Informasi identitas dan keamanan pengelola SatuJanji.",
};

export default function AdminProfilePage() {
  return (
    <AdminShell>
      <SettingsSurface
        eyebrow="Profil"
        title="Admin SatuJanji"
        description="Tinjau identitas pengelola, akses dashboard, dan informasi kontak operasional."
        cards={[
          {
            title: "Identitas Admin",
            description: "Identitas ini digunakan untuk mewakili pengelola layanan SatuJanji.",
            icon: BadgeCheck,
          },
          {
            title: "Email Operasional",
            description: "Gunakan email bisnis aktif untuk kebutuhan komunikasi dan pemulihan akses.",
            icon: Mail,
          },
          {
            title: "Keamanan Akun",
            description: "Akses pengelola dilindungi melalui sesi autentikasi yang aman.",
            icon: ShieldCheck,
          },
        ]}
      />
    </AdminShell>
  );
}
