import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/motion/AnimatedSection';
import { StaggerGrid, StaggerItem } from '@/components/motion/StaggerGrid';
import TiltCard from '@/components/motion/TiltCard';

export default function FeaturedProjects() {
  const projects = getFeaturedProjects().slice(0, 6);

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <Button variant="ghost" asChild>
              <Link href="/projects" className="gap-2">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <TiltCard className="h-full">
                <ProjectCard project={project} />
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
