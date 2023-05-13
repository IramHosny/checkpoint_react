import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarr() {
  return (
    <Navbar className="nav"  expand="lg">
    <Container className="container">
      <Navbar.Brand href="#home"> Home </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"> Offers</Nav.Link>
          <Nav.Link href="#link"> personnal_account </Nav.Link>
          <NavDropdown title="About us" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Community</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            partnerships
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">domain</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Contact
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr