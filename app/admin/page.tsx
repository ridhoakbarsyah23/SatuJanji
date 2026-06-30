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
  title: "Admin Dashboard",
  description: "Dashboard admin SatuJanji untuk mengelola konten dan calon customer.",
};

const quickLinks = [
  {
    title: "Tambah Template",
    description: "Kelola koleksi desain undangan yang tampil di landing.",
    href: "/admin/template",
    icon: "template",
  },
  {
    title: "Tambah Paket",
    description: "Atur pilihan paket dan value yang ditawarkan.",
    href: "/admin/paket",
    icon: "package",
  },
  {
    title: "Tambah FAQ",
    description: "Perbarui pertanyaan penting untuk calon pelanggan.",
    href: "/admin/faq",
    icon: "faq",
  },
  {
    title: "Lihat Leads",
    description: "Pantau calon customer terbaru dari halaman daftar.",
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
      trend: "+2 minggu ini",
      icon: "template",
    },
    {
      label: "Paket",
      value: adminStats.plans,
      trend: "+1 minggu ini",
      icon: "package",
    },
    {
      label: "FAQ",
      value: adminStats.faqs,
      trend: "+3 minggu ini",
      icon: "faq",
    },
    {
      label: "Leads",
      value: leads.length,
      trend: "+5 minggu ini",
      icon: "leads",
    },
  ];

  return (
    <AdminShell>
      <div className="grid gap-6">
        <WelcomeCard />
        <StatsGrid items={stats} />

        <section>
          <div>
            <h2 className="text-lg font-semibold text-[#111827]">Aksi Cepat</h2>
            <p className="mt-1 text-sm text-[#6B7280]">
              Buka area pengelolaan utama dengan cepat.
            </p>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {quickLinks.map((item, index) => (
              <QuickActionCard key={item.href} action={item} index={index} />
            ))}
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <ActivityTimeline />
          <LeadsPreview leads={leads} />
        </div>
      </div>
    </AdminShell>
  );
}
