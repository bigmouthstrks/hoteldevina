import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true); // Muestra el header después de 100px de scroll
      } else {
        setIsVisible(false); // Oculta el header si el scroll está cerca del top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`${styles.siteHeader} ${isVisible ? styles.scrolled : ''}`}
    >
      <Container>
        <Row className="align-items-center align-content-start">
          <Col md={6} lg={4} className="site-logo"></Col>
          <Col md={6} lg={8}>
            <div
              className={`${styles.siteMenuToggle} ${collapse ? styles.open : ''}`}
              onClick={() => setCollapse(!collapse)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`${styles.siteNavbar} ${collapse ? styles.collapsed : ''}`}
            >
              <nav role="navigation">
                <Container>
                  <Row className="vh-100 align-items-center">
                    <Col
                      md={6}
                      className="mx-auto vh-100 d-flex align-items-center"
                    >
                      <ul className="list-unstyled menu">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="rooms.html">Rooms</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="reservation.html">Reservation</a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
