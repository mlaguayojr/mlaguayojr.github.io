const blogPosts = [
  {
    title: "Simple Weather Dashboard",
    date: "2026-05-15",
    href: "pages/simple-weather-dashboard/simple-weather-dashboard.html",
    summary: "A minimal weather dashboard built with React 19 and Tailwind CSS. Displays current conditions — temperature, humidity, wind, and more — for a configurable location via environment variables.",
    tags: ["typescript", "react", "api", "project"]
  },
  {
    title: "Academic Google Calendar Creator",
    date: "2017-12-29",
    href: "pages/academic-google-calendar-creator/academic-google-calendar-creator.html",
    summary: "A Python script that logs into SCSU's BannerWeb, scrapes your registered courses, and exports them as an .ics file ready to import into Google Calendar.",
    tags: ["python", "automation", "web scraping", "project"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/projects.html')
    .then(res => res.text())
    .then(template => {
      const projectPosts = blogPosts
        .filter(post => post.tags.includes('project'))
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(post => ({
          name: post.title,
          href: post.href,
          date: post.date,
          description: post.summary,
          tags: post.tags.filter(t => t !== 'project')
        }));

      const data = { projects: projectPosts };
      document.getElementById('projects').innerHTML = Mustache.render(template, data);
    });
});
