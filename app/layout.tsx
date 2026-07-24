import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prmotions.it"),
  title: "PR.MOTIONS — Contenuti video premium per aziende",
  description:
    "PR.MOTIONS realizza contenuti video cinematografici per aziende, hotel, strutture sportive e attività del territorio. La tua azienda, come merita di essere vista.",
  keywords: [
    "video aziendali",
    "produzione video premium",
    "brand film",
    "video drone",
    "PR.MOTIONS",
  ],
  openGraph: {
    title: "PR.MOTIONS — Contenuti video premium per aziende",
    description: "La tua azienda, come merita di essere vista.",
    url: "https://prmotions.it",
    siteName: "PR.MOTIONS",
    images: [{ url: "/logo.png", width: 1536, height: 1024 }],
    locale: "it_IT",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
