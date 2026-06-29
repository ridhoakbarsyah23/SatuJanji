"use client";

import { CheckCircle2, Pencil, Plus, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type AdminActionDialogProps = {
  action: "add" | "edit";
  entity: string;
  title?: string;
  meta?: string;
  status?: string;
};

export function AdminActionDialog({
  action,
  entity,
  title = "",
  meta = "",
  status = "Aktif",
}: AdminActionDialogProps) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const isEdit = action === "edit";

  useEffect(() => {
    if (!saved) {
      return;
    }

    const timeout = window.setTimeout(() => setSaved(false), 3200);
    return () => window.clearTimeout(timeout);
  }, [saved]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(false);
    setSaved(true);
  };

  return (
    <>
      {isEdit ? (
        <button
          type="button"
          className="focus-ring grid size-10 place-items-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-gold/20 hover:bg-cream hover:text-gold"
          aria-label={`Edit ${title}`}
          onClick={() => setOpen(true)}
        >
          <Pencil className="size-4" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#a87f36]"
          onClick={() => setOpen(true)}
        >
          <Plus className="size-4" aria-hidden="true" />
          Tambah
        </button>
      )}

      {open ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-gray-950/45 px-5 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${action}-${entity}-title`}
        >
          <section className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-5 text-gray-950 shadow-soft sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {entity}
                </p>
                <h2
                  id={`${action}-${entity}-title`}
                  className="mt-2 text-xl font-semibold text-gray-950"
                >
                  {isEdit ? "Edit data" : "Tambah data baru"}
                </h2>
              </div>
              <button
                type="button"
                className="focus-ring grid size-9 shrink-0 place-items-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                aria-label="Tutup form"
                onClick={() => setOpen(false)}
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Nama
                <input
                  name="title"
                  defaultValue={title}
                  placeholder={`Nama ${entity.toLowerCase()}`}
                  required
                  className="focus-ring min-h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm font-normal text-gray-900 outline-none placeholder:text-gray-400"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Deskripsi
                <textarea
                  name="meta"
                  defaultValue={meta}
                  placeholder="Tulis deskripsi singkat"
                  rows={4}
                  className="focus-ring resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-normal leading-6 text-gray-900 outline-none placeholder:text-gray-400"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Status
                <select
                  name="status"
                  defaultValue={status}
                  className="focus-ring min-h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm font-normal text-gray-900 outline-none"
                >
                  <option>Aktif</option>
                  <option>Draft</option>
                  <option>Baru</option>
                </select>
              </label>

              <div className="mt-2 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-800 transition hover:border-gold/20 hover:bg-cream hover:text-gray-950"
                  onClick={() => setOpen(false)}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-4 text-sm font-semibold text-white shadow-glow transition hover:bg-[#a87f36]"
                >
                  Simpan
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : null}

      {saved ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-4 z-[110] flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-lg border border-green-100 bg-white p-4 text-gray-950 shadow-soft sm:right-6 sm:top-6"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-green-50 text-green-700">
            <CheckCircle2 className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold">Perubahan tersimpan</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Draft {entity.toLowerCase()} sudah siap disambungkan ke database.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
