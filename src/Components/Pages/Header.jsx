import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to="/services">Services</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to="/portfolio">Portfolio</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
