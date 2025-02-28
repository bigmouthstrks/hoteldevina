import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { RoomItemProps } from '@models/props';
import styles from './RoomItem.module.scss';

export const RoomItem: React.FC<RoomItemProps> = ({ room, delay }) => {
  return (
    <Col md={6} lg={4} data-aos="fade-up" data-aos-delay={delay}>
      <Card as="a" href={`/room/${room.roomTypeId}`} className={styles.room}>
        <figure className={styles.imgWrap}>
          <Image src={`./images/${room?.images?.[0]}`} alt={room?.description} fluid />
        </figure>
        <Card.Body className={styles.roomInfo}>
          <Card.Title as="h2" className="h4 fw-bold">
            {room.description}
          </Card.Title>
          <Card.Text className={styles.letterSpacing1}>{room.price} / por noche</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
