import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { RoomItemProps } from '@models/props';
import styles from './ReservationItem.module.scss';
import StatusInfo from '@components/StatusInfo/StatusInfo';

const ReservationItem: React.FC<RoomItemProps> = ({ room, delay }: RoomItemProps) => {
  return (
    <Col
      md={4}
      lg={3}
      data-aos="fade-up"
      data-aos-delay={delay}
      key={room.id}
      className={styles.reservation}
    >
      <Card as="a" href={`/room/${room.id}`} className={styles.card}>
        <figure className={styles.imgWrap}>
          <Image src={room.image.src} alt={room.image.alt} fluid />
        </figure>
        <Card.Body className={styles.description}>
          <Card.Title className={styles.title}>{room.description}</Card.Title>
          <Card.Text className={styles.date}>{room.price} / per night</Card.Text>
          <Card.Text className={styles.rooms}>{room.price} / per night</Card.Text>
          <StatusInfo status={{ type: 'cancelled', message: 'Cancelado' }} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReservationItem;
