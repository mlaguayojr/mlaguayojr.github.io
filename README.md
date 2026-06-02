# mlaguayojr.github.io

Personal portfolio and blog for Mario L. Aguayo Jr., Full Stack Software Engineer.

Check it out [mlaguayojr.github.io](https://mlaguayojr.github.io)!

<p class="notes">
  <strong>Note:</strong> Not all projects I've worked on are presented here. Please see my <a href="https://github.com/mlaguayojr">GitHub profile</a> for all public projects. I'm currently reviewing my repositories and creating dedicated posts for them.
</p>

## Pages

- **About** — brief intro and bio
- **Blog** — posts with dates, summaries, and tags
- **Career** — work history with per-entry skill tags
- **Education** — academic background
- **Projects** — demos and side projects

## Features

- **Dark/Light Theme Toggle** — theme preference is saved to localStorage and respects system preference
- **Responsive Design** — mobile-optimized layout with centered navigation
- **Semantic Sidebar** — profile card with social links, separated from main content
- **Blog Search & Tag Filtering** — posts are filterable by keyword search and tag buttons; state is managed in `js/blog.js`
- **Shared `<head>` Template** — meta tags, stylesheets, and favicon are defined once in `templates/head.html` and injected on every page by `js/head.js`

## Tech Stack

- **HTML/CSS/JavaScript** — no frameworks, no build step
- **[Mustache.js](https://github.com/janl/mustache.js)** (vendored locally as `mustache.min.js`) — logic-less templating for rendering sidebar, nav, blog posts, career entries, and projects from JS data objects
- **GitHub Pages** — static hosting
- **CSS Variables** — theme colors defined as custom properties for easy dark mode support

## Structure

```
├── index.html               # About page
├── style.css                # Global styles
├── mustache.min.js          # Mustache templating library (vendored)
├── favicon.svg              # Site favicon
├── blog/
│   ├── index.html           # Blog listing
│   ├── blog-post.css        # Blog post styles
│   └── pages/               # Individual blog post directories
│       └── [post-slug]/
│           └── [post-slug].html
├── career/index.html        # Career page
├── education/index.html     # Education page
├── projects/index.html      # Projects page
├── js/
│   ├── head.js              # Loads Mustache, injects shared <head> content
│   ├── sidebar.js           # Sidebar data + render
│   ├── nav.js               # Nav data + render (handles active link + relative paths)
│   ├── blog.js              # Blog post data + render + search/filter
│   ├── career.js            # Career data + render
│   ├── education.js         # Education data + render
│   ├── projects.js          # Projects data + render
│   └── skills.js            # Skills data + render
└── templates/               # Mustache HTML templates
    ├── head.html            # Shared <head> content (meta, stylesheets, favicon)
    ├── sidebar.html
    ├── nav.html
    ├── blog/post-summary.html
    ├── career.html
    ├── education.html
    ├── projects.html
    └── skills.html
```

## Running Locally

Since the templates are loaded via `fetch`, the site needs to be served over HTTP (not opened directly as a file). Any static file server works:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then open `http://localhost:8080`.
