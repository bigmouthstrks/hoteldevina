import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Reservations.css';

const ReservationSection: React.FC = () => (
    <section className="reservation-section position-relative py-5">
      <Container className="position-relative z-index-1">
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0 text-md-start" data-aos="fade-up">
            <h2 className="fw-bold display-5">A Best Place To Stay. Reserve Now!</h2>
          </Col>

          <Col md={6} className="text-center text-md-end" data-aos="fade-up" data-aos-delay="200">
            <Button
              href="reservation.html"
              variant="outline-light"
              size="lg"
              className="py-3 px-5"
            >
              Reserve Now
            </Button>
          </Col>
        </Row>
      </Container>

      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </section>
);

export default ReservationSection;