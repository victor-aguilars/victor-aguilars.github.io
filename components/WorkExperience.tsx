const experiences = [
  {
    company: 'Apptegy',
    location: 'Remote, Monterrey, N.L. México',
    period: 'Sept 2022 - Present',
    role: 'Senior Software Engineer',
    achievements: [
      'Developed multi-tenant AI orchestration platform leveraging FastAPI for custom agents, Langfuse for prompt versioning/observability, and Next.js for frontend',
      'Engineered high-performance analytics microservice using Cube.dev; reduced query latency from 30 seconds to microseconds',
      'Architected microservice-based data platform (Ruby on Rails + VueJS) for horizontal scalability and millions of daily requests',
      'Optimized PostgreSQL queries and offloaded workloads to DuckDB (50x performance boost, 50% cost reduction)',
      'Built async data pipelines with Sidekiq + Redis, enabling ingestion of terabytes of data daily',
      'Boosted engineering velocity by developing internal custom agents and specialized skills for Cursor and Claude Code',
    ],
  },
  {
    company: 'Bengala',
    location: 'Monterrey, N.L. México',
    period: 'Aug 2019 - Aug 2022',
    role: 'Software Engineer',
    achievements: [
      'Led backend engineering team to plan, design, and deliver large-scale solutions for clients across fintech, mobility, and logistics',
      'Architected geolocation platforms supporting 10,000+ real-time users with low-latency tracking, optimized routing, and seamless payments',
    ],
  },
  {
    company: 'Telos Labs',
    location: 'Monterrey, N.L. México',
    period: 'Jan 2019 - July 2019',
    role: 'Software Engineer',
    achievements: [
      'Built client-facing Rails + VueJS applications with emphasis on performance and usability',
    ],
  },
  {
    company: 'Softtek',
    location: 'Monterrey, N.L. México',
    period: 'Aug 2017 - Dec 2018',
    role: 'Software Developer',
    achievements: [
      'Developed React Native + Unity3D AR/VR apps, including enterprise HoloLens training solutions with advanced spatial mapping',
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-secondary">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-text mb-16">
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 border-l-4 border-primary hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-text mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-2">
                    {exp.role}
                  </p>
                </div>
                <div className="text-text/70">
                  <p className="font-medium">{exp.period}</p>
                  <p className="text-sm">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-text/80">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
