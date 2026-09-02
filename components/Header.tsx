"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLavori = pathname?.startsWith("/lavori");

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
      <Link href="/" className="font-display text-sm tracking-eyebrow text-white">
        PR<span className="text-gold">.</span>MOTIONS
      </Link>

      <nav className="hidden md:flex items-center gap-10 text-xs tracking-eyebrow uppercase text-white/70">
        {/* Nuova voce di navigazione, stesso stile identico delle altre */}
        <Link
          href="/lavori"
          className={`transition-colors ${isLavori ? "text-gold" : "hover:text-gold"}`}
        >
          Lavori
        </Link>
        {/* Voci esistenti, invariate: solo l'href è diventato "/#..." invece
            di "#..." così funzionano anche cliccando da /lavori, non solo
            dalla homepage */}
        <Link href="/#progetto" className="hover:text-gold transition-colors">
          Progetto
        </Link>
        <Link href="/#cosa-facciamo" className="hover:text-gold transition-colors">
          Cosa facciamo
        </Link>
        <Link
          href="/#contatti"
          className="border border-gold text-gold px-5 py-2 hover:bg-gold hover:text-ink transition-colors"
        >
          Contattaci
        </Link>
      </nav>

      <div className="md:hidden flex items-center gap-4">
        <Link
          href="/lavori"
          className={`text-xs tracking-eyebrow uppercase ${
            isLavori ? "text-gold" : "text-white/70"
          }`}
        >
          Lavori
        </Link>
        <Link
          href="/#contatti"
          className="text-xs tracking-eyebrow uppercase text-gold border border-gold px-4 py-2"
        >
          Contatti
        </Link>
      </div>
    </header>
  );
}
