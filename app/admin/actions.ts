"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createAdminItem,
  deleteAdminItem,
  type AdminCollection,
  updateAdminItem,
} from "@/lib/admin-store";
import { addLead, deleteLead, updateLead } from "@/lib/leads-store";

type ActionState = {
  ok: boolean;
  message: string;
};

function readString(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function readCollection(formData: FormData): AdminCollection {
  const collection = readString(formData, "collection");

  if (!["templates", "plans", "faqs"].includes(collection)) {
    throw new Error("Tipe data admin tidak valid.");
  }

  return collection as AdminCollection;
}

function readAdminPath(formData: FormData) {
  return readString(formData, "path") || "/admin";
}

export async function saveAdminItem(
  _state: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const collection = readCollection(formData);
  const id = readString(formData, "id");
  const title = readString(formData, "title");
  const meta = readString(formData, "meta");
  const status = readString(formData, "status") || "Aktif";
  const path = readAdminPath(formData);

  if (!title) {
    return { ok: false, message: "Nama wajib diisi." };
  }

  if (id) {
    await updateAdminItem(collection, id, { title, meta, status });
  } else {
    await createAdminItem(collection, { title, meta, status });
  }

  revalidatePath(path);
  revalidatePath("/admin");
  revalidatePath("/");
  return { ok: true, message: "Perubahan tersimpan." };
}

export async function removeAdminItem(
  _state: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const collection = readCollection(formData);
  const id = readString(formData, "id");
  const path = readAdminPath(formData);

  if (!id) {
    return { ok: false, message: "Data yang akan dihapus tidak ditemukan." };
  }

  if (id) {
    await deleteAdminItem(collection, id);
    revalidatePath(path);
    revalidatePath("/admin");
    revalidatePath("/");
  }

  redirect(`${path}?notice=deleted`);
}

export async function saveLead(
  _state: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const id = readString(formData, "id");
  const name = readString(formData, "name");
  const email = readString(formData, "email").toLowerCase();
  const phone = readString(formData, "phone");
  const packageName = readString(formData, "packageName");
  const eventDate = readString(formData, "eventDate");
  const status = readString(formData, "status") || "Baru";

  if (!name || !email || !phone || !packageName) {
    return { ok: false, message: "Nama, email, WhatsApp, dan paket wajib diisi." };
  }

  if (id) {
    await updateLead(id, { name, email, phone, packageName, eventDate, status });
  } else {
    await addLead({ name, email, phone, packageName, eventDate, status });
  }

  revalidatePath("/admin/leads");
  revalidatePath("/admin");
  return { ok: true, message: "Lead tersimpan." };
}

export async function removeLead(
  _state: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const id = readString(formData, "id");

  if (!id) {
    return { ok: false, message: "Lead yang akan dihapus tidak ditemukan." };
  }

  if (id) {
    await deleteLead(id);
    revalidatePath("/admin/leads");
    revalidatePath("/admin");
  }

  redirect("/admin/leads?notice=deleted");
}
