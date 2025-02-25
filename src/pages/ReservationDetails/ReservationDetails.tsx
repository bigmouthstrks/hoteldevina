import StatusInfo from '@components/StatusInfo/StatusInfo';
import { FC, ReactNode, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ReservationDetails.module.scss';
import SimpleRoomItem from '@components/SimpleRoomItem/SimpleRoomItem';
import useReservation from '@hooks/useReservation';
import useFetch from '@hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Reservation } from '@models/reservation';

const Field = ({ description, children }: { description: string; children: ReactNode }) => {
  return (
    <Row>
      <Col className={styles.description}>{description}</Col>
      <Col className={styles.value}>{children}</Col>
    </Row>
  );
};

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
      get(`${VITE_API_URL}/reservation/${id}`).then((data) => {
        setReservation(data);
      });
    }
  }, []);
  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Card className={styles.details}>
        <Card.Body className={styles.body}>
          <Field description={'Fecha checkin:'}>{reservation?.checkInDate}</Field>
          <Field description={'Fecha checkout:'}>{reservation?.checkOutDate}</Field>
          <Field description={'Cantidad de noches:'}>{reservation?.numberOfNights}</Field>
          <Field description={'Estado:'}>
            {reservation?.status && <StatusInfo status={reservation?.status} />}
          </Field>
          <Field description={'Valor total:'}>{reservation?.totalAmount}</Field>
          <Field description={'Documento tributario:'}>{reservation?.taxDocument}</Field>
          <Field description={'Cantidad de pasajeros:'}>{reservation?.numberOfPassengers}</Field>
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
