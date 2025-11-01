import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <p>© {new Date().getFullYear()} Mamatha | Built with ❤️ using React & Bootstrap</p>
        <p>
          <a 
            href="https://www.linkedin.com/in/Mamatha1629" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-2"
          >
            LinkedIn
          </a>
          |
          <a 
            href="https://github.com/Mamatha1629" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-2"
          >
            GitHub
          </a>
          
          {/* <a 
            href="#contact" 
            className="text-white mx-2"
          >
            Contact
          </a> */}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
