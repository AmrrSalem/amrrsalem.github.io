# Amr Salem - Professional Data Science Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://amrrsalem.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> A modern, responsive portfolio website showcasing data science projects, technical expertise, and professional experience.

## 🌟 Features

### ✅ Implemented Features

- **🌓 Dark Mode Toggle** - Theme switcher with localStorage persistence
- **⌨️ Typing Animation** - Dynamic role display in hero section
- **🎬 Smooth Animations** - AOS (Animate On Scroll) library integration
- **🔍 Project Filtering** - Interactive filtering by technology/domain
- **📊 Skills Visualization** - Interactive radar chart using Chart.js
- **📱 Progressive Web App (PWA)** - Offline functionality with service worker
- **📝 Blog Infrastructure** - Ready for technical articles with syntax highlighting
- **📄 /now Page** - Current activities and focus areas
- **🎨 Responsive Design** - Mobile-first approach, works on all devices
- **⚡ Performance Optimized** - Lazy loading, minification, caching
- **🔎 SEO Optimized** - Meta tags, JSON-LD, sitemap, robots.txt
- **♿ Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

## 📁 Project Structure

```
amrrsalem.github.io/
├── index.html                 # Main portfolio page
├── now.html                   # Current activities page
├── manifest.json              # PWA manifest
├── sw.js                      # Service worker
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Search engine directives
├── _config.yml               # Jekyll configuration
│
├── assets/
│   ├── css/
│   │   └── enhancements.css  # Dark mode & feature styles
│   ├── js/
│   │   ├── enhancements.js   # Main interactive features
│   │   └── skills-chart.js   # Skills visualization
│   └── data/
│       └── structured-data.json # JSON-LD schema
│
├── blog/
│   ├── index.html            # Blog homepage
│   └── _posts/               # Blog articles (future)
│
└── imgs/
    └── Amr.png               # Profile image
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmrrSalem/amrrsalem.github.io.git
   cd amrrsalem.github.io
   ```

2. **Serve locally:**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### GitHub Pages Deployment

The site automatically deploys to GitHub Pages when you push to the main branch.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Live site: https://amrrsalem.github.io/

## 🎨 Customization Guide

### Update Personal Information

#### 1. **index.html** - Main Content
```html
<!-- Hero Section -->
<h1>Your Name Here</h1>
<p class="subtitle">Your Roles | Your Specialization</p>

<!-- Update stats -->
<span class="stat-number">10+</span>
<span class="stat-label">Years Experience</span>
```

#### 2. **Typing Animation Roles**
Edit `assets/js/enhancements.js`:
```javascript
const roles = [
    'Your Role 1',
    'Your Role 2',
    'Your Role 3'
];
```

#### 3. **Skills Chart Data**
Edit `assets/js/skills-chart.js`:
```javascript
const skillsData = {
    labels: ['Skill 1', 'Skill 2', ...],
    datasets: [{
        data: [95, 90, 85, ...] // Proficiency percentages
    }]
};
```

### Add New Projects

Add to the projects section in `index.html`:
```html
<div class="project-card" data-category="ml analytics">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-badge">Python</span>
            <span class="tech-badge">ML</span>
        </div>
        <div class="project-links">
            <a href="github-url" target="_blank">
                <i class="fab fa-github"></i> Source Code
            </a>
            <a href="demo-url" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

**Available Categories:**
- `ml` - Machine Learning
- `dl` - Deep Learning
- `iot` - Internet of Things
- `analytics` - Data Analytics
- `nlp` - Natural Language Processing

### Update /now Page

Edit `now.html` to reflect current activities:
```html
<div class="progress-item">
    <div class="progress-header">
        <span><strong>Activity Name</strong></span>
        <span>Progress %</span>
    </div>
    <div class="progress-bar">
        <div class="progress-fill" style="width: 75%"></div>
    </div>
</div>
```

### Add Blog Posts

1. Create a new HTML file in `blog/_posts/`:
   ```
   blog/_posts/2025-01-15-your-post-title.html
   ```

2. Use Prism.js for code highlighting:
   ```html
   <pre><code class="language-python">
   def hello_world():
       print("Hello, World!")
   </code></pre>
   ```

3. Update `blog/index.html` to add the post card.

### Theme Colors

Edit CSS variables in `assets/css/enhancements.css` and inline styles:
```css
:root {
    --primary-color: #0f4c81;      /* Main brand color */
    --accent-color: #0891b2;       /* Accent/highlight color */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
}
```

## 🔧 Configuration

### Google Analytics

1. Get your Google Analytics ID
2. Edit `index.html` and uncomment the Analytics section:
   ```html
   <!-- Replace GA_MEASUREMENT_ID with your actual ID -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

### PWA Icons

Generate PWA icons (192x192 and 512x512) and save to `imgs/`:
- `icon-192.png`
- `icon-512.png`

Tools:
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/

### Contact Form Integration

The contact form currently has a placeholder. Integrate with:

#### Option 1: Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option 2: EmailJS
Add EmailJS script and update `assets/js/enhancements.js`:
```javascript
emailjs.send("service_id", "template_id", templateParams)
```

#### Option 3: Netlify Forms
Add to form tag:
```html
<form name="contact" method="POST" data-netlify="true">
```

## 📊 Performance Optimization

### Image Optimization

1. **Compress images:**
   - Use https://tinypng.com/
   - Or ImageOptim for batch processing

2. **Convert to WebP:**
   ```bash
   cwebp -q 80 image.png -o image.webp
   ```

3. **Use with fallback:**
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.png" alt="Description" loading="lazy">
   </picture>
   ```

### Lighthouse Score Goals

- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: 100

Run audit:
```bash
npx lighthouse https://amrrsalem.github.io/ --view
```

## 🔒 Security

- All external links use `target="_blank"` with `rel="noopener noreferrer"`
- CSP headers recommended (configure in hosting)
- Regular dependency updates
- No sensitive data in public repo

## 🐛 Troubleshooting

### Dark Mode Not Working

1. Check browser console for errors
2. Verify `enhancements.js` is loaded
3. Clear localStorage: `localStorage.clear()`

### Projects Not Filtering

1. Ensure `data-category` attributes are set
2. Check console for JavaScript errors
3. Verify filter button IDs match categories

### Service Worker Issues

1. Unregister old workers:
   ```javascript
   navigator.serviceWorker.getRegistrations()
     .then(registrations => registrations.forEach(r => r.unregister()))
   ```
2. Clear cache and hard reload (Ctrl+Shift+R)

### AOS Animations Not Showing

1. Check internet connection (CDN dependency)
2. Verify `data-aos` attributes exist
3. Check if AOS is initialized in console

## 🎯 SEO Best Practices

### Update Meta Tags

Edit `index.html` head section:
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your Description">
```

### Submit Sitemap

Submit `sitemap.xml` to:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Update sitemap.xml

After adding new pages, update dates:
```xml
<url>
    <loc>https://amrrsalem.github.io/new-page.html</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
</url>
```

## 🤝 Contributing

Found a bug or have a suggestion? Please open an issue!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll Library
- [Chart.js](https://www.chartjs.org/) - Charts and visualizations
- [Font Awesome](https://fontawesome.com/) - Icons
- [Prism.js](https://prismjs.com/) - Syntax highlighting
- [Google Fonts](https://fonts.google.com/) - Typography

## 📬 Contact

- **Website:** https://amrrsalem.github.io/
- **GitHub:** [@AmrrSalem](https://github.com/AmrrSalem)
- **LinkedIn:** [Amr Salem](https://linkedin.com/in/amr-salem)

---

**Last Updated:** January 2025

Made with ❤️ by Amr Salem
