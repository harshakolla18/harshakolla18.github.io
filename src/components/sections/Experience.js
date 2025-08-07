import React from "react";
import alphaReconLogo from "../../assets/images/logos/alpharecon_logo.png";
import metisLogo from "../../assets/images/logos/Metis.jpeg";
import sluLogo from "../../assets/images/logos/saint louis university.png";
import excelerateLogo from "../../assets/images/logos/excelerate.jpeg";
import attorneyOfficeLogo from "../../assets/images/logos/attorney office.png";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer\nAI & Data",
      company: "Alpha Recon",
      location: "United States",
      date: "July 2025 – Present",
      logo: alphaReconLogo,
      description: [
        "LLM Development: Currently fine-tuning a proprietary LLM, RiskIQGPT, using internal datasets like SITREPs and analyst reports, leveraging instruction tuning and LORA adapters to align the model with real-world security use cases.",
        "RLHF & Quality Improvement: Developing a reinforcement learning feedback loop (RLHF) that incorporates analyst-provided feedback through custom moderation tools to iteratively improve LLM output quality and relevance.",
        "Multimodal RAG & Multi-Agent Systems: Expanding the existing RAG pipeline by integrating multimodal embedding capabilities and building multi-agent orchestration workflows using LangChain, AutoGen, and Python-based logic for autonomous task execution.",
      ],
      techStack: [
        "Python",
        "LLM",
        "LORA",
        "RLHF",
        "LangChain",
        "AutoGen",
        "RAG",
        "Multimodal AI",
      ],
    },
    {
      title: "Software Engineer\nAI & Data",
      company: "Metis Analytics",
      location: "United States",
      date: "Feb 2025 - June 2025",
      logo: metisLogo,
      description: [
        "Tools4Logistics Platform: Engineered a distributed logistics optimization platform with React.js frontend and Firebase backend, integrating Groq LLM-based chatbot via LangChain for dynamic user interaction and RL-powered route optimization, leading to 85% faster decisions and 75% drop in supply chain issues.",
        "Preppr AI Disaster Response: Led development of a full-stack disaster response system using React, RESTful APIs, Docker, Prisma ORM, and AWS (EC2, S3, PostgreSQL) with OpenAI APIs and FAISS vector search for intelligent chatbot orchestration and real-time recommendations.",
        "Full-Stack Development & DevOps: Implemented role-based access, secure authentication, CI/CD pipelines, and Agile workflows while ensuring scalable performance and high availability across both platforms.",
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
      logo: sluLogo,
      description: [
        "Campus Navigation App: Developed and deployed a responsive web app using React, JavaScript, HTML/CSS, and Firebase to guide new students through campus buildings, dorms, and facilities with interactive maps and searchable directories.",
        "API Integration & User Experience: Integrated RESTful APIs, interactive maps, and searchable directories, resulting in a 60% increase in engagement and a 45% drop in support requests while enhancing mobile responsiveness and cross-browser compatibility.",
        "Agile Development & Testing: Contributed to debugging, unit testing, and documentation while collaborating in an Agile environment using Git, Jira, and Slack, with refined layout styling using Tailwind CSS across key campus pages.",
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
      logo: excelerateLogo,
      description: [
        "Healthcare MVP Development: Built and launched an MVP web application using JavaScript, React, Node.js, and MongoDB to streamline internal healthcare workflows with focus on HIPAA compliance and scalable performance.",
        "Full-Stack API Development: Developed RESTful APIs, backend logic, and interactive UI components aligned with SDLC best practices, ensuring scalable performance and future HIPAA readiness for healthcare applications.",
        "Cross-Functional Collaboration: Contributed across the full stack—writing reusable code, fixing bugs, and participating in code reviews to support a successful MVP release while maintaining code quality and documentation standards.",
      ],
      techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Associate Software Engineer - Data & AI",
      company: "Attorney Office",
      location: "India",
      date: "Apr 2021 - July 2023",
      logo: attorneyOfficeLogo,
      description: [
        "Government Backend Systems: Supported development of scalable backend systems by writing modular code in Python and structuring SQL databases to handle large volumes of legal and criminal records, ensuring system scalability and maintainability in a government setting.",
        "API Integration & Performance: Assisted in designing and integrating RESTful APIs, enabling secure communication between legal portals and law enforcement databases, while contributing to performance tuning and backend optimization through indexing strategies and data pipeline streamlining.",
        "Public-Sector Development: Gained practical experience in public-sector application development, focused on compliance, audit readiness, and data privacy, while understanding legal workflows and justice system constraints.",
      ],
      techStack: [
        "Python",
        "SQL",
        "RESTful APIs",
        "Data Pipelines",
        "AI Models",
        "Performance Tuning",
      ],
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
                  <div className="timeline-header-content">
                    <h3>{exp.title}</h3>
                    <span className="timeline-date">{exp.date}</span>
                  </div>
                  {exp.logo && (
                    <div className="company-logo">
                      <img src={exp.logo} alt={`${exp.company} logo`} />
                    </div>
                  )}
                </div>
                <h4>
                  {exp.company} | {exp.location}
                </h4>
                <ul>
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
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
