import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

function Home({ onViewWork }) {
  const [text, setText] = useState("");
  const fullText = "Front-End Developer 💻";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="home-section d-flex align-items-center justify-content-center">
      <Container className="text-center">
        <h1 className="fw-bold display-4 title-text">Hi, I'm Mamatha 👋</h1>
        <h3 className="typing-text mt-3">{text}</h3>
        <p className="mt-3 lead home-description">
          I’m passionate about building interactive, responsive websites using <span>React</span>, <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>.
        </p>
        <button className="btn btn-primary mt-4 home-btn" onClick={onViewWork}>
          View My Work
        </button>
      </Container>
    </section>
  );
}

export default Home;
