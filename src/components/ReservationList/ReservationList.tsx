import { RoomData } from 'models/room';
import ReservationItem from '@components/ReservationItem/ReservationItem';
import { Container, Row } from 'react-bootstrap';
import styles from './ReservationList.module.scss';

const ReservationList = ({ rooms }: { rooms: RoomData[] }) => {
  return (
    <Container>
      <Row className={styles.description}>
        💡 Presiona sobre una reserva para ver sus más detalles
      </Row>
      <Row className={styles.reservationList}>
        {rooms.map((room, index) => {
          const delay = index * 100 > 500 ? 500 : index * 100;
          return <ReservationItem room={room} delay={delay} />;
        })}
      </Row>
    </Container>
  );
};

export default ReservationList;
