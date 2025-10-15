'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
  status: 'active' | 'wip' | 'planned';
}

const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Professional portfolio showcasing 8+ years of experience in distributed systems and cloud-native applications',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    url: '/portfolio',
    status: 'active',
  },
  {
    id: 'womens-script',
    title: 'Alethi Women\'s Script Translator',
    description: 'Translate English text to the phonetic Women\'s Script from Brandon Sanderson\'s Stormlight Archive series',
    tech: ['Next.js', 'TypeScript', 'SVG'],
    url: '/womens-script',
    status: 'active',
  },
  // Add more projects here as you build them
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:px-8">
          <h1 className="text-2xl font-bold text-neutral-900">VAAS</h1>
          <p className="mt-2 text-neutral-600">Next.js Projects</p>
        </div>
      </header>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Projects</h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            A collection of web applications and experiments built with Next.js, TypeScript, and modern web technologies.
          </p>
        </div>

        {/* Projects List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              className="group relative border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-900 hover:shadow-lg"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    project.status === 'active'
                      ? 'text-emerald-600'
                      : project.status === 'wip'
                      ? 'text-amber-600'
                      : 'text-neutral-400'
                  }`}
                >
                  {project.status === 'active' ? 'Live' : project.status === 'wip' ? 'WIP' : 'Planned'}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-neutral-700 bg-neutral-100 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow Icon */}
                <div className="flex items-center text-neutral-900 font-medium pt-2">
                  <span className="mr-2">View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State for Future Projects */}
        {projects.length < 3 && (
          <div className="mt-6 border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
            <p className="text-neutral-500">More projects coming soon...</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:px-8">
          <p className="text-sm text-neutral-600">
            Built with Next.js by Víctor Aguilar
          </p>
        </div>
      </footer>
    </main>
  );
}
