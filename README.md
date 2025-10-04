# Jekyll Portfolio Website

A modern, responsive portfolio website built with Jekyll and designed for GitHub Pages hosting. This single-page portfolio showcases projects, skills, and provides contact information in a clean, professional design.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with smooth transitions across all devices
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Single Page Application**: Smooth scrolling navigation between sections
- **Jekyll Powered**: Static site generation with GitHub Pages compatibility
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Focused**: Optimized CSS and JavaScript with minimal dependencies
- **Accessibility**: Keyboard navigation support and semantic markup

## 🛠️ Technologies Used

- **Jekyll**: Static site generator
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactive functionality
- **GitHub Pages**: Free hosting platform
- **Git**: Version control

## 🚀 Quick Start

### Prerequisites

- Ruby (version 2.5 or higher)
- Bundler gem
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/[YOUR_USERNAME]/[YOUR_USERNAME].github.io.git
   cd [YOUR_USERNAME].github.io
   ```

2. **Install dependencies**
   ```bash
   gem install bundler
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser and visit `http://localhost:4000`

### Alternative method (if you have Jekyll installed globally)
```bash
jekyll serve
```

## 📁 Project Structure

```
/
├── _config.yml                 # Jekyll configuration
├── index.html                  # Homepage content
├── Gemfile                     # Ruby dependencies
├── _layouts/
│   └── default.html           # Main layout template
├── assets/
│   ├── css/
│   │   └── style.css          # All styles
│   └── js/
│       └── main.js            # JavaScript functionality
└── README.md                   # This file
```

## 🎨 Customization Guide

### Personal Information

1. **Update _config.yml**
   ```yaml
   title: "Your Name"
   email: "your.email@example.com"
   description: "Your tagline here"
   github_username: "your-github-username"
   linkedin_username: "your-linkedin-username"
   ```

2. **Update social links in _config.yml**
   ```yaml
   social:
     github: "https://github.com/your-username"
     linkedin: "https://linkedin.com/in/your-profile"
     email: "mailto:your.email@example.com"
   ```

### Content Customization

1. **Hero Section**: Edit the hero section in `index.html`
2. **About Section**: Update the about paragraphs with your information
3. **Projects**: Replace the placeholder projects with your actual projects
4. **Skills**: Modify the skills lists to match your expertise
5. **Contact**: Ensure contact links point to your profiles

### Design Customization

**Colors**: Modify CSS variables in `assets/css/style.css`
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Darker brand color */
    --accent-color: #fbbf24;       /* Highlight color */
    /* ... other variables */
}
```

**Layout**: Adjust grid layouts, spacing, and section arrangements in the CSS file.

**Typography**: Change fonts by updating the Google Fonts import and CSS font-family declarations.

## 🚀 Deployment to GitHub Pages

### Method 1: Direct Push (Recommended)

1. **Create a new repository** named `[your-username].github.io`

2. **Push your code**
   ```bash
   git remote add origin https://github.com/[your-username]/[your-username].github.io.git
   git add .
   git commit -m "Initial portfolio commit"
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

4. **Access your site**
   Your site will be available at `https://[your-username].github.io`

### Method 2: Fork and Customize

1. Fork this repository
2. Rename it to `[your-username].github.io`
3. Customize the content
4. GitHub Pages will automatically deploy your changes

## 📱 Sections Overview

### Navigation
- Sticky navigation with smooth scrolling
- Active state based on current section
- Responsive design

### Hero Section
- Eye-catching gradient background
- Name highlight with accent color
- Call-to-action button

### About Section
- Professional introduction
- Personal background
- Career highlights

### Projects Section
- Featured project showcase
- Technology stack display
- Live demo and source code links

### Skills Section
- Categorized skill sets
- Frontend, backend, and tools
- Visual card layout

### Contact Section
- Multiple contact methods
- Social media links
- Professional networking

## 🎯 Best Practices Implemented

- **Performance**: Optimized CSS and JavaScript
- **SEO**: Semantic HTML and meta tags
- **Accessibility**: Keyboard navigation and ARIA labels
- **Security**: External links with `rel="noopener noreferrer"`
- **Responsive**: Mobile-first design approach
- **Modern**: ES6+ JavaScript and CSS Grid/Flexbox

## 🔧 Advanced Customization

### Adding New Sections

1. Add a new section in `index.html`
2. Include appropriate CSS in `style.css`
3. Update navigation in `_layouts/default.html`
4. Add smooth scrolling support in `main.js`

### Adding a Blog

1. Create `_posts` directory
2. Add blog layout in `_layouts/blog.html`
3. Create individual post files
4. Update navigation and styling

### Contact Form Integration

To add a working contact form:

1. Use services like Formspree, Netlify Forms, or Formspark
2. Update the contact section with a form
3. Add form validation JavaScript
4. Style the form elements

## 🐛 Troubleshooting

### Common Issues

1. **Site not loading**: Check GitHub Pages settings and repository name
2. **Styles not applying**: Verify CSS file paths and Jekyll build process
3. **JavaScript errors**: Check browser console for specific error messages
4. **Jekyll build failures**: Check `_config.yml` syntax and dependencies

### Local Development Issues

1. **Ruby version**: Ensure Ruby 2.5+ is installed
2. **Bundler errors**: Run `gem update bundler`
3. **Permission errors**: Use `sudo` if needed for gem installation
4. **Port conflicts**: Use `jekyll serve --port 4001` for alternative port

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have questions or need help customizing your portfolio:

1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Open an issue in this repository
4. Contact the maintainer

## 🎉 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons inspiration from modern web design trends

---

**Happy coding!** 🚀 Make this portfolio your own and showcase your amazing work to the world.