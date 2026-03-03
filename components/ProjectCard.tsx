'use client';

import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasInternalDemo = project.links.demo?.startsWith('/');
  const primaryLink = project.links.demo || project.links.live || project.links.github;

  return (
    <div className="group bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-6xl font-bold">{project.title.charAt(0)}</span>
          </div>
        )}

        {/* Year badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-text">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-primary bg-primary/5 px-2 py-1"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs font-medium text-text/50 px-2 py-1">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-text/70 mb-4 leading-relaxed flex-grow">
          {project.tagline}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
          {primaryLink && (
            hasInternalDemo ? (
              <Link
                href={primaryLink}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View Project
                <ExternalLink size={16} />
              </Link>
            ) : (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View Project
                <ExternalLink size={16} />
              </a>
            )
          )}

          {project.links.github && primaryLink !== project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-text/70 hover:text-text hover:underline"
              aria-label="View source on GitHub"
            >
              <Github size={16} />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
