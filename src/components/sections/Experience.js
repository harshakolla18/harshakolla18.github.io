import React from "react";
import alphaReconLogo from "../../assets/images/logos/alpharecon_logo.png";

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Bluhold",
      location: "USA",
      date: "May 2026 – Present",
      logo: null,
      description: [
        "Engineered and deployed production AI/ML models on AWS, owning the full lifecycle from data ingestion and preprocessing through model training, validation, containerized deployment, and post-launch monitoring.",
        "Containerized ML inference services using Docker — packaging models, dependencies, and FastAPI endpoints into images pushed to Amazon ECR — and orchestrated deployments on Amazon EKS (Kubernetes) with declarative manifests covering replicas, resource limits, health checks, and rolling updates.",
        "Configured Kubernetes Horizontal Pod Autoscaler (HPA) with CPU and custom metric thresholds to dynamically scale inference pods during peak load, keeping latency under SLA while controlling cloud spend.",
        "Built RAG pipelines using LangChain and GPT-4o over internal policy and operations documents, with hybrid vector search and reranking to power natural-language search for enterprise teams.",
        "Designed and exposed RESTful inference APIs using Python and FastAPI, integrated with API Gateway and AWS Lambda for real-time predictions across downstream applications.",
        "Implemented model drift detection by monitoring prediction distributions, feature drift, and accuracy against holdout sets in production, with automated alerts that trigger retraining pipelines when drift crosses defined thresholds.",
        "Established end-to-end observability using AWS CloudWatch, Prometheus, and Grafana — tracking inference latency, error rates, model accuracy, and resource utilization — with DataDog dashboards for cross-service tracing.",
        "Built CI/CD pipelines with Jenkins and GitHub Actions to automate model packaging, image builds, security scans, and zero-downtime rollouts to EKS, with rollback capabilities tied to performance regressions.",
        "Integrated relational and NoSQL data stores (PostgreSQL, DynamoDB, Redis) with Prisma ORM and SQLAlchemy, ensuring data consistency, low-latency feature retrieval, and reliable API performance under production workloads.",
        "Applied role-based access control, encryption in transit and at rest, and compliance-aligned logging across all AI services to meet enterprise security and regulatory requirements.",
      ],
      techStack: [
        "Python",
        "AWS",
        "Docker",
        "Kubernetes",
        "EKS",
        "FastAPI",
        "LangChain",
        "GPT-4o",
        "PostgreSQL",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      title: "Software Engineer - AI",
      company: "Alpha Recon",
      location: "USA",
      date: "July 2025 – May 2026",
      logo: alphaReconLogo,
      description: [
        "Built and deployed an AI-powered threat intelligence platform (Secure Recon) on AWS, integrating ML classification models for real-time threat scoring and anomaly detection across high-volume security feeds.",
        "Engineered ML inference services using Python and FastAPI, containerized with Docker and deployed via AWS EKS, exposing RESTful prediction endpoints for downstream security workflows.",
        "Built an embedding-based semantic search layer over thousands of threat reports using OpenAI embeddings and vector databases, enabling natural-language queries and similarity-based threat clustering.",
        "Integrated LangChain-powered LLM workflows for automated threat enrichment, summarization, and report generation from raw intelligence feeds, reducing analyst workload by 60%.",
        "Designed backend services in Java and Spring Boot to orchestrate ML pipelines, model versioning, and feature stores, with PostgreSQL and MongoDB for structured and unstructured threat data.",
        "Implemented model monitoring and drift detection using Prometheus and Grafana, tracking inference latency, prediction confidence, and feature distributions across production endpoints.",
        "Built CI/CD pipelines with Jenkins and GitHub Actions for automated model packaging, testing, and zero-downtime deployment of ML services to AWS.",
        "Collaborated with data scientists and security analysts in an Agile/Scrum environment to define ML use cases, evaluate model performance, and iterate on threat-detection features.",
      ],
      techStack: [
        "Python",
        "Java",
        "Spring Boot",
        "FastAPI",
        "Docker",
        "AWS EKS",
        "LangChain",
        "OpenAI",
        "PostgreSQL",
        "MongoDB",
        "Prometheus",
      ],
    },
    {
      title: "Software Engineer",
      company: "Bank of America",
      location: "India",
      date: "January 2022 – July 2023",
      logo: null,
      description: [
        "Developed enterprise banking microservices using Java, Spring Boot, and Hibernate, integrating ML-powered fraud detection and transaction risk scoring models into retail banking APIs serving account, transaction, and onboarding workflows.",
        "Built RESTful APIs supporting AI-driven customer onboarding, including document classification, KYC verification, and risk-profiling models served via Python and Spring Boot endpoints.",
        "Integrated NLP pipelines for automated customer-support ticket classification and intent recognition, reducing manual triage by 50% across high-volume banking operations.",
        "Designed PostgreSQL and MySQL data models with optimized indexing and query tuning for ML feature stores, improving inference API response times by 40% across high-traffic banking endpoints.",
        "Containerized backend and ML inference services using Docker and deployed to AWS (EC2, S3, RDS), supporting reliable high-availability operations across multiple banking environments.",
        "Implemented CI/CD pipelines with Jenkins and GitHub Actions, automating build, test, and deployment workflows for both backend services and ML models.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "Python",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "AWS",
        "Jenkins",
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
