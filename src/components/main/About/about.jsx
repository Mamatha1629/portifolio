import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">About Me</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <Card className="border-0 shadow">
              <Card.Body>
                <Card.Text>
                  I'm Mamatha, a detail-oriented web developer passionate about creating modern, user-friendly interfaces.
                </Card.Text>
                <Card.Text>
                  Currently pursuing B.Tech in Computer Science and Engineering at PACE Institute of Technology and Sciences.
                </Card.Text>
                <Card.Text>
                  I’ve worked with technologies like React, JavaScript, HTML, CSS, and MySQL. My goal is to grow as a front-end developer and create stunning user experiences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Mamatha"
              className="img-fluid rounded-circle shadow"
              width="250"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
