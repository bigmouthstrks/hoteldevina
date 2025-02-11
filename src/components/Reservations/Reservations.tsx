import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Reservations.module.scss';

const ReservationSection: React.FC = () => (
  <section className={styles.reservationSection}>
    <Container className="z-index-1">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0 text-md-start" data-aos="fade-up">
          <h2 className="fw-bold display-5 text-center text-md-start">
            A Best Place To Stay. Reserve Now!
          </h2>
        </Col>
        <Col
          md={6}
          className="text-center text-md-end"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Button
            href="reservation.html"
            variant="outline-light"
            size="lg"
            className={`${styles.btnOutlineLight} py-3 px-5`}
          >
            Reserve Now
          </Button>
        </Col>
      </Row>
    </Container>
    <div className={styles.overlay}></div>
  </section>
);

export default ReservationSection;
