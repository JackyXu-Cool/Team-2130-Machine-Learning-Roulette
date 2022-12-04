import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavBar = (props) => {
    return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" />
          <Nav className="nav-content">
            {props.elems.map((elem, idx) => (
                <Nav.Link className="nav-content-text" key={idx} href={elem.href} >
                    {elem.title}
                </Nav.Link>
                ))}
          </Nav>
        </Container>
      </Navbar>
    )
};

export default CustomNavBar;