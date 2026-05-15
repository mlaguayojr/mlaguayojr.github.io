const projectsData = {
  projects: [
    {
      name: "keypad.js",
      href: "https://github.com/mlaguayojr/keypad.js",
      date: "2024-01-01",
      description: "A lightweight JavaScript numeric keypad widget. No dependencies.",
      tags: ["javascript", "jquery"]
    },
    {
      name: "Simple Weather Dashboard",
      href: "https://github.com/mlaguayojr/Simple-Weather-Dashboard",
      date: "2026-05-15",
      description: "A minimal weather dashboard built with React 19 and Tailwind CSS. Displays current conditions — temperature, humidity, wind, and more — for a configurable location via environment variables.",
      tags: ["react", "tailwind", "api"]
    },

  ]
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/projects.html')
    .then(res => res.text())
    .then(template => {
      const data = {
        projects: [...projectsData.projects].sort((a, b) => b.date.localeCompare(a.date))
      };
      document.getElementById('projects').innerHTML = Mustache.render(template, data);
    });
});
