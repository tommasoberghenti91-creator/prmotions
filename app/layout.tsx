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

// Dominio del sito live. Oggi punta al deploy su Vercel.
// Quando (e se) collegherete un dominio proprio (es. prmotions.it),
// basta cambiare SITE_URL qui sotto: si aggiorna automaticamente
// ovunque (canonical, Open Graph, Twitter Card, sitemap).
const SITE_URL = "https://prmotions.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "PR.MOTIONS — Contenuti video premium per aziende",
    description: "La tua azienda, come merita di essere vista.",
    url: SITE_URL,
    siteName: "PR.MOTIONS",
   images: [{ url: "/f3deb49e-4486-4136-aafa-6d333ec5540b.png", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PR.MOTIONS — Contenuti video premium per aziende",
    description: "La tua azienda, come merita di essere vista.",
    images: [{ url: "/f3deb49e-4486-4136-aafa-6d333ec5540b.png", width: 1200, height: 630 }],
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
