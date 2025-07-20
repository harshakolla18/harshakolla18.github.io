import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { createDocument } from "../../firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isLoginSubmitting, setIsLoginSubmitting] = useState(false);

  // Check authentication state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If user is not logged in, handle Google sign-in first
    if (!user) {
      try {
        setIsLoginSubmitting(true);
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        // After successful login, continue with message sending
        setIsLoginSubmitting(false);
      } catch (error) {
        console.error("Google sign-in error:", error);
        setIsLoginSubmitting(false);
        return;
      }
    }

    // Now send the message
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Submitting message with data:", {
        ...formData,
        userId: user.uid,
        userEmail: user.email,
        timestamp: new Date().toISOString(),
      });

      // Save message to Firestore
      const result = await createDocument("messages", {
        ...formData,
        userId: user.uid,
        userEmail: user.email,
        timestamp: new Date().toISOString(),
      });

      console.log("Message saved to Firebase:", result);

      // Also send email via formsubmit.co for immediate notification
      const emailResponse = await fetch(
        "https://formsubmit.co/harshakolla90@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `Portfolio Contact: ${formData.subject}`,
            _template: "table",
          }),
        }
      );

      if (emailResponse.ok) {
        console.log("Email sent successfully");
      } else {
        console.warn("Email sending failed, but message saved to Firebase");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      console.error("Error details:", {
        code: error.code,
        message: error.message,
        stack: error.stack,
      });
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const socialLinks = [
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/harsha-kolla-357a211a8/",
      title: "LinkedIn",
    },
    {
      icon: "fab fa-github",
      url: "https://github.com/harshakolla18",
      title: "GitHub",
    },
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com/harsha_kolla",
      title: "Twitter",
    },
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/harshakolla18/",
      title: "Instagram",
    },
    {
      icon: "fab fa-medium-m",
      url: "https://medium.com/@harsha_kolla",
      title: "Medium",
    },
    { icon: "fab fa-dev", url: "https://dev.to/harsha_kolla", title: "Dev.to" },
  ];

  const contactInfo = [
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      content: (
        <a
          href="https://www.linkedin.com/in/harsha-kolla-357a211a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Harsha Kolla
        </a>
      ),
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: (
        <>
          <a href="mailto:harshakolla90@gmail.com" className="contact-link">
            harshakolla90@gmail.com
          </a>
          <br />
          <a href="mailto:harshakolla18@gmail.com" className="contact-link">
            harshakolla18@gmail.com
          </a>
        </>
      ),
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      content: (
        <a
          href="https://maps.google.com/?q=Saint+Louis,+MO"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Saint Louis, MO
        </a>
      ),
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      content: (
        <a
          href="https://www.instagram.com/harshakolla18/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          @harsha_kolla
        </a>
      ),
    },
  ];

  if (loading) {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i> Loading...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Get In Touch
        </h2>

        {/* Authentication Status - Only show when logged in */}
        {user && (
          <div className="auth-status" data-aos="fade-up">
            <div className="auth-info">
              <span className="auth-text">
                <i className="fas fa-user-check"></i>
                Logged in as: {user.email}
              </span>
              <button onClick={handleLogout} className="logout-btn">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </div>
          </div>
        )}

        <div className="contact-container" data-aos="fade-up">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting || isLoginSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : isLoginSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Signing in...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <i className="fas fa-check"></i> Sent Successfully!
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <i className="fas fa-times"></i> Failed to Send!
                  </>
                ) : !user ? (
                  <>
                    <i className="fab fa-google"></i> Sign in with Google & Send
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info-container">
            <div className="quote-container" data-aos="fade-up">
              <div className="quote-text">
                <i className="fas fa-quote-left"></i>
                <span>Believe in Karma</span>
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="quote-line"></div>
            </div>

            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-item">
                <i className={info.icon}></i>
                <div className="info-content">
                  <h3>{info.title}</h3>
                  <p>{info.content}</p>
                </div>
              </div>
            ))}

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${link.title.toLowerCase()}-link`}
                  title={link.title}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
