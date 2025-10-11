const skillCategories = [
  {
    title: 'Backend & Distributed Systems',
    skills: [
      'Ruby',
      'Python',
      'Java',
      'Rails',
      'SQL/NoSQL',
      'REST',
      'GraphQL',
      'Elasticsearch',
      'Kafka',
      'RabbitMQ',
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      'Vue.js',
      'React',
      'React Native',
      'ExpoJS',
      'Next.js',
      'EmberJS',
      'TypeScript',
      'Tailwind',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      'AWS EC2',
      'AWS S3',
      'AWS Lambda',
      'CloudFront',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Leadership',
      'System Design',
      'Mentorship',
      'Collaboration',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-text mb-16">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 hover:border-primary transition-colors duration-200"
            >
              <h3 className="text-xl font-bold text-text mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary text-text text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
