import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footerSection}>
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-5">
            <ul className={`${styles.link} list-unstyled`}>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Rooms</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-5">
            <ul className={`${styles.link} list-unstyled`}>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Rooms</a>
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
                <span>198 West 21st Street, Suite 721 New York, NY 10016</span>
              </p>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                  Phone:
                </span>
                <span>(+1) 435 3533</span>
              </p>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                  Email:
                </span>
                <span>info@domain.com</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={6} className="text-left">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is
              made with{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                Colorlib
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
