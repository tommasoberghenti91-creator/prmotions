import LavoriHero from "@/components/LavoriHero";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Lavori — PR.MOTIONS",
  description: "Una selezione dei progetti che abbiamo realizzato.",
};

export default function LavoriPage() {
  return (
    <main className="bg-ink">
      <LavoriHero />
      <ProjectsGrid />
    </main>
  );
}
