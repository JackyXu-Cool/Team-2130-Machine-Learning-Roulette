import React, { useState } from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import Card from "../../components/Card/Card";
import "./AuthPage.css";

const AuthPage = () => {
    const [isLogInMode, setLogInMode] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function switchMode() {
        setLogInMode(!isLogInMode);
    }

    function onChangeEmailInput(event) {
        setEmail(event.target.value);
    }

    function onChangePasswordInput(event) {
        setPassword(event.target.value);
    }

    // TODO: Form submission (send backend request)
    function submitForm() {
        if (isLogInMode) {

        } else {

        }
    }

    let buttonGroupHtml =
    <React.Fragment>
        <Button variant="secondary" onClick={submitForm}>
            {isLogInMode ? "Login" : "Sign Up"}
        </Button>
        <Button variant="outline-secondary" onClick={switchMode}>
            Switch to {isLogInMode ? "Sign Up" : "Login"}
        </Button>
    </React.Fragment>;

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
                        <FormControl onChange={onChangeEmailInput}/>
                        <p style={{ marginBottom: "5pt", fontWeight: 500 }}>Password</p>
                        <FormControl type="password" onChange={onChangePasswordInput}/>
                        {buttonGroupHtml}
                    </form>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default AuthPage;