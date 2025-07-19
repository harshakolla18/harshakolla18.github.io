import React from "react";
import sluLogo from "../../assets/images/logos/Saint_Louis_University.png";
import vitLogo from "../../assets/images/logos/vit-logo.png";

const Education = () => {
  const educationData = [
    {
      university: "Saint Louis University",
      logo: sluLogo,
      degree: "Master of Science in Computer Science",
      location: "St. Louis, MO",
      date: "May 2025",
      coursework: ["Machine Learning", "Web Development", "Data Analytics"],
      achievements: ["Coming Soon"],
      link: "https://www.slu.edu",
    },
    {
      university: "Vellore Institute of Technology",
      logo: vitLogo,
      degree: "Bachelor of Technology in Computer Science",
      location: "Vellore, India",
      date: "May 2021",
      coursework: [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Operating Systems",
      ],
      achievements: ["Academic Excellence Award", "Dean's List"],
      link: "https://vit.ac.in",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Education
        </h2>
        <div className="education-grid" data-aos="fade-up">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="education-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="education-header">
                <div className="education-title-group">
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-logo"
                  >
                    <img src={edu.logo} alt={`${edu.university} Logo`} />
                  </a>
                  <div>
                    <h3>{edu.degree}</h3>
                    <h4>
                      {edu.university} | {edu.location}
                    </h4>
                  </div>
                </div>
                <span className="education-date">{edu.date}</span>
              </div>
              <div className="education-content">
                <div className="coursework">
                  <h5>Key Coursework</h5>
                  <div className="course-tags">
                    {edu.coursework.map((course, courseIndex) => (
                      <span key={courseIndex}>{course}</span>
                    ))}
                  </div>
                </div>
                <div className="certifications">
                  <h5>Achievements</h5>
                  <div className="cert-tags">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <span key={achievementIndex}>{achievement}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
