import { promises as fs } from "fs";
import path from "path";
import { faqs } from "@/lib/site-content";
import { templates } from "@/lib/templates";

export type AdminCollection = "templates" | "plans" | "faqs";

export type AdminItem = {
  id: string;
  title: string;
  meta: string;
  status: string;
};

type AdminContent = Record<AdminCollection, AdminItem[]>;

const adminContentPath = path.join(process.cwd(), "data", "admin-content.json");

const initialContent: AdminContent = {
  templates: templates.map((template, index) => ({
    id: template.slug,
    title: template.name,
    meta: `${template.theme} - ${template.tags.join(", ")}`,
    status: index < 3 ? "Aktif" : "Draft",
  })),
  plans: [
    {
      id: "basic",
      title: "Basic",
      status: "Aktif",
      meta: "Undangan sederhana dengan fitur utama. 1 template, RSVP online, Google Maps",
    },
    {
      id: "premium",
      title: "Premium",
      status: "Aktif",
      meta: "Paket lengkap untuk kebutuhan acara umum. Galeri foto, Buku tamu, Musik latar, Amplop digital",
    },
    {
      id: "exclusive",
      title: "Exclusive",
      status: "Draft",
      meta: "Paket personal dengan bantuan prioritas. Custom warna, Love story, Prioritas bantuan",
    },
  ],
  faqs: faqs.map((faq, index) => ({
    id: `faq-${index + 1}`,
    title: faq.question,
    meta: faq.answer,
    status: index < 4 ? "Aktif" : "Draft",
  })),
};

function createId(collection: AdminCollection) {
  return `${collection}-${Date.now()}`;
}

async function readAdminContent(): Promise<AdminContent> {
  try {
    const data = await fs.readFile(adminContentPath, "utf8");
    return { ...initialContent, ...(JSON.parse(data) as Partial<AdminContent>) };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return initialContent;
    }

    throw error;
  }
}

async function writeAdminContent(content: AdminContent) {
  await fs.mkdir(path.dirname(adminContentPath), { recursive: true });
  await fs.writeFile(adminContentPath, JSON.stringify(content, null, 2), "utf8");
}

export async function getAdminItems(collection: AdminCollection) {
  const content = await readAdminContent();
  return content[collection];
}

export async function getAdminStats() {
  const content = await readAdminContent();
  return {
    templates: content.templates.length,
    plans: content.plans.length,
    faqs: content.faqs.length,
  };
}

export async function createAdminItem(
  collection: AdminCollection,
  input: Omit<AdminItem, "id">,
) {
  const content = await readAdminContent();
  const item: AdminItem = {
    id: createId(collection),
    ...input,
  };

  content[collection] = [item, ...content[collection]];
  await writeAdminContent(content);
  return item;
}

export async function updateAdminItem(
  collection: AdminCollection,
  id: string,
  input: Omit<AdminItem, "id">,
) {
  const content = await readAdminContent();
  content[collection] = content[collection].map((item) =>
    item.id === id ? { id, ...input } : item,
  );
  await writeAdminContent(content);
}

export async function deleteAdminItem(collection: AdminCollection, id: string) {
  const content = await readAdminContent();
  content[collection] = content[collection].filter((item) => item.id !== id);
  await writeAdminContent(content);
}
