import * as React from 'react';
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export const Level = ({ description, code }) => {
  return (
    <Navbar bg="light" expand="lg" className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Brand  mb-0 h1>Getting started with SwiftUI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Save progress</Nav.Link>
              <Nav.Link href="#link">Helpful Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
  );
};
