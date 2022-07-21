import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const NavBar = ({saveProgress}) => {

  return (
    <Navbar bg="light" expand="lg" className="navbar navbar-dark bg-dark" sticky="top"  >
        <Container fluid >
          <Link to="/" className='link'><Navbar.Brand  mb-0 h1 >Getting started with SwiftUI</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link onClick={saveProgress}>Save progress</Nav.Link>
              <Nav.Link href="#link">Helpful Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
