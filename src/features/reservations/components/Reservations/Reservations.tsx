import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useScrollAndCollapse from '@shared/hooks/useScrollAndCollapse';
import styles from './Reservations.module.scss';

const ReservationSection: FC = () => {
  const { handleLink } = useScrollAndCollapse();
  return (
    <section
      className={`${styles.reservationSection} overlay h-100`}
      style={{ backgroundImage: `url('./images/ciudad.jpg')` }}
    >
      <Container className="z-index-1 pt-5 pb-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 text-md-start" data-aos="fade-up">
            <h2 className={`${styles.textShadow} fw-bold display-5 text-center text-md-start`}>
              El punto de partida para su visita a la Ciudad Jardín 🏖️
            </h2>
          </Col>
          <Col md={6} className="text-center text-md-end" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/reservation"
              onClick={handleLink}
              className="btn btn-primary text-white text-bold"
            >
              Reservar ahora
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReservationSection;
