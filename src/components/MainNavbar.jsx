import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo-crudo.png";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse iid="responsive-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/food-planning-list">Food Plannings</Nav.Link>
              <Nav.Link href="/dishes-list">Dishes</Nav.Link>
              <NavDropdown title="Add new planning or dish" id="collapsible-nav-dropdown">
                <NavDropdown.Item  href="/add-food-planning">
                  Add Food Planning
                </NavDropdown.Item>
                <NavDropdown.Item href="/add-dish">Add Dish</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
