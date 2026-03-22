export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  techStack: string[];
  features: string[];
  technicalHighlights: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  thumbnail: string;
  images?: string[];
  status: 'active' | 'archived';
  featured: boolean;
  year: number;
  category: 'personal' | 'work' | 'open-source' | 'experiment';
}

export const projects: Project[] = [
  {
    slug: 'womens-script',
    title: 'Alethi Women\'s Script Translator',
    tagline: 'Translate English to the fictional Alethi Women\'s Script from The Stormlight Archive',
    description: [
      'A web application that translates English text into the Alethi Women\'s Script, a fictional phonetic writing system from Brandon Sanderson\'s epic fantasy series "The Stormlight Archive". The script is visually distinctive, resembling waveforms and featuring horizontal symmetry around a baseline.',
      'The project implements a complete phonetic translation engine that maps English characters to Alethi phonemes, following the linguistic rules established in the books. The translation process handles multi-character phonemes (ch, sh, th), special character mappings (c→s/k, q→k, x→ks), and maintains the visual characteristics of the original writing system.',
      'The translator features real-time preview, SVG-based rendering for crisp output at any scale, and export functionality to save translations as PNG or SVG files. The implementation demonstrates advanced SVG manipulation, coordinate system normalization, and algorithmic text processing.',
    ],
    techStack: ['Next.js', 'TypeScript', 'SVG', 'Tailwind CSS'],
    features: [
      'Real-time English to Alethi phonetic translation',
      'Dynamic SVG generation with proper scaling and spacing',
      'Export to PNG and SVG formats',
      'Responsive design for mobile and desktop',
      'Interactive preview with customization options',
    ],
    technicalHighlights: [
      'Custom phoneme mapping algorithm with context-sensitive rules',
      'SVG path manipulation and coordinate system normalization',
      'Height marker system for proper character scaling',
      'Efficient rendering pipeline for complex character compositions',
    ],
    links: {
      live: 'https://alethi-translator.vercel.app',
      github: 'https://github.com/victor-aguilars/womens-script-translator',
    },
    thumbnail: '', // TODO: Add thumbnail image
    status: 'active',
    featured: true,
    year: 2025,
    category: 'personal',
  },
  {
    slug: 'persona-architect',
    title: 'Persona Architect',
    tagline: 'Stop sounding like an AI. Start sounding like yourself.',
    description: [
      'An open-source framework that extracts your unique "linguistic DNA" to make AI-generated content sound authentically like you. Persona Architect analyzes your communication patterns, vocabulary, and style quirks to create personalized AI skills that preserve your authentic voice.',
      'The framework includes an Interview Agent that conducts targeted questions to understand your writing patterns, then generates portable skill files compatible with Claude Code, Cursor, and other AI development tools. These skills can be invoked on-demand to produce PR descriptions, documentation, and summaries in your personal style.',
      'Built following the Agent Skills standard format, Persona Architect demonstrates how thoughtful prompt engineering and structured metadata can create reusable, portable AI personas. The project is fully open-source and serves as both a practical tool and a reference implementation for AI skill development.',
    ],
    techStack: ['Markdown', 'YAML', 'Claude Code', 'Cursor', 'Prompt Engineering'],
    features: [
      'Interactive interview agent for linguistic DNA extraction',
      'Generates portable SKILL.md files compatible across AI tools',
      'User-invoked persona skills (e.g., /persona-yourname)',
      'Produces PR descriptions, docs, and summaries in your authentic voice',
      'MIT licensed and fully open-source',
    ],
    technicalHighlights: [
      'Demonstrates advanced prompt engineering techniques',
      'Implements Agent Skills standard format',
      'Creates reusable, portable AI personas',
      'Shows practical application of structured metadata in AI workflows',
    ],
    links: {
      github: 'https://github.com/victor-aguilars/persona-architect',
    },
    thumbnail: '', // TODO: Add thumbnail image
    status: 'active',
    featured: true,
    year: 2025,
    category: 'open-source',
  },
  {
    slug: 'git-commit-animations',
    title: 'Git Commit Animations',
    tagline: 'Dramatic, themed animations for your Git commits in VS Code',
    description: [
      'A Visual Studio Code extension that transforms routine Git commits into celebratory moments with dramatic, themed animations. Every time you commit changes, the extension displays visually engaging animations inspired by popular gaming franchises like Dark Souls.',
      'The extension features multiple animation themes including the iconic Dark Souls "YOU DIED" screen and "BONFIRE LIT" celebration. It automatically detects commits across various methods—whether through VS Code\'s UI, terminal commands, or Git extensions—and triggers the appropriate animation.',
      'Built with TypeScript and the VS Code Extension API, the project demonstrates practical extension development, event handling, and creative UI implementation within editor constraints. All animations are fully customizable with adjustable duration, custom text, and enable/disable toggles.',
    ],
    techStack: ['TypeScript', 'VS Code Extension API', 'Webview', 'Git'],
    features: [
      'Automatic Git commit detection across all commit methods',
      'Multiple themed animations (Dark Souls, Bonfire, and more)',
      'Fully customizable text, duration, and animation settings',
      'Manual test command for previewing animations',
      'Lightweight and non-intrusive developer experience',
    ],
    technicalHighlights: [
      'VS Code Extension API integration and lifecycle management',
      'Git event detection and hook implementation',
      'Webview-based animation rendering system',
      'Theme architecture for extensible animation library',
    ],
    links: {
      github: 'https://github.com/victor-aguilars/git-commit-animations',
    },
    thumbnail: '', // TODO: Add thumbnail image
    status: 'active',
    featured: true,
    year: 2025,
    category: 'open-source',
  },
  {
    slug: 'mentora',
    title: 'Mentora',
    tagline: 'An AI learning companion that generates personalized study plans and guides you through any learning goal',
    description: [
      'A web-based AI learning companion that acts as a personal instructor. Given a learning goal — whether LeetCode interview prep, cooking, or language learning — the agent generates a personalized study plan, curates resources, and guides the student through their learning journey with motivation and structure.',
      'Mentora\'s core value is the instructional experience: a warm, specific, adaptive guide that keeps the learner moving forward. The AI instructor generates sequenced, phased study plans based on goals, timelines, and current skill level, then surfaces focused resources and adapts the plan based on self-reported progress.',
      'The platform includes session-based learning with confidence tracking, WhatsApp notifications for daily nudges and check-ins, calendar integration via .ics events, and a hybrid resource strategy combining curated recommendations, web search, and user-uploaded materials.',
    ],
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Claude API', 'Tailwind CSS', 'Twilio'],
    features: [
      'AI-generated personalized study plans with phased roadmaps',
      'Adaptive learning sessions with instructor explanations and curated resources',
      'Self-reported progress tracking with plan adjustments',
      'WhatsApp daily nudges and evening check-ins via Twilio',
      'Calendar event generation with .ics email delivery',
    ],
    technicalHighlights: [
      'Claude streaming API with Next.js ReadableStream for real-time plan generation',
      'Hybrid resource strategy: curated base layer + Tavily web search + user uploads',
      'Supabase Auth, PostgreSQL with pgvector, and Edge Functions for cron jobs',
      'Isolated agent module architecture for independent AI logic development',
    ],
    links: {
      live: 'https://getmentora.com',
    },
    thumbnail: '',
    status: 'active',
    featured: true,
    year: 2026,
    category: 'personal',
  },
  // Template for future projects
  // {
  //   slug: 'example-project',
  //   title: 'Example Project',
  //   tagline: 'One-line description',
  //   description: ['Paragraph 1', 'Paragraph 2'],
  //   techStack: ['Tech1', 'Tech2'],
  //   features: ['Feature 1', 'Feature 2'],
  //   technicalHighlights: ['Highlight 1', 'Highlight 2'],
  //   links: {
  //     github: 'https://github.com/...',
  //     live: 'https://...',
  //   },
  //   thumbnail: '/images/projects/...',
  //   status: 'active',
  //   featured: true,
  //   year: 2025,
  //   category: 'personal',
  // },
];

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.status === 'active');
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category && p.status === 'active');
}
