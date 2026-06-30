import type { ReactNode } from "react";
import {
  AdminActionDialog,
  AdminDeleteButton,
  LeadActionDialog,
  LeadDeleteButton,
} from "@/components/admin/admin-action-dialog";
import type { AdminCollection } from "@/lib/admin-store";
import type { Lead } from "@/lib/leads-store";

type AdminPanelProps = {
  title: string;
  description: string;
  entity: string;
  collection?: AdminCollection;
  actionSlot?: ReactNode;
  children: ReactNode;
};

type AdminRowProps = {
  id: string;
  title: string;
  meta: string;
  status: string;
  entity: string;
  collection: AdminCollection;
};

export function AdminPanel({
  title,
  description,
  entity,
  collection,
  actionSlot,
  children,
}: AdminPanelProps) {
  return (
    <section className="rounded-[20px] border border-[#ECE8E2] bg-white p-5 shadow-[0_14px_40px_rgba(17,24,39,0.045)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#111827]">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6B7280]">
            {description}
          </p>
        </div>
        {actionSlot ??
          (collection ? (
            <AdminActionDialog
              action="add"
              entity={entity}
              collection={collection}
            />
          ) : null)}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function AdminRow({
  id,
  title,
  meta,
  status,
  entity,
  collection,
}: AdminRowProps) {
  return (
    <article className="flex flex-col gap-4 rounded-[20px] border border-[#ECE8E2] bg-[#FAFAF8] p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_50px_rgba(17,24,39,0.06)] sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-semibold text-[#111827]">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#6B7280]">
          {meta}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={status} />
        <AdminActionDialog
          action="edit"
          entity={entity}
          collection={collection}
          id={id}
          title={title}
          meta={meta}
          status={status}
        />
        <AdminDeleteButton
          id={id}
          entity={entity}
          collection={collection}
          title={title}
        />
      </div>
    </article>
  );
}

export function LeadsTable({ leads }: { leads: Lead[] }) {
  return (
    <>
      <div className="grid gap-3 md:hidden">
        {leads.map((lead) => (
          <article
            key={lead.id}
            className="rounded-[20px] border border-[#ECE8E2] bg-[#FAFAF8] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-[#111827]">{lead.name}</h3>
                <p className="mt-1 text-sm text-[#6B7280]">{lead.email}</p>
              </div>
              <StatusBadge status={lead.status} />
            </div>
            <dl className="mt-4 grid gap-2 text-sm text-[#6B7280]">
              <div className="flex justify-between gap-4">
                <dt>Paket</dt>
                <dd className="font-medium text-[#111827]">{lead.packageName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Tanggal</dt>
                <dd className="font-medium text-[#111827]">{lead.eventDate}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>WhatsApp</dt>
                <dd className="font-medium text-[#111827]">{lead.phone}</dd>
              </div>
            </dl>
            <div className="mt-4 flex items-center gap-3">
              <LeadActionDialog action="edit" lead={lead} />
              <LeadDeleteButton lead={lead} />
            </div>
          </article>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-[20px] border border-[#ECE8E2] md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#FAFAF8] text-xs font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
          <tr>
            <th className="px-4 py-3">Nama</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">WhatsApp</th>
            <th className="px-4 py-3">Paket</th>
            <th className="px-4 py-3">Tanggal</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#ECE8E2] bg-white">
          {leads.map((lead) => (
            <tr key={lead.id} className="transition hover:bg-[#F7F3EE]">
              <td className="px-4 py-4 font-semibold text-[#111827]">{lead.name}</td>
              <td className="px-4 py-4 text-[#6B7280]">{lead.email}</td>
              <td className="px-4 py-4 text-[#6B7280]">{lead.phone}</td>
              <td className="px-4 py-4 text-[#6B7280]">{lead.packageName}</td>
              <td className="px-4 py-4 text-[#6B7280]">{lead.eventDate}</td>
              <td className="px-4 py-4">
                <StatusBadge status={lead.status} />
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <LeadActionDialog action="edit" lead={lead} />
                  <LeadDeleteButton lead={lead} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const isActive = status === "Aktif";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isActive ? "bg-green-50 text-[#22C55E]" : "bg-[#F7F3EE] text-[#C79A4A]"
      }`}
    >
      {status}
    </span>
  );
}
