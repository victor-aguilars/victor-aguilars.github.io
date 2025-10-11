import { ExternalLink, Lock } from 'lucide-react';

const projects = [
  {
    name: 'Microservice Data Platform',
    company: 'Apptegy',
    techStack: 'Ruby on Rails, VueJS, PostgreSQL, DuckDB, Redis, Sidekiq',
    description: 'Architected and built a scalable microservice-based data platform handling terabytes of data daily. Optimized query performance by 50x while reducing infrastructure costs by 50%.',
    achievement: '50x performance boost, 50% cost reduction',
    isPrivate: true,
  },
  {
    name: 'Real-Time Geolocation Platform',
    company: 'Bengala',
    techStack: 'Backend Architecture, Real-time Systems, Payment Integration',
    description: 'Led development of enterprise geolocation platform supporting 10,000+ concurrent users. Implemented low-latency tracking, route optimization, and seamless payment processing.',
    achievement: '10,000+ real-time users',
    isPrivate: true,
  },
  {
    name: 'AR/VR Training Solutions',
    company: 'Softtek',
    techStack: 'React Native, Unity3D, HoloLens',
    description: 'Developed innovative augmented and virtual reality applications for enterprise training. Built immersive HoloLens experiences for complex manufacturing processes.',
    achievement: 'Enterprise innovation',
    isPrivate: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-secondary">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-text mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 border-t-4 border-primary hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-text">
                  {project.name}
                </h3>
                {project.isPrivate ? (
                  <Lock className="text-text/30" size={20} />
                ) : (
                  <ExternalLink className="text-primary" size={20} />
                )}
              </div>

              <p className="text-sm font-semibold text-primary mb-4">
                {project.company}
              </p>

              <p className="text-text/80 mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-text mb-2">Tech Stack:</p>
                <p className="text-sm text-text/70">{project.techStack}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-bold text-primary">
                  {project.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
