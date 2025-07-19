import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer – AI & Data",
      company: "Metis Analytics",
      location: "United States",
      date: "Feb 2025 - June 2025",
      description: [
        "Tools4Logistics: Engineered a distributed logistics optimization platform with a React.js frontend and Firebase backend, integrating a Groq LLM-based chatbot via LangChain for dynamic user interaction and RL-powered route optimization. Leveraged role-based access, secure Google/email authentication, CI/CD pipelines, and Agile workflows—leading to 85% faster decisions and a 75% drop in supply chain issues.",
        "Preppr AI: Led development of a full-stack disaster response system using React, RESTful APIs, Docker, Prisma ORM, and AWS (EC2, S3, PostgreSQL). Integrated OpenAI APIs and FAISS vector search for intelligent chatbot orchestration, prompt tuning, and real-time recommendations—reducing departmental prep time by 85% and increasing response accuracy by 93%.",
      ],
      techStack: [
        "React.js",
        "Firebase",
        "Groq LLM",
        "LangChain",
        "Docker",
        "Prisma ORM",
        "AWS",
        "OpenAI",
        "Stripe",
      ],
    },
    {
      title: "Web Developer | Global Grad",
      company: "Saint Louis University",
      location: "St Louis, Missouri, United States",
      date: "Aug 2024 - Dec 2024",
      description: [
        "Developed and deployed a responsive web app using React, JavaScript, HTML/CSS, and Firebase to guide new students through campus buildings, dorms, and facilities. Integrated RESTful APIs, interactive maps, and searchable directories, resulting in a 60% increase in engagement and a 45% drop in support requests.",
        "Contributed to debugging, unit testing, and documentation while collaborating in an Agile environment using Git, Jira, and Slack. Enhanced mobile responsiveness and cross-browser compatibility using Tailwind CSS and refined layout styling across key campus pages.",
      ],
      techStack: [
        "React",
        "JavaScript",
        "HTML/CSS",
        "Firebase",
        "Tailwind CSS",
        "Git",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Excelerate",
      location: "United States",
      date: "Aug 2023 – Sept 2023",
      description: [
        "Built and launched an MVP web application using JavaScript, React, Node.js, and MongoDB to streamline internal healthcare workflows.",
        "Developed RESTful APIs, backend logic, and interactive UI components aligned with SDLC best practices, ensuring scalable performance and future HIPAA readiness.",
        "Contributed across the full stack—writing reusable code, fixing bugs, and participating in code reviews to support a successful MVP release.",
      ],
      techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Professional Experience
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <h4>
                  {exp.company} | {exp.location}
                </h4>
                <ul>
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>
                      <span className="highlight">{desc.split(":")[0]}:</span>
                      {desc.split(":").slice(1).join(":")}
                    </li>
                  ))}
                </ul>
                <div className="tech-stack">
                  {exp.techStack.map((tech, techIndex) => (
                    <span key={techIndex}>
                      <a
                        href={`https://${tech
                          .toLowerCase()
                          .replace(/\s+/g, "")}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tech}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
