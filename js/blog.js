const blogData = {
  posts: [
    {
      title: "2026 face lift",
      summary: "🏗️ Under construction!"
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
