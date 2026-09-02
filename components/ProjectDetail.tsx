"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Video/immagine principale — stesso pattern del riquadro video
          della homepage (bg-[#111], bordo sottile, gradient di fallback) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pt-32 md:pt-40 px-6 md:px-12"
      >
        <div className="relative max-w-6xl mx-auto aspect-video bg-[#111] border border-white/10 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.tone[0]}, ${project.tone[1]})`,
            }}
          />
          {project.mediaReady && project.video ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              controls
              poster={project.poster}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs tracking-eyebrow uppercase text-white/40 border border-white/20 px-5 py-3">
                Video in arrivo
              </span>
            </div>
          )}
        </div>
      </motion.section>

      {/* Titolo e descrizione */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="px-6 md:px-12 py-16 md:py-24 max-w-3xl mx-auto text-center"
      >
        <span className="text-xs tracking-eyebrow uppercase text-gold">
          {project.type} — {project.location}
        </span>
        <h1 className="font-display text-3xl md:text-5xl text-white mt-4">
          {project.title}
        </h1>
        <p className="text-white/70 text-base md:text-lg mt-8 leading-relaxed">
          {project.detail}
        </p>
      </motion.section>

      {/* Galleria immagini aggiuntive — renderizzata solo se presenti file reali */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {project.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] bg-[#111] border border-white/10 overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA di chiusura — stesso stile del bottone solid della homepage */}
      <section className="px-6 md:px-12 pb-28 md:pb-40 pt-20 border-t border-white/10 text-center">
        <h2 className="font-display text-2xl md:text-4xl text-white">
          Vuoi un progetto simile?
        </h2>
        <Link
          href="/#contatti"
          className="mt-8 inline-flex items-center gap-3 bg-gold text-ink text-xs tracking-eyebrow uppercase px-10 py-4 hover:bg-goldSoft transition-colors duration-300"
        >
          Contattaci
        </Link>
        <div className="mt-10">
          <Link
            href="/lavori"
            className="text-xs tracking-eyebrow uppercase text-white/50 hover:text-gold transition-colors"
          >
            ← Torna a tutti i lavori
          </Link>
        </div>
      </section>
    </>
  );
}
