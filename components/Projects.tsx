import { getFeaturedProjects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text/70 max-w-3xl">
            Personal projects and technical experiments showcasing full-stack development,
            algorithm design, and creative problem-solving.
          </p>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <p className="text-text/50">Projects coming soon...</p>
          </div>
        )}

        {/* Future: Add "View All Projects" link if there are more than featured */}
      </div>
    </section>
  );
}
