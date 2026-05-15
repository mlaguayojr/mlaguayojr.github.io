const projectsData = {
  projects: [
    {
      name: "keypad.js",
      href: "/demos/keypadjs/demo.html",
      description: "A lightweight JavaScript numeric keypad widget. No dependencies."
    },

  ]
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/projects.html')
    .then(res => res.text())
    .then(template => {
      document.getElementById('projects').innerHTML = Mustache.render(template, projectsData);
    });
});
