import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo-crudo.png";

function Footer() {
  return (
    <Navbar  className="bg-body-tertiary footer" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Our Linkedin" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/agueda-muela/" target="_blank">
                Linkedin Águeda
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/asiermd/" target="_blank">Linkedin Asier</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GitHub Repositories" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/MDasier/backendCrudo" target="_blank">
                Backend Repository
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/lamardemuela/crudo" target="_blank">Frontend Repository</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Footer