import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./navbar.css";

function NavBar({ toggleTheme, darkMode }) {
  return (
    <Navbar
      expand="lg"
      className={`custom-navbar px-4 py-3 sticky-top ${
        darkMode ? "navbar-dark-mode" : "navbar-light-mode"
      }`}
    >
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand href="#home" className="fw-bold brand-name">
          <span className="brand-highlight">M</span>amatha Thatha
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            {/* Theme Toggle Button */}
            <Button
              variant={darkMode ? "outline-light" : "outline-dark"}
              className="ms-3 theme-btn"
              onClick={toggleTheme}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
