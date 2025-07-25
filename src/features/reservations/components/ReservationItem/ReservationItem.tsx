import React, { useEffect, useRef, useState } from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { ReservationItemProps } from '@models/props';
import { Link, useLocation } from 'react-router';
import { useReservation } from '@reservations/hooks';
import { StatusInfo } from '@shared/components';
import styles from './ReservationItem.module.scss';
import { Reservation } from '@models/reservation';

export const ReservationItem: React.FC<ReservationItemProps> = ({
  reservation,
  delay,
}: {
  reservation: Reservation;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const { setReservation } = useReservation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <Col
      md={6}
      lg={4}
      xl={3}
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`${styles.reservation} ${isVisible ? 'aos-animate' : ''}`}
    >
      <Link
        to={`${pathname}/reservation/${reservation.reservationId}`}
        className={styles.link}
        onClick={() => setReservation(reservation)}
      >
        <Card className={styles.card}>
          <figure className={styles.imgWrap}>
            <Image
              src={`/images/${reservation?.rooms?.[0].roomType?.images?.[0]}`}
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
            {reservation.user && (
              <Card.Text className={styles.names}>
                {reservation.user.firstName} {reservation.user.lastName}
              </Card.Text>
            )}
            <StatusInfo status={reservation?.reservationStatus} />
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
