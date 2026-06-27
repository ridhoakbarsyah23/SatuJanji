import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://satujanji.id"),
  title: {
    default: "SatuJanji - Undangan Pernikahan Digital Elegan",
    template: "%s | SatuJanji",
  },
  description:
    "Buat website undangan pernikahan digital yang elegan, modern, dan mudah dibagikan tanpa perlu coding.",
  keywords: [
    "undangan digital",
    "undangan pernikahan digital",
    "website undangan pernikahan",
    "template undangan",
    "SatuJanji",
  ],
  authors: [{ name: "SatuJanji" }],
  creator: "SatuJanji",
  publisher: "SatuJanji",
  applicationName: "SatuJanji",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://satujanji.id",
    siteName: "SatuJanji",
    title: "SatuJanji - Undangan Pernikahan Digital Elegan",
    description:
      "Buat website undangan pernikahan digital yang elegan, modern, dan mudah dibagikan tanpa perlu coding.",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "SatuJanji - Undangan Pernikahan Digital Elegan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SatuJanji - Undangan Pernikahan Digital Elegan",
    description:
      "Buat website undangan pernikahan digital yang elegan, modern, dan mudah dibagikan tanpa perlu coding.",
    images: ["/og-card.svg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
