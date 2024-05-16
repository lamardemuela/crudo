import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo-crudo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function Footer() {
  const { isDarkTheme } = useContext(ThemeContext);
  const footerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    width: "100%",
  };
  return (
    <Navbar
      bg={isDarkTheme ? "dark" : "light"}
      data-bs-theme={isDarkTheme ? "dark" : "light"}
      className="bg-body-tertiary"
    >
      <Container>
        
          <Nav className="me-auto" style={footerStyles}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown title="Our Linkedin" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="https://www.linkedin.com/in/agueda-muela/"
                target="_blank"
              >
                Linkedin Águeda
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="https://www.linkedin.com/in/asiermd/"
                target="_blank"
              >
                Linkedin Asier
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GitHub Repositories" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="https://github.com/MDasier/backendCrudo"
                target="_blank"
              >
                Backend Repository
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="https://github.com/lamardemuela/crudo"
                target="_blank"
              >
                Frontend Repository
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
     
      </Container>
    </Navbar>
  );
}

export default Footer;
