import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ReservationDetails.module.scss';
import { useParams } from 'react-router-dom';
import { Reservation } from '@models/reservation';
import { ReservationDetailsProps } from '@models/props';
import { useFetch, useTitle } from '@shared/hooks';
import { useReservation } from '@reservations/hooks';
import { RowField, StatusInfo } from '@shared/components';
import { SimpleRoomItem } from '@rooms/components';
import { CheckReservation } from '@admin/pages';
import { API_URL } from '@models/consts';

export const ReservationDetails: React.FC<ReservationDetailsProps> = ({
  checkingReservations,
  checkIn,
}) => {
  const { id } = useParams();
  const { get } = useFetch();
  const { reservation: initialReservation } = useReservation();
  const { setTitle } = useTitle();
  const [reservation, setReservation] = useState<Reservation | null>(null);
  useEffect(() => {
    if (initialReservation) {
      setReservation(initialReservation);
      setTitle(`Reserva #${initialReservation.id}`);
    } else {
      get(`${API_URL}/passengers/${id}`).then((data) => {
        setReservation(data);
        setTitle(`Reserva #${data.id}`);
      });
    }
  }, []);
  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Card className={`${styles.details} ${checkingReservations ? styles.checkin : ''}`}>
        <Card.Body className={styles.body}>
          <RowField description={'Fecha checkin:'}>{reservation?.checkIn}</RowField>
          <RowField description={'Fecha checkout:'}>{reservation?.checkOut}</RowField>
          <RowField description={'Cantidad de noches:'}>{reservation?.nightsCount}</RowField>
          <RowField description={'Estado:'}>
            {reservation?.status && <StatusInfo status={reservation?.status} />}
          </RowField>
          <RowField description={'Valor total:'}>{reservation?.totalPrice}</RowField>
          <RowField description={'Documento tributario:'}>{reservation?.taxDocument}</RowField>
          <RowField description={'Cantidad de pasajeros:'}>{reservation?.passengerNumber}</RowField>
          <Row>
            <Col className={styles.description}>Habitaciones:</Col>
          </Row>
          <Row className={styles.rooms}>
            {reservation?.rooms?.map((room) => (
              <SimpleRoomItem room={room} delay={0} key={room.roomId}></SimpleRoomItem>
            ))}
          </Row>
        </Card.Body>
        {checkingReservations && <CheckReservation checkIn={checkIn} />}
      </Card>
    </Container>
  );
};
