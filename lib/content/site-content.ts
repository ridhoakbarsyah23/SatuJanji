// Static marketing content used across public sections.
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

export const heroHighlights = ["Pilih desain", "Lengkapi cerita", "Bagikan momen"];

export const trustItems: IconContent[] = [
  {
    title: "Proses sederhana",
    description: "Mulai dengan mudah, tanpa alur yang membingungkan.",
    icon: CheckCircle2,
  },
  {
    title: "Nyaman di semua layar",
    description: "Tetap indah dibuka melalui ponsel, tablet, atau desktop.",
    icon: Smartphone,
  },
  {
    title: "Informasi tertata",
    description: "Detail acara tersusun jelas agar mudah ditemukan tamu.",
    icon: ClipboardList,
  },
  {
    title: "Pendampingan personal",
    description: "Tim kami siap membantu memilih desain dan layanan.",
    icon: ShieldCheck,
  },
];

export const systemPreviewItems: IconContent[] = [
  {
    title: "Detail acara yang jelas",
    description: "Nama pasangan, tanggal, waktu, lokasi, dan rangkaian acara tersaji dengan rapi.",
    icon: ClipboardList,
  },
  {
    title: "Kehadiran lebih terpantau",
    description: "Konfirmasi tamu membantu pasangan mempersiapkan acara dengan lebih tenang.",
    icon: UsersRound,
  },
  {
    title: "Mudah dibagikan",
    description: "Satu tautan dapat dibagikan kepada keluarga dan sahabat melalui kanal pilihanmu.",
    icon: Link2,
  },
];

export const reasons: IconContent[] = [
  {
    title: "Mudah Digunakan",
    description: "Siapkan detail acara, foto, lokasi, dan cerita tanpa perlu memahami teknis website.",
    icon: WandSparkles,
  },
  {
    title: "Desain Berkarakter",
    description: "Pilihan visual dirancang untuk menghidupkan cerita tanpa mengurangi keterbacaan.",
    icon: LayoutTemplate,
  },
  {
    title: "Responsif",
    description: "Undangan tetap nyaman dinikmati pada berbagai ukuran layar.",
    icon: Smartphone,
  },
  {
    title: "Praktis Dibagikan",
    description: "Bagikan undangan kepada orang-orang tersayang melalui satu tautan.",
    icon: Rocket,
  },
];

export const features: IconContent[] = [
  {
    title: "RSVP Online",
    description: "Berikan cara yang praktis bagi tamu untuk mengonfirmasi kehadiran.",
    icon: UsersRound,
  },
  {
    title: "Buku Tamu",
    description: "Simpan ucapan serta doa hangat dari keluarga dan sahabat dalam satu tempat.",
    icon: MessageSquareHeart,
  },
  {
    title: "Galeri Foto",
    description: "Hadirkan rangkaian foto pilihan dalam susunan yang elegan dan nyaman dilihat.",
    icon: Camera,
  },
  {
    title: "Love Story",
    description: "Bagikan perjalanan kalian melalui cerita yang hangat dan tersusun indah.",
    icon: HeartHandshake,
  },
  {
    title: "Google Maps",
    description: "Bantu tamu menemukan lokasi acara dengan petunjuk yang mudah diakses.",
    icon: MapPinned,
  },
  {
    title: "Musik",
    description: "Lengkapi suasana undangan dengan musik pilihan yang tetap nyaman bagi tamu.",
    icon: Music,
  },
];

export const steps: IconContent[] = [
  {
    title: "Pilih Desain",
    description: "Temukan tampilan yang paling sesuai dengan karakter dan suasana acaramu.",
    icon: LayoutTemplate,
  },
  {
    title: "Lengkapi Cerita",
    description: "Siapkan informasi pasangan, detail acara, lokasi, foto, dan kisah pilihanmu.",
    icon: PenLine,
  },
  {
    title: "Bagikan Momen",
    description: "Setelah siap, bagikan tautan undangan kepada keluarga dan sahabat tercinta.",
    icon: Link2,
  },
];

export const faqs = [
  {
    question: "Apakah saya perlu memahami coding?",
    answer:
      "Tidak. Kamu cukup memilih desain dan menyiapkan informasi acara. Tim SatuJanji akan membantu proses berikutnya.",
  },
  {
    question: "Apakah undangan nyaman dibuka melalui ponsel?",
    answer:
      "Ya. Setiap template dirancang responsif agar tetap nyaman dibaca melalui ponsel, tablet, maupun desktop.",
  },
  {
    question: "Apakah tamu bisa RSVP online?",
    answer: "Ya. RSVP membantu tamu menyampaikan konfirmasi kehadiran langsung dari halaman undangan.",
  },
  {
    question: "Apakah bisa menambahkan lokasi?",
    answer:
      "Ya. Lokasi acara dapat dihubungkan dengan Google Maps agar tamu lebih mudah menemukan rute.",
  },
  {
    question: "Bagaimana kalau belum tahu paket yang cocok?",
    answer:
      "Ceritakan kebutuhanmu melalui WhatsApp. Tim SatuJanji akan membantu memilih paket yang paling sesuai.",
  },
];
