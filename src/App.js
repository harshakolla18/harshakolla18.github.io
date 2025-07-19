import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Chatbot from "./components/ui/Chatbot";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });

    // Add smooth page transitions
    document.body.classList.add("loaded");
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
