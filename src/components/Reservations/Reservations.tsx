import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useScrollAndCollapse from '@hooks/useScrollAndCollapse';
import styles from './Reservations.module.scss';

const ReservationSection: React.FC = () => {
  const { handleLink } = useScrollAndCollapse();
  return (
    <section
      className={`${styles.reservationSection} overlay`}
      style={{ backgroundImage: `url('images/hero_4.jpg')` }}
    >
      <Container className="z-index-1">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 text-md-start" data-aos="fade-up">
            <h2 className="fw-bold display-5 text-center text-md-start">
              A Best Place To Stay. Reserve Now!
            </h2>
          </Col>
          <Col md={6} className="text-center text-md-end" data-aos="fade-up" data-aos-delay="200">
            <Link to="/reservation" onClick={handleLink} className={styles.btnOutlineLight}>
              Reserve now
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReservationSection;
