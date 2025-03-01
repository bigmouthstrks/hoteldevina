import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footerSection}>
      <Container>
        <Row className="mb-4">
          <Col md={2} className="mb-5">
            <div className={styles.contactInfo}>
              <div className="text-center" style={{ color: '#AC3E04' }}>
                <img src="./images/logo_hotel.webp" alt="Logo Hotel de Viña" width={'100px'} />
                <br />
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
              </div>
            </div>
          </Col>

          <Col md={3} className="mb-5"></Col>
          <Col md={3} className="mb-5">
            <ul className={`${styles.link} list-unstyled`}>
              <li>
                <h3>Mapa del sitio</h3>
                <br />
              </li>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/login">Iniciar sesión</a>
              </li>
              <li>
                <a href="/register">Registro</a>
              </li>
              <li>
                <a href="/rooms">Habitaciones</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-5 pe-md-5">
            <div className={styles.contactInfo}>
              <h3>Encuéntranos en:</h3>
              <br />
              <p>
                <span className="d-block">
                  <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
                  Dirección:
                </span>
                <span>Viana 619 - Viña del Mar</span>
              </p>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                  Teléfono:
                </span>
                <span>(32) 2 710546</span>
              </p>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                  Correo electrónico:
                </span>
                <span>contacto@hoteldevina.cl</span>
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="pt-5">
          <Col md={6} className="text-left " style={{ color: 'grey' }}>
            <p>
              <small>Copyright &copy; {new Date().getFullYear()} Hotel de Viña</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
