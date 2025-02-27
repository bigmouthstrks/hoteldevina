import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { RoomItemProps } from '@models/props';
import styles from './SimpleRoomItem.module.scss';

export const SimpleRoomItem: React.FC<RoomItemProps> = ({ room }) => {
  return (
    <Col md={6} lg={6}>
      <Card className={styles.room}>
        <figure className={styles.imgWrap}>
          {/*<Image src={room?.image?.src} alt={room.image.alt} fluid />*/}
        </figure>
        <Card.Body className={styles.roomInfo}>
          <Card.Title className={styles.title}>{room.description}</Card.Title>
          <Card.Text className={styles.roomNumber}> Número {room.roomNumber}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
