"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

// Card di progetto per la griglia /lavori.
// Riusa esattamente lo stesso linguaggio visivo della card video
// già presente in homepage (components/VideoShowcase.tsx):
// bg-[#111] + border border-white/10 + cerchio play oro al hover.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/lavori/${project.slug}`} className="group block">
        <div className="relative aspect-video bg-[#111] border border-white/10 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.tone[0]}, ${project.tone[1]})`,
            }}
          />
          {project.mediaReady && project.poster && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${project.poster}')` }}
            />
          )}

          {project.mediaReady ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full border border-gold flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-gold transition-all duration-300">
                <span className="ml-1 h-0 w-0 border-y-[8px] border-y-transparent border-l-[13px] border-l-gold group-hover:border-l-ink transition-colors duration-300" />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] tracking-eyebrow uppercase text-white/40 border border-white/20 px-4 py-2">
                Media in arrivo
              </span>
            </div>
          )}
        </div>

        <div className="mt-5">
          <span className="text-xs tracking-eyebrow uppercase text-gold">
            {project.type}
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-white mt-2 group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white/50 text-xs tracking-eyebrow uppercase mt-1">
            {project.location}
          </p>
          <p className="text-white/70 text-sm mt-3 max-w-md">
            {project.summary}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
