const skillsData = {
  skills: [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Jest" },
    { name: "Vite" },
    { name: "TanStack Query" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "C#/.NET" },
    { name: "Entity Framework" },
    { name: "SQL Server" },
    { name: "Terraform" },
    { name: "Airflow" },
    { name: "Docker" },
    { name: "Python" },
    { name: "PowerShell" },
    { name: "Bash" },
    { name: "Visual Studio" },
    { name: "Git" },
    { name: "ASP.NET" },
    { name: "RESTful API Design" },
    { name: "Azure DevOps Pipelines" }
  ]
};

window.headReady.then(() => {
  fetch('/templates/skills.html')
    .then(res => res.text())
    .then(template => {
      document.getElementById('skills').innerHTML = Mustache.render(template, skillsData);
    });
});
