import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { SimpleRoomItemProps } from '@models/props';
import styles from './SimpleRoomItem.module.scss';

export const SimpleRoomItem: React.FC<SimpleRoomItemProps> = ({ room, smallSize }) => {
  return (
    <Col md={6} lg={smallSize ? 3 : 6}>
      <Card className={styles.room}>
        <figure className={styles.imgWrap}>
          <Image src={`/images/${room?.roomType?.images?.[0]}`} alt={room?.description} fluid />
        </figure>
        <Card.Body className={styles.roomInfo}>
          <Card.Title className={styles.title}>{room.roomType.name}</Card.Title>
          <Card.Text className={styles.roomNumber}>
            <p className="badge text-bg-primary">N° {room.number} </p> &nbsp;
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
