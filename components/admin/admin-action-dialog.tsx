"use client";

import { CheckCircle2, Pencil, Plus, Trash2, X } from "lucide-react";
import { FormEvent, useActionState, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  removeAdminItem,
  removeLead,
  saveAdminItem,
  saveLead,
} from "@/app/admin/actions";
import type { AdminCollection } from "@/lib/admin-store";
import type { Lead } from "@/lib/leads-store";

type AdminActionDialogProps = {
  action: "add" | "edit";
  entity: string;
  collection: AdminCollection;
  id?: string;
  title?: string;
  meta?: string;
  status?: string;
};

type DeleteButtonProps = {
  id: string;
  entity: string;
  collection: AdminCollection;
  title: string;
};

const initialState = {
  ok: false,
  message: "",
};

const toastDurationMs = 10000;

export function AdminActionDialog({
  action,
  entity,
  collection,
  id = "",
  title = "",
  meta = "",
  status = "Aktif",
}: AdminActionDialogProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [state, formAction, pending] = useActionState(saveAdminItem, initialState);
  const isEdit = action === "edit";

  useEffect(() => {
    if (!state.ok) {
      return;
    }

    setOpen(false);
    setSaved(true);
  }, [state.ok]);

  useEffect(() => {
    if (!saved) {
      return;
    }

    const timeout = window.setTimeout(() => setSaved(false), toastDurationMs);
    return () => window.clearTimeout(timeout);
  }, [saved]);

  return (
    <>
      {isEdit ? (
        <button
          type="button"
          className="focus-ring grid size-10 place-items-center rounded-xl border border-[#ECE8E2] bg-white text-[#6B7280] transition hover:border-[#C79A4A]/30 hover:bg-[#F7F3EE] hover:text-[#C79A4A]"
          aria-label={`Edit ${title}`}
          onClick={() => setOpen(true)}
        >
          <Pencil className="size-4" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#C79A4A] px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(199,154,74,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ad833b]"
          onClick={() => setOpen(true)}
        >
          <Plus className="size-4" aria-hidden="true" />
          Tambah
        </button>
      )}

      {open ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#111827]/45 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${action}-${entity}-title`}
        >
          <section className="max-h-[calc(100svh-2rem)] w-full max-w-lg overflow-y-auto rounded-[20px] border border-[#ECE8E2] bg-white p-4 text-[#111827] shadow-[0_24px_70px_rgba(17,24,39,0.18)] sm:p-6">
            <DialogHeader
              action={action}
              entity={entity}
              onClose={() => setOpen(false)}
            />

            <form action={formAction} className="mt-6 grid gap-4">
              <input type="hidden" name="collection" value={collection} />
              <input type="hidden" name="id" value={id} />
              <input type="hidden" name="path" value={pathname} />

              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Nama
                <input
                  name="title"
                  defaultValue={title}
                  placeholder={`Nama ${entity.toLowerCase()}`}
                  required
                  className="focus-ring min-h-11 rounded-xl border border-[#ECE8E2] bg-white px-4 text-sm font-normal text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#C79A4A]"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Deskripsi
                <textarea
                  name="meta"
                  defaultValue={meta}
                  placeholder="Tulis deskripsi singkat"
                  rows={4}
                  className="focus-ring resize-none rounded-xl border border-[#ECE8E2] bg-white px-4 py-3 text-sm font-normal leading-6 text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#C79A4A]"
                />
              </label>

              <StatusSelect defaultValue={status} />
              <FormMessage message={state.ok ? "" : state.message} />
              <DialogActions pending={pending} onCancel={() => setOpen(false)} />
            </form>
          </section>
        </div>
      ) : null}

      <SavedToast show={saved} message={state.message || "Perubahan tersimpan."} />
    </>
  );
}

export function AdminDeleteButton({
  id,
  entity,
  collection,
  title,
}: DeleteButtonProps) {
  const pathname = usePathname();
  const [, formAction] = useActionState(removeAdminItem, initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!window.confirm(`Hapus ${entity.toLowerCase()} "${title}"?`)) {
      event.preventDefault();
    }
  };

  return (
    <>
      <form action={formAction} onSubmit={handleSubmit}>
        <input type="hidden" name="collection" value={collection} />
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="path" value={pathname} />
        <button
          type="submit"
          className="focus-ring grid size-10 place-items-center rounded-xl border border-red-100 bg-white text-[#EF4444] transition hover:bg-red-50"
          aria-label={`Hapus ${title}`}
        >
          <Trash2 className="size-4" aria-hidden="true" />
        </button>
      </form>
    </>
  );
}

export function LeadActionDialog({
  action,
  lead,
}: {
  action: "add" | "edit";
  lead?: Lead;
}) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [state, formAction, pending] = useActionState(saveLead, initialState);
  const isEdit = action === "edit";

  useEffect(() => {
    if (!state.ok) {
      return;
    }

    setOpen(false);
    setSaved(true);
  }, [state.ok]);

  useEffect(() => {
    if (!saved) {
      return;
    }

    const timeout = window.setTimeout(() => setSaved(false), toastDurationMs);
    return () => window.clearTimeout(timeout);
  }, [saved]);

  return (
    <>
      {isEdit ? (
        <button
          type="button"
          className="focus-ring grid size-10 place-items-center rounded-xl border border-[#ECE8E2] bg-white text-[#6B7280] transition hover:border-[#C79A4A]/30 hover:bg-[#F7F3EE] hover:text-[#C79A4A]"
          aria-label={`Edit ${lead?.name ?? "lead"}`}
          onClick={() => setOpen(true)}
        >
          <Pencil className="size-4" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#C79A4A] px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(199,154,74,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ad833b]"
          onClick={() => setOpen(true)}
        >
          <Plus className="size-4" aria-hidden="true" />
          Tambah
        </button>
      )}

      {open ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#111827]/45 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${action}-lead-title`}
        >
          <section className="max-h-[calc(100svh-2rem)] w-full max-w-2xl overflow-y-auto rounded-[20px] border border-[#ECE8E2] bg-white p-4 text-[#111827] shadow-[0_24px_70px_rgba(17,24,39,0.18)] sm:p-6">
            <DialogHeader
              action={action}
              entity="Lead"
              onClose={() => setOpen(false)}
            />

            <form action={formAction} className="mt-5 grid gap-4 sm:mt-6">
              <input type="hidden" name="id" value={lead?.id ?? ""} />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nama" name="name" defaultValue={lead?.name} required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  defaultValue={lead?.email}
                  required
                />
                <Field
                  label="WhatsApp"
                  name="phone"
                  defaultValue={lead?.phone}
                  required
                />
                <Field
                  label="Paket"
                  name="packageName"
                  defaultValue={lead?.packageName}
                  required
                />
                <Field
                  label="Tanggal acara"
                  name="eventDate"
                  type="date"
                  defaultValue={lead?.eventDate === "-" ? "" : lead?.eventDate}
                />
                <StatusSelect defaultValue={lead?.status ?? "Baru"} />
              </div>

              <FormMessage message={state.ok ? "" : state.message} />
              <DialogActions pending={pending} onCancel={() => setOpen(false)} />
            </form>
          </section>
        </div>
      ) : null}

      <SavedToast show={saved} message={state.message || "Lead tersimpan."} />
    </>
  );
}

export function LeadDeleteButton({ lead }: { lead: Lead }) {
  const [, formAction] = useActionState(removeLead, initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!window.confirm(`Hapus lead "${lead.name}"?`)) {
      event.preventDefault();
    }
  };

  return (
    <>
      <form action={formAction} onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={lead.id} />
        <button
          type="submit"
          className="focus-ring grid size-10 place-items-center rounded-xl border border-red-100 bg-white text-[#EF4444] transition hover:bg-red-50"
          aria-label={`Hapus ${lead.name}`}
        >
          <Trash2 className="size-4" aria-hidden="true" />
        </button>
      </form>
    </>
  );
}

function DialogHeader({
  action,
  entity,
  onClose,
}: {
  action: "add" | "edit";
  entity: string;
  onClose: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {entity}
        </p>
        <h2
          id={`${action}-${entity}-title`}
          className="mt-2 text-xl font-semibold text-[#111827]"
        >
          {action === "edit" ? "Edit data" : "Tambah data baru"}
        </h2>
      </div>
      <button
        type="button"
        className="focus-ring grid size-9 shrink-0 place-items-center rounded-xl text-[#6B7280] hover:bg-[#F7F3EE] hover:text-[#111827]"
        aria-label="Tutup form"
        onClick={onClose}
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue = "",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-gray-700">
      {label}
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="focus-ring min-h-11 rounded-xl border border-[#ECE8E2] bg-white px-4 text-sm font-normal text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#C79A4A]"
      />
    </label>
  );
}

function StatusSelect({ defaultValue }: { defaultValue: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-gray-700">
      Status
      <select
        name="status"
        defaultValue={defaultValue}
        className="focus-ring min-h-11 rounded-xl border border-[#ECE8E2] bg-white px-4 text-sm font-normal text-[#111827] outline-none focus:border-[#C79A4A]"
      >
        <option>Aktif</option>
        <option>Draft</option>
        <option>Baru</option>
        <option>Dihubungi</option>
        <option>Selesai</option>
      </select>
    </label>
  );
}

function DialogActions({
  pending,
  onCancel,
}: {
  pending: boolean;
  onCancel: () => void;
}) {
  return (
    <div className="mt-2 grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        className="focus-ring inline-flex min-h-11 items-center justify-center rounded-xl border border-[#ECE8E2] bg-white px-4 text-sm font-semibold text-[#111827] transition hover:border-[#C79A4A]/30 hover:bg-[#F7F3EE]"
        onClick={onCancel}
      >
        Batal
      </button>
      <button
        type="submit"
        disabled={pending}
        className="focus-ring inline-flex min-h-11 items-center justify-center rounded-xl bg-[#C79A4A] px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(199,154,74,0.22)] transition hover:bg-[#ad833b] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Menyimpan..." : "Simpan"}
      </button>
    </div>
  );
}

function FormMessage({ message }: { message: string }) {
  if (!message) {
    return null;
  }

  return (
    <p role="alert" className="text-sm font-semibold text-[#EF4444]">
      {message}
    </p>
  );
}

function SavedToast({ show, message }: { show: boolean; message: string }) {
  if (!show) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed right-4 top-4 z-[110] flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-2xl border border-green-100 bg-white p-4 text-[#111827] shadow-[0_24px_70px_rgba(17,24,39,0.12)] sm:right-6 sm:top-6"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-green-50 text-[#22C55E]">
        <CheckCircle2 className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold">{message}</p>
        <p className="mt-1 text-sm leading-6 text-[#6B7280]">
          Data admin sudah diperbarui.
        </p>
      </div>
    </div>
  );
}
