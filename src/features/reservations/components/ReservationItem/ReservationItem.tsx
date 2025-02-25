import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { ReservationItemProps } from '@models/props';
import styles from './ReservationItem.module.scss';
import StatusInfo from '@shared/components/StatusInfo/StatusInfo';
import { Link } from 'react-router-dom';
import useReservation from '@reservations/hooks/useReservation';

const ReservationItem: React.FC<ReservationItemProps> = ({
  reservation,
  delay,
}: ReservationItemProps) => {
  const { setReservation } = useReservation();
  return (
    <Col md={4} lg={3} data-aos="fade-up" data-aos-delay={delay} className={styles.reservation}>
      <Link
        to={`/reservation/${reservation.id}`}
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

export default ReservationItem;
