import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const logoSideDimension = 55;

export default function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky='top'>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/personal-logo-web.png"
            width={logoSideDimension}
            height={logoSideDimension}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={({ isActive }) =>
                `text-center nav-link${isActive ? ' active' : ''}`
              }
              to="/" href="#home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-center nav-link${isActive ? ' active' : ''}`
              }
              to="/portfolio" href="#features"
            >
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-center nav-link${isActive ? ' active' : ''}`
              }
              to="/about" href="#pricing"
            >
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
