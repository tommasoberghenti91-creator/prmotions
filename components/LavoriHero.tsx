"use client";

import { motion } from "framer-motion";

// Hero della pagina /lavori. Stessa logica di ingresso (fade + risalita,
// stesso easing) usata in components/Hero.tsx per il testo della homepage,
// ma in versione compatta: qui non serve un video full-screen, l'obiettivo
// è molto spazio vuoto e una gerarchia tipografica netta prima della griglia.
export default function LavoriHero() {
  return (
    <section className="px-6 md:px-12 pt-40 pb-16 md:pt-48 md:pb-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs tracking-eyebrow uppercase text-gold">
          Portfolio
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-white mt-4">
          Lavori
        </h1>
        <p className="text-white/70 text-base md:text-lg mt-6 max-w-md mx-auto text-balance">
          Una selezione dei progetti che abbiamo realizzato.
        </p>
      </motion.div>
    </section>
  );
}
