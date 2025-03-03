import React from 'react';
import { Col, Card, ListGroup } from 'react-bootstrap';
import { RoomItemProps } from '@models/props';
import styles from './RoomItem.module.scss';
import { useRoom } from '@rooms/hooks';
import { Link } from 'react-router-dom';

export const RoomItem: React.FC<RoomItemProps> = ({ room, delay }) => {
  const { changeRoom } = useRoom();
  return (
    <Col md={6} lg={4} data-aos="fade-up" data-aos-delay={delay}>
      <Link to={`/rooms/${room.roomTypeId}`} onClick={() => changeRoom(room)}>
        <Card className={styles.room}>
          <Card.Img src={`/images/${room?.images?.[0]}`} alt={room?.description}></Card.Img>
          <Card.Body className={styles.roomInfo}>
            <Card.Title as="h2" className="h4 fw-bold">
              {room.description}
            </Card.Title>
            <Card.Text className={styles.letterSpacing1}>
              {room.priceAsString} / por noche
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            {room.features?.map((feature, index) => (
              <ListGroup.Item key={index}>{feature}</ListGroup.Item>
            ))}
          </ListGroup>
          <hr />
        </Card>
      </Link>
    </Col>
  );
};
