document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/projects.html')
    .then(res => res.text())
    .then(template => {
      const projectPosts = blogData.posts
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
