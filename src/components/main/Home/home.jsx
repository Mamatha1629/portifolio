import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

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
    <section
      id="home"
      className="py-5 text-center d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <h1 className="fw-bold display-4">Hi, I'm Mamatha 👋</h1>
        <h3 className="text-info mt-3">{text}</h3>
        <p className="mt-3 lead">
          I’m passionate about building interactive, responsive websites using React, HTML, CSS, and JavaScript.
        </p>
        <button className="btn btn-primary mt-3" onClick={onViewWork}>
          View My Work
        </button>
      </Container>
    </section>
  );
}

export default Home;
