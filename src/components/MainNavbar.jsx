import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo-crudo.png";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/food-planning-list">Food Plannings</Nav.Link>
              <Nav.Link as={Link} to="/dishes-list">Dishes</Nav.Link>
              <NavDropdown title="Add a planning or dish" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="add-food-planning">
                  Add Food Planning
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/add-dish">Add Dish</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
