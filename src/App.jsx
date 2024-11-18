import { useState } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" data-bs-theme="successs">
        <Container>
          <Navbar.Brand href="#home">Moncie</Navbar.Brand>
          {/* Toggle button for hamburger menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Education</Nav.Link>
              <Nav.Link href="#about">Hobbies</Nav.Link>
              <Nav.Link href="#about">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
