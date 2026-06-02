const blogData = {
  posts: [
    {
      title: "Kaprekar's Constant: 6174",
      date: "2026-06-01",
      href: "/blog/pages/kaprekar-constant-6174/kaprekar-constant-6174.html",
      summary: "Every 4-digit number (with non-identical digits) collapses to 6174 in at most 7 steps — a surprisingly elegant mathematical phenomenon.",
      tags: ["math", "neat"]
    },
    {
      title: "Solovis AI-First Hackathon",
      date: "2026-04-21",
      href: "/blog/pages/solovis-ai-hackathon/solovis-ai-hackathon.html",
      summary: "How I used Claude Code to build a Model Context Protocol server for Core Data Platform — and took second place at Solovis's AI-First Hackathon.",
      tags: ["ai", "claude", "mcp", "hackathon", "work"]
    },
    {
      title: "Simple Weather Dashboard",
      date: "2026-05-15",
      href: "/blog/pages/simple-weather-dashboard/simple-weather-dashboard.html",
      summary: "A minimal weather dashboard built with React 19 and Tailwind CSS. Displays current conditions — temperature, humidity, wind, and more — for a configurable location via environment variables.",
      tags: ["typescript", "react", "api", "project"]
    },
    {
      title: "Nouse eCalendar, Part 2",
      date: "2026-05-20",
      href: "/blog/pages/nouse-ecalendar-part-2/nouse-ecalendar-part-2.html",
      summary: "Hardware debugging is outside my wheelhouse — so I handed the logs to Claude to figure out why this WiFi chip keeps dying.",
      tags: ["hacking", "android", "ai", "claude"]
    },
    {
      title: "Nouse eCalendar",
      date: "2026-05-16",
      href: "/blog/pages/nouse-anyuse-ecalendar/nouse-ecalendar.html",
      summary: "Making an eCalendar stay connected to WiFi — you know, the bare minimum.",
      tags: ["hacking","android"]
    },
    {
      title: "2026 Portfolio Redesign",
      date: "2026-05-15",
      href: "/blog/pages/2026-portfolio-redesign/2026-portfolio-redesign.html",
      summary: "🏗️ Under construction! Time to revamp this portfolio!",
      tags: ["design"]
    },
    {
      title: "Academic Google Calendar Creator",
      date: "2017-12-29",
      href: "/blog/pages/academic-google-calendar-creator/academic-google-calendar-creator.html",
      summary: "A Python script that logs into SCSU's BannerWeb, scrapes your registered courses, and exports them as an .ics file ready to import into Google Calendar.",
      tags: ["python", "automation", "web scraping", "project"]
    }
  ]
};

async function computeReadingTime(href) {
  const res = await fetch(href);
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const body = doc.querySelector('#post-body') || doc.body;
  const words = body.textContent.trim().split(/\s+/).filter(w => w.length > 0);
  return Math.max(1, Math.ceil(words.length / 200));
}

let activeSearch = '';
let activeTags = new Set();
let template = '';

function renderBlog(posts) {
  document.getElementById('blog').innerHTML = Mustache.render(template, { posts });
  const count = posts.length;
  const total = blogData.posts.length;
  const plural = count === 1 ? 'post' : 'posts';
  let summary = `${count} ${plural}`;
  if (count !== total) {
    summary = `${count} of ${total} ${plural} filtered`;
  }
  document.getElementById('blog-summary').innerHTML = `<span class="blog-count">${summary}</span>`;
}

function buildTagFilters() {
  const allTags = new Set();
  blogData.posts.forEach(post => {
    post.tags.forEach(tag => allTags.add(tag));
  });
  const sortedTags = Array.from(allTags).sort();
  const tagsHtml = sortedTags.map(tag =>
    `<button class="tag-filter" data-tag="${tag}">#${tag}</button>`
  ).join('');
  document.getElementById('tag-filters').innerHTML = tagsHtml;
}

function filterAndRender() {
  let filtered = blogData.posts;
  if (activeSearch) {
    const q = activeSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q)
    );
  }
  if (activeTags.size > 0) {
    filtered = filtered.filter(p => p.tags.some(t => activeTags.has(t)));
  }
  renderBlog(filtered);
}

window.headReady.then(async () => {
  await Promise.all(
    blogData.posts.map(async post => {
      if (!post.href) return;
      try {
        post.readingTime = await computeReadingTime(post.href);
      } catch {
        // silently skip if fetch fails
      }
    })
  );

  blogData.posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const res = await fetch('/templates/blog/post-summary.html');
  template = await res.text();

  buildTagFilters();
  renderBlog(blogData.posts);

  const searchInput = document.getElementById('blog-search');
  searchInput.addEventListener('input', (e) => {
    activeSearch = e.target.value;
    filterAndRender();
  });

  const tagFilters = document.getElementById('tag-filters');
  tagFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('tag-filter')) {
      const tag = e.target.dataset.tag;
      if (activeTags.has(tag)) {
        activeTags.delete(tag);
        e.target.classList.remove('active');
      } else {
        activeTags.add(tag);
        e.target.classList.add('active');
      }
      filterAndRender();
    }
  });
});
