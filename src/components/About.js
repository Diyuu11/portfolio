import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-5 bg-white" data-aos="fade-up">
      <h2 className="text-center text-primary mb-5">About Me</h2>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image
            src="/profile.jpg"
            alt="Dee's Profile"
            roundedCircle
            fluid
            className="shadow"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              transition: 'transform 0.3s',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div className="mt-4 d-flex justify-content-center gap-3">
            <a href="https://github.com/Diyuu11" target="_blank" rel="noreferrer">
              <FaGithub size={30} className="text-dark" />
            </a>
            <a href="https://www.linkedin.com/in/hamdi-aden-3b7503360/" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} className="text-primary" />
            </a>
            <a href="hamdiaden2424@gmail.com">
              <FaEnvelope size={30} className="text-danger" />
            </a>
          </div>
        </Col>
        <Col md={8}>
          <p className="text-muted fs-5">
            I'm <strong>Hamdi</strong>, a self-driven <span className="text-success fw-bold">Software Engineer</span> with a passion for clean code,
            great UI, and building full-stack apps. I love Flask, React, and creating awesome user experiences.
          </p>
          <a href="/Dee-Resume.pdf" download>
            <Button variant="outline-primary" className="mt-3">
              📄 Download Resume
            </Button>
          </a>
        </Col>
      </Row>
    </section>
  );
}

export default About;
