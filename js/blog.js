const blogData = {
  posts: [
    {
      title: "Nouse eCalendar",
      date: "2026-05-16",
      href: "pages/nouse-anyuse-ecalendar/nouse-ecalendar.html",
      summary: "Making an eCalendar stay connected to WiFi - you know, the bare minimum.",
      tags: ["hacking","android"]
    },
    {
      title: "2026 Portfolio Redesign",
      date: "2026-05-15",
      href: "pages/2026-portfolio-redesign/2026-portfolio-redesign.html",
      summary: "🏗️ Under construction! Time to revamp this portfolio!",
      tags: ["design"]
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/blog/post-summary.html')
    .then(res => res.text())
    .then(template => {
      document.getElementById('blog').innerHTML = Mustache.render(template, blogData);
    });
});
