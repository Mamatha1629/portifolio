import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './project.css';
const projects = [
  {
    id: 1,
    title: "Book Registration System",
    desc: "A Java + MySQL project using Servlets for managing book records.",
    link: "https://github.com/yourusername/book-registration",
  },
  {
    id: 2,
    title: "To-Do List App",
    desc: "React app with hooks, dark mode, search, and task filters.",
    link: "https://github.com/yourusername/todo-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "This very website — built using React, Bootstrap, and Vite.",
    link: "https://github.com/yourusername/portfolio",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Projects</h2>
        <Row>
          {projects.map((proj) => (
            <Col md={4} className="mb-4" key={proj.id}>
              <Card className="h-100 shadow">
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
