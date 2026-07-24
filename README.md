# PR.MOTIONS — Landing Page

Progetto Next.js 14 (App Router) + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Apri http://localhost:3000

## Struttura

```
app/
  layout.tsx        → font, metadata SEO
  page.tsx           → assembla le sezioni
  globals.css
components/
  Header.tsx          → menu trasparente, diventa opaco allo scroll
  Hero.tsx            → logo + video full screen + tagline + CTA
  VideoShowcase.tsx    → sezione "Castello di Torrechiara"
  WhatWeDo.tsx        → sezione "Cosa facciamo"
  Contact.tsx          → sezione "Parliamone"
  Footer.tsx
public/
  logo.png            → il logo caricato
```

## Placeholder da sostituire prima del lancio

1. **Video Hero** — `components/Hero.tsx`
   - Aggiungi `public/hero.mp4` (video full screen, loop, senza audio)
   - Aggiungi `public/hero-poster.jpg` (fotogramma di anteprima, mostrato mentre il video carica)
   - Finché questi file non ci sono, la sezione mostra comunque un fondo nero elegante di fallback: il sito non si rompe.

2. **Video Castello di Torrechiara** — `components/VideoShowcase.tsx`
   - Aggiungi `public/torrechiara.mp4`
   - Aggiungi `public/torrechiara-poster.jpg`

3. **Contatti reali** — `components/Contact.tsx`, oggetto `CONTACT` in cima al file: email, telefono, Instagram.

4. **Logo** — `public/logo.png` è quello caricato (sfondo nero pieno #000000). Se disponete di una versione con **sfondo trasparente**, sostituitela: si fonderà in modo perfetto con lo sfondo #0A0A0A della pagina invece di avere un bordo nero leggermente diverso.

## Note tecniche

- Font: **Archivo Black** (titoli, coerente con il grassetto del logo) + **Inter** (testo), caricati via `next/font/google` — nessuna richiesta esterna aggiuntiva, ottimizzati automaticamente da Next.js.
- Colori definiti in `tailwind.config.ts`: `ink` (#0A0A0A), `gold` (#D4AF37), `goldSoft` (variante chiara per hover).
- Animazioni con Framer Motion: solo fade + leggero movimento verticale, mai effetti vistosi, coerenti con la richiesta di minimalismo.
- SEO: metadata, Open Graph e title/description già impostati in `app/layout.tsx` — da personalizzare con dominio reale.
- Interamente responsive: testato per breakpoint mobile (menu si riduce al solo bottone "Contatti"), tablet, desktop.
