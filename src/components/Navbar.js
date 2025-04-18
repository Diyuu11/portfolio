import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { MoonFill, SunFill } from 'react-bootstrap-icons';

function NavbarComponent({ toggleDarkMode, darkMode }) {
  return (
    <Navbar expand="lg" bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} sticky="top">
      <Container>
        <Navbar.Brand href="#home">💻 Hamdi Portfolio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button onClick={toggleDarkMode} variant={darkMode ? 'outline-light' : 'outline-dark'}>
            {darkMode ? <SunFill /> : <MoonFill />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
