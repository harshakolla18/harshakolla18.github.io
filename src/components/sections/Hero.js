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
            AI Engineer with 2+ years of experience building and deploying
            production-grade AI/ML systems on cloud platforms (AWS, Azure, GCP).
            Hands-on experience with the full ML lifecycle — data preprocessing,
            model training, validation, containerized deployment, and post-launch
            monitoring — using Docker, Kubernetes (EKS, HPA), and CI/CD pipelines.
            Skilled in building RAG pipelines, multi-agent systems, RESTful
            inference APIs, and LLM-powered applications with LangChain, LangGraph,
            GPT-4o, and FastAPI. Experienced in model drift detection, MLOps
            observability (CloudWatch, Prometheus, Grafana, DataDog), and
            Generative AI integration across regulated and high-traffic
            environments. Strong in Python, Java, SQL, Agile methodologies, and
            end-to-end product delivery.
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
