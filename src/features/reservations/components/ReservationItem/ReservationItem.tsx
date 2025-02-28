import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { ReservationItemProps } from '@models/props';
import { Link, useLocation } from 'react-router-dom';
import { useReservation } from '@reservations/hooks';
import { StatusInfo } from '@shared/components';
import styles from './ReservationItem.module.scss';

export const ReservationItem: React.FC<ReservationItemProps> = ({ reservation, delay }) => {
  const { pathname } = useLocation();
  const { setReservation } = useReservation();
  return (
    <Col
      md={6}
      lg={4}
      xl={3}
      data-aos="fade-up"
      data-aos-delay={delay}
      className={styles.reservation}
    >
      <Link
        to={`${pathname}/reservation/${reservation.reservationId}`}
        className={styles.link}
        onClick={() => setReservation(reservation)}
      >
        <Card className={styles.card}>
          <figure className={styles.imgWrap}>
            <Image
              src={`./images/${reservation?.rooms?.[0].images?.[0]}`}
              alt={reservation?.rooms?.[0].description}
              fluid
            />
          </figure>
          <Card.Body className={styles.description}>
            <Card.Title className={styles.title}>Reserva #{reservation.reservationId}</Card.Title>
            <Card.Text className={styles.date}>
              {reservation.checkIn} al {reservation.checkOut}
            </Card.Text>
            <Card.Text className={styles.rooms}>
              {reservation.rooms?.length} habitaciones • {reservation.passengerCount}{' '}
              {Number(reservation?.passengerCount) > 1 ? 'pasajeros' : 'pasajero'}
            </Card.Text>
            <StatusInfo status={reservation?.status} />
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
