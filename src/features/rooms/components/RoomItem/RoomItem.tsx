import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { RoomItemProps } from '@models/props';
import styles from './RoomItem.module.scss';

const RoomItem: React.FC<RoomItemProps> = ({ room, delay }: RoomItemProps) => {
  return (
    <Col md={6} lg={4} data-aos="fade-up" data-aos-delay={delay}>
      <Card as="a" href={`/room/${room.id}`} className={styles.room}>
        <figure className={styles.imgWrap}>
          <Image src={room.image.src} alt={room.image.alt} fluid />
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

export default RoomItem;
