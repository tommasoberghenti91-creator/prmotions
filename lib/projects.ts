export type Project = {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  detail: string;
  video?: string;
  poster?: string;
  gallery?: string[];
  tone: [string, string];
  mediaReady: boolean;
};

// Fonte unica dei progetti: usata sia dalla griglia /lavori
// sia dalle pagine di dettaglio /lavori/[slug].
export const projects: Project[] = [
  {
    slug: "castello-di-torrechiara",
    title: "Castello di Torrechiara",
    location: "Langhirano, Parma",
    type: "Location storica",
    summary:
      "Un borgo dell'XI secolo raccontato solo al al tramonto.",
    detail:
      "Il Castello di Torrechiara, uno dei manieri meglio conservati dell'Emilia, è stato il primo progetto di PR.MOTIONS. Abbiamo scelto di girare esclusivamente al tramonto, lasciando che la luce naturale raccontasse la storia delle sue pietre.",
    video: "/IMG_5542.mp4",
    poster: "/castello.jpg",
    gallery: [],
    tone: ["#1c1a14", "#050505"],
    mediaReady: true,
  },
  {
    slug: "labirinto-della-masone",
    title: "Labirinto della Masone",
    location: "Fontanellato, Parma",
    type: "Fondazione culturale",
    summary:
      "Il più grande labirinto di bambù al mondo, tra architettura e natura.",
    detail:
      "Un progetto dedicato a uno dei luoghi più scenografici della provincia di Parma, ideato da Franco Maria Ricci.",
    video: "/labirinto.mp4",
    poster: "/labirinto.jpg",
    gallery: [],
    tone: ["#141c16", "#050805"],
    mediaReady: true,
  },
  {
     slug: "La-Fattoria-nei-Boschi",
     title: "La Fattoria nei Boschi",
     location: "Talignano, Parma",
     type: "Azienda Agricola",
     summary: "Una fattoria immersa nella natura",
     detail: "La fattoria nei Boschi è una realtà distante dal rumore della città, situata nel parco regionale dei Boschi di Carrega.",
     video: "/fattoria.mp4",
     poster: "/fattoria.jpg",
     gallery: [],
     tone: ["#1c1a14", "#050505"],
     mediaReady: true,
   },
  {
     slug: "A-Place-to-Call-Home",
     title: "A Place to Call Home",
     location: "Collecchio, Parma",
     type: "Immobile",
     summary: "Valorizzare un immobile attraverso le immagini",
     detail: "Un racconto visivo pensato per valorizzare una proprietà attraverso gli spazi, l’architettura e il contesto che la circonda, dando vita a una presentazione autentica e coinvolgente.",
     video: "/tecnocasa.mp4",
     poster: "/tecnocasa.jpg",
     gallery: [],
     tone: ["#1c1a14", "#050505"],
     mediaReady: true,
   },
];

// Numero di riquadri "nuovo progetto in arrivo" mostrati in coda alla griglia,
// per progetti non ancora assegnati a un cliente/location reale.
export const upcomingSlots = 0;
