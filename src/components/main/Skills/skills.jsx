import React from "react";
import "./skills.css";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  const skills = [
    { name: "HTML5", color: "#e34c26", level: "Advanced" },
    { name: "CSS3", color: "#264de4", level: "Advanced" },
    { name: "JavaScript", color: "#f0db4f", level: "Intermediate" },
    { name: "React", color: "#61dbfb", level: "Intermediate" },
    { name: "MongoDB", color: "#f89820", level: "Intermediate" },
    { name: "Node JS", color: "#00758f", level: "Intermediate" },
    { name: "Express JS", color: "#00750f", level: "Intermediate" },
    { name: "Redux", color: "#e9fc4f", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="section-title text-gradient mb-5 text-center">Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4">
              <div className="skill-card shadow-sm" style={{ borderTopColor: skill.color }}>
                <div
                  className="skill-circle"
                  style={{ backgroundColor: skill.color }}
                ></div>
                <h5 className="skill-name">{skill.name}</h5>
                <p className="skill-level">{skill.level}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
