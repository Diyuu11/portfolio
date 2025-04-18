import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="py-5 bg-light" data-aos="fade-up">
      <Container>
        <h2 className="text-center text-primary mb-5">Projects</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Ambulance Request System</Card.Title>
                <Card.Text>Real-time ambulance requests handled via JWT-based APIs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Vidio App</Card.Title>
                <Card.Text>A CRUD app to manage students using Flask and JSON Server.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Hospital Management System</Card.Title>
                <Card.Text>backend application Built with python sqlalchemy , supports patient registration, appointments, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
