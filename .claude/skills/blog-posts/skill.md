---
name: blog-posts
description: Structures Blog Posts. Use when creating, drafting, adding, writing, or publishing a Blog Post.
---

## Project Structure

- `blog/pages/` — parent directory for all blog posts.
- `blog/pages/[post-title]/` — working directory for an individual post. Contains the post's `.html` file and any referenced images.
- `blog/blog-post.css` — post styling.
- `blog/index.html` — landing page; rendered dynamically from `js/blog.js` (do not manually edit to add posts).
- `js/blog.js` — source of truth for all posts. Add a new entry to the `blogData.posts` array here when creating a post.
- `README.md` — an outline of the Pages, Tech Stack, and Structure of this project. This should be reviewed and updated when major changes have been made.

## Post Title Naming

- Use a short, descriptive slug (2–5 words). Example: `nouse-anyuse-ecalendar`, `2026-portfolio-redesign`.
- The directory name, HTML filename, and `href` in `blog.js` should all match the slug.
- For multi-part series, append `-part-N` to the original slug. Example: `nouse-ecalendar-part-2`.

## HTML Template

Use this structure for every new post. Adjust the `<title>` and `<h1>` to match the post.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Post Title &mdash; Mario L. Aguayo Jr.</title>
    <link rel="stylesheet" href="../../../style.css" />
    <link rel="stylesheet" href="../../blog-post.css" />
  </head>
  <body>
    <aside id="sidebar"></aside>

    <main>
      <nav class="main-nav">
        <a href="../../../index.html">About</a>
        <a href="../../index.html" class="active">Blog</a>
        <a href="../../../career/index.html">Career</a>
        <a href="../../../education/index.html">Education</a>
        <a href="../../../projects/index.html">Projects</a>
      </nav>

      <section id="content">
        <div id="post-body">
          <h1>Post Title</h1>
          <p class="post-tagline">Tagline here.</p>
          <div class="star-divider">✦ ✦ ✦</div>

          <nav class="toc">
            <strong>Table of Contents</strong>
            <ol>
              <li><a href="#section">Section</a></li>
            </ol>
          </nav>
          <br />

          <!-- post content -->
          <!-- Note: add <br> after every <ul> or <ol> to preserve spacing before the next paragraph -->
        </div>
      </section>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/mustache@4/mustache.min.js"></script>
    <script src="../../../js/sidebar.js"></script>
  </body>
</html>
```

## Adding a Post to `js/blog.js`

Prepend a new object to the `blogData.posts` array:

```js
{
  title: "Post Title",
  date: "YYYY-MM-DD",
  href: "pages/[post-title]/[post-title].html",
  summary: "One sentence summary — can use an em dash like this.",
  tags: ["tag1", "tag2"]
}
```

## Tags

Use existing tags where possible to keep filtering consistent. Current tags in use:

- `hacking` — device/hardware tinkering, reverse engineering
- `android` — anything Android-specific, ADB
- `ai` — posts that involve AI tools or output
- `claude` — specifically uses Claude as part of the workflow
- `python` — Python scripts or automation
- `automation` — general automation (scripts, flows, scheduled tasks)
- `web scraping` — scraping or parsing web pages
- `design` — visual design, UI/UX, portfolio work

## Em Dash Usage

- In HTML content: use `&mdash;` (e.g. `word &mdash; word`).
- In JS strings (summary field): use a bare `—`.
