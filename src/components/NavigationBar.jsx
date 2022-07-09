import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <Navbar expand="sm">
      <Container fluid>
        <Navbar.Brand href="#about">Lowell Jacobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
