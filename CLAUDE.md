# Senior Software Engineer Portfolio - Project Specification

## Project Overview
Build a professional portfolio website for Víctor Aguilar, a Senior Software Engineer with 8+ years of experience in distributed systems, cloud-native applications, and high-throughput services.

**Primary Purpose:** Showcase personal projects and technical work through detailed project pages with live demos, technical write-ups, and links to repositories. The portfolio itself demonstrates full-stack development skills while serving as a platform to highlight other interesting projects.

**Key Differentiator:** Unlike typical portfolios that just list work experience, this portfolio features interactive project showcases where visitors can actually use the applications (like the Alethi Women's Script translator) directly within the portfolio.

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
Víctor Aguilar
Senior Software Engineer

9+ years designing and scaling distributed systems, cloud-native applications,
and high-throughput services. Strong experience with API design, performance
optimization, and microservice architecture. Proven ability to drive cross-team
initiatives, mentor engineers, and deliver systems that support millions of users.

Currently: Senior Software Engineer at Apptegy (Remote, Monterrey, N.L. México)
```

#### 2. Work Experience
Display in reverse chronological order:

**Apptegy** (Sept 2022 - Present)
- Developed multi-tenant AI orchestration platform leveraging FastAPI for custom agents, Langfuse for prompt versioning/observability, and Next.js for frontend
- Engineered high-performance analytics microservice using Cube.dev; reduced query latency from 30 seconds to microseconds
- Architected microservice-based data platform (Ruby on Rails + VueJS) for horizontal scalability and millions of daily requests
- Optimized PostgreSQL queries and offloaded workloads to DuckDB (50x performance boost, 50% cost reduction)
- Built async data pipelines with Sidekiq + Redis, enabling ingestion of terabytes of data daily
- Boosted engineering velocity by developing internal custom agents and specialized skills for Cursor and Claude Code

**Bengala** (Aug 2019 - Aug 2022)
- Led backend engineering team to plan, design, and deliver large-scale solutions for clients across fintech, mobility, and logistics
- Architected geolocation platforms supporting 10,000+ real-time users with low-latency tracking, optimized routing, and seamless payments

**Telos Labs** (Jan 2019 - July 2019)
- Built client-facing Rails + VueJS applications with emphasis on performance and usability

**Softtek** (Aug 2017 - Dec 2018)
- Developed React Native + Unity3D AR/VR apps, including enterprise HoloLens training solutions with advanced spatial mapping

#### 3. Skills/Tech Stack
Organized in clear categories with visual grid:

**Backend & Distributed Systems**
Ruby, Python, Java, Rails, SQL/NoSQL, REST, GraphQL, Elasticsearch, Kafka, RabbitMQ, Supabase

**Frontend & Mobile**
Vue.js, React, React Native, ExpoJS, NextJs, EmberJS, Typescript, Tailwind

**AI & Development Tools**
Cursor, Claude Code, Gemini, CodeRabbit

**Cloud & Infrastructure**
AWS (EC2, S3, Lambda, CloudFront), Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins), Prometheus, Grafana

**Languages & Soft Skills**
English (Fluent), Spanish (Native), Leadership, System Design, Mentorship, Collaboration

#### 4. Projects (Required - Primary Focus)
This section showcases personal projects and side work with detailed descriptions, technical implementations, and links to repositories or live demos.

**Project Structure:**
Each project should include:
- **Project name** and tagline
- **Tech stack** (with technology badges/chips)
- **Detailed description** (3-5 paragraphs explaining the problem, solution, and implementation)
- **Key features** (bulleted list of main capabilities)
- **Technical highlights** (architecture decisions, interesting challenges solved)
- **Links**: GitHub repository (if public) or "Private/Enterprise", Live demo (if available)
- **Optional**: Screenshots, demo GIFs, or embedded interactive demos

**Example Projects to Include:**

1. **Alethi Women's Script Translator** ✅
   - Tech: Next.js, TypeScript, SVG, Tailwind CSS
   - A web application that translates English to the fictional Alethi Women's Script from Brandon Sanderson's "The Stormlight Archive"
   - Features: Phonetic translation engine, SVG rendering, export to PNG/SVG, real-time preview
   - Technical highlights: Custom phoneme mapping algorithm, dynamic SVG generation, coordinate system normalization
   - Link: GitHub repository, Live demo on GitHub Pages

2. **[Future Project Slot]**
   - Space for additional personal projects
   - Could include: CLI tools, open-source contributions, technical experiments

3. **[Future Project Slot]**
   - Another project showcase opportunity

**Work-Related Projects** (Optional subsection):
For notable work projects that can be discussed publicly (without violating NDAs):
- Data platform at Apptegy (microservices, scalability) - high-level overview only
- Geolocation platform at Bengala (real-time systems) - architecture and results
- AR/VR training solution at Softtek (innovation) - general approach and tech stack

#### 5. Contact
- Email: victor.aguilarsnz@gmail.com
- LinkedIn: [Link]
- GitHub: [Link]
- Location: Monterrey, N.L. México

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
│  - CTA buttons (View Projects,      │
│    Contact)                         │
│                                     │
├─────────────────────────────────────┤
│  Projects (PRIMARY SECTION)         │
│  - Featured project cards           │
│  - Each with title, description,    │
│    tech stack, and links            │
│  - Grid layout (2 cols on desktop)  │
│  - Click to expand/view details     │
│                                     │
├─────────────────────────────────────┤
│  Work Experience                    │
│  - Timeline/List of positions       │
│  - Company, dates, key achievements │
│  - Can be more condensed            │
│                                     │
├─────────────────────────────────────┤
│  Skills                             │
│  - Grid layout                      │
│  - Categorized by type              │
│  - Visual badges/chips              │
│                                     │
├─────────────────────────────────────┤
│  Contact                            │
│  - Links (email, LinkedIn, GitHub)  │
│  - Location                         │
│  - Simple contact form (optional)   │
│                                     │
└─────────────────────────────────────┘
```

## Component Specifications

### Navigation
- Minimal, fixed at top or sticky
- Logo/Name on left
- Navigation links on right (Home, Projects, Experience, Skills, Contact)
- Mobile: Hamburger menu (clean, minimal animation)
- Active state indicator for current section

### Cards/Sections
- Clean borders or subtle shadows
- Consistent padding (p-6 or p-8)
- Hover states: subtle scale or border color change
- No rounded corners (or minimal: rounded-sm)

### Project Cards (Specific)
- **Layout**: Vertical card with thumbnail image at top
- **Dimensions**: Consistent aspect ratio (e.g., 16:9 or 4:3 for thumbnail)
- **Content structure**:
  - Thumbnail/hero image
  - Tech stack badges (small chips/pills)
  - Project title (H3)
  - One-line description
  - "View Project" link/button
- **Hover effect**: Subtle lift (translateY(-4px)) + shadow increase
- **Border**: 1px solid border, accent color on hover
- **Responsive**: Full width on mobile, 2 columns on tablet+, 2-3 columns on desktop
- **Accessibility**: Entire card is clickable, proper focus states

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
  /page.tsx (Home - main landing page)
  /layout.tsx (Root layout)
  /globals.css
  /projects/
    /page.tsx (Projects index/gallery)
    /womens-script/
      /page.tsx (Alethi Women's Script project page)
    /[slug]/
      /page.tsx (Dynamic project detail pages)
/components
  /Navigation.tsx
  /Hero.tsx
  /ProjectCard.tsx (Project preview cards)
  /ProjectDetail.tsx (Expanded project view)
  /WorkExperience.tsx
  /Skills.tsx
  /Contact.tsx
  /Footer.tsx
  /womens-script/ (Women's Script specific components)
    /Translator.tsx
    /ScriptDisplay.tsx
    /TextInput.tsx
    /ExportControls.tsx
/lib
  /projects.ts (Project data and metadata)
  /womens-script/ (Women's Script specific logic)
    /letterDefinitions.ts
    /phonemeMapper.ts
    /svgGenerator.ts
    /heightMarker.ts
/public
  /images/
    /projects/ (Project screenshots and images)
  /svg-assets/ (Women's Script SVG files)
```

## Project Integration

### Project Pages Architecture
The portfolio follows a two-tier project display system:

**Tier 1: Project Cards (Homepage)**
- Grid of project cards on the main page
- Each card shows: thumbnail, title, tech stack, 1-line description
- Hover effect reveals "View Project" CTA
- Click navigates to detailed project page

**Tier 2: Detailed Project Pages**
- Each project gets its own route: `/projects/[project-slug]`
- Full project description, architecture details, screenshots
- For interactive projects (like Women's Script): embedded live demo
- GitHub repository link and/or live demo link
- Back to projects navigation

### Women's Script Project Integration
The Alethi Women's Script translator is both:
1. **A showcase project** - demonstrates full-stack TypeScript/Next.js skills
2. **A functional application** - visitors can use it directly on the portfolio

**Implementation approach:**
- Project card on homepage links to `/projects/womens-script`
- Dedicated project page with explanation and full translator UI
- All Women's Script components (Translator, ScriptDisplay, etc.) embedded in the project page
- Visitors can translate text and export results directly
- Technical write-up explaining the phoneme mapping algorithm and SVG rendering

### Project Data Structure
```typescript
interface Project {
  slug: string;                    // URL-friendly identifier
  title: string;                   // Display name
  tagline: string;                 // One-line description
  description: string[];           // Array of paragraphs
  techStack: string[];             // Technologies used
  features: string[];              // Key features list
  technicalHighlights: string[];   // Interesting technical details
  links: {
    github?: string;               // GitHub repo URL (if public)
    live?: string;                 // Live demo URL
    demo?: string;                 // Embedded demo route
  };
  thumbnail: string;               // Image for project card
  images?: string[];               // Additional screenshots
  status: 'active' | 'archived';   // Current status
  featured: boolean;               // Show on homepage
  year: number;                    // Creation year
}
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

### Phase 1: Core Portfolio Structure
1. ✅ Set up Next.js project with TypeScript and Tailwind
2. ✅ Implement base layout and navigation (with Projects link)
3. ✅ Build Hero section with your information
4. Create project data structure (`lib/projects.ts`)
5. Build ProjectCard component
6. Create Projects section on homepage (featured projects)
7. Build Work Experience section (condensed)
8. Add Skills section with categorized tech stack
9. Implement Contact section

### Phase 2: Women's Script Project Integration
1. Create `/app/projects/womens-script/page.tsx`
2. Implement Women's Script components:
   - Letter definitions (`lib/womens-script/letterDefinitions.ts`)
   - Phoneme mapper (`lib/womens-script/phonemeMapper.ts`)
   - SVG generator (`lib/womens-script/svgGenerator.ts`)
   - UI components (Translator, ScriptDisplay, TextInput, ExportControls)
3. Write project description and technical write-up
4. Add project to featured projects on homepage
5. Test translator functionality
6. Add export features (PNG/SVG download)

### Phase 3: Polish & Deployment
1. Add subtle animations and interactions
2. Test responsive behavior across devices
3. Optimize performance (images, code splitting)
4. SEO optimization (metadata, Open Graph tags)
5. Accessibility audit (WCAG AA compliance)
6. Deploy to GitHub Pages
7. Set up custom domain (optional)

### Phase 4: Additional Projects (Future)
1. Identify 1-2 more projects to showcase
2. Create project pages for each
3. Add to homepage projects section
4. Continuous updates and improvements

## Additional Resources

- Swiss Design: https://www.smashingmagazine.com/2009/07/lessons-from-swiss-style-graphic-design/
- Grid Systems: CSS Grid and Tailwind's grid utilities
- Typography: https://tailwindcss.com/docs/font-size
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

**Remember**: The goal is a clean, professional, fast-loading portfolio that lets your work speak for itself. Every design decision should serve the purpose of clearly communicating your expertise and making it easy for potential employers or collaborators to reach you.

---

# FEATURED PROJECT: Alethi Women's Script Translator

> This section contains the detailed specification for one of the showcase projects that will be featured in the portfolio. This project demonstrates TypeScript/Next.js skills, algorithm design, SVG manipulation, and UI/UX implementation.

## Project Overview

This is a Next.js web application that translates English text into Alethi Women's Script from Brandon Sanderson's "The Stormlight Archive" series. The script is a phonetic writing system that resembles waveforms and is horizontally symmetrical around a baseline.

**Integration with Portfolio:**
- Featured as a primary project on the portfolio homepage
- Dedicated project page at `/projects/womens-script` with full technical write-up
- Live, interactive translator embedded directly in the project page
- Demonstrates full-stack development, algorithm design, and visual programming skills

## About the Writing System

### Key Characteristics
- **Phonetic alphabet**: Maps to sounds, not letters
- **Horizontally symmetrical**: Letters mirror across a horizontal baseline
- **Shape + Height system**: Each letter defined by visual shape and height
- **Waveform-inspired**: Designed to look like sound waves
- **Direction**: Written left-to-right like English

### Letter Groups
Letters are organized into groups by shape:
- **E Group**: Vertical lines (e, a, o, i, u) - differentiated by height
- **P Group**: Similar waveforms (p, b, m, f, v)
- **T Group**: Right-facing curves (t, d, l)
- **K Group**: (k, g)
- **S Group**: (s, z, n)
- **R Group**: (r)
- **Y Group**: (y, j - same sound in Alethi)
- **Special Phonemes**: ch, sh, th

### Height Classifications
- **Large**: Full height (1.0x)
- **Medium**: 2/3 height (0.67x)
- **Small**: 1/3 height (0.33x)

### Special Features
- **Height Marker**: Vertical line with horizontal caps at top/bottom, placed at the beginning of text blocks to establish maximum character height
- **Modifiers**: Single or double lines can appear after letters
- **H Diacritic**: Special mark above and below letters to indicate "h" sound in symmetrical words
- **Punctuation**: Minimal; questions marked by adding "ha" at end of sentence

### English → Alethi Phoneme Mapping Rules

#### Letters without direct equivalents:
- `c` → `s` (soft c, as in "city") or `k` (hard c, as in "cat")
- `q` → `k`
- `x` → `ks` (becomes two phonemes: k + s)
- `w` → `u`

#### Multi-character phonemes (check these FIRST when parsing):
- `ch` → single phoneme (as in "church")
- `sh` → single phoneme (as in "ship")
- `th` → single phoneme (as in "thing")

#### Same sound, different letter:
- `j` → `y` (pronounced the same in Alethi)

## Tech Stack

- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (for UI, not the script itself)
- **Rendering**: SVG (for the women's script characters)

## Project Status

### ✅ Completed
- Research and planning phase
- SVG assets for all phoneme characters acquired

### 🚧 Current Phase
- Setting up data structures and organization

### ⏳ Todo
- Create letter definitions file with SVG paths
- Build phoneme mapper (English → phonemes)
- Build SVG renderer (phonemes → visual output)
- Create UI components
- Add export features (PNG, SVG download)

## Project Architecture (Within Portfolio)

This project is integrated into the larger portfolio structure. The relevant files are:

```
/app
  /projects
    /womens-script/
      /page.tsx                  # Project page with embedded translator

/components
  /womens-script/
    /Translator.tsx              # Main UI component
    /ScriptDisplay.tsx           # Renders the women's script output
    /TextInput.tsx               # Input area for English text
    /ExportControls.tsx          # Download PNG/SVG buttons

/lib
  /womens-script/
    /letterDefinitions.ts        # SVG path data for each phoneme
    /phonemeMapper.ts            # English → phoneme conversion logic
    /svgGenerator.ts             # Phonemes → SVG rendering
    /heightMarker.ts             # Height indicator logic

/public
  /svg-assets/
    /womens-script/              # Original SVG files for letters
  /images/
    /projects/
      /womens-script-thumbnail.png  # Project card image
      /womens-script-demo.gif       # Demo animation (optional)
```

## Data Structures

### Letter Definition Type
```typescript
type LetterHeight = 'small' | 'medium' | 'large';

interface Letter {
  phoneme: string;           // "a", "b", "ch", etc.
  height: LetterHeight;      // Relative height classification
  svgPath: string;           // SVG path data (d attribute)
  width: number;             // Character width for spacing
  baseline: number;          // Vertical position relative to baseline
  modifiers?: {              // Optional modifier lines
    singleLine?: boolean;
    doubleLine?: boolean;
  }
}

// Main data structure
const LETTERS: Record<string, Letter> = {
  'a': { ... },
  'b': { ... },
  // ... all phonemes
};
```

### Rendering Options
```typescript
interface RenderOptions {
  scale: number;             // Overall size multiplier
  strokeWidth: number;       // Line thickness
  color: string;             // Stroke color
  italicAngle: number;       // Slant angle in degrees
  spacing: number;           // Space between characters
  includeBaseline: boolean;  // Show the horizontal baseline
  autoHeightMarkers: boolean; // Auto-insert height markers
}
```

## Implementation Notes

### Phase 1: Letter Definitions (lib/letterDefinitions.ts)
1. Create the Letter interface and types
2. Define the LETTERS object with all ~35 phonemes
3. Include the HEIGHT_MARKER definition
4. Export helper functions if needed (e.g., `getLetterByPhoneme()`)

**Important considerations:**
- Ensure all SVG paths use the same coordinate system
- Normalize widths for consistent spacing
- Document which direction is "up" in your coordinate system

### Phase 2: Phoneme Mapping (lib/phonemeMapper.ts)
1. Parse English text character by character
2. Check for multi-character phonemes FIRST (ch, sh, th)
3. Handle special cases (c, q, x, w)
4. Handle spaces and word boundaries
5. Return array of phoneme strings

**Edge cases to consider:**
- How to handle 'c' contextually (cat vs city)
- Silent letters (knight, though)
- Double letters (happy → hapy?)
- Numbers and punctuation

### Phase 3: SVG Generation (lib/svgGenerator.ts)
1. Convert phoneme array to positioned SVG elements
2. Calculate cumulative x-positions based on letter widths + spacing
3. Apply transformations (scale, italic angle)
4. Optionally include baseline guide
5. Auto-insert height markers at text start and after blank lines

**Technical details:**
- Use SVG `<g>` groups for easy transformation
- Apply italic via `transform="skewX(-angle)"`
- Use `viewBox` for proper scaling
- Consider using `<symbol>` and `<use>` for letter reuse

### Phase 4: React Components

#### Translator.tsx
Main component that orchestrates everything:
- Manages input text state
- Triggers phoneme conversion
- Passes data to display component
- Handles render options state

#### ScriptDisplay.tsx
Displays the rendered script:
- Receives phoneme array and render options
- Generates SVG using svgGenerator
- Shows the visual output

#### TextInput.tsx
Text input interface:
- Textarea for English input
- Real-time preview toggle
- Character count

#### ExportControls.tsx
Download functionality:
- Export as SVG (native format)
- Export as PNG (use canvas conversion or html-to-image library)
- Copy SVG to clipboard
- Customization controls (color, size, style)

### Phase 5: Export Features
Libraries to consider:
- `html-to-image` - Convert SVG to PNG
- `file-saver` - Trigger downloads
- Native clipboard API for copy functionality

## Development Workflow

### Adding New Features
1. Update this CLAUDE.MD file with plans
2. Implement the feature
3. Update the status section

### Testing Considerations
- Test with symmetrical Rosharan names (Kaladin, Shallan, Adolin)
- Test special phonemes (church, ship, thing)
- Test edge cases (numbers, punctuation, special characters)
- Test export functionality across browsers

## Reference Links

- [Coppermind Wiki - Women's Script](https://coppermind.net/wiki/Women%27s_script)
- [Existing Generator](https://aclay.github.io/stormlight-womens-script/)
- [Omniglot - Women's Script](https://www.omniglot.com/conscripts/womensscript.htm)

## Known Issues / Future Enhancements

- [ ] Need to decide on hard vs soft 'c' handling
- [ ] Silent letter detection not yet implemented
- [ ] Mobile responsive design needed
- [ ] Dark mode support
- [ ] Save/load text presets
- [ ] Share functionality (URL with encoded text)
- [ ] Multiple export size options
- [ ] Custom color palettes
- [ ] Animation of writing script (optional cool feature)

## Questions to Resolve

1. **SVG Coordinate System**: Are all your SVGs normalized to the same viewBox? What are the dimensions?
2. **Letter Widths**: Do you have consistent width measurements, or do they need to be measured?
3. **Baseline Position**: Where is the baseline in your SVG coordinate system? (y=0, y=50, etc.)
4. **Height Scaling**: How do small/medium/large heights map to actual measurements in your SVGs?
5. **Context-sensitive C**: Should we use simple rules (c before e/i/y = s) or always default to one?

## Next Immediate Steps

1. ✅ Create this CLAUDE.MD file
2. ⏳ Create `lib/letterDefinitions.ts` with your SVG data
3. ⏳ Build `lib/phonemeMapper.ts` 
4. ⏳ Build `lib/svgGenerator.ts`
5. ⏳ Create basic UI components
6. ⏳ Implement export functionality

---

---

# ADDING FUTURE PROJECTS

## Project Template Structure

When adding a new project to the portfolio, follow this structure:

### 1. Add Project Metadata
In `/lib/projects.ts`:
```typescript
{
  slug: 'project-slug',
  title: 'Project Name',
  tagline: 'One-line description for cards',
  description: [
    'First paragraph explaining the problem...',
    'Second paragraph about the solution...',
    'Third paragraph about implementation...',
  ],
  techStack: ['Next.js', 'TypeScript', 'etc'],
  features: [
    'Key feature 1',
    'Key feature 2',
  ],
  technicalHighlights: [
    'Interesting technical challenge 1',
    'Interesting technical challenge 2',
  ],
  links: {
    github: 'https://github.com/username/repo',
    live: 'https://live-demo.com',
  },
  thumbnail: '/images/projects/project-thumbnail.png',
  status: 'active',
  featured: true,
  year: 2025,
}
```

### 2. Create Project Page
`/app/projects/[slug]/page.tsx` with:
- Project header (title, tech stack, links)
- Description sections
- Screenshots or demo
- Technical write-up
- For interactive projects: embedded component
- Link back to projects

### 3. Add Assets
- Thumbnail image (16:9 ratio, ~1200x675px)
- Screenshot images
- Demo GIF (optional)

### 4. Update Homepage
The project will automatically appear if `featured: true`

## Project Ideas to Consider

- **CLI Tools**: Command-line utilities you've built
- **Open Source Contributions**: Significant PRs or contributions
- **Technical Experiments**: Interesting technical deep-dives
- **Data Visualizations**: Interactive data projects
- **API Projects**: Interesting API integrations or wrappers
- **Algorithm Implementations**: Visual algorithm explainers
- **Game Projects**: Small games or interactive experiences

---

## Notes for Future Claude Sessions

When continuing work on this project:
1. Read this file first to understand the project context
2. The portfolio is now focused on **showcasing projects**, not just listing experience
3. Check the "Current Phase" section to see where we left off
4. Review any "Questions to Resolve" that might need user input
5. Update status sections as work progresses

### Current Portfolio Structure:
- **Main Portfolio**: Professional portfolio website (this document)
- **Featured Project #1**: Alethi Women's Script Translator (detailed spec below)
- **Future Projects**: Space for 2-3 more projects

### Implementation Priority:
1. Core portfolio structure (Hero, Navigation, Projects section)
2. Women's Script project integration
3. Work Experience and Skills sections
4. Additional projects as they're developed