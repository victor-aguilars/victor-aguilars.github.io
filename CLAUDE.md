# Senior Software Engineer Portfolio - Project Specification

## Project Overview
Build a professional portfolio website for Víctor Aguilar, a Senior Software Engineer with 8+ years of experience in distributed systems, cloud-native applications, and high-throughput services.

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

# Alethi Women's Script Translator

## Project Overview

This is a Next.js web application that translates English text into Alethi Women's Script from Brandon Sanderson's "The Stormlight Archive" series. The script is a phonetic writing system that resembles waveforms and is horizontally symmetrical around a baseline.

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

## Project Architecture

```
project-root/
├── components/
│   ├── Translator.tsx          # Main UI component
│   ├── ScriptDisplay.tsx       # Renders the women's script output
│   ├── TextInput.tsx           # Input area for English text
│   └── ExportControls.tsx      # Download PNG/SVG buttons
│
├── lib/
│   ├── letterDefinitions.ts    # SVG path data for each phoneme
│   ├── phonemeMapper.ts        # English → phoneme conversion logic
│   ├── svgGenerator.ts         # Phonemes → SVG rendering
│   └── heightMarker.ts         # Height indicator logic
│
├── public/
│   └── [svg-assets/]           # Original SVG files (if stored separately)
│
├── styles/
│   └── script.module.css       # Styling for script display
│
└── CLAUDE.MD                   # This file
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

## Notes for Future Claude Sessions

When continuing work on this project:
1. Read this file first to understand the project context
2. Check the "Current Phase" section to see where we left off
3. Review any "Questions to Resolve" that might need user input
4. Update status sections as work progresses

The user has all SVG assets ready to use. Focus should be on implementing the translation pipeline and UI.