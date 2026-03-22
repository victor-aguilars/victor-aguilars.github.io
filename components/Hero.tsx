'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/motion/AnimatedSection';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/victor-aguilars',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/v%C3%ADctor-aguilar-399686173/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:victor.aguilarsnz@gmail.com',
    label: 'Email',
  },
];

export default function Hero() {
  const { displayed, isDone } = useTypingEffect('Senior Software Engineer');

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
      <ParticleBackground />
      <div className="max-w-content mx-auto relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Víctor Aguilar
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 h-7">
              {displayed}
              {!isDone && <span className="blinking-cursor text-primary">|</span>}
            </p>

            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" asChild>
                  <Link href="/blog">Read Blog</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
