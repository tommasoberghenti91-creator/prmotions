"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="progetto" className="px-6 md:px-12 py-28 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-xs tracking-eyebrow uppercase text-gold">
          Il nostro ultimo progetto
        </span>
        <h2 className="font-display text-3xl md:text-5xl mt-4 text-white">
          Labirinto della Masone
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl aspect-video bg-[#111] border border-white/10 group cursor-pointer overflow-hidden"
        onClick={() => setPlaying(true)}
      >
        {!playing ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1a14] via-[#0c0b09] to-[#050505]" />
            <div className="absolute inset-0 bg-[url('/torrechiara-poster.jpg')] bg-cover bg-center opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <span className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-gold group-hover:border-l-ink transition-colors duration-300" />
              </div>
            </div>
          </>
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            controls
            autoPlay
          >
           <source src="/labirinto.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>
    </section>
  );
}
