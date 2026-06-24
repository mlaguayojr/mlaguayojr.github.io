---
name: blog-posts
description: Structures Blog Posts. Use when creating, drafting, adding, writing, or publishing a Blog Post.
metadata:
  disable-model-invocation: true
  model: haiku
  allowed-tools: Read Grep Edit Glob powershell Write
  disallowed-tools: Bash
---

## Project Structure

- `_posts/` — all blog posts; Jekyll auto-processes every file here
- `_posts/YYYY-MM-DD-slug.html` — individual post; requires Jekyll YAML front matter
- `_layouts/post.html` — Jekyll layout applied to every post (renders title, date, reading time, tags, content)
- `_includes/post-summary.html` — blog listing card template; used by the posts collection
- `blog/index.html` — blog landing page; rendered automatically from the Jekyll posts collection
- `assets/css/blog-post.css` — post-specific styles (tagline, star divider, TOC, sources block)

## Post Title Naming

- Use a short, descriptive slug (2–5 words). Example: `nouse-anyuse-ecalendar`, `2026-portfolio-redesign`
- Filename format: `YYYY-MM-DD-slug.html` (Jekyll standard). Example: `2026-06-01-kaprekar-constant-6174.html`
- For multi-part series, append `-part-N` to the slug. Example: `2026-05-20-nouse-ecalendar-part-2.html`

## YAML Front Matter

Every post must include:

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
tags: [tag1, tag2]
summary: "One sentence summary — can use an em dash."
---
```

- `layout: post` — always use this layout (handles page structure, date, tags)
- `title` — post title (displayed as `<h1>`)
- `date` — publication date in `YYYY-MM-DD` format (also used for sorting)
- `tags` — comma-separated list of tags for filtering and organization
- `summary` — one-sentence summary; auto-renders as the post tagline via `{{ page.summary }}`

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
- `mcp` — Model Context Protocol integrations
- `hackathon` — hackathon projects or writeups
- `work` — posts related to work or professional projects
- `typescript` — TypeScript code or projects
- `react` — React-based projects
- `api` — posts involving API usage or integration
- `project` — general project showcases

## Em Dash Usage

- In YAML front matter (`summary` field): use a bare `—` (e.g. `"summary: \"Post about X — here's the detail.\"`)
- In HTML content: use `&mdash;` (e.g. `word &mdash; word`)
- Tags on blog pages display with a `#` prefix (e.g. `#ai`, `#react`) for visual clarity during filtering
