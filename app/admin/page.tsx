import type { Metadata } from "next";
import { ActivityTimeline } from "@/components/admin/ActivityTimeline";
import { AdminShell } from "@/components/admin/admin-shell";
import { LeadsPreview } from "@/components/admin/LeadsPreview";
import { QuickActionCard, type QuickAction } from "@/components/admin/QuickActionCard";
import { StatsGrid, type StatCardItem } from "@/components/admin/StatCard";
import { WelcomeCard } from "@/components/admin/WelcomeCard";
import { getAdminStats } from "@/lib/admin-store";
import { getLeads } from "@/lib/leads-store";

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
    title: "Kelola Template",
    description: "Perbarui koleksi desain undangan yang ditampilkan kepada pelanggan.",
    href: "/admin/template",
    icon: "template",
  },
  {
    title: "Kelola Paket",
    description: "Atur pilihan layanan dan manfaat yang ditawarkan.",
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
  const leads = await getLeads();
  const adminStats = await getAdminStats();
  const stats: StatCardItem[] = [
    {
      label: "Template",
      value: adminStats.templates,
      trend: "Total tersedia",
      icon: "template",
    },
    {
      label: "Paket",
      value: adminStats.plans,
      trend: "Total tersedia",
      icon: "package",
    },
    {
      label: "FAQ",
      value: adminStats.faqs,
      trend: "Total tersedia",
      icon: "faq",
    },
    {
      label: "Permintaan",
      value: leads.length,
      trend: "Total masuk",
      icon: "leads",
    },
  ];

  return (
    <AdminShell>
      <div className="grid gap-5 sm:gap-6">
        <WelcomeCard />
        <StatsGrid items={stats} />

        <section>
          <div>
            <h2 className="text-lg font-semibold text-[#111827]">Aksi Cepat</h2>
            <p className="mt-1 text-sm text-[#6B7280]">
              Buka area pengelolaan utama dengan cepat.
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
