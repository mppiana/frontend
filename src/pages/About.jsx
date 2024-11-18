import '../about.css';


// src/pages/About.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const About = () => {
  return (
    <Container
      fluid
      className="text-center py-5"
      style={{
        background: 'linear-gradient(to bottom right, #28a745, #81c784)', // Green gradient
        color: '#333',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          border: '2px solid rgba(0, 0, 0, 0.1)',
          padding: '40px',
          borderRadius: '15px',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        <h1>About Me</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          My name is Moncie Philip H. Piana. I’m a passionate developer with a love for creating impactful web experiences. With a strong foundation in front-end development, I aim to make the web a better place through elegant and user-friendly designs.
        </p>
        
        <Row className="mt-5">
          <Col md={4}>
            <img
              src="profile.jpg"  // Replace with your image path
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ maxWidth: '250px', marginBottom: '20px' }}
            />
          </Col>
          <Col md={8}>
            <h4>Background</h4>
            <p>
              I have worked with several technologies, including React, JavaScript, HTML, CSS, and various back-end technologies. I’m always eager to learn new skills and stay updated with the latest trends in web development.
            </p>
           
          </Col>
        </Row>

        {/* Skills Section */}
        <h4 className="mt-5">Skills</h4>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Frontend Development</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>React</ListGroup.Item>
                  <ListGroup.Item>JavaScript</ListGroup.Item>
                  <ListGroup.Item>HTML5 & CSS3</ListGroup.Item>
                  <ListGroup.Item>Bootstrap</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Backend Development</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Node.js</ListGroup.Item>
                  <ListGroup.Item>Express</ListGroup.Item>
                  <ListGroup.Item>MongoDB</ListGroup.Item>
                  <ListGroup.Item>SQL</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Tools & Other Skills</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Git & GitHub</ListGroup.Item>
                  <ListGroup.Item>APIs</ListGroup.Item>
                  <ListGroup.Item>Responsive Design</ListGroup.Item>
                  <ListGroup.Item>UI/UX Design</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience Section */}
        <h4 className="mt-5">Experience</h4>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          Over the years, I've gained hands-on experience in building and deploying web applications for various industries. I’ve worked both independently and as part of a team, and I always strive to deliver high-quality work.
        </p>
      </div>
    </Container>
  );
};

export default About;
