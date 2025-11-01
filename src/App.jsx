import React, { useState,useRef } from "react";
import Navbar from "./components/NavBar/navBar";
 import Home from "./components/main/Home/home";
 import About from "./components/main/About/about";
 import Projects from "./components/main/Projects/project";
import Contact from "./components/main/Contact/contact";
 import Footer from "./components/Footer/footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const projectsRef = useRef(null);

  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Home onViewWork={scrollToProjects} />
      <About />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;