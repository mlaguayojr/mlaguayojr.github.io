const skillsData = {
  skills: [
    { name: "JavaScript" },
    { name: "HTML & CSS" },
    { name: "Python" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Git" },
    { name: "SQL" },
    { name: "REST APIs" }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/skills.html')
    .then(res => res.text())
    .then(template => {
      document.getElementById('skills').innerHTML = Mustache.render(template, skillsData);
    });
});
