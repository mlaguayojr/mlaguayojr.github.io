# mlaguayojr.github.io

Personal portfolio and blog for Mario L. Aguayo Jr., Full Stack Software Engineer.

Check it out [mlaguayojr.github.io](https://mlaguayojr.github.io)!

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

## Tech Stack

- **HTML/CSS/JavaScript** — no frameworks, no build step
- **[Mustache.js](https://github.com/janl/mustache.js)** (via CDN) — logic-less templating for rendering sidebar, blog posts, career entries, and projects from JS data objects
- **GitHub Pages** — static hosting
- **CSS Variables** — theme colors defined as custom properties for easy dark mode support

## Structure

```
├── index.html               # About page
├── blog/index.html          # Blog listing
├── career/index.html        # Career page
├── education/index.html     # Education page
├── projects/index.html      # Projects page
├── style.css                # Global styles
├── js/
│   ├── sidebar.js           # Sidebar data + render
│   ├── blog.js              # Blog post data + render
│   ├── career.js            # Career data + render
│   ├── education.js         # Education data + render
│   └── projects.js          # Projects data + render
├── templates/               # Mustache HTML templates
│   ├── sidebar.html
│   ├── blog/post-summary.html
│   ├── career.html
│   ├── education.html
│   └── projects.html
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
