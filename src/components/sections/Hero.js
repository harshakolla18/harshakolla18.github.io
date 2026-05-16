import React from "react";
import profileImage from "../../assets/images/profile/DP.jpeg";

const Hero = () => {
  const expertiseItems = [
    { icon: "fas fa-robot", text: "Production AI/ML Systems" },
    { icon: "fas fa-cloud", text: "AWS / Azure / GCP" },
    { icon: "fab fa-docker", text: "Docker & Kubernetes (EKS)" },
    { icon: "fas fa-project-diagram", text: "RAG & Multi-Agent Systems" },
  ];

  const stats = [
    { number: "2+", label: "Years AI/ML Experience" },
    { number: "50%", label: "Manual Triage Reduction" },
    { number: "40%", label: "API Response Improvement" },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-content" data-aos="fade-up">
        <div
          className="profile-image-container"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div className="profile-image-wrapper">
            <img
              src={profileImage}
              alt="Harsha Kolla"
              className="profile-image"
            />
          </div>
        </div>

        <h1 className="hero-name" data-aos="fade-up" data-aos-delay="300">
          Reddy Harsha Vardhan
        </h1>

        <p className="hero-role" data-aos="fade-up" data-aos-delay="400">
          AI Engineer | Open to Relocate
        </p>

        <div
          className="hero-description"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p>
            AI Engineer with 2+ years deploying production AI/ML on AWS, Azure,
            and GCP. I own the full lifecycle — training, containerized
            deployment, and monitoring — with Docker, Kubernetes (EKS/HPA), and
            CI/CD. Specialize in RAG pipelines, multi-agent systems, and
            LLM apps using LangChain, LangGraph, GPT-4o, and FastAPI, with
            strong MLOps observability (CloudWatch, Prometheus, Grafana,
            DataDog).
          </p>
        </div>

        <div className="hero-expertise" data-aos="fade-up" data-aos-delay="600">
          {expertiseItems.map((item, index) => (
            <div key={index} className="expertise-item">
              <i className={item.icon}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="hero-stats" data-aos="fade-up" data-aos-delay="700">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
