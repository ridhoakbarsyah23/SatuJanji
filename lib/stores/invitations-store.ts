import { promises as fs } from "fs";
import path from "path";
import {
  getCulturalTemplate,
  type CulturalTemplate,
} from "@/lib/content/cultural-templates";

export type InvitationStatus = "draft" | "published";

export type InvitationStory = {
  year: string;
  title: string;
  text: string;
};

export type Invitation = {
  id: string;
  slug: string;
  templateSlug: string;
  status: InvitationStatus;
  groom: string;
  bride: string;
  groomParents: string;
  brideParents: string;
  eventDate: string;
  timezone: string;
  venue: string;
  address: string;
  ceremonyTime: string;
  receptionTime: string;
  quote: string;
  greeting: string;
  story: InvitationStory[];
  galleryLabels: string[];
  coverImage?: string;
  galleryImages?: string[];
  createdAt: string;
  updatedAt: string;
};

export type InvitationInput = Omit<Invitation, "id" | "createdAt" | "updatedAt">;

const invitationsPath = path.join(process.cwd(), "data", "invitations.json");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const seedInvitations: Invitation[] = [
  {
    id: "invitation-arga-ratri",
    slug: "arga-ratri",
    templateSlug: "sekaring-jawi",
    status: "published",
    groom: "Arga",
    bride: "Ratri",
    groomParents: "Putra dari Bapak Wibowo & Ibu Larasati",
    brideParents: "Putri dari Bapak Danang & Ibu Sekar",
    eventDate: "2026-12-12",
    timezone: "WIB",
    venue: "Pendopo Agung Ambarukmo",
    address: "Jl. Laksda Adisucipto, Yogyakarta",
    ceremonyTime: "08.00 - 10.00",
    receptionTime: "11.00 - 14.00",
    quote: "Dua hati pulang pada janji yang sama.",
    greeting:
      "Dengan memohon rahmat dan ridho Tuhan Yang Maha Esa, kami mengundang Anda untuk menjadi bagian dari hari bahagia kami.",
    story: [
      {
        year: "2021",
        title: "Pertemuan",
        text: "Sebuah pertemuan sederhana membuka percakapan yang tak pernah benar-benar usai.",
      },
      {
        year: "2024",
        title: "Satu Tujuan",
        text: "Kami belajar bertumbuh, saling menjaga, dan memilih arah yang sama.",
      },
      {
        year: "2026",
        title: "Hari Bahagia",
        text: "Kini kami mengikat janji, ditemani doa keluarga dan sahabat tercinta.",
      },
    ],
    galleryLabels: ["Teduh", "Selaras", "Lestari"],
    coverImage: "",
    galleryImages: [],
    createdAt: "2026-09-10T00:00:00.000Z",
    updatedAt: "2026-09-10T00:00:00.000Z",
  },
];

function cloneSeeds() {
  return structuredClone(seedInvitations);
}

function assertStoredInvitation(value: unknown): value is Invitation {
  if (!value || typeof value !== "object") return false;
  const invitation = value as Partial<Invitation>;
  return Boolean(
    invitation.id &&
      invitation.slug &&
      invitation.templateSlug &&
      invitation.groom &&
      invitation.bride &&
      invitation.eventDate &&
      Array.isArray(invitation.story) &&
      Array.isArray(invitation.galleryLabels) &&
      (invitation.galleryImages === undefined || Array.isArray(invitation.galleryImages)),
  );
}

export async function getInvitations(): Promise<Invitation[]> {
  try {
    const raw = await fs.readFile(invitationsPath, "utf8");
    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed) || !parsed.every(assertStoredInvitation)) {
      throw new Error("Format data undangan tidak valid.");
    }

    return parsed.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return cloneSeeds();
    }
    throw error;
  }
}

export async function getInvitationById(id: string) {
  const invitations = await getInvitations();
  return invitations.find((invitation) => invitation.id === id);
}

export async function getInvitationBySlug(
  slug: string,
  options: { includeDraft?: boolean } = {},
) {
  const invitations = await getInvitations();
  return invitations.find(
    (invitation) =>
      invitation.slug === slug &&
      (options.includeDraft || invitation.status === "published"),
  );
}

function validateInput(input: InvitationInput) {
  if (!slugPattern.test(input.slug)) {
    throw new Error("Slug hanya boleh berisi huruf kecil, angka, dan tanda hubung.");
  }
  if (!getCulturalTemplate(input.templateSlug)) {
    throw new Error("Template yang dipilih tidak tersedia.");
  }
  if (!input.groom || !input.bride || !input.eventDate || !input.venue || !input.address) {
    throw new Error("Nama pasangan, tanggal, lokasi, dan alamat wajib diisi.");
  }
  if (Number.isNaN(Date.parse(`${input.eventDate}T00:00:00`))) {
    throw new Error("Tanggal acara tidak valid.");
  }
  if (input.story.some((item) => !item.year || !item.title || !item.text)) {
    throw new Error("Setiap bagian kisah harus diisi lengkap.");
  }
  const imageSources = [input.coverImage, ...(input.galleryImages ?? [])].filter(Boolean) as string[];
  if (imageSources.some((source) => !isAllowedImageSource(source))) {
    throw new Error("Foto harus menggunakan URL HTTPS atau path lokal yang diawali dengan /.");
  }
}

function isAllowedImageSource(source: string) {
  if (source.length > 2048) return false;
  if (source.startsWith("/")) {
    return /^\/[a-zA-Z0-9/_\-.%]+$/.test(source);
  }
  try {
    return new URL(source).protocol === "https:";
  } catch {
    return false;
  }
}

async function persistInvitations(invitations: Invitation[]) {
  await fs.mkdir(path.dirname(invitationsPath), { recursive: true });
  await fs.writeFile(invitationsPath, JSON.stringify(invitations, null, 2), "utf8");
}

export async function saveInvitation(input: InvitationInput, id?: string) {
  validateInput(input);
  const invitations = await getInvitations();
  const conflicting = invitations.find(
    (invitation) => invitation.slug === input.slug && invitation.id !== id,
  );

  if (conflicting) {
    throw new Error("Slug sudah digunakan oleh undangan lain.");
  }

  const now = new Date().toISOString();
  const existing = id ? invitations.find((invitation) => invitation.id === id) : undefined;
  const invitation: Invitation = {
    ...input,
    id: existing?.id ?? `invitation-${crypto.randomUUID()}`,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };
  const nextInvitations = existing
    ? invitations.map((item) => (item.id === existing.id ? invitation : item))
    : [invitation, ...invitations];

  await persistInvitations(nextInvitations);
  return invitation;
}

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date(`${date}T00:00:00+07:00`));
}

function formatShortDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${day} · ${month} · ${year}`;
}

export function toCulturalTemplate(invitation: Invitation): CulturalTemplate {
  const baseTemplate = getCulturalTemplate(invitation.templateSlug);
  if (!baseTemplate) {
    throw new Error("Template undangan tidak ditemukan.");
  }

  return {
    ...baseTemplate,
    slug: invitation.slug,
    monogram: `${invitation.groom.charAt(0)} & ${invitation.bride.charAt(0)}`,
    groom: invitation.groom,
    bride: invitation.bride,
    groomParents: invitation.groomParents,
    brideParents: invitation.brideParents,
    date: formatEventDate(invitation.eventDate),
    dateShort: formatShortDate(invitation.eventDate),
    quote: invitation.quote,
    greeting: invitation.greeting,
    venue: invitation.venue,
    address: invitation.address,
    ceremonyTime: `${invitation.ceremonyTime} ${invitation.timezone}`,
    receptionTime: `${invitation.receptionTime} ${invitation.timezone}`,
    story: invitation.story,
    galleryLabels: invitation.galleryLabels,
    coverImage: invitation.coverImage,
    galleryImages: invitation.galleryImages,
  };
}
