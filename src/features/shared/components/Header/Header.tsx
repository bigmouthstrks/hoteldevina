import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import useScrollAndCollapse from '@shared/hooks/useScrollAndCollapse';
import HeroSection from '@core/components/Hero/Hero';
import { HeaderProps } from '@models/props';
import useAuth from '@auth/hooks/useAuth';

const Header: FC<HeaderProps> = ({
  isSticky,
  isStatic,
  showHero = true,
  reservation,
}: HeaderProps) => {
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
            <Col md={6} lg={4} className="site-logo">
              <Link to="/">
                <img
                  src="./src/assets/images/logo_hotel.png"
                  alt="Logo Hotel de Viña"
                  width={'100px'}
                />
              </Link>
            </Col>
            <Col md={6} lg={4} className="text-center">
              {!showHero && (
                <span className={styles.title}>
                  {reservation ? `Reserva #${reservation.id}` : 'Mis Reservas'}
                </span>
              )}
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
                              to="/reservation"
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

export default Header;
