import React from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faVimeo,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss'; // Importa el módulo SCSS

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerSection}>
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-5">
            <ListGroup
              variant="flush"
              className={`${styles.link} list-unstyled`}
            >
              <ListGroup.Item as="li">
                <a href="#">About Us</a>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <a href="#">Terms & Conditions</a>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <a href="#">Privacy Policy</a>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <a href="#">Rooms</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} className="mb-5">
            <ListGroup
              variant="flush"
              className={`${styles.link} list-unstyled`}
            >
              <ListGroup.Item as="li">
                <a href="#">The Rooms & Suites</a>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <a href="#">About Us</a>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <a href="#">Contact Us</a>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <a href="#">Restaurant</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} className="mb-5 pe-md-5">
            <div className={styles.contactInfo}>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-2 text-primary"
                  />
                  Address:
                </span>
                <span>198 West 21st Street, Suite 721 New York, NY 10016</span>
              </p>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2 text-primary"
                  />
                  Phone:
                </span>
                <span>(+1) 435 3533</span>
              </p>
              <p>
                <span className="d-block">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2 text-primary"
                  />
                  Email:
                </span>
                <span>info@domain.com</span>
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-5">
            <p>Sign up for our newsletter</p>
            <Form className={styles.footerNewsletter}>
              <div className={styles.inputGroup}>
                <Form.Control type="email" placeholder="Email..." />
                <Button variant="primary" type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={6} className="text-left">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved |
              This template is made with{' '}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>
            </p>
          </Col>
          <Col md={6} className="text-end">
            <div className={styles.social}>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faVimeo} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
