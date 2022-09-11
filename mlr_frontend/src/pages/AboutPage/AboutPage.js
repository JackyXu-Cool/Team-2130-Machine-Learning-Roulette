import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './AboutPage.css';
import HomeButton from "../../components/HomeButton/HomeButton";

// TODO: Log In button is disabled for now.
const HomePage = () => {
    return (
        <div className="main">
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" />
                    <Nav className="nav-content">
                        <Nav.Link className="nav-content-text" href="/about" >
                            About
                        </Nav.Link>
                        <Nav.Link className="nav-content-text" href="/auth" disabled="true">
                            Log In
                        </Nav.Link>
                        <Nav.Link className="nav-content-text" href="/upload">
                            Upload
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="about_title">
                <p>About</p>
            </div>
            <div className="subheading">
                <p>Machine Learning Roulette</p>
            </div>
            <div className="text">
                <p>Our project is to create a website that allows users to receive an evaluation on the performance
                    of selected machine learning algorithms on the dataset (csv form) which the users upload.
                    In front-end, the website accepts a data set, selects a model or models,
                    and displays statistical model quality results based on other parameter selection.
                    For back-end, we will run the various models, as configured, on the uploaded dataset
                    and offer aggregated quality metrics for the website to render in an informative way.</p>
            </div>
            <HomeButton />
        </div>
    );
};

export default HomePage;
