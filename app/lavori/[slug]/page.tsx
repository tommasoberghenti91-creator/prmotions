import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectDetail from "@/components/ProjectDetail";

// Genera staticamente una pagina per ogni progetto reale presente in
// lib/projects.ts (oggi: Castello di Torrechiara, Labirinto della Masone).
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — PR.MOTIONS`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="bg-ink">
      <ProjectDetail project={project} />
    </main>
  );
}
