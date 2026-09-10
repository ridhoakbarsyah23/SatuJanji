"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  saveInvitation,
  type InvitationInput,
  type InvitationStatus,
} from "@/lib/invitations-store";
import { readUploadedFiles, storePreweddingFile } from "@/lib/prewedding-storage";

function readString(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function readStatus(formData: FormData): InvitationStatus {
  return readString(formData, "status") === "published" ? "published" : "draft";
}

export async function saveInvitationAction(formData: FormData) {
  const id = readString(formData, "id");
  const target = id ? `/admin/undangan/${id}/edit` : "/admin/undangan/baru";
  let coverImage = formData.get("removeCoverImage") === "on"
    ? ""
    : readString(formData, "currentCoverImage");
  let galleryImages = formData.get("removeGalleryImages") === "on"
    ? []
    : readString(formData, "currentGalleryImages")
        .split(/\r?\n/)
        .map((item) => item.trim())
        .filter(Boolean);

  try {
    const [coverFile] = readUploadedFiles(formData, "coverImageFile", 1);
    const galleryFiles = readUploadedFiles(formData, "galleryImageFiles", 6);
    if (coverFile) coverImage = await storePreweddingFile(coverFile);
    if (galleryFiles.length) galleryImages = await Promise.all(galleryFiles.map(storePreweddingFile));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Foto gagal diunggah.";
    redirect(`${target}?error=${encodeURIComponent(message)}`);
  }

  const input: InvitationInput = {
    slug: readString(formData, "slug").toLowerCase(),
    templateSlug: readString(formData, "templateSlug"),
    status: readStatus(formData),
    groom: readString(formData, "groom"),
    bride: readString(formData, "bride"),
    groomParents: readString(formData, "groomParents"),
    brideParents: readString(formData, "brideParents"),
    eventDate: readString(formData, "eventDate"),
    timezone: readString(formData, "timezone") || "WIB",
    venue: readString(formData, "venue"),
    address: readString(formData, "address"),
    ceremonyTime: readString(formData, "ceremonyTime"),
    receptionTime: readString(formData, "receptionTime"),
    quote: readString(formData, "quote"),
    greeting: readString(formData, "greeting"),
    story: [0, 1, 2].map((index) => ({
      year: readString(formData, `storyYear${index}`),
      title: readString(formData, `storyTitle${index}`),
      text: readString(formData, `storyText${index}`),
    })),
    galleryLabels: readString(formData, "galleryLabels")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 6),
    coverImage,
    galleryImages: galleryImages.slice(0, 6),
  };

  let invitationId = id;
  try {
    const invitation = await saveInvitation(input, id || undefined);
    invitationId = invitation.id;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Undangan gagal disimpan.";
    redirect(`${target}?error=${encodeURIComponent(message)}`);
  }

  revalidatePath("/admin");
  revalidatePath("/admin/undangan");
  revalidatePath(`/admin/undangan/${invitationId}/preview`);
  revalidatePath(`/undangan/${input.slug}`);
  redirect("/admin/undangan?notice=saved");
}
