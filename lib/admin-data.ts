import { faqs } from "@/lib/site-content";
import { templates } from "@/lib/templates";

export const adminTemplates = templates.map((template, index) => ({
  ...template,
  status: index < 3 ? "Aktif" : "Draft",
}));

export const adminPlans = [
  {
    name: "Basic",
    status: "Aktif",
    description: "Undangan sederhana dengan fitur utama.",
    features: ["1 template", "RSVP online", "Google Maps"],
  },
  {
    name: "Premium",
    status: "Aktif",
    description: "Paket lengkap untuk kebutuhan acara umum.",
    features: ["Galeri foto", "Buku tamu", "Musik latar", "Amplop digital"],
  },
  {
    name: "Exclusive",
    status: "Draft",
    description: "Paket personal dengan bantuan prioritas.",
    features: ["Custom warna", "Love story", "Prioritas bantuan"],
  },
];

export const adminFaqs = faqs.map((faq, index) => ({
  ...faq,
  status: index < 4 ? "Aktif" : "Draft",
}));

export const adminLeads = [
  {
    name: "Calon Customer",
    phone: "Belum ada data",
    packageName: "Menunggu pendaftar",
    eventDate: "-",
    status: "Baru",
  },
];
