import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <Navbar expand="lg" bg="transparent" fixed="top">
        <Container>
          <Navbar.Brand href="index.html" className="site-logo">
            {/* <h3>Hotel de Viña</h3> */}
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarNav"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              {/* <li className="nav-item">
                  <a className="nav-link active" href="index.html">
                      Inicio
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="rooms.html">
                      Habitaciones
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="about.html">
                      Acerca de
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="events.html">
                      Eventos
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                      Contacto
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link btn btn-primary text-white" href="reservation.html">
                      Reservas
                  </a>
              </li> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
