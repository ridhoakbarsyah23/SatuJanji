export type CulturalTemplate = {
  slug: string;
  region: string;
  inspiration: string;
  title: string;
  monogram: string;
  groom: string;
  bride: string;
  groomParents: string;
  brideParents: string;
  date: string;
  dateShort: string;
  quote: string;
  greeting: string;
  venue: string;
  address: string;
  receptionTime: string;
  ceremonyTime: string;
  story: Array<{ year: string; title: string; text: string }>;
  galleryLabels: string[];
  palette: {
    ink: string;
    muted: string;
    paper: string;
    surface: string;
    accent: string;
    accentSoft: string;
    contrast: string;
  };
  motif: "jawa" | "sumatera" | "kalimantan" | "sulawesi";
};

export const culturalTemplates: CulturalTemplate[] = [
  {
    slug: "sekaring-jawi",
    region: "Jawa",
    inspiration: "Terinspirasi dari keteduhan pendopo dan ritme batik kawung",
    title: "Sekaring Jawi",
    monogram: "A & R",
    groom: "Arga",
    bride: "Ratri",
    groomParents: "Putra dari Bapak Wibowo & Ibu Larasati",
    brideParents: "Putri dari Bapak Danang & Ibu Sekar",
    date: "Sabtu, 12 Desember 2026",
    dateShort: "12 · 12 · 2026",
    quote: "Dua hati pulang pada janji yang sama.",
    greeting: "Dengan memohon rahmat dan ridho Tuhan Yang Maha Esa, kami mengundang Anda untuk menjadi bagian dari hari bahagia kami.",
    venue: "Pendopo Agung Ambarukmo",
    address: "Jl. Laksda Adisucipto, Yogyakarta",
    ceremonyTime: "08.00 – 10.00 WIB",
    receptionTime: "11.00 – 14.00 WIB",
    story: [
      { year: "2021", title: "Pertemuan", text: "Sebuah pertemuan sederhana membuka percakapan yang tak pernah benar-benar usai." },
      { year: "2024", title: "Satu Tujuan", text: "Kami belajar bertumbuh, saling menjaga, dan memilih arah yang sama." },
      { year: "2026", title: "Hari Bahagia", text: "Kini kami mengikat janji, ditemani doa keluarga dan sahabat tercinta." },
    ],
    galleryLabels: ["Teduh", "Selaras", "Lestari"],
    palette: {
      ink: "#2f2118",
      muted: "#766257",
      paper: "#f8f0df",
      surface: "#fffaf0",
      accent: "#8a3f28",
      accentSoft: "#d8b778",
      contrast: "#322015",
    },
    motif: "jawa",
  },
  {
    slug: "ranah-pusaka",
    region: "Sumatera",
    inspiration: "Terinspirasi dari kemegahan songket Minangkabau",
    title: "Ranah Pusaka",
    monogram: "N & M",
    groom: "Naufal",
    bride: "Maharani",
    groomParents: "Putra dari Bapak Rahman & Ibu Yusra",
    brideParents: "Putri dari Bapak Zulkifli & Ibu Murni",
    date: "Minggu, 20 Desember 2026",
    dateShort: "20 · 12 · 2026",
    quote: "Cinta bertumbuh, adat menjaga, doa menyertai.",
    greeting: "Dengan penuh syukur, kami mengundang keluarga dan sahabat untuk merayakan awal perjalanan baru kami.",
    venue: "Pusako Minang Convention Hall",
    address: "Kota Padang, Sumatera Barat",
    ceremonyTime: "09.00 – 10.30 WIB",
    receptionTime: "11.00 – 15.00 WIB",
    story: [
      { year: "2020", title: "Sapaan Pertama", text: "Kami dipertemukan dalam perjalanan pulang dan menemukan rumah pada satu sama lain." },
      { year: "2023", title: "Bertumbuh", text: "Jarak dan waktu mengajarkan kami arti sabar serta saling percaya." },
      { year: "2026", title: "Mengikat Janji", text: "Dengan restu keluarga, kami melangkah menuju kehidupan yang baru." },
    ],
    galleryLabels: ["Pusako", "Rancak", "Basamo"],
    palette: {
      ink: "#291313",
      muted: "#755b54",
      paper: "#f7ead1",
      surface: "#fff9ed",
      accent: "#8f1f24",
      accentSoft: "#d5a742",
      contrast: "#320d12",
    },
    motif: "sumatera",
  },
  {
    slug: "rimba-borneo",
    region: "Kalimantan",
    inspiration: "Terinspirasi dari alam Borneo dan ornamen geometris Dayak",
    title: "Rimba Borneo",
    monogram: "D & K",
    groom: "Damar",
    bride: "Kirana",
    groomParents: "Putra dari Bapak Jaya & Ibu Lestari",
    brideParents: "Putri dari Bapak Banu & Ibu Jelita",
    date: "Sabtu, 9 Januari 2027",
    dateShort: "09 · 01 · 2027",
    quote: "Seperti sungai menuju muara, kami memilih berjalan bersama.",
    greeting: "Dalam hangat keluarga dan teduhnya alam, kami mengundang Anda menyaksikan janji yang akan kami rawat selamanya.",
    venue: "Borneo Heritage Garden",
    address: "Kota Palangka Raya, Kalimantan Tengah",
    ceremonyTime: "08.30 – 10.00 WIB",
    receptionTime: "11.00 – 14.30 WIB",
    story: [
      { year: "2022", title: "Satu Perjalanan", text: "Perjalanan singkat menjadi awal dari cerita panjang yang tak kami duga." },
      { year: "2025", title: "Menetapkan Hati", text: "Kami memilih saling merawat, seperti hutan menjaga kehidupan di dalamnya." },
      { year: "2027", title: "Mengikat Janji", text: "Hari ini dua keluarga bersatu dalam sukacita dan harapan baik." },
    ],
    galleryLabels: ["Rimba", "Arus", "Tumbuh"],
    palette: {
      ink: "#17241d",
      muted: "#5c6f63",
      paper: "#edf0df",
      surface: "#fbf8e9",
      accent: "#a83427",
      accentSoft: "#d5a62c",
      contrast: "#14392c",
    },
    motif: "kalimantan",
  },
  {
    slug: "langkana-sulapa",
    region: "Sulawesi",
    inspiration: "Terinspirasi dari filosofi Sulapa Eppa dan warna tanah Sulawesi",
    title: "Langkana Sulapa",
    monogram: "F & A",
    groom: "Fajar",
    bride: "Andini",
    groomParents: "Putra dari Bapak Baso & Ibu Rahmi",
    brideParents: "Putri dari Bapak Arman & Ibu Nurbaya",
    date: "Minggu, 7 Februari 2027",
    dateShort: "07 · 02 · 2027",
    quote: "Empat penjuru menjadi satu arah: pulang.",
    greeting: "Dengan segala kerendahan hati, kami mengundang Anda hadir dan mengiringi langkah pertama kehidupan kami bersama.",
    venue: "Langkana Celebes Ballroom",
    address: "Kota Makassar, Sulawesi Selatan",
    ceremonyTime: "09.00 – 10.30 WITA",
    receptionTime: "11.30 – 15.00 WITA",
    story: [
      { year: "2021", title: "Berjumpa", text: "Satu perkenalan tumbuh menjadi ruang aman untuk berbagi mimpi." },
      { year: "2024", title: "Saling Memilih", text: "Kami memahami bahwa perjalanan terbaik adalah yang diperjuangkan bersama." },
      { year: "2027", title: "Menuju Hari Bahagia", text: "Kesepakatan dua hati dan dua keluarga membawa kami menuju hari bahagia." },
    ],
    galleryLabels: ["Langkana", "Sulapa", "Sipakatau"],
    palette: {
      ink: "#261918",
      muted: "#745e59",
      paper: "#f4e9da",
      surface: "#fffaf2",
      accent: "#a43c2f",
      accentSoft: "#c98e42",
      contrast: "#251716",
    },
    motif: "sulawesi",
  },
];

export function getCulturalTemplate(slug: string) {
  return culturalTemplates.find((template) => template.slug === slug);
}
