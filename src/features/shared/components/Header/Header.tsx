import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { HeaderProps } from '@models/props';
import { useScrollAndCollapse, useTitle } from '@shared/hooks';
import { useAuth } from '@auth/hooks';
import { HeroSection } from '@core/components';

export const Header: FC<HeaderProps> = ({ isSticky, isStatic, showHero = true }) => {
  const { title } = useTitle();
  const { isAuthenticated, logout } = useAuth();
  const { collapse, handleLink, toggleCollapse } = useScrollAndCollapse();
  const handleLogout = () => {
    handleLink();
    logout();
  };
  return (
    <>
      <header
        className={`${styles.siteHeader} ${isSticky ? styles.scrolled : ''} ${isStatic ? styles.static : ''}`}
      >
        <Container>
          <Row className="align-items-center align-content-start">
            <Col xs={4} className="site-logo">
              <Link to="/">
                <img src="./images/logo_hotel.png" alt="Logo Hotel de Viña" />
              </Link>
            </Col>
            <Col xs={4} className="text-center">
              <span className={styles.title}>{title}</span>
            </Col>
            <Col xs={4}>
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
                              Inicio
                            </Link>
                          </li>
                          <li>
                            <Link to="/rooms" onClick={handleLink}>
                              Habitaciones
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact" onClick={handleLink}>
                              Contacto
                            </Link>
                          </li>
                          <li className="mt-2">
                            <Link
                              to="/reservation-form"
                              onClick={handleLink}
                              className="ps-3 pe-3 btn btn-primary text-white text-bold"
                            >
                              ¡Reserva ahora!
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
                                <Link to="/" onClick={handleLogout}>
                                  Cerrar sesión
                                </Link>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="mt-2">
                                <Link
                                  to="/login"
                                  onClick={handleLink}
                                  className="ps-3 pe-3 btn btn-secondary text-white text-bold"
                                >
                                  Iniciar sesión
                                </Link>
                              </li>
                              <li className="mt-2">
                                <Link
                                  to="/login-admin"
                                  onClick={handleLink}
                                  className="ps-3 pe-3 btn btn-secondary text-white text-bold"
                                >
                                  Iniciar sesión (admin test)
                                </Link>
                              </li>
                              <li>
                                <Link to="/register" onClick={handleLink}>
                                  Crear cuenta
                                </Link>
                              </li>
                            </>
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
