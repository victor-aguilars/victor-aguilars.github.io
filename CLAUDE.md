# Senior Software Engineer Portfolio - Project Specification

## Project Overview
Build a professional portfolio website for Víctor Alfredo Aguilar Sánchez, a Senior Software Engineer with 8+ years of experience in distributed systems, cloud-native applications, and high-throughput services.

## Design Philosophy: Swiss/International Style

### Core Design Principles
The portfolio follows Swiss Design (International Typographic Style) principles:

1. **Form Follows Function**: Every design element serves a purpose
2. **Grid-Based Layout**: All content organized on a modular grid system
3. **Typography-Focused**: Clean sans-serif fonts as primary design element
4. **Minimal Color Palette**: Primarily monochrome with one accent color
5. **Generous Whitespace**: Active use of negative space for clarity
6. **Asymmetric Balance**: Dynamic layouts while maintaining visual order
7. **Content Is Interface**: Remove all unnecessary decorative elements

### Visual Characteristics
- **No serif fonts allowed** - use Inter, Helvetica, or similar clean sans-serifs
- **Flush left, ragged right** text alignment
- **Bold, large headers** with clear hierarchy
- **High-quality photography** over illustrations
- **Geometric shapes** used sparingly
- **Responsive grid system** that adapts across devices

### Reference Examples
- BIG (Bjarke Ingels Group) website: https://big.dk/
- Apple's product pages
- Medium's blog platform
- Linear's marketing site

## Tech Stack

### Core Technologies
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages (static export)

### Additional Tools
- **Fonts**: Inter (from Google Fonts or next/font)
- **Icons**: Lucide React (minimal, clean icons)
- **Animation**: Framer Motion (subtle, purposeful animations only)

## Portfolio Structure

### Pages/Sections

#### 1. Home/About
- Hero section with name and title
- Brief professional summary (2-3 sentences)
- Current role and location
- Primary CTA (Contact or View Work)

**Content:**
```
Víctor Alfredo Aguilar Sánchez
Senior Software Engineer

8+ years designing and scaling distributed systems, cloud-native applications, 
and high-throughput services. Strong experience with API design, performance 
optimization, and microservice architecture.

Currently: Senior Software Engineer at Apptegy (Remote, Monterrey, N.L. México)
```

#### 2. Work Experience
Display in reverse chronological order:

**Apptegy** (Sept 2022 - Present)
- Architected microservice-based data platform (Ruby on Rails + VueJS)
- Optimized PostgreSQL + DuckDB (50x performance boost, 50% cost reduction)
- Built async data pipelines with Sidekiq + Redis (terabytes daily)

**Bengala** (Aug 2019 - Aug 2022)
- Led backend engineering team
- Architected geolocation platforms (10,000+ real-time users)
- Low-latency tracking, optimized routing, seamless payments

**Telos Labs** (Jan 2019 - July 2019)
- Built Rails + VueJS applications
- Focus on performance and usability

**Softtek** (Aug 2017 - Dec 2018)
- Developed React Native + Unity3D AR/VR apps
- HoloLens enterprise training solutions

#### 3. Skills/Tech Stack
Organized in clear categories with visual grid:

**Backend & Distributed Systems**
Ruby, Python, Java, Rails, SQL/NoSQL, REST, GraphQL, Elasticsearch, Kafka, RabbitMQ

**Frontend & Mobile**
Vue.js, React, React Native, ExpoJS, NextJs, EmberJS, Typescript, Tailwind

**Cloud & Infrastructure**
AWS (EC2, S3, Lambda, CloudFront), Docker, Kubernetes, CI/CD, Prometheus, Grafana

**Soft Skills**
Leadership, System Design, Mentorship, Collaboration

#### 4. Projects (Optional but Recommended)
Showcase 2-3 key projects with:
- Project name
- Tech stack used
- Brief description
- Key achievement/metric
- Link (if available) or "Private/Enterprise"

Suggested projects to highlight:
- Data platform at Apptegy (microservices, scalability)
- Geolocation platform at Bengala (real-time systems)
- AR/VR training solution at Softtek (innovation)

#### 5. Contact
- Email: victor.aguilarsnz@gmail.com
- LinkedIn: [Link]
- GitHub: [Link]
- Location: Monterrey, N.L. México
- Phone: (+52) 8119068078

## Design System

### Typography Scale
```
- Hero/H1: 4rem (64px) - Bold
- H2: 2.5rem (40px) - Bold
- H3: 1.5rem (24px) - SemiBold
- Body: 1rem (16px) - Regular
- Small: 0.875rem (14px) - Regular
```

### Color Palette
**Option 1: Tech Blue**
- Primary: #0066FF (Blue)
- Background: #FFFFFF (White)
- Text: #1A1A1A (Near Black)
- Secondary: #F5F5F5 (Light Gray)

**Option 2: Emerald Accent**
- Primary: #10B981 (Emerald)
- Background: #FFFFFF
- Text: #1A1A1A
- Secondary: #F5F5F5

**Option 3: Monochrome**
- Primary: #1A1A1A (Black)
- Background: #FFFFFF
- Text: #1A1A1A
- Accent: #6B7280 (Gray)

### Spacing System
Use Tailwind's spacing scale (4px base unit):
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)

### Grid System
- Max content width: 1280px
- Gutter: 24px
- Columns: 12-column grid
- Breakpoints: Follow Tailwind defaults (sm, md, lg, xl, 2xl)

## Layout Patterns

### Homepage Layout
```
┌─────────────────────────────────────┐
│  Navigation (fixed/sticky)          │
├─────────────────────────────────────┤
│                                     │
│  Hero Section                       │
│  - Name (large, bold)               │
│  - Title                            │
│  - Brief intro (2-3 lines)          │
│  - CTA button                       │
│                                     │
├─────────────────────────────────────┤
│  Work Experience                    │
│  - Grid/List of positions           │
│  - Company, dates, key achievements │
│                                     │
├─────────────────────────────────────┤
│  Skills                             │
│  - Grid layout                      │
│  - Categorized by type              │
│                                     │
├─────────────────────────────────────┤
│  Contact                            │
│  - Links (email, LinkedIn, GitHub)  │
│  - Location                         │
│                                     │
└─────────────────────────────────────┘
```

## Component Specifications

### Navigation
- Minimal, fixed at top or sticky
- Logo/Name on left
- Navigation links on right (Home, Experience, Skills, Contact)
- Mobile: Hamburger menu (clean, minimal animation)

### Cards/Sections
- Clean borders or subtle shadows
- Consistent padding (p-6 or p-8)
- Hover states: subtle scale or border color change
- No rounded corners (or minimal: rounded-sm)

### Buttons
- Primary: Solid background with accent color
- Secondary: Outline style
- Consistent padding: px-6 py-3
- Hover: Slight background color shift
- No excessive border radius

### Typography Components
- Section headers: Large, bold, generous top margin
- Body text: Comfortable line height (1.6-1.7)
- Lists: Clean, left-aligned, consistent spacing
- Code snippets: Monospace font, subtle background

## Animation Guidelines

### Principles
- **Subtle and purposeful** - no gratuitous animation
- **Fast transitions** - 150-300ms duration
- **Functional** - animations should aid understanding, not distract

### Allowed Animations
- Fade in on scroll (stagger for lists)
- Hover states (scale, color shift)
- Smooth page transitions
- Reveal effects for sections

### Prohibited
- Parallax effects (too decorative)
- Excessive bounce or elastic easing
- Auto-playing animations
- Flashy transitions

## Content Guidelines

### Writing Style
- **Concise and direct** - avoid fluff
- **Active voice** - "Built X" not "X was built"
- **Metrics-focused** - include numbers (50x performance, 10,000+ users)
- **Technical but accessible** - explain what you built and why it matters

### What to Emphasize
- Distributed systems expertise
- Performance optimization (50x improvements)
- Scale (millions of requests, terabytes of data)
- Leadership and mentorship
- Cross-functional collaboration

## Technical Implementation Notes

### Next.js Configuration
```javascript
// next.config.js
module.exports = {
  output: 'export', // For static GitHub Pages deployment
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for static hosting
}
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0066FF', // or chosen accent color
      },
    },
  },
}
```

### Folder Structure
```
/app
  /page.tsx (Home)
  /layout.tsx (Root layout)
  /globals.css
/components
  /Navigation.tsx
  /Hero.tsx
  /WorkExperience.tsx
  /Skills.tsx
  /Contact.tsx
  /Footer.tsx
/public
  /resume.pdf
  /images (if needed)
```

## Deployment

### GitHub Pages Setup
1. Repository name: `username.github.io` or use custom domain
2. Build command: `npm run build`
3. Output directory: `out/`
4. Deploy via GitHub Actions or manual upload

### Performance Targets
- Lighthouse score: 95+ on all metrics
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Total bundle size: <200KB (JS)

## Success Criteria

The portfolio is successful if it:
1. ✅ Loads quickly (<2s on 3G)
2. ✅ Clearly communicates technical expertise
3. ✅ Is fully responsive (mobile-first)
4. ✅ Follows Swiss design principles rigorously
5. ✅ Works with JavaScript disabled (progressive enhancement)
6. ✅ Has clear CTAs for contact
7. ✅ Showcases real achievements with metrics
8. ✅ Is accessible (WCAG AA minimum)

## Next Steps

1. Set up Next.js project with TypeScript and Tailwind
2. Implement base layout and navigation
3. Build Hero section with your information
4. Create Work Experience section with grid layout
5. Add Skills section with categorized tech stack
6. Implement Contact section
7. Add subtle animations and interactions
8. Test responsive behavior
9. Optimize for performance
10. Deploy to GitHub Pages

## Additional Resources

- Swiss Design: https://www.smashingmagazine.com/2009/07/lessons-from-swiss-style-graphic-design/
- Grid Systems: CSS Grid and Tailwind's grid utilities
- Typography: https://tailwindcss.com/docs/font-size
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

**Remember**: The goal is a clean, professional, fast-loading portfolio that lets your work speak for itself. Every design decision should serve the purpose of clearly communicating your expertise and making it easy for potential employers or collaborators to reach you.