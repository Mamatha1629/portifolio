import React, { useState, useRef } from "react";
import Navbar from "./components/NavBar/navBar";
import Home from "./components/main/Home/home";
import About from "./components/main/About/about";
import Projects from "./components/main/Projects/project";
import Contact from "./components/main/Contact/contact";
import Skills from "./components/main/Skills/skills";
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const projectsRef = useRef(null);

  const toggleTheme = () => setDarkMode(!darkMode);
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Home onViewWork={scrollToProjects} />
      <About />
      <Skills />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Contact darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
