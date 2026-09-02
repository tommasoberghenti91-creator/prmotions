"use client";

import { motion } from "framer-motion";
import { projects, upcomingSlots } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsGrid() {
  return (
    <section className="px-6 md:px-12 pb-28 md:pb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        {/* Riquadri segnaposto per progetti futuri non ancora assegnati:
            nessun nome/cliente inventato, solo un'etichetta chiaramente
            identificabile come placeholder. Non sono cliccabili. */}
        {Array.from({ length: upcomingSlots }).map((_, i) => (
          <motion.div
            key={`upcoming-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-video border border-dashed border-white/15 flex items-center justify-center">
              <span className="text-xs tracking-eyebrow uppercase text-white/30">
                Nuovo progetto in arrivo
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
