# mlaguayojr.github.io

Personal portfolio and blog for Mario L. Aguayo Jr., Full Stack Software Engineer.

Check it out [mlaguayojr.github.io](https://mlaguayojr.github.io)!

**Note:** Not all projects I've worked on are presented here. See my [GitHub profile](https://github.com/mlaguayojr) for all public projects.

## Pages

- **About** — brief intro and bio
- **Blog** — posts with dates, summaries, and tags
- **Career** — work history with per-entry skill tags
- **Education** — academic background
- **Certificates** — academic and professional certificates
- **Projects** — demos and side projects (filtered from blog by tag)

## Features

- **Dark/Light Theme Toggle** — theme preference saved to localStorage and respects system preference
- **Responsive Design** — mobile-optimized layout with centered navigation
- **Semantic Sidebar** — profile card with social links, separated from main content
- **Blog Search & Tag Filtering** — posts filterable by keyword search
- **Static Site Generation** — Jekyll builds the site at compile time; no client-side rendering overhead

## Tech Stack

- **[Jekyll](https://jekyllrb.com/)** — static site generator with Liquid templating
- **Liquid** — server-side templating for layouts, includes, and data rendering
- **YAML** — structured data for site configuration, navigation, career, and education
- **HTML/CSS/JavaScript** — semantic markup, CSS variables for theming, minimal JS for theme toggle
- **[Prettier](https://prettier.io/)** — code formatter for HTML, CSS, and JavaScript
- **Docker** — containerized build and serve environment for consistency
- **GitHub Pages** — static hosting

## Structure

```
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── Dockerfile               # Docker build configuration
├── docker-compose.yml       # Docker Compose setup
├── package.json             # Node dependencies (Prettier)
├── package-lock.json        # Locked Node dependency versions
├── .prettierrc              # Prettier formatting config
│
├── _layouts/                # Page layouts
│   ├── default.html         # Wraps all pages (sidebar + nav + content)
│   └── post.html            # Blog post layout (extends default)
│
├── _includes/               # Reusable template fragments
│   ├── head.html            # <head> with stylesheets and meta tags
│   ├── sidebar.html         # Profile card with theme toggle
│   ├── nav.html             # Main navigation
│   ├── about.html           # About page content
│   ├── career.html          # Career entries with skills and subtopics
│   ├── education.html       # Education entries
│   ├── certificates.html    # Certificates entries
│   ├── post-summary.html    # Blog post listing with search
│   └── projects.html        # Filtered project list (tag: 'project')
│
├── _data/                   # YAML data files
│   ├── site.yml             # Sidebar data (name, bio, social links)
│   ├── nav.yml              # Navigation items
│   ├── career.yml           # Career history with details
│   ├── education.yml        # Education entries
│   └── certificates.yml     # Certificates and credentials
│
├── _posts/                  # Blog posts (Jekyll collection)
│   └── YYYY-MM-DD-slug.html # Individual posts with front matter
│
├── assets/
│   ├── css/
│   │   ├── style.css        # Global styles with CSS variables
│   │   └── blog-post.css    # Blog post–specific styles
│   ├── images/              # Blog post images
│   ├── avatar.jpg           # Profile avatar
│   └── favicon.svg          # Site icon
│
├── demos/                   # Demo projects
│   └── keypadjs/            # Keypad.js demo
│
├── index.html               # About page
├── blog/index.html          # Blog listing page
├── career/index.html        # Career page
├── education/index.html     # Education page
├── certificates/index.html  # Certificates page
└── projects/index.html      # Projects page
```

## Running Locally

### With Docker (Recommended)

Docker ensures a consistent environment and handles all dependencies:

```bash
# Build the image and start the server
docker-compose up --build

# Server will be available at http://localhost:3000
```

The site will rebuild automatically when you edit files (mounted via volume).

**To stop:**
```bash
docker-compose down
```

### Without Docker

If you prefer to run Jekyll directly:

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve --host 0.0.0.0 --port 3000

# Server will be available at http://localhost:3000
```

## Editing Content

### Add a Blog Post

Create a new file in `_posts/` with the format `YYYY-MM-DD-slug.html`:

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
tags: [tag1, tag2]
summary: "Brief summary shown in listings"
---

<p>Post content goes here...</p>
```

### Update Data

Edit the corresponding YAML file in `_data/`:
- `site.yml` — sidebar name, bio, social links
- `nav.yml` — navigation items
- `career.yml` — career history
- `education.yml` — education entries
- `certificates.yml` — certificates and credentials

Changes are reflected immediately on rebuild.

### Styling

- **Global styles** — edit `assets/css/style.css` (uses CSS custom properties for theming)
- **Blog post styles** — edit `assets/css/blog-post.css`
- **Theme colors** — defined in `assets/css/style.css` under `:root` (light) and `[data-theme="dark"]` (dark)
