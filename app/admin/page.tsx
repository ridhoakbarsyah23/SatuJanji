import type { Metadata } from "next";
import { ActivityTimeline } from "@/components/admin/ActivityTimeline";
import { AdminShell } from "@/components/admin/admin-shell";
import { LeadsPreview } from "@/components/admin/LeadsPreview";
import { QuickActionCard, type QuickAction } from "@/components/admin/QuickActionCard";
import { StatsGrid, type StatCardItem } from "@/components/admin/StatCard";
import { WelcomeCard } from "@/components/admin/WelcomeCard";
import { getAdminStats } from "@/lib/stores/admin-store";
import { getInvitations } from "@/lib/stores/invitations-store";
import { getLeads } from "@/lib/stores/leads-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Pusat pengelolaan konten dan permintaan pelanggan SatuJanji.",
};

const quickLinks = [
  {
    title: "Buat Undangan",
    description: "Isi detail pasangan, pilih desain, dan simpan sebagai draft.",
    href: "/admin/undangan/baru",
    icon: "invitation",
  },
  {
    title: "Atur Template",
    description: "Perbarui pilihan desain yang bisa digunakan untuk undangan.",
    href: "/admin/template",
    icon: "template",
  },
  {
    title: "Atur Paket Harga",
    description: "Sesuaikan layanan dan manfaat pada setiap paket.",
    href: "/admin/paket",
    icon: "package",
  },
  {
    title: "Lihat Permintaan",
    description: "Pantau calon pasangan yang mengajukan konsultasi terbaru.",
    href: "/admin/leads",
    icon: "leads",
  },
] satisfies QuickAction[];

export default async function AdminDashboardPage() {
  const [leads, adminStats, invitations] = await Promise.all([
    getLeads(),
    getAdminStats(),
    getInvitations(),
  ]);
  const stats: StatCardItem[] = [
    {
      label: "Undangan",
      value: invitations.length,
      helper: "Total undangan tersimpan",
      icon: "invitation",
    },
    {
      label: "Sudah terbit",
      value: invitations.filter((item) => item.status === "published").length,
      helper: "Dapat dibuka oleh tamu",
      icon: "published",
    },
    {
      label: "Permintaan",
      value: leads.length,
      helper: "Konsultasi pelanggan masuk",
      icon: "requests",
    },
    {
      label: "Template",
      value: adminStats.templates,
      helper: "Pilihan desain tersedia",
      icon: "template",
    },
  ];

  return (
    <AdminShell>
      <div className="grid gap-5 sm:gap-6">
        <WelcomeCard />
        <StatsGrid items={stats} />

        <section>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-950">Mulai dari sini</h2>
            <p className="mt-1 text-sm text-slate-500">
              Pilih pekerjaan yang ingin kamu lakukan.
            </p>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-2">
            {quickLinks.map((item, index) => (
              <QuickActionCard key={item.href} action={item} index={index} />
            ))}
          </div>
        </section>

        <div className="grid gap-5 sm:gap-6 2xl:grid-cols-[0.9fr_1.1fr]">
          <ActivityTimeline />
          <LeadsPreview leads={leads} />
        </div>
      </div>
    </AdminShell>
  );
}
