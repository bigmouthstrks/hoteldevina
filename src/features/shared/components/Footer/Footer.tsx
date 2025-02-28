import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footerSection}>
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-5">
            <ul className={`${styles.link} list-unstyled`}>
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
          <Col md={3} className="mb-5">
            <ul className={`${styles.link} list-unstyled`}>
              <li>
                <a href="/">Inicio</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-5 pe-md-5">
            <div className={styles.contactInfo}>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
                  Address:
                </span>
                <span>Viana 619 - Viña del Mar</span>
              </p>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                  Phone:
                </span>
                <span>32 2 710546</span>
              </p>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                  Email:
                </span>
                <span>informaciones@hoteldevina.cl</span>
              </p>
            </div>
          </Col>
          <Col>
            <div className={styles.contactInfo}>
              <img src="./images/logo_hotel.png" alt="Logo Hotel de Viña" width={'100px'} />
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={6} className="text-left">
            <p>Copyright &copy; {new Date().getFullYear()} Hotel de Viña</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
