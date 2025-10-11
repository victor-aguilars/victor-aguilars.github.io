import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'victor.aguilarsnz@gmail.com',
    href: 'mailto:victor.aguilarsnz@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Monterrey, N.L. México',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/v%C3%ADctor-aguilar-399686173/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View on GitHub',
    href: 'https://github.com/victor-aguilars',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-text mb-8">
            Get in Touch
          </h2>

          <p className="text-lg text-text/80 mb-12 leading-relaxed">
            I&apos;m always interested in hearing about new opportunities, collaborations,
            or just connecting with fellow engineers. Feel free to reach out through
            any of the channels below.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 hover:border-primary transition-colors duration-200">
                  <Icon className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-text mb-1">{item.label}</p>
                    <p className="text-text/80">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
