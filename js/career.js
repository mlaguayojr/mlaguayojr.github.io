const careerData = {
  career: [
    {
      name: "Solovis (Nasdaq)",
      superscript: "1",
      footnote: "Solovis was wholly owned by Nasdaq until September of 2025, at which point it was sold to Insight Partners, a private equity firm specializing in software.",
      location: "Remote",
      title: "Full Stack Software Engineer",
      duration: { start: "July 2022", end: "Present" },
      skills: ["C#/.NET", "ASP.NET", "React", "TypeScript", "TanStack Query", "Entity Framework", "Azure", "Terraform", "Azure DevOps Pipelines", "Tailwind CSS", "SQL Server", "Jest", "Vite", "Airflow", "Docker", "Python", "RESTful API Design", "Confluence", "HTML", "CSS", "PowerShell", "Bash", "Visual Studio", "Git", "Postman", "Bruno"],
      content: [
        {
          topic: "Engineered Core Data Platform, a self-service ETL application empowering users to extract datasets from the Solovis ecosystem.",
          subtopic: [
            "Implemented endpoints in RESTful API services to support key platform capabilities using ASP.NET and Entity Framework.",
            "Contributed to critical platform infrastructure in Microsoft Azure with Terraform.",
            "Authored and maintained CI/CD deployment code using Azure Pipelines for Core Data Platform API and UI codebases.",
            "Integrated Core Data Platform UI with backend service capabilities with TanStack Query."
          ]
        },
        {
          topic: "Maintained Fund Automated Sync Tool, a legacy Windows Forms application to maintain fund data within the Solovis ecosystem.",
          subtopic: [
            "Enhanced logging and telemetry around API integrations to enhance monitoring and troubleshooting capabilities.",
            "Supported analysts by troubleshooting incorrect fund data between source and destination."
          ]
        },
        {
          topic: "Maintained Integration Hub, a data pipeline ETL system for custodial data integrations.",
          subtopic: [
            "Created new client feeds to deliver custodial data within the Solovis ecosystem."
          ]
        },
        {
          topic: "Engineered Benchmark Blender, a scalable, rule-based system to manage custom benchmarks in Portfolio Analytics.",
          subtopic: [
            "Implemented rich React UI components to decrease developer time and provide consistent UX across the application."
          ]
        }
      ]
    },
    {
      name: "Data-Mail",
      location: "Newington, CT",
      title: "Security Engineer",
      duration: { start: "October 2020", end: "June 2022" },
      skills: ["Splunk", "Tenable.SC", "Linux", "Active Directory", "KACE SMA", "bash"],
      content: [
        {
          topic: "Implemented Linux-based infrastructure for Splunk, a logging and SIEM system to lower operational costs and improve monitoring.",
          subtopic: [
            "Replaced Windows-based hosts with Linux-based hosts to decrease licensing costs.",
            "Created Dashboards and Alerts to capture hardware and software events across devices throughout company IT ecosystem."
          ]
        },
        {
          topic: "Implemented Tenable.SC, a vulnerability management platform to secure and monitor our company network.",
          subtopic: [
            "Implemented Dashboards to review vulnerabilities and plan remediations across company devices to support security needs and SLAs."
          ]
        },
        {
          topic: "Performed enterprise system administration, security analysis, and group management.",
          subtopic: [
            "Utilized KACE SMA for patching, asset management, and security across IT environments.",
            "Maintained Active Directory Group Policies, matching job roles and responsibilities to reflect internal structural changes."
          ]
        }
      ]
    },
    {
      name: "Data-Mail",
      location: "Newington, CT",
      title: "Jr. Software Developer & Production Support",
      duration: { start: "July 2018", end: "June 2020" },
      skills: ["VB6", "VB.NET", "Microsoft Access", "SSRS", "SQL Server", "C#/.NET"],
      content: [
        {
          topic: "Maintained and implemented requested features within home-grown legacy applications.",
          subtopic: [
            "Utilized Visual Basic 6, Visual Basic .NET, and Microsoft Access to add additional capabilities to internal software systems."
          ]
        },
        {
          topic: "Created reports across various production departments delivered by SSRS and e-mail.",
          subtopic: [
            "Reported on production stage statuses, barcode integration with internal systems, and PDF delivery to executive production teams."
          ]
        },
        {
          topic: "Developed automation to expedite Mail Production workflow supporting other systems.",
          subtopic: [
            "Implemented capabilities to access, download, and scrape PDFs from USPS site to feed enterprise applications."
          ]
        }
      ]
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('/templates/career.html')
    .then(res => res.text())
    .then(template => {
      const data = {
        career: careerData.career.map(job => ({
          ...job,
          content: job.content.map(item => ({
            ...item,
            hasSubtopic: Array.isArray(item.subtopic) && item.subtopic.length > 0
          }))
        }))
      };
      document.getElementById('career').innerHTML = Mustache.render(template, data);
    });
});
