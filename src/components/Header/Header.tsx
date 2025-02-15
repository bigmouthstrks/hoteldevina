import { FC, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import useScrollAndCollapse from '@hooks/useScrollAndCollapse';
import HeroSection from '@components/Hero/Hero';

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { collapse, handleLink, toggleCollapse } = useScrollAndCollapse();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header className={`${styles.siteHeader} ${isVisible ? styles.scrolled : ''}`}>
        <Container>
          <Row className="align-items-center align-content-start">
            <Col md={6} lg={4} className="site-logo"></Col>
            <Col md={6} lg={8}>
              <div
                className={`${styles.siteMenuToggle} ${collapse ? styles.open : ''}`}
                onClick={toggleCollapse}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={`${styles.siteNavbar} ${collapse ? styles.collapsed : ''}`}>
                <nav role="navigation">
                  <Container>
                    <Row className="vh-100 align-items-center">
                      <Col md={6} className="mx-auto vh-100 d-flex align-items-center">
                        <ul className="list-unstyled menu">
                          <li>
                            <Link to="/login" onClick={handleLink}>
                              Iniciar sesión
                            </Link>
                          </li>
                          <li>
                            <Link to="/" onClick={handleLink}>
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link to="/rooms" onClick={handleLink}>
                              Rooms
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact" onClick={handleLink}>
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link to="/reservation" onClick={handleLink}>
                              Reservation
                            </Link>
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
      <HeroSection />
    </>
  );
};

export default Header;
