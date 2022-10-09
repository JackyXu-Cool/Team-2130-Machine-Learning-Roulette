import { Navbar, Nav, Container } from 'react-bootstrap';

import Card from '../../components/Card/Card';
import './AuthPage.css';

import React from 'react';
import Signup from "./Signup";

const SignupPage = () => {
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
            <div className="signup_container">
                <Card className = "signup">
                    <h2>Signup Page</h2>
                    <hr />
                    <Signup />
                </Card>
            </div>   
        </React.Fragment>         
    );

};

export default SignupPage;