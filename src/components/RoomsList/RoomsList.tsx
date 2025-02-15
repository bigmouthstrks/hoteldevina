import { Card, Col, Image } from 'react-bootstrap';
import styles from './RoomsList.module.scss';
import { RoomData } from 'models/room';

const RoomsList = ({ rooms }: { rooms: RoomData[] }) => {
  return (
    <>
      {rooms.map((room, index) => {
        const delay = index * 100 > 500 ? 500 : index * 100;
        return (
          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay={delay} key={room.id}>
            <Card as="a" href={`/room/${room.id}`} className={styles.room}>
              <figure className={styles.imgWrap}>
                <Image src={room.image.src} alt={room.image.alt} fluid />
              </figure>
              <Card.Body className={styles.roomInfo}>
                <Card.Title as="h2" className="h4 fw-bold">
                  {room.description}
                </Card.Title>
                <Card.Text className={styles.letterSpacing1}>{room.price} / per night</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default RoomsList;
