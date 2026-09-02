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
    video: "/torrechiara.mp4",
    poster: "/torrechiara-poster.jpg",
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
    gallery: [],
    tone: ["#141c16", "#050805"],
    mediaReady: false,
  },
];

// Numero di riquadri "nuovo progetto in arrivo" mostrati in coda alla griglia,
// per progetti non ancora assegnati a un cliente/location reale.
export const upcomingSlots = 2;
