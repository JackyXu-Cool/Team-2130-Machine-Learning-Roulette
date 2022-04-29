import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import Card from "../../components/Card/Card";
import "./AuthPage.css";

const AuthPage = () => {
    // TODO: Input value update & Form submit & Swithc to register mode
    return (
        <React.Fragment>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" />
                    <Nav className="nav-content">
                        <Nav.Link className="nav-content-text" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-content-text" href="/upload">Upload</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="authentication_container">
                <Card className="authentication">
                    <h2>Authentication Page</h2>
                    <hr />
                    <form>
                        <p style={{ marginBottom: "5pt", fontWeight: 500 }}>Email Address</p>
                        <FormControl />
                        <p style={{ marginBottom: "5pt", fontWeight: 500 }}>Password</p>
                        <FormControl type="password" />
                        <Button variant="outline-secondary">
                            XXX
                        </Button>
                    </form>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default AuthPage;