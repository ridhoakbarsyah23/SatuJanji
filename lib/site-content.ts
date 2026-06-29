import type { LucideIcon } from "lucide-react";
import {
  Camera,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  LayoutTemplate,
  Link2,
  MapPinned,
  MessageSquareHeart,
  Music,
  PenLine,
  Rocket,
  ShieldCheck,
  Smartphone,
  UsersRound,
  WandSparkles,
} from "lucide-react";

export type IconContent = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const heroHighlights = ["Pilih template", "Isi data acara", "Bagikan link"];

export const trustItems: IconContent[] = [
  {
    title: "Mudah dipahami",
    description: "Alur dibuat sederhana agar pasangan cepat mulai.",
    icon: CheckCircle2,
  },
  {
    title: "Siap di HP",
    description: "Nyaman dibuka dari layar kecil sampai desktop.",
    icon: Smartphone,
  },
  {
    title: "Data terarah",
    description: "Informasi acara dan tamu berada dalam satu tempat.",
    icon: ClipboardList,
  },
  {
    title: "Dibantu admin",
    description: "Ada bantuan saat memilih paket dan template.",
    icon: ShieldCheck,
  },
];

export const systemPreviewItems: IconContent[] = [
  {
    title: "Informasi acara",
    description: "Nama pasangan, tanggal, waktu, lokasi, dan susunan acara ditampilkan rapi.",
    icon: ClipboardList,
  },
  {
    title: "Konfirmasi tamu",
    description: "Tamu dapat mengisi RSVP dan pasangan lebih mudah melihat respons.",
    icon: UsersRound,
  },
  {
    title: "Halaman undangan",
    description: "Link undangan bisa dibagikan ke WhatsApp, Instagram, atau keluarga.",
    icon: Link2,
  },
];

export const reasons: IconContent[] = [
  {
    title: "Mudah Digunakan",
    description: "Isi data, foto, lokasi, dan cerita tanpa perlu coding.",
    icon: WandSparkles,
  },
  {
    title: "Template Rapi",
    description: "Desain dibuat bersih agar informasi acara mudah dibaca.",
    icon: LayoutTemplate,
  },
  {
    title: "Responsif",
    description: "Undangan tetap nyaman dibuka dari berbagai ukuran layar.",
    icon: Smartphone,
  },
  {
    title: "Cepat Dibagikan",
    description: "Publikasikan undangan lalu kirim link ke tamu.",
    icon: Rocket,
  },
];

export const features: IconContent[] = [
  {
    title: "RSVP Online",
    description: "Tamu bisa mengonfirmasi kehadiran dari halaman undangan.",
    icon: UsersRound,
  },
  {
    title: "Buku Tamu",
    description: "Ucapan dan doa tamu terkumpul dalam format digital.",
    icon: MessageSquareHeart,
  },
  {
    title: "Galeri Foto",
    description: "Tampilkan foto pilihan tanpa membuat halaman terasa penuh.",
    icon: Camera,
  },
  {
    title: "Love Story",
    description: "Ceritakan perjalanan singkat dengan struktur yang rapi.",
    icon: HeartHandshake,
  },
  {
    title: "Google Maps",
    description: "Bantu tamu membuka rute lokasi acara dengan mudah.",
    icon: MapPinned,
  },
  {
    title: "Musik",
    description: "Tambahkan musik bila dibutuhkan, tanpa mengganggu informasi utama.",
    icon: Music,
  },
];

export const steps: IconContent[] = [
  {
    title: "Pilih Template",
    description: "Tentukan tampilan dasar yang sesuai dengan acara.",
    icon: LayoutTemplate,
  },
  {
    title: "Isi Data",
    description: "Lengkapi informasi pasangan, acara, lokasi, dan fitur tamu.",
    icon: PenLine,
  },
  {
    title: "Bagikan Link",
    description: "Publikasikan undangan lalu kirimkan link ke tamu.",
    icon: Link2,
  },
];

export const faqs = [
  {
    question: "Apakah bisa digunakan tanpa coding?",
    answer:
      "Bisa. Kamu cukup memilih template, mengisi data, lalu membagikan link undangan.",
  },
  {
    question: "Apakah tampilannya aman di mobile?",
    answer:
      "Ya. Tampilan dibuat responsif agar informasi mudah dibaca dari HP, tablet, dan desktop.",
  },
  {
    question: "Apakah tamu bisa RSVP online?",
    answer: "Bisa. Tamu dapat mengonfirmasi kehadiran langsung dari halaman undangan.",
  },
  {
    question: "Apakah bisa menambahkan lokasi?",
    answer:
      "Bisa. Lokasi acara dapat diarahkan ke Google Maps agar tamu mudah membuka rute.",
  },
  {
    question: "Bagaimana kalau belum tahu paket yang cocok?",
    answer:
      "Kamu bisa konsultasi lewat WhatsApp. Admin akan bantu memilih paket sesuai kebutuhan acara.",
  },
];
