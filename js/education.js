const educationData = {
  education: [
    {
      institution: "Southern Connecticut State University",
      degree: "Bachelor of Applied Science (B.A.Sc.), Computer Science",
      location: "New Haven, CT",
      duration: { start: "Fall 2015", end: "Spring 2017" },
      details: {
        items: [
          "VP of Computer Science Club (2015 - 2016)",
          "Academic Advisor for Computer Science (Fall 2015 - Spring 2017)",
          "Group Mentor for SCSU FemHack (2013)",
          "Soft Skills Analysis Project for CompSci and Business Dept.",
          "Participant of Top 50 CT Tech Council's Skills Challenge"
        ]
      }
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/education.html')
    .then(res => res.text())
    .then(template => {
      document.getElementById('education').innerHTML = Mustache.render(template, educationData);
    });
});
