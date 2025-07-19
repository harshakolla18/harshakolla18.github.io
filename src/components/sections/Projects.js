import React from "react";
import prepprImage from "../../assets/images/projects/preppr.png";
import logisticsImage from "../../assets/images/projects/logistics-platform.jpg";
import healthImage from "../../assets/images/projects/project2.jpg";
import fraudImage from "../../assets/images/projects/project3.jpg";
import foundersImage from "../../assets/images/projects/image.jpg";
import crimeImage from "../../assets/images/projects/crime-analytics.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Preppr.ai - AI-Powered Disaster Management Platform",
      image: prepprImage,
      description:
        "Developed an intelligent disaster management platform leveraging AI and real-time data analytics. Implemented predictive modeling for disaster risk assessment, automated resource allocation systems, and real-time emergency response coordination. The platform features advanced GIS integration for spatial analysis, including:",
      features: [
        "Real-time geospatial data processing and visualization",
        "Automated risk zone mapping and analysis",
        "Resource allocation optimization using spatial algorithms",
        "Integration with satellite imagery and weather data",
        "Interactive mapping interfaces for emergency response teams",
      ],
      techStack: [
        "Python",
        "Machine Learning",
        "PostGIS",
        "GeoPandas",
        "React",
        "FastAPI",
        "Docker",
      ],
      liveLink: "https://preppr.ai",
      githubLink: "https://github.com/harshakolla18",
    },
    {
      title: "AI-Powered Logistics Intelligence Platform",
      image: logisticsImage,
      description:
        "Developed an intelligent logistics platform leveraging Large Language Models (LLMs) and agentic AI systems for autonomous decision-making. Implemented advanced ML algorithms for route optimization and predictive analytics, resulting in 30% cost reduction and improved delivery efficiency.",
      techStack: ["Python", "LangChain", "OpenAI", "Docker"],
      liveLink: "https://tools4logistics.com",
      githubLink: "https://github.com/harshakolla18",
    },
    {
      title: "Real-Time Health Data Pipeline with Lakehouse Architecture",
      image: healthImage,
      description:
        "Architected and implemented a scalable data engineering solution using Apache Spark and Delta Lake on AWS S3. Built automated ETL pipelines processing 1TB+ of healthcare data daily, with real-time streaming capabilities and ML-powered analytics for predictive healthcare insights.",
      techStack: ["Apache Spark", "Delta Lake", "Python", "AWS S3"],
      liveLink: "#",
      githubLink: "https://github.com/harshakolla18",
    },
    {
      title: "Real-Time Financial Fraud Detection Pipeline",
      image: fraudImage,
      description:
        "Engineered a high-performance event-driven system processing 10K+ transactions/second using Apache Kafka. Implemented unsupervised ML models for anomaly detection and built real-time monitoring dashboards, reducing fraud detection time by 85% and false positives by 40%.",
      techStack: ["Apache Kafka", "PostgreSQL", "Python", "Grafana"],
      liveLink: "#",
      githubLink: "https://github.com/harshakolla18",
    },
    {
      title: "Founders Lounge Global - AI First Community Platform",
      image: foundersImage,
      description:
        "Built a comprehensive community platform for entrepreneurs and tech professionals, featuring AI-powered content curation, networking tools, and resource sharing. Implemented real-time chat, event management, and personalized recommendations using machine learning algorithms.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "AI/ML"],
      liveLink: "https://www.foundersloungeglobal.com",
      githubLink: "https://github.com/harshakolla18",
    },
    {
      title: "Crime Data Analysis & Prediction Platform",
      image: crimeImage,
      description:
        "Advanced analytics platform for law enforcement agencies, featuring crime pattern analysis, predictive modeling, and interactive visualization of crime trends. Implements machine learning for hotspot prediction and resource optimization.",
      techStack: ["Python", "TensorFlow", "GIS", "Tableau", "SQL"],
      liveLink: "#",
      githubLink: "https://github.com/harshakolla18",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Featured Projects
        </h2>
        <div className="projects-grid" data-aos="fade-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="200"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.features && (
                  <ul className="project-features">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                )}
                <div className="project-tech">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more" data-aos="fade-up">
          <a
            href="https://github.com/harshakolla18"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            <i className="fab fa-github"></i> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
