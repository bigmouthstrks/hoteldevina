import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import useScrollAndCollapse from '@hooks/useScrollAndCollapse';
import HeroSection from '@components/Hero/Hero';
import { HeaderProps } from '@models/props';
import useAuth from '@hooks/useAuth';

const Header: FC<HeaderProps> = ({ isSticky, isStatic, showHero = true }: HeaderProps) => {
  const { isAuthenticated } = useAuth();
  const { collapse, handleLink, toggleCollapse } = useScrollAndCollapse();
  return (
    <>
      <header
        className={`${styles.siteHeader} ${isSticky ? styles.scrolled : ''} ${isStatic ? styles.static : ''}`}
      >
        <Container>
          <Row className="align-items-center align-content-start">
            <Col md={6} lg={4} className="site-logo">
              Bienvenido !
            </Col>
            <Col md={6} lg={4} className="text-center">
              <span className={styles.title}>Mis Reservas</span>
            </Col>
            <Col md={6} lg={4}>
              <div
                className={`${styles.siteMenuToggle} ${collapse ? styles.open : ''}`}
                onClick={() => toggleCollapse()}
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
                          {isAuthenticated ? (
                            <>
                              <li>
                                <Link to="/my-reservations" onClick={handleLink}>
                                  Mis Reservas
                                </Link>
                              </li>
                              <li>
                                <Link to="/logout" onClick={handleLink}>
                                  Cerrar sesión
                                </Link>
                              </li>
                            </>
                          ) : (
                            <li>
                              <Link to="/login" onClick={handleLink}>
                                Iniciar sesión
                              </Link>
                            </li>
                          )}
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
      {showHero && <HeroSection />}
    </>
  );
};

export default Header;
