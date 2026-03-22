import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects, getProjectBySlug } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/motion/AnimatedSection';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | VAAS`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <AnimatedSection className="max-w-3xl">
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link href="/projects" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
          </Button>

          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{project.year}</Badge>
            <Badge variant="outline">{project.category}</Badge>
            <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
              {project.status}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.tagline}</p>

          {/* Links */}
          <div className="flex gap-3 mb-8">
            {project.links.live && (
              <Button asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <ExternalLink className="h-4 w-4" /> Live Site
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="h-4 w-4" /> Source Code
                </a>
              </Button>
            )}
          </div>

          <Separator className="mb-8" />

          {/* Description */}
          <div className="space-y-4 mb-12">
            {project.description.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Highlights */}
          {project.technicalHighlights.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Technical Highlights</h2>
              <ul className="space-y-2">
                {project.technicalHighlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}
