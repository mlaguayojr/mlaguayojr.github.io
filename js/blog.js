const blogData = {
  posts: [
    {
      title: "Simple Weather Dashboard",
      date: "2026-05-15",
      href: "pages/simple-weather-dashboard/simple-weather-dashboard.html",
      summary: "A minimal weather dashboard built with React 19 and Tailwind CSS. Displays current conditions — temperature, humidity, wind, and more — for a configurable location via environment variables.",
      tags: ["typescript", "react", "api", "project"]
    },
    {
      title: "Nouse eCalendar, Part 2",
      date: "2026-05-20",
      href: "pages/nouse-ecalendar-part-2/nouse-ecalendar-part-2.html",
      summary: "Hardware debugging is outside my wheelhouse — so I handed the logs to Claude to figure out why this WiFi chip keeps dying.",
      tags: ["hacking", "android", "ai", "claude"]
    },
    {
      title: "Nouse eCalendar",
      date: "2026-05-16",
      href: "pages/nouse-anyuse-ecalendar/nouse-ecalendar.html",
      summary: "Making an eCalendar stay connected to WiFi — you know, the bare minimum.",
      tags: ["hacking","android"]
    },
    {
      title: "2026 Portfolio Redesign",
      date: "2026-05-15",
      href: "pages/2026-portfolio-redesign/2026-portfolio-redesign.html",
      summary: "🏗️ Under construction! Time to revamp this portfolio!",
      tags: ["design"]
    },
    {
      title: "Academic Google Calendar Creator",
      date: "2017-12-29",
      href: "pages/academic-google-calendar-creator/academic-google-calendar-creator.html",
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

document.addEventListener('DOMContentLoaded', async () => {
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

  const res = await fetch('/templates/blog/post-summary.html');
  const template = await res.text();
  document.getElementById('blog').innerHTML = Mustache.render(template, blogData);
});
