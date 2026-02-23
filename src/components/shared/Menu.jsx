import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar
      expand="md"
      sticky="top"
      className="navbar-custom"
    >
      <Container fluid className="navbar-container">
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/img/Inicio/Imagen8tr.png"
            alt="LEPA Hnos. S.R.L."
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-item-custom">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/la-empresa" className="nav-item-custom">
              La Empresa
            </Nav.Link>
            <Nav.Link as={NavLink} to="/obras" className="nav-item-custom">
              Obras
            </Nav.Link>
            <Nav.Link as={NavLink} to="/clientes" className="nav-item-custom">
              Clientes
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/quienes-somos"
              className="nav-item-custom"
            >
              Quiénes Somos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
