import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    // Immagine dedicata alle anteprime social: sfondo nero pieno, non trasparente.
    // Il logo trasparente (/logo.png) è pensato per il sito, dove lo sfondo è
    // già scuro; nelle card social (spesso su sfondo bianco) la scritta "PR."
    // bianca sparirebbe. /og-image.png risolve il problema.
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PR.MOTIONS — Contenuti video premium per aziende",
    description: "La tua azienda, come merita di essere vista.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
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
      <body className="font-body antialiased">
        {/* Header e Footer erano prima dentro app/page.tsx: spostati qui
            perché ora servono su tutte le pagine (homepage + /lavori),
            non solo sulla home. Nessuna modifica al loro codice interno. */}
        <Header />
        {children}
        <Footer />
        {/* Vercel Web Analytics: conteggio visite/pagine viste, privacy-friendly
            (nessun cookie di tracciamento personale). Va anche attivato una
            tantum dalla dashboard Vercel — vedi istruzioni. */}
        <Analytics />
      </body>
    </html>
  );
}
