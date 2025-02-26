import StatusInfo from '@components/StatusInfo/StatusInfo';
import { FC, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ReservationDetails.module.scss';
import RowField from '@components/RowField/RowField';
import useReservation from '@hooks/useReservation';
import useFetch from '@hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Reservation } from '@models/reservation';
import SimpleRoomItem from '@components/SimpleRoomItem/SimpleRoomItem';

const ReservationDetails: FC = () => {
  const { id } = useParams();
  const { VITE_API_URL } = import.meta.env;
  const { get } = useFetch();
  const { reservation: initialReservation } = useReservation();
  const [reservation, setReservation] = useState<Reservation | null>(null);
  useEffect(() => {
    if (initialReservation) {
      setReservation(initialReservation);
    } else {
      get(`${VITE_API_URL}/passengers/${id}`).then((data) => {
        setReservation(data);
      });
    }
  }, []);
  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Card className={styles.details}>
        <Card.Body className={styles.body}>
          <RowField description={'Fecha checkin:'}>{reservation?.checkInDate}</RowField>
          <RowField description={'Fecha checkout:'}>{reservation?.checkOutDate}</RowField>
          <RowField description={'Cantidad de noches:'}>{reservation?.numberOfNights}</RowField>
          <RowField description={'Estado:'}>
            {reservation?.status && <StatusInfo status={reservation?.status} />}
          </RowField>
          <RowField description={'Valor total:'}>{reservation?.totalAmount}</RowField>
          <RowField description={'Documento tributario:'}>{reservation?.taxDocument}</RowField>
          <RowField description={'Cantidad de pasajeros:'}>
            {reservation?.numberOfPassengers}
          </RowField>
          <Row>
            <Col className={styles.description}>Habitaciones:</Col>
          </Row>
          <Row className={styles.rooms}>
            {reservation?.rooms?.map((room) => (
              <SimpleRoomItem room={room} delay={0} key={room.id}></SimpleRoomItem>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReservationDetails;
