"use client";

import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section id="cosa-facciamo" className="px-6 md:px-12 py-28 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-xs tracking-eyebrow uppercase text-gold">
          Cosa facciamo
        </span>
        <p className="font-display text-2xl md:text-4xl leading-snug mt-6 text-white text-balance">
          Aiutiamo aziende, hotel, strutture sportive, attività e realtà del
          territorio a raccontare il proprio valore attraverso contenuti
          visivi.
        </p>
      </motion.div>
    </section>
  );
}
