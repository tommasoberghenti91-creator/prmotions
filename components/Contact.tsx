"use client";

import { motion } from "framer-motion";

const CONTACT = {
  email: "hello@prmotions.it",
  phone: "+39 000 000 0000",
  instagram: "@prmotions",
  instagramUrl: "https://instagram.com/prmotions",
};

export default function Contact() {
  return (
    <section
      id="contatti"
      className="px-6 md:px-12 py-28 md:py-40 border-t border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto text-center flex flex-col items-center"
      >
        <h2 className="font-display text-3xl md:text-5xl text-white">
          Parliamone.
        </h2>

        <div className="mt-10 flex flex-col gap-3 text-white/70 text-sm md:text-base">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors">
            {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            {CONTACT.instagram}
          </a>
        </div>

        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-12 inline-flex items-center gap-3 bg-gold text-ink text-xs tracking-eyebrow uppercase px-10 py-4 hover:bg-goldSoft transition-colors duration-300"
        >
          Contattaci
        </a>
      </motion.div>
    </section>
  );
}
