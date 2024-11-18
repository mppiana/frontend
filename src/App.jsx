<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';  // Make sure this path is correct
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home Route */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
=======
import { useState } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <>
      {/* Navbar Section */}
      <Navbar bg="success" variant="dark" expand="lg" data-bs-theme="successs">
        <Container>
          <Navbar.Brand href="#home">Moncie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link> {/* Link to Home */}
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#hobbies">Hobbies</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <div id="home">
        <Container
          fluid
          className="text-center py-5"
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 10%',
            fontFamily: "'Poppins', sans-serif", // Add readable font here
          }}
        >
          <div
            style={{
              border: '2px solid rgba(255, 255, 255, 0.5)',
              padding: '40px',
              borderRadius: '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              maxWidth: '900px',
              width: '100%',
              marginBottom: '50px',
            }}
          >
            <h1>Welcome to My Personal Website</h1>
            <p>Discover more about my journey and passions</p>
          </div>

          {/* Slider Section */}
          <Carousel style={{ maxWidth: '900px', width: '100%' }}>
            <Carousel.Item>
              <img
                className="d-block w-100 blur-on-hover"
                src="profile.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>About me</h3>
                <p>View my profile.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 blur-on-hover"
                src="education.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Education</h3>
                <p>Discover my educational background.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 blur-on-hover"
                src="hobbies.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>My Hobbies</h3>
                <p>Find out about my hobbies and passions.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 blur-on-hover"
                src="contact.jpg"
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>Contact</h3>
                <p>Contact me for more information.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      {/* Footer */}
      <footer
        className="bg-dark text-white text-center py-3"
        style={{ fontFamily: "'Poppins', sans-serif" }} // Footer font
      >
        <p>&copy; 2024 Moncie. All rights reserved.</p>
      </footer>
    </>
>>>>>>> 2a4f5e4e60bc95cea5f780a3c75b8c5d0a45284e
  );
}

export default App;
