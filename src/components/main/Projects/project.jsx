import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./project.css";

const projects = [
  {
    id: 1,
    title: "QR Code Generator",
    desc: "A simple web application built using HTML, CSS, and JavaScript that generates QR codes instantly based on user input, such as text or URLs.",
    link: "https://github.com/Mamatha1629/QR-Code",
  },
  {
    id: 2,
    title: "To-Do List App",
    desc: "A responsive task management application built using HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as completed, with features like dark mode, search filter, due dates, and local storage for saving tasks.",
    link: "https://github.com/Mamatha1629/To-Do-List",
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "A personal portfolio website built using HTML, CSS, and React to showcase my skills, projects, and contact details. It features a clean, responsive design with smooth navigation and interactive sections for a professional presentation.",
    link: "https://github.com/Mamatha1629/portifolio",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5 section-style">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Projects</h2>
        <Row>
          {projects.map((proj) => (
            <Col md={4} className="mb-4" key={proj.id}>
              <Card className="project-card h-100 text-center">
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                  <Button
                    variant="primary"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
