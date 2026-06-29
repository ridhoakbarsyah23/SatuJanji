import type { Metadata } from "next";
import {
  HelpCircle,
  LayoutTemplate,
  PackageCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { StatsGrid } from "@/components/admin/admin-content";
import { adminFaqs, adminPlans, adminTemplates } from "@/lib/admin-data";
import { getLeads } from "@/lib/leads-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Dashboard admin SatuJanji untuk mengelola konten dan calon customer.",
};

const quickLinks = [
  {
    title: "Kelola Template",
    description: "Atur nama, tema, tag, dan status template yang tampil di landing.",
    href: "/admin/template",
    icon: LayoutTemplate,
  },
  {
    title: "Kelola Paket",
    description: "Ubah deskripsi paket dan daftar fitur yang ditawarkan.",
    href: "/admin/paket",
    icon: PackageCheck,
  },
  {
    title: "Kelola FAQ",
    description: "Perbarui pertanyaan yang sering ditanyakan calon customer.",
    href: "/admin/faq",
    icon: HelpCircle,
  },
  {
    title: "Leads Pendaftar",
    description: "Pantau calon customer yang masuk dari halaman daftar.",
    href: "/admin/leads",
    icon: UsersRound,
  },
];

export default async function AdminDashboardPage() {
  const leads = await getLeads();
  const stats = [
    { label: "Template", value: adminTemplates.length, icon: LayoutTemplate },
    { label: "Paket", value: adminPlans.length, icon: PackageCheck },
    { label: "FAQ", value: adminFaqs.length, icon: HelpCircle },
    { label: "Leads", value: leads.length, icon: UsersRound },
  ];

  return (
    <AdminShell>
      <div className="grid gap-6">
        <StatsGrid items={stats} />

        <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-950">Ringkasan Admin</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Pilih area pengelolaan untuk membuka halaman khusus sesuai isi data.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {quickLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4 transition hover:border-gold/20 hover:bg-cream"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white text-gold">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-950">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-gray-600">
                      {item.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
