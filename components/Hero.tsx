'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-content w-full mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4 leading-tight">
            Víctor Aguilar
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-8">
            Senior Software Engineer
          </h2>

          <p className="text-lg sm:text-xl text-text/80 mb-6 leading-relaxed max-w-3xl">
            8+ years designing and scaling distributed systems, cloud-native applications,
            and high-throughput services. Strong experience with API design, performance
            optimization, and microservice architecture.
          </p>

          <p className="text-base sm:text-lg text-text/70 mb-12">
            Currently: <span className="font-semibold text-text">Senior Software Engineer at Apptegy</span> (Remote, Monterrey, N.L. México)
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Get in Touch
            </button>

            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#experience');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border-2 border-text text-text font-medium hover:bg-text hover:text-white transition-colors duration-200 text-center"
            >
              View Experience
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <ArrowDown className="text-text/30 animate-bounce" size={24} />
        </div>
      </div>
    </section>
  );
}
