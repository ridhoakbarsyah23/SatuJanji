export type PortfolioItem = {
  couple: string;
  city: string;
  template: string;
  date: string;
  description: string;
  accent: string;
  stats: {
    label: string;
    value: string;
  }[];
  href: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    couple: "Aira & Rama",
    city: "Jakarta",
    template: "Aira",
    date: "27 Juni 2026",
    description:
      "Undangan elegan dengan RSVP online, lokasi acara, galeri, dan buku tamu digital.",
    accent: "#B68D40",
    stats: [
      { label: "RSVP", value: "128" },
      { label: "Ucapan", value: "42" },
    ],
    href: "/demo/aira-rama",
  },
  {
    couple: "Naya & Dimas",
    city: "Bandung",
    template: "Sagara",
    date: "14 Agustus 2026",
    description:
      "Tampilan minimal modern untuk acara intimate dengan fokus pada foto dan detail acara.",
    accent: "#6B8F71",
    stats: [
      { label: "RSVP", value: "86" },
      { label: "Ucapan", value: "31" },
    ],
    href: "/demo/aira-rama",
  },
  {
    couple: "Laras & Aditya",
    city: "Yogyakarta",
    template: "Laras",
    date: "12 September 2026",
    description:
      "Nuansa soft traditional dengan love story dan detail keluarga yang tertata rapi.",
    accent: "#A0522D",
    stats: [
      { label: "RSVP", value: "174" },
      { label: "Ucapan", value: "58" },
    ],
    href: "/demo/aira-rama",
  },
];
