import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../../assets/profile/profile.jpg";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Profile Photo */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <div className="profile-wrapper">
              <img
                src={profile}
                alt="Mamatha Profile"
                className="profile-img shadow-lg rounded-circle"
              />
            </div>
          </Col>

          {/* Right Side - About Content */}
          <Col md={7}>
          
            <h2 className="section-title fw-bold text-gradient mb-4">About Me</h2>
            <p className="intro-text">
              Hi, I'm <strong>Mamatha</strong> — a passionate{" "}
              <strong>Frontend Developer</strong> with a love for crafting clean,
              responsive, and user-friendly web experiences.
            </p>
            <p className="description-text">
              I specialize in building dynamic interfaces using{" "}
              <strong>HTML, CSS, JavaScript, and React</strong>. I enjoy solving
              problems through design and code to create visually appealing,
              interactive, and functional web applications.
            </p>
            <p className="description-text">
              My goal is to bring creativity and precision into every project I
              build, ensuring it performs seamlessly on all devices and provides a
              delightful user experience.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
