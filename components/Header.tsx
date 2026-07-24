"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md py-4" : "bg-transparent"
      }`}
    >
      <a href="#top" className="font-display text-sm tracking-eyebrow text-white">
        PR<span className="text-gold">.</span>MOTIONS
      </a>

      <nav className="hidden md:flex items-center gap-10 text-xs tracking-eyebrow uppercase text-white/70">
        <a href="#progetto" className="hover:text-gold transition-colors">
          Progetto
        </a>
        <a href="#cosa-facciamo" className="hover:text-gold transition-colors">
          Cosa facciamo
        </a>
        <a
          href="#contatti"
          className="border border-gold text-gold px-5 py-2 hover:bg-gold hover:text-ink transition-colors"
        >
          Contattaci
        </a>
      </nav>

      <a
        href="#contatti"
        className="md:hidden text-xs tracking-eyebrow uppercase text-gold border border-gold px-4 py-2"
      >
        Contatti
      </a>
    </header>
  );
}
