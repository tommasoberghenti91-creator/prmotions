export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-xs tracking-eyebrow text-white/60">
        PR<span className="text-gold">.</span>MOTIONS
      </span>
      <span className="text-[11px] tracking-wide text-white/30">
        © {new Date().getFullYear()} PR.MOTIONS — Tutti i diritti riservati.
      </span>
    </footer>
  );
}
