import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const Layout = (props) => {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Covid-19 Stats</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown title={props.username} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={props.onLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </Container>
  );
};
