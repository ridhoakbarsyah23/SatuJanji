import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { AdminActionDialog } from "@/components/admin/admin-action-dialog";

type StatItem = {
  label: string;
  value: number;
  icon: LucideIcon;
};

type LeadItem = {
  id?: string;
  name: string;
  email?: string;
  phone: string;
  packageName: string;
  eventDate: string;
  status: string;
  createdAt?: string;
};

type AdminPanelProps = {
  title: string;
  description: string;
  entity: string;
  children: ReactNode;
};

type AdminRowProps = {
  title: string;
  meta: string;
  status: string;
  entity?: string;
};

export function StatsGrid({ items }: { items: StatItem[] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.label}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="mt-2 text-3xl font-bold text-gray-950">
                  {item.value}
                </p>
              </div>
              <span className="grid size-11 place-items-center rounded-lg bg-cream text-gold">
                <Icon className="size-5" aria-hidden="true" />
              </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export function AdminPanel({
  title,
  description,
  entity,
  children,
}: AdminPanelProps) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-950">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-gray-600">{description}</p>
        </div>
        <AdminActionDialog action="add" entity={entity} />
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function AdminRow({
  title,
  meta,
  status,
  entity = "Data",
}: AdminRowProps) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-semibold text-gray-950">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">{meta}</p>
      </div>
      <div className="flex items-center gap-3">
        <StatusBadge status={status} />
        <AdminActionDialog
          action="edit"
          entity={entity}
          title={title}
          meta={meta}
          status={status}
        />
      </div>
    </article>
  );
}

export function LeadsTable({ leads }: { leads: LeadItem[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full min-w-[42rem] text-left text-sm">
        <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
          <tr>
            <th className="px-4 py-3">Nama</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">WhatsApp</th>
            <th className="px-4 py-3">Paket</th>
            <th className="px-4 py-3">Tanggal</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {leads.map((lead) => (
            <tr key={lead.id ?? `${lead.name}-${lead.phone}`}>
              <td className="px-4 py-4 font-semibold text-gray-950">{lead.name}</td>
              <td className="px-4 py-4 text-gray-600">{lead.email ?? "-"}</td>
              <td className="px-4 py-4 text-gray-600">{lead.phone}</td>
              <td className="px-4 py-4 text-gray-600">{lead.packageName}</td>
              <td className="px-4 py-4 text-gray-600">{lead.eventDate}</td>
              <td className="px-4 py-4">
                <StatusBadge status={lead.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const isActive = status === "Aktif";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isActive ? "bg-green-50 text-green-700" : "bg-cream text-gold"
      }`}
    >
      {status}
    </span>
  );
}
