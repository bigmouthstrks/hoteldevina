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
        to={`${pathname}/reservation/${reservation.id}`}
        className={styles.link}
        onClick={() => setReservation(reservation)}
      >
        <Card className={styles.card}>
          <figure className={styles.imgWrap}>
            <Image
              src={reservation?.rooms?.[0].image.src}
              alt={reservation?.rooms?.[0].image.alt}
              fluid
            />
          </figure>
          <Card.Body className={styles.description}>
            <Card.Title className={styles.title}>Reserva #{reservation.id}</Card.Title>
            <Card.Text className={styles.date}>
              {reservation.checkInDate} al {reservation.checkOutDate}
            </Card.Text>
            <Card.Text className={styles.rooms}>
              {reservation.rooms?.length} habitaciones • {reservation.numberOfPassengers} pasajeros
            </Card.Text>
            <StatusInfo status={reservation?.status} />
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
