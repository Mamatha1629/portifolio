import React from "react";
import './about.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import profile from "../../../assets/profile/profile.jpg"; 
function About() {
  return (
    <section id="about" className="about-section container py-5">
      <div className="row align-items-center">
        {/* Left Side - Profile Photo */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={profile}
            alt="Mamatha Profile"
            className="profile-img"
          />
        </div>

        {/* Right Side - About Content */}
        <div className="col-md-7">
          <h2 className="mb-3 text-primary">About Me</h2>
          <p className="lead">
            Hi, I'm <strong>Mamatha</strong> — a passionate Frontend Developer who
            loves building beautiful, responsive, and interactive websites.
          </p>
          <p>
            I enjoy working with technologies like <strong>HTML, CSS, JavaScript, React</strong>,
            and continuously learning new tools to improve my craft.
          </p>
          <p>
            My goal is to create user-focused designs that not only look great but
            also perform seamlessly across all devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;