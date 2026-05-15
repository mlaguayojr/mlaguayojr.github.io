const blogData = {
  posts: [
    {
      title: "2026 face lift",
      date: "2026-05-15",
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
