import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo-crudo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function MainNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);
  return (
    <Navbar expanded={expanded} expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto">
              <Nav.Link  as={Link} to="/" onClick={handleNavClose}>Home</Nav.Link>
              <Nav.Link  as={Link} to="/about" onClick={handleNavClose}>About</Nav.Link>
              <Nav.Link  as={Link} to="/food-planning-list" onClick={handleNavClose}>Food Plannings</Nav.Link>
              <Nav.Link  as={Link} to="/dishes-list" onClick={handleNavClose}>Dishes</Nav.Link>
              <NavDropdown title="Add new planning or dish" id="collapsible-nav-dropdown">
                <NavDropdown.Item   as={Link} to="/add-food-planning" onClick={handleNavClose}>
                  Add Food Planning
                </NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/add-dish" onClick={handleNavClose}>Add Dish</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
