# Jekyll Portfolio Website - Project Instructions

## Project Overview
This is a professional web development portfolio website built with Jekyll and designed to be hosted on GitHub Pages. The portfolio showcases projects, skills, and provides contact information in a clean, modern, single-page design.

## Personal Information
- **Name**: [YOUR NAME]
- **Email**: [YOUR EMAIL]
- **GitHub**: [YOUR GITHUB USERNAME]
- **LinkedIn**: [YOUR LINKEDIN USERNAME]
- **Site URL**: https://[YOUR GITHUB USERNAME].github.io
- **Tagline**: Web Developer | Building responsive and user-friendly applications

## Technical Stack
- **Static Site Generator**: Jekyll
- **Hosting**: GitHub Pages
- **Templating**: Liquid
- **Styling**: Pure CSS (no frameworks)
- **JavaScript**: Vanilla JS (no libraries)
- **Version Control**: Git

## Project Structure
```
/
├── _config.yml                 # Jekyll configuration
├── index.html                  # Homepage (single-page portfolio)
├── Gemfile                     # Ruby dependencies
├── _layouts/
│   └── default.html           # Main layout template
├── assets/
│   ├── css/
│   │   └── style.css          # All styles
│   └── js/
│       └── main.js            # All JavaScript
└── README.md                   # Project documentation
```

## Design Requirements

### Color Scheme
- **Primary Color**: #2563eb (Blue)
- **Secondary Color**: #1e40af (Darker Blue)
- **Text Color**: #1f2937 (Dark Gray)
- **Text Light**: #6b7280 (Medium Gray)
- **Background**: #ffffff (White)
- **Background Light**: #f9fafb (Light Gray)
- **Accent/Highlight**: #fbbf24 (Gold/Yellow for hero section)

Use CSS custom properties (variables) in `:root` for easy customization.

### Layout & Sections

#### Navigation Bar
- Sticky navigation at the top
- Logo/name on the left
- Links on the right: About, Projects, Skills, Contact
- Smooth scrolling to sections
- Active state based on current section in view
- Box shadow for depth
- Responsive (hamburger menu not required for MVP)

#### Hero Section
- Full-width section with gradient background (purple/blue gradient)
- Large heading with name (highlight name in gold color)
- Tagline/description
- Call-to-action button "View My Work" linking to #projects
- Centered content
- White text

#### About Section
- Light gray background (#f9fafb)
- Centered heading "About Me"
- 2-3 paragraphs of placeholder text about being a web developer
- Max-width container for readability
- Centered text

#### Projects Section
- White background
- Heading "Featured Projects"
- Grid layout: 3 columns on desktop, 1 column on mobile
- 3 project cards with:
  - Project title
  - Tech stack (small text, different color)
  - Description (2-3 sentences)
  - Links: "Live Demo" and "Source Code"
- Card hover effects (lift up, increase shadow)
- Cards should have subtle box shadow

#### Skills Section
- Light gray background (#f9fafb)
- Heading "Skills & Technologies"
- Grid layout: 3 columns on desktop, 1 on mobile
- 3 skill categories:
  - **Frontend**: HTML5 & CSS3, JavaScript (ES6+), React, Vue.js, Responsive Design
  - **Backend**: Node.js, Express, Python, RESTful APIs, Database Design
  - **Tools & Other**: Git & GitHub, VS Code, Chrome DevTools, Figma, Agile/Scrum
- Each category in a card with box shadow

#### Contact Section
- White background
- Heading "Get In Touch"
- Brief message about being open to opportunities
- Centered buttons/links for: Email, GitHub, LinkedIn
- Links should be styled as buttons

#### Footer
- Dark background (#1f2937)
- White text
- Copyright notice and "Built with Jekyll & GitHub Pages"
- Centered content

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px for tablet/desktop
- Navigation links should stack or reduce gap on mobile
- Grid layouts should become single column on mobile
- Font sizes should scale down appropriately
- Hero heading should be smaller on mobile

### Animations & Interactions
- Smooth scrolling for all anchor links
- Navigation links change color on hover
- Project cards lift and increase shadow on hover
- Fade-in animation for project cards and skill categories when scrolling into view (use Intersection Observer)
- Smooth transitions on all interactive elements
- Active navigation state based on scroll position

## Code Standards

### HTML
- Use semantic HTML5 elements
- Include proper meta tags (charset, viewport, description)
- Use Jekyll Liquid templating for dynamic content (site.title, site.email, etc.)
- Keep structure clean and well-indented
- Add comments for major sections

### CSS
- Use CSS custom properties for colors and repeated values
- Mobile-first media queries
- BEM or semantic class naming
- Group related styles together
- Add comments for major sections
- No CSS frameworks (pure CSS only)
- Use flexbox and grid for layouts

### JavaScript
- Use modern ES6+ syntax
- Add comments explaining functionality
- No external libraries (vanilla JS only)
- Handle edge cases (check if elements exist before manipulating)
- Use event delegation where appropriate

### Jekyll/Liquid
- Use site variables from _config.yml
- Use proper Liquid syntax with {% %} and {{ }}
- Keep logic minimal in templates
- Use layouts for DRY code

## File-Specific Requirements

### _config.yml
- Set all personal information
- Configure for GitHub Pages compatibility
- Set markdown processor to kramdown
- Exclude unnecessary files from build
- Include social media links

### index.html
- Front matter with layout: default
- Use Liquid to pull in config variables
- All sections in semantic HTML5
- Use section elements with IDs for navigation

### _layouts/default.html
- Complete HTML5 document structure
- Include navigation and footer
- Link to CSS and JS files using Liquid relative_url
- {{ content }} placeholder for page content
- Proper meta tags for SEO

### assets/css/style.css
- Complete styling for entire site
- Organized by component/section
- Responsive styles in media queries at bottom
- Use CSS Grid and Flexbox
- Modern, clean aesthetic

### assets/js/main.js
- Smooth scrolling implementation
- Active navigation state logic
- Intersection Observer for scroll animations
- All functionality well-commented

### README.md
- Project description
- Technologies used
- Setup instructions (how to run locally)
- Deployment instructions (GitHub Pages)
- Customization guide
- License information

## Development Workflow

### Local Development
1. Install Ruby and Jekyll
2. Run `bundle install`
3. Run `jekyll serve` or `bundle exec jekyll serve`
4. View at `http://localhost:4000`

### Deployment to GitHub Pages
1. Create repository named `[username].github.io`
2. Push all files to main branch
3. Enable GitHub Pages in repository settings
4. Site will be live at `https://[username].github.io`

## Customization Guidelines
- Colors: Modify CSS custom properties in `:root`
- Content: Update index.html and _config.yml
- Projects: Replace placeholder projects with real ones
- Skills: Edit skills section to match actual skills
- Sections: Can add/remove sections as needed
- Layout: Can adjust grid columns, spacing, etc.

## Best Practices
- Keep code clean and well-organized
- Use meaningful class names
- Comment complex logic
- Test on multiple devices/browsers
- Optimize images before adding
- Keep file sizes small for fast loading
- Use semantic HTML for accessibility
- Ensure proper color contrast for readability

## Future Enhancements (Optional)
- Add a blog section
- Include project screenshots/images
- Add testimonials section
- Implement dark mode toggle
- Add animations library (AOS, GSAP)
- Include contact form (using Formspree or similar)
- Add Google Analytics
- Create custom 404 page
- Add favicon and social media preview images

## Notes for Claude Code
- Create production-ready code, not placeholders
- Follow all design specifications exactly
- Use modern web development best practices
- Ensure all code is well-commented
- Test that all links and functionality work
- Make the code easy to understand and modify
- Prioritize clean, maintainable code over clever solutions