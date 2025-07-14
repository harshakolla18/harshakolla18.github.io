document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: "ease-in-out",
  });

  // Enhanced Navigation Functionality
  const navbar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-links a");
  let lastScroll = 0;

  // Mobile menu toggle
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !navMenu.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      navMenu.classList.contains("active")
    ) {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Smooth scroll for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight active section in navigation
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -80% 0px",
    threshold: 0,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        // Add special class for contact section
        if (id === "contact") {
          navbar.classList.add("at-contact");
        } else {
          navbar.classList.remove("at-contact");
        }

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach((section) => observer.observe(section));

  // Simple scroll class for minor styling
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  window.addEventListener("scroll", highlightActiveSection);

  // Contact Form Handling
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector(".submit-btn");
      const originalBtnText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch("/contact", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();

        if (result.success) {
          submitBtn.innerHTML =
            '<i class="fas fa-check"></i> Sent Successfully!';
          submitBtn.style.background =
            "linear-gradient(135deg, #10b981 0%, #059669 100%)";
          contactForm.reset();
        } else {
          submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed to Send!';
          submitBtn.style.background =
            "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)";
        }
      } catch (error) {
        submitBtn.innerHTML = '<i class="fas fa-times"></i> Error!';
        submitBtn.style.background =
          "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)";
      }

      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.style.background = "";
      }, 3000);
    });
  }

  // Smooth scrolling with offset
  document.querySelectorAll('.nav-links a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// Add smooth page transitions
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// === Knight Chatbot Logic ===
(function () {
  // Harsha's info for the bot to use
  const harshaInfo = {
    name: "Harsha Kolla",
    role: "Software Engineer AI & Data",
    location: "Saint Louis, MO, United States",
    email: ["harshakolla90@gmail.com", "harshakolla18@gmail.com"],
    linkedin: "https://www.linkedin.com/in/harsha-kolla-357a211a8/",
    github: "https://github.com/harshakolla18",
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "Saint Louis University",
        year: "May 2025",
      },
      {
        degree: "Bachelor of Technology in Computer Science",
        school: "Vellore Institute of Technology",
        year: "May 2021",
      },
    ],
    skills: [
      "Agentic AI Systems",
      "Machine Learning",
      "Software Engineering",
      "Data Analytics",
      "Python",
      "React.js",
      "Firebase",
      "LangChain",
      "OpenAI",
      "Docker",
      "SQL",
    ],
    projects: [
      "Preppr.ai - AI-Powered Disaster Management Platform",
      "AI-Powered Logistics Intelligence Platform",
      "Real-Time Health Data Pipeline",
    ],
    quote: "Believe in Karma",
  };

  // Simple FAQ/keyword-based responses
  function getBotResponse(message) {
    const msg = message.toLowerCase();
    if (msg.includes("name") || msg.includes("who are you")) {
      return `I'm Knight, your personal assistant for all things Harsha Kolla!`;
    }
    if (msg.includes("email")) {
      return `You can reach me at: ${harshaInfo.email.join(", ")}`;
    }
    if (msg.includes("linkedin")) {
      return `Here's my LinkedIn: <a href='${harshaInfo.linkedin}' target='_blank'>Harsha Kolla</a>`;
    }
    if (msg.includes("github")) {
      return `Check out my GitHub: <a href='${harshaInfo.github}' target='_blank'>harshakolla18</a>`;
    }
    if (msg.includes("location") || msg.includes("where are you")) {
      return `I'm based in Saint Louis, MO, United States.`;
    }
    if (
      msg.includes("education") ||
      msg.includes("study") ||
      msg.includes("degree")
    ) {
      return `My education:\n- ${harshaInfo.education
        .map((e) => `${e.degree} (${e.school}, ${e.year})`)
        .join("\n- ")}`;
    }
    if (
      msg.includes("skills") ||
      msg.includes("technologies") ||
      msg.includes("tech stack")
    ) {
      return `My key skills: ${harshaInfo.skills.join(", ")}`;
    }
    if (msg.includes("project")) {
      return `Some of my projects:\n- ${harshaInfo.projects.join("\n- ")}`;
    }
    if (
      msg.includes("quote") ||
      msg.includes("motto") ||
      msg.includes("karma")
    ) {
      return `One of my favorite quotes: \"${harshaInfo.quote}\"`;
    }
    if (msg.includes("experience") || msg.includes("work")) {
      return `I have 3+ years of experience in AI, Data, and Software Engineering, including roles at Metis Analytics, Saint Louis University, Excelerate, Attorney Office, and more.`;
    }
    if (msg.includes("about harsha")) {
      return `Harsha Kolla is a highly motivated <span class='highlight'>Software Engineer</span> with over 3 years of experience building scalable <span class='highlight'>full-stack</span> and <span class='highlight'>AI-integrated</span> solutions across fintech, logistics, and public-sector platforms. Proficient in <span class='highlight'>React</span>, <span class='highlight'>Node.js</span>, <span class='highlight'>Spring Boot</span>, <span class='highlight'>Docker</span>, <span class='highlight'>Firebase</span>, and <span class='highlight'>AWS</span>, he has led the development of end-to-end systems like an <span class='highlight'>AI-driven logistics optimizer</span>, a cloud-native disaster response app, and a secure enterprise financial platform using <span class='highlight'>microservices</span> and <span class='highlight'>Kafka</span>. With strong skills in <span class='highlight'>prompt engineering</span>, <span class='highlight'>RESTful APIs</span>, and <span class='highlight'>real-time data handling</span>, Harsha combines technical depth with a results-driven mindset—making him a standout candidate for teams seeking <span class='highlight'>innovation</span>, <span class='highlight'>reliability</span>, and <span class='highlight'>impact</span>.`;
    }
    if (msg.includes("contact")) {
      return `You can contact me via email (${harshaInfo.email.join(
        ", "
      )}) or LinkedIn (${harshaInfo.linkedin}).`;
    }
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return `Hello! I'm Knight. Ask me anything about Harsha Kolla!`;
    }
    return `I'm Knight! You can ask me about Harsha's background, skills, projects, education, or contact info.`;
  }

  // DOM elements
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatbotClose = document.getElementById("chatbot-close");
  const chatbotForm = document.getElementById("chatbot-form");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");

  if (
    !chatbotToggle ||
    !chatbotWindow ||
    !chatbotClose ||
    !chatbotForm ||
    !chatbotInput ||
    !chatbotMessages
  )
    return;

  // Toggle chat window
  chatbotToggle.addEventListener("click", () => {
    chatbotWindow.classList.toggle("hidden");
    if (!chatbotWindow.classList.contains("hidden")) {
      chatbotInput.focus();
    }
  });
  chatbotClose.addEventListener("click", () => {
    chatbotWindow.classList.add("hidden");
  });

  // Add message to chat
  function addMessage(text, sender = "bot", withSuggestions = false) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chatbot-message ${sender}`;
    const bubble = document.createElement("div");
    bubble.className = "chatbot-bubble";
    bubble.innerHTML = text.replace(/\n/g, "<br>");
    msgDiv.appendChild(bubble);
    chatbotMessages.appendChild(msgDiv);
    // If this is the initial bot message, add suggestions below it
    if (withSuggestions) {
      const suggestionsDiv = document.createElement("div");
      suggestionsDiv.className = "chatbot-suggestions";
      const suggestions = [
        "About Harsha",
        "Skills",
        "Projects",
        "Contact",
        "Education",
      ];
      suggestions.forEach((s) => {
        const btn = document.createElement("button");
        btn.className = "chatbot-suggestion-btn";
        btn.textContent = s;
        btn.onclick = function () {
          chatbotInput.value = s;
          chatbotForm.dispatchEvent(new Event("submit", { bubbles: true }));
        };
        suggestionsDiv.appendChild(btn);
      });
      msgDiv.appendChild(suggestionsDiv);
    }
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Initial welcome message with suggestions
  addMessage(
    "Hello! I'm Knight. Ask me anything about Harsha Kolla!",
    "bot",
    true
  );

  // Remove suggestions after first user message
  let suggestionsRemoved = false;
  chatbotForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userMsg = chatbotInput.value.trim();
    if (!userMsg) return;
    addMessage(userMsg, "user");
    chatbotInput.value = "";
    // Remove suggestions after first user message
    if (!suggestionsRemoved) {
      const suggestions = chatbotMessages.querySelectorAll(
        ".chatbot-suggestions"
      );
      suggestions.forEach((s) => s.remove());
      suggestionsRemoved = true;
    }
    setTimeout(() => {
      const botReply = getBotResponse(userMsg);
      addMessage(botReply, "bot");
    }, 400);
  });
})();
