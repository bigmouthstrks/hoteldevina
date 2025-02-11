import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Header.module.scss'; // Importa el módulo SCSS

const Header: React.FC = () => {
  return (
    <header className={styles.siteHeader}>
      <Navbar expand="lg" bg="transparent" fixed="top">
        <Container>
          <Navbar.Brand href="index.html" className={styles.navbarBrand}>
            {/* <h3>Hotel de Viña</h3> */}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            className={`${styles.navbarToggler} navbar-toggler`}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              {/* <li className="nav-item">
                  <a className={`${styles.navLink} nav-link active`} href="index.html">
                      Inicio
                  </a>
              </li>
              <li className="nav-item">
                  <a className={`${styles.navLink} nav-link`} href="rooms.html">
                      Habitaciones
                  </a>
              </li>
              <li className="nav-item">
                  <a className={`${styles.navLink} nav-link`} href="about.html">
                      Acerca de
                  </a>
              </li>
              <li className="nav-item">
                  <a className={`${styles.navLink} nav-link`} href="events.html">
                      Eventos
                  </a>
              </li>
              <li className="nav-item">
                  <a className={`${styles.navLink} nav-link`} href="contact.html">
                      Contacto
                  </a>
              </li>
              <li className="nav-item">
                  <a
                    className={`${styles.btn} btn btn-primary text-white`}
                    href="reservation.html"
                  >
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
