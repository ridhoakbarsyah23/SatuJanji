"use client";

import { CalendarDays, HeartHandshake, ImagePlus, MapPin, Palette, Save } from "lucide-react";
import { useState } from "react";
import { saveInvitationAction } from "@/app/admin/undangan/actions";
import { culturalTemplates } from "@/lib/cultural-templates";
import type { Invitation } from "@/lib/invitations-store";

type InvitationEditorProps = {
  invitation?: Invitation;
  error?: string;
};

const inputClass =
  "mt-2 min-h-11 w-full rounded-xl border border-[#DED8CF] bg-white px-3.5 py-2.5 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C79A4A] focus:ring-4 focus:ring-[#C79A4A]/10";
const labelClass = "text-sm font-semibold text-[#374151]";

const defaultStory = [
  { year: "2022", title: "Pertemuan", text: "Tuliskan awal pertemuan kalian." },
  { year: "2024", title: "Satu Tujuan", text: "Ceritakan perjalanan yang membawa kalian semakin dekat." },
  { year: "2026", title: "Hari Bahagia", text: "Bagikan cerita menuju hari pernikahan." },
];

export function InvitationEditor({ invitation, error }: InvitationEditorProps) {
  const story = invitation?.story.length === 3 ? invitation.story : defaultStory;
  const [coverPreview, setCoverPreview] = useState(invitation?.coverImage ?? "");
  const [galleryPreview, setGalleryPreview] = useState(invitation?.galleryImages ?? []);

  function previewCover(file?: File) {
    if (!file) return;
    if (coverPreview.startsWith("blob:")) URL.revokeObjectURL(coverPreview);
    setCoverPreview(URL.createObjectURL(file));
  }

  function previewGallery(files: FileList | null) {
    if (!files?.length) return;
    galleryPreview.forEach((source) => {
      if (source.startsWith("blob:")) URL.revokeObjectURL(source);
    });
    setGalleryPreview(Array.from(files).slice(0, 6).map((file) => URL.createObjectURL(file)));
  }

  return (
    <form action={saveInvitationAction} className="grid gap-5">
      {invitation ? <input type="hidden" name="id" value={invitation.id} /> : null}

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      ) : null}

      <EditorSection
        icon={Palette}
        title="Identitas undangan"
        description="Atur alamat publik, template, dan status penayangan."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className={labelClass}>
            Slug URL
            <input className={inputClass} name="slug" defaultValue={invitation?.slug} placeholder="arga-ratri" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" required />
            <span className="mt-1.5 block text-xs font-normal text-[#6B7280]">Contoh URL: /undangan/arga-ratri</span>
          </label>
          <label className={labelClass}>
            Template
            <select className={inputClass} name="templateSlug" defaultValue={invitation?.templateSlug ?? culturalTemplates[0].slug} required>
              {culturalTemplates.map((template) => (
                <option key={template.slug} value={template.slug}>{template.title} — {template.region}</option>
              ))}
            </select>
          </label>
          <label className={labelClass}>
            Status
            <select className={inputClass} name="status" defaultValue={invitation?.status ?? "draft"}>
              <option value="draft">Draft — hanya dapat dipreview admin</option>
              <option value="published">Terbit — dapat dibuka publik</option>
            </select>
          </label>
        </div>
      </EditorSection>

      <EditorSection icon={HeartHandshake} title="Pasangan" description="Informasi utama yang tampil pada cover dan bagian mempelai.">
        <div className="grid gap-4 md:grid-cols-2">
          <TextField name="groom" label="Nama mempelai pria" defaultValue={invitation?.groom} placeholder="Arga" required />
          <TextField name="bride" label="Nama mempelai wanita" defaultValue={invitation?.bride} placeholder="Ratri" required />
          <TextField name="groomParents" label="Keterangan orang tua mempelai pria" defaultValue={invitation?.groomParents} placeholder="Putra dari Bapak ... & Ibu ..." />
          <TextField name="brideParents" label="Keterangan orang tua mempelai wanita" defaultValue={invitation?.brideParents} placeholder="Putri dari Bapak ... & Ibu ..." />
        </div>
        <TextArea name="greeting" label="Kalimat pembuka" defaultValue={invitation?.greeting} placeholder="Dengan memohon rahmat dan ridho Tuhan Yang Maha Esa..." />
        <TextArea name="quote" label="Kutipan pasangan" defaultValue={invitation?.quote} placeholder="Dua hati pulang pada janji yang sama." />
      </EditorSection>

      <EditorSection icon={CalendarDays} title="Waktu dan lokasi" description="Pastikan detail acara sudah sesuai sebelum undangan diterbitkan.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <TextField name="eventDate" type="date" label="Tanggal acara" defaultValue={invitation?.eventDate} required />
          <TextField name="ceremonyTime" label="Waktu akad" defaultValue={invitation?.ceremonyTime} placeholder="08.00 - 10.00" />
          <TextField name="receptionTime" label="Waktu resepsi" defaultValue={invitation?.receptionTime} placeholder="11.00 - 14.00" />
          <label className={labelClass}>
            Zona waktu
            <select className={inputClass} name="timezone" defaultValue={invitation?.timezone ?? "WIB"}>
              <option value="WIB">WIB</option>
              <option value="WITA">WITA</option>
              <option value="WIT">WIT</option>
            </select>
          </label>
          <TextField name="venue" label="Nama lokasi" defaultValue={invitation?.venue} placeholder="Pendopo Agung" required />
          <TextField name="address" label="Alamat lengkap" defaultValue={invitation?.address} placeholder="Jalan, kota, provinsi" required />
        </div>
      </EditorSection>

      <EditorSection icon={ImagePlus} title="Foto prewedding" description="Pilih foto langsung dari perangkat. Format JPG, PNG, atau WebP dengan ukuran maksimal 4 MB per foto.">
        <input type="hidden" name="currentCoverImage" value={invitation?.coverImage ?? ""} />
        <input type="hidden" name="currentGalleryImages" value={invitation?.galleryImages?.join("\n") ?? ""} />
        <label className={labelClass}>
          Foto utama
          <input
            className={`${inputClass} cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-[#F7F3EE] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#C79A4A]`}
            type="file"
            name="coverImageFile"
            accept="image/jpeg,image/png,image/webp"
            onChange={(event) => previewCover(event.target.files?.[0])}
          />
          <span className="mt-1.5 block text-xs font-normal text-[#6B7280]">Foto baru akan menggantikan foto utama yang tersimpan.</span>
        </label>

        {coverPreview ? (
          <div
            className="aspect-[16/7] min-h-48 overflow-hidden rounded-2xl border border-[#ECE8E2] bg-[#F7F3EE] bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(17,24,39,.2), rgba(17,24,39,.35)), url(${JSON.stringify(coverPreview)})` }}
            role="img"
            aria-label="Preview foto utama prewedding"
          />
        ) : (
          <div className="grid min-h-40 place-items-center rounded-2xl border border-dashed border-[#DED8CF] bg-[#FAFAF8] px-4 text-center text-sm text-[#9CA3AF]">Preview foto utama akan tampil di sini.</div>
        )}

        {invitation?.coverImage ? (
          <label className="flex items-center gap-2 text-sm text-[#6B7280]">
            <input type="checkbox" name="removeCoverImage" className="size-4 accent-[#C79A4A]" onChange={(event) => setCoverPreview(event.target.checked ? "" : invitation.coverImage ?? "")} />
            Hapus foto utama yang tersimpan
          </label>
        ) : null}

        <label className={labelClass}>
          Foto galeri
          <input
            className={`${inputClass} cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-[#F7F3EE] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#C79A4A]`}
            type="file"
            name="galleryImageFiles"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={(event) => previewGallery(event.target.files)}
          />
          <span className="mt-1.5 block text-xs font-normal text-[#6B7280]">Pilih maksimal enam foto. Pilihan baru akan menggantikan galeri lama.</span>
        </label>

        {galleryPreview.length ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {galleryPreview.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="aspect-[4/3] rounded-xl border border-[#ECE8E2] bg-[#F7F3EE] bg-cover bg-center"
                style={{ backgroundImage: `url(${JSON.stringify(image)})` }}
                role="img"
                aria-label={`Preview foto galeri ${index + 1}`}
              />
            ))}
          </div>
        ) : null}

        {invitation?.galleryImages?.length ? (
          <label className="flex items-center gap-2 text-sm text-[#6B7280]">
            <input type="checkbox" name="removeGalleryImages" className="size-4 accent-[#C79A4A]" onChange={(event) => setGalleryPreview(event.target.checked ? [] : invitation.galleryImages ?? [])} />
            Hapus seluruh foto galeri yang tersimpan
          </label>
        ) : null}
      </EditorSection>

      <EditorSection icon={MapPin} title="Kisah dan galeri" description="Tiga momen utama membentuk timeline cerita pasangan.">
        <div className="grid gap-4 lg:grid-cols-3">
          {story.map((item, index) => (
            <div key={index} className="rounded-2xl border border-[#ECE8E2] bg-[#FAFAF8] p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#C79A4A]">Momen {index + 1}</p>
              <TextField name={`storyYear${index}`} label="Tahun" defaultValue={item.year} placeholder="2024" required />
              <TextField name={`storyTitle${index}`} label="Judul" defaultValue={item.title} placeholder="Pertemuan" required />
              <TextArea name={`storyText${index}`} label="Cerita" defaultValue={item.text} placeholder="Tuliskan cerita singkat..." required />
            </div>
          ))}
        </div>
        <TextField name="galleryLabels" label="Label galeri" defaultValue={invitation?.galleryLabels.join(", ") ?? "Bahagia, Bersama, Selamanya"} placeholder="Bahagia, Bersama, Selamanya" />
      </EditorSection>

      <div className="sticky bottom-3 z-10 flex justify-end rounded-2xl border border-[#ECE8E2] bg-white/95 p-3 shadow-[0_14px_45px_rgba(17,24,39,0.12)] backdrop-blur">
        <button type="submit" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#111827] px-5 text-sm font-semibold text-white transition hover:bg-[#C79A4A]">
          <Save className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
          Simpan Undangan
        </button>
      </div>
    </form>
  );
}

function EditorSection({ icon: Icon, title, description, children }: { icon: typeof Palette; title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[20px] border border-[#ECE8E2] bg-white p-4 shadow-[0_14px_40px_rgba(17,24,39,0.04)] sm:p-6">
      <div className="mb-5 flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#C79A4A]/15 bg-[#F7F3EE] text-[#C79A4A]">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div><h2 className="font-semibold text-[#111827]">{title}</h2><p className="mt-1 text-sm leading-6 text-[#6B7280]">{description}</p></div>
      </div>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}

function TextField({ label, name, defaultValue, placeholder, type = "text", required = false }: { label: string; name: string; defaultValue?: string; placeholder?: string; type?: string; required?: boolean }) {
  return <label className={labelClass}>{label}<input className={inputClass} type={type} name={name} defaultValue={defaultValue} placeholder={placeholder} required={required} /></label>;
}

function TextArea({ label, name, defaultValue, placeholder, required = false }: { label: string; name: string; defaultValue?: string; placeholder?: string; required?: boolean }) {
  return <label className={labelClass}>{label}<textarea className={`${inputClass} min-h-24 resize-y`} name={name} defaultValue={defaultValue} placeholder={placeholder} required={required} /></label>;
}
