import StatusInfo from '@components/StatusInfo/StatusInfo';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ReservationDetails.module.scss';
import SimpleRoomItem from '@components/SimpleRoomItem/SimpleRoomItem';
import useReservation from '@hooks/useReservation';

const ReservationDetails: FC = () => {
  const { reservation } = useReservation();

  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Card className={styles.details}>
        <Card.Body className={styles.body}>
          <Row>
            <Col className={styles.description}>Fecha checkin:</Col>
            <Col className={styles.value}>{reservation?.checkInDate}</Col>
          </Row>
          <Row>
            <Col className={styles.description}>Fecha checkout:</Col>
            <Col className={styles.value}>{reservation?.checkOutDate}</Col>
          </Row>
          <Row>
            <Col className={styles.description}>Cantidad de noches:</Col>
            <Col className={styles.value}>{reservation?.numberOfNights}</Col>
          </Row>
          <Row>
            <Col className={styles.description}>Estado:</Col>
            <Col>{reservation?.status && <StatusInfo status={reservation?.status} />}</Col>
          </Row>
          <Row>
            <Col className={styles.description}>Valor total:</Col>
            <Col className={styles.value}>{reservation?.totalAmount}</Col>
          </Row>
          <Row>
            <Col className={styles.description}>Forma de pago:</Col>
            <Col className={styles.value}>{reservation?.paymentMethod}</Col>
          </Row>
          <Row>
            <Col className={styles.description}>Documento tributario:</Col>
            <Col className={styles.value}>{reservation?.taxDocument}</Col>
          </Row>
          <Row>
            <Col className={styles.description}>Cantidad de pasajeros:</Col>
            <Col className={styles.value}>{reservation?.numberOfPassengers}</Col>
          </Row>
          <Row>
            <Col className={styles.description}>Habitaciones:</Col>
          </Row>
          <Row className={styles.rooms}>
            {reservation?.rooms?.map((room) => (
              <SimpleRoomItem room={room} delay={0}></SimpleRoomItem>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReservationDetails;
