import {
  Database,
  Server,
  Code2,
  Smartphone,
  Cloud,
  Container,
  Users,
  Lightbulb,
  FileJson,
  Search,
  Zap,
  Box,
  GitBranch,
  Activity,
  BarChart3,
  UserCircle,
  Network,
  MessageSquare,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend & Distributed Systems',
    skills: [
      { name: 'Ruby', icon: Code2 },
      { name: 'Python', icon: Code2 },
      { name: 'Java', icon: Code2 },
      { name: 'Rails', icon: Server },
      { name: 'SQL/NoSQL', icon: Database },
      { name: 'REST', icon: FileJson },
      { name: 'GraphQL', icon: FileJson },
      { name: 'Elasticsearch', icon: Search },
      { name: 'Kafka', icon: Zap },
      { name: 'RabbitMQ', icon: Zap },
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'Vue.js', icon: Code2 },
      { name: 'React', icon: Code2 },
      { name: 'React Native', icon: Smartphone },
      { name: 'ExpoJS', icon: Smartphone },
      { name: 'Next.js', icon: Server },
      { name: 'EmberJS', icon: Code2 },
      { name: 'TypeScript', icon: Code2 },
      { name: 'Tailwind', icon: Code2 },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS EC2', icon: Cloud },
      { name: 'AWS S3', icon: Database },
      { name: 'AWS Lambda', icon: Zap },
      { name: 'CloudFront', icon: Cloud },
      { name: 'Docker', icon: Container },
      { name: 'Kubernetes', icon: Box },
      { name: 'CI/CD', icon: GitBranch },
      { name: 'Prometheus', icon: Activity },
      { name: 'Grafana', icon: BarChart3 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Leadership', icon: Users },
      { name: 'System Design', icon: Network },
      { name: 'Mentorship', icon: UserCircle },
      { name: 'Collaboration', icon: MessageSquare },
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
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={i}
                      className="px-4 py-2 bg-secondary text-text text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <Icon size={16} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
