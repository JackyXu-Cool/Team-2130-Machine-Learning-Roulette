import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="main">
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" />
          <Nav className="nav-content">
            <Nav.Link className="nav-content-text" href="/auth">
              Log In
            </Nav.Link>
            <Nav.Link className="nav-content-text" href="/upload">
              Upload
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="body">
        <p>Machine Learning Roulette</p>
      </div>
    </div>
  );
};

export default HomePage;
