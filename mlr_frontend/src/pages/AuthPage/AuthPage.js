import React from 'react';

import './AuthPage.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import Card from '../../components/Card/Card';
import Signup from "./Signup";
import Signin from "./Signin";

const AuthPage = () => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" />
          <Nav className="nav-content">
            <Nav.Link className="nav-content-text" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-content-text" href="/upload">
              Upload
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="authentication_container">
        <Card className="authentication">
          <h2>Authentication Page</h2>
          <hr />
          <Signup />
          <Signin />
        </Card>
      </div>
    </React.Fragment>
  );

};

export default AuthPage;
