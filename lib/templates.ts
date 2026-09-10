import type { LucideIcon } from "lucide-react";
import { Flower2, Gem, Heart, Leaf, Sparkles, Stars } from "lucide-react";

export type Template = {
  name: string;
  slug: string;
  theme: string;
  description: string;
  accent: string;
  icon: LucideIcon;
  tags: string[];
  preview?: boolean;
};

export const templates: Template[] = [
  {
    name: "Sekaring Jawi",
    slug: "sekaring-jawi",
    theme: "Javanese Heritage",
    description: "Nuansa pendopo yang teduh dengan ritme kawung, warna soga, dan sentuhan emas.",
    accent: "#8A3F28",
    icon: Flower2,
    tags: ["Jawa", "Kawung", "Soga"],
    preview: true,
  },
  {
    name: "Ranah Pusaka",
    slug: "ranah-pusaka",
    theme: "Minang Songket",
    description: "Komposisi marun dan emas yang terinspirasi oleh kemegahan songket Minangkabau.",
    accent: "#8F1F24",
    icon: Gem,
    tags: ["Sumatera", "Songket", "Marun"],
    preview: true,
  },
  {
    name: "Rimba Borneo",
    slug: "rimba-borneo",
    theme: "Borneo Heritage",
    description: "Palet alam dengan aksen geometris Dayak yang hangat, berani, dan kontemporer.",
    accent: "#14392C",
    icon: Leaf,
    tags: ["Kalimantan", "Dayak", "Alam"],
    preview: true,
  },
  {
    name: "Langkana Sulapa",
    slug: "langkana-sulapa",
    theme: "Sulawesi Heritage",
    description: "Tata visual berlandaskan filosofi Sulapa Eppa dengan warna tanah dan tembaga.",
    accent: "#A43C2F",
    icon: Stars,
    tags: ["Sulawesi", "Sulapa Eppa", "Tembaga"],
    preview: true,
  },
  {
    name: "Aira",
    slug: "aira",
    theme: "Classic Elegant",
    description: "Tampilan clean dengan sentuhan gold untuk acara formal dan timeless.",
    accent: "#B68D40",
    icon: Sparkles,
    tags: ["Gold", "Clean", "Formal"],
  },
  {
    name: "Sagara",
    slug: "sagara",
    theme: "Modern Minimal",
    description: "Komposisi putih luas, tipografi rapi, dan fokus pada informasi acara.",
    accent: "#6B8F71",
    icon: Leaf,
    tags: ["Minimal", "Soft", "Modern"],
  },
  {
    name: "Nayara",
    slug: "nayara",
    theme: "Romantic Floral",
    description: "Nuansa romantis dengan detail floral lembut untuk pesta intimate.",
    accent: "#C08497",
    icon: Flower2,
    tags: ["Floral", "Romantic", "Warm"],
  },
  {
    name: "Arunika",
    slug: "arunika",
    theme: "Luxury Editorial",
    description: "Visual premium dengan layout editorial untuk undangan yang lebih mewah.",
    accent: "#8B5E3C",
    icon: Gem,
    tags: ["Luxury", "Editorial", "Premium"],
  },
  {
    name: "Laras",
    slug: "laras",
    theme: "Soft Traditional",
    description: "Sentuhan tradisional yang tetap modern, cocok untuk acara adat elegan.",
    accent: "#A0522D",
    icon: Stars,
    tags: ["Adat", "Soft", "Elegant"],
  },
  {
    name: "Amora",
    slug: "amora",
    theme: "Intimate Story",
    description: "Fokus pada love story, foto pasangan, dan pengalaman yang personal.",
    accent: "#A65F75",
    icon: Heart,
    tags: ["Story", "Photo", "Personal"],
  },
];
