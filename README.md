# ppeck.me v2 - E-MyR Clinical Systems Lab

Interactive EMR-style portfolio and blog for Paul Peck, RN.

## 🏗️ Built With

- **Astro** - Static site framework
- **TypeScript** - Type safety
- **Markdown/MDX** - Blog content
- **CSS Custom Properties** - Theming system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   
   Visit `http://localhost:4321` in your browser

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
ppeck-me-v2/
├── src/
│   ├── components/         # Reusable components
│   │   ├── tabs/          # EMR tab components
│   │   ├── IntroSequence.astro
│   │   ├── ThemeToggle.astro
│   │   └── Dock.astro
│   ├── content/           # Content collections
│   │   ├── blog/         # Blog posts (Markdown)
│   │   └── projects/     # Project case studies
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes
│   │   ├── index.astro          # Main EMR interface
│   │   └── blog/[slug].astro    # Blog posts
│   └── styles/           # Global styles
├── public/               # Static assets
└── astro.config.mjs     # Astro configuration
```

## ✍️ Adding Content

### Adding a Blog Post

Create a new file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: 2026-02-09
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

### Adding a Project

Create a new file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "What this project does"
date: 2026-02-09
tags: ["clinical", "systems"]
github: "https://github.com/yourusername/repo"
status: "active"
---

Project details...
```

## 🎨 Customization

### Colors

Edit `src/styles/global.css` to modify the color palette:

```css
:root {
  --color-teal: #009688;      /* Primary accent */
  --color-orange: #C46B3B;    /* Warm accent */
  --color-green: #4CAF50;     /* Success/active */
}
```

### Adding Assets

Place PDFs, images, and other static files in `public/assets/`

## 🚢 Deployment to GitHub Pages

1. **Update `astro.config.mjs`** if your repo name isn't `ppeck.me`:
   ```js
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/your-repo-name', // Only if not using custom domain
   });
   ```

2. **Build the site**:
   ```bash
   npm run build
   ```

3. **Push to GitHub** and enable GitHub Pages in repository settings

## 📝 Notes

- Theme preference saved in `localStorage` as `emr-theme`
- Last active tab saved as `emr-last-tab`
- Intro sequence flag saved as `emr-intro-seen`

## 🔧 Development Tips

- Use `npm run dev` for hot-reloading during development
- Blog posts auto-appear in the Notes tab
- Projects auto-appear in the Diagnosis tab
- All content is type-checked via TypeScript

## 🤝 Support

Questions or issues? Contact [paultpeck@gmail.com](mailto:paultpeck@gmail.com)
