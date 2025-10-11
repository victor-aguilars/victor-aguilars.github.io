# Víctor Alfredo Aguilar Sánchez - Portfolio

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS, following Swiss Design principles.

## Features

- **Swiss/International Design Style**: Clean, minimal, typography-focused design
- **Fully Responsive**: Mobile-first approach with smooth animations
- **Performance Optimized**: Static site generation for fast loading
- **Accessible**: Built with semantic HTML and WCAG guidelines
- **SEO Friendly**: Proper meta tags and structured content

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The development server will start at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── WorkExperience.tsx # Work experience section
│   ├── Skills.tsx         # Skills grid
│   ├── Projects.tsx       # Featured projects
│   ├── Contact.tsx        # Contact information
│   └── Footer.tsx         # Footer
├── public/
│   └── .nojekyll          # GitHub Pages configuration
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions deployment
```

## Deployment

This portfolio is automatically deployed to GitHub Pages when you push to the main branch.

### First-time Setup

1. Go to your repository settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. Push to main branch to trigger deployment

### Manual Deployment

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#0066FF',    // Accent color
  secondary: '#F5F5F5',  // Background color
  text: '#1A1A1A',       // Text color
}
```

### Content

Update the content in each component:
- **Personal Info**: `components/Hero.tsx`
- **Work Experience**: `components/WorkExperience.tsx`
- **Skills**: `components/Skills.tsx`
- **Projects**: `components/Projects.tsx`
- **Contact**: `components/Contact.tsx`

## Design Principles

This portfolio follows Swiss Design (International Typographic Style) principles:

1. **Form Follows Function**: Every element serves a purpose
2. **Grid-Based Layout**: Organized on a modular grid system
3. **Typography-Focused**: Inter font as the primary design element
4. **Minimal Color Palette**: Monochrome with one accent color
5. **Generous Whitespace**: Active use of negative space
6. **Clean and Direct**: No unnecessary decorative elements

## Performance

- Lighthouse score target: 95+ on all metrics
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Optimized for static deployment

## License

© 2025 Víctor Alfredo Aguilar Sánchez. All rights reserved.

## Contact

- **Email**: victor.aguilarsnz@gmail.com
- **Location**: Monterrey, N.L. México
- **Phone**: +52 811 906 8078
