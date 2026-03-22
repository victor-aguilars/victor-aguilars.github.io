import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | VAAS',
  description: 'Projects by Víctor Aguilar.',
};

export default function ProjectsPage() {
  const activeProjects = projects.filter((p) => p.status === 'active');

  return (
    <div className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Things I&apos;ve built and contributed to.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
