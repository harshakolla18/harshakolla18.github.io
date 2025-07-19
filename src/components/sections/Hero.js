import React from "react";
import profileImage from "../../assets/images/profile/DP.jpeg";

const Hero = () => {
  const expertiseItems = [
    { icon: "fas fa-robot", text: "Agentic AI Systems" },
    { icon: "fas fa-brain", text: "Machine Learning" },
    { icon: "fas fa-code", text: "Software Engineering" },
    { icon: "fas fa-chart-line", text: "Data Analytics" },
  ];

  const stats = [
    { number: "5+", label: "AI Projects Deployed" },
    { number: "30%", label: "Cost Reduction" },
    { number: "85%", label: "Efficiency Gain" },
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
          Harsha Kolla
        </h1>

        <p className="hero-role" data-aos="fade-up" data-aos-delay="400">
          Software Engineer AI & Data
        </p>

        <div
          className="hero-description"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p>
            As a Software Engineer with 3+ years of experience specializing in
            AI and Data, I design and build intelligent systems that solve
            real-world problems through scalable, impactful solutions. My
            background spans AI-driven logistics optimization, financial data
            analysis, and disaster response systems—merging deep technical
            skills with a strong focus on practical outcomes. By combining
            advanced AI/ML techniques with robust software engineering
            practices, I develop applications that deliver measurable value
            across domains.
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
