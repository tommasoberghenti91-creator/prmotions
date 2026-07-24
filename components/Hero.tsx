"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* ============================================================
          VIDEO PLACEHOLDER
          Sostituire con il video reale: mettere il file in /public
          (es. /public/hero.mp4) e un fotogramma poster in /public/hero-poster.jpg
          Se il file non è presente, il gradiente di fallback sottostante
          resta visibile e la sezione funziona comunque.
         ============================================================ */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-ink to-ink" />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink/50" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[240px] sm:w-[320px] md:w-[400px] aspect-[3/2]"
        >
          <Image
            src="/logo.png"
            alt="PR.MOTIONS"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-md text-lg md:text-xl text-white/85 text-balance"
        >
          La tua azienda, come merita di essere vista.
        </motion.p>

        <motion.a
          href="#progetto"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 inline-flex items-center gap-3 border border-gold text-gold text-xs tracking-eyebrow uppercase px-8 py-4 hover:bg-gold hover:text-ink transition-colors duration-300"
        >
          Guarda il progetto
          <span aria-hidden>→</span>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="h-9 w-px bg-white/30 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-full bg-gold animate-pulse" />
        </span>
        <span className="text-[10px] tracking-eyebrow text-white/40 uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
