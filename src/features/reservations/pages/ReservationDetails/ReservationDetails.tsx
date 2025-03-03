import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ReservationDetails.module.scss';
import { useParams } from 'react-router-dom';
import { Reservation } from '@models/reservation';
import { ReservationDetailsProps } from '@models/props';
import { useFetch, useSnackbar, useTitle } from '@shared/hooks';
import { useReservation } from '@reservations/hooks';
import { RowField, StatusInfo } from '@shared/components';
import { SimpleRoomItem } from '@rooms/components';
import { CheckReservation } from '@admin/pages';
import { API_URL, MessageType, StatusType } from '@models/consts';
import { useModal } from '@shared/hooks/useModal';

export const ReservationDetails: React.FC<ReservationDetailsProps> = ({
  checkingReservations,
  checkIn,
  edit,
}) => {
  const { id } = useParams();
  const { get, patch } = useFetch();
  const { handleShow } = useModal();
  const { showSnackbar } = useSnackbar();
  const { reservation: initialReservation } = useReservation();
  const { setTitle } = useTitle();
  const [reservation, setReservation] = useState<Reservation | null>(null);
  useEffect(() => {
    if (initialReservation) {
      setReservation(initialReservation);
      if (initialReservation.reservationId)
        setTitle(`Reserva #${initialReservation.reservationId}`);
    } else {
      get(`${API_URL}/reservations/${id}`).then(({ data }: { data: Reservation }) => {
        setReservation(data);
        setTitle(`Reserva #${data.reservationId}`);
      });
    }
  }, []);

  const handleConfirm = async () => {
    const confirm = await handleShow(
      'Confirmación',
      `¿Desea confirmar la reserva ${reservation?.reservationId}?`
    );
    if (!confirm) return;
    patch(`${API_URL}/reservations/${reservation?.reservationId}/confirm`)
      .then((data) => {
        showSnackbar(data.message, MessageType.SUCCESS);
      })
      .catch(() => {
        showSnackbar('Ha ocurrido un error al confirmar la reserva', MessageType.ERROR);
      });
  };

  const handleCancel = async () => {
    const confirm = await handleShow(
      'Cancelar',
      `¿Desea cancelar la reserva ${reservation?.reservationId}?`
    );
    if (!confirm) return;
  };

  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Card className={`${styles.details} ${checkingReservations ? styles.checkin : ''}`}>
        <Card.Body className={styles.body}>
          <RowField description={'Fecha checkin:'}>{reservation?.checkIn}</RowField>
          <RowField description={'Fecha checkout:'}>{reservation?.checkOut}</RowField>
          <RowField description={'Cantidad de noches:'}>{reservation?.nightsCount}</RowField>
          {reservation?.reservationStatus && (
            <RowField description={'Estado:'}>
              <StatusInfo status={reservation?.reservationStatus} />
            </RowField>
          )}
          <RowField description={'Valor total:'}>{reservation?.totalPrice}</RowField>
          {reservation?.taxDocument && (
            <RowField description={'Documento tributario:'}>{reservation?.taxDocument}</RowField>
          )}
          <RowField description={'Cantidad de pasajeros:'}>{reservation?.passengerCount}</RowField>
          <Row>
            <Col className={styles.description}>Habitaciones:</Col>
          </Row>
          <Row className={styles.rooms}>
            {reservation?.rooms?.map((room) => (
              <SimpleRoomItem room={room} delay={0} key={room.roomId}></SimpleRoomItem>
            ))}
          </Row>
          {edit && (
            <Row xs={2}>
              {String(reservation?.reservationStatus?.reservationStatusId) ===
                StatusType.TO_BE_CONFIRMED && (
                <Col className="text-center">
                  <Button variant="secondary" onClick={handleConfirm}>
                    Confirmar reserva
                  </Button>
                </Col>
              )}
              {String(reservation?.reservationStatus?.reservationStatusId) ===
                StatusType.CANCELLED && (
                <Col className="text-center">
                  <Button variant="danger" onClick={handleCancel}>
                    Cancelar reserva
                  </Button>
                </Col>
              )}
            </Row>
          )}
        </Card.Body>
        {checkingReservations && <CheckReservation checkIn={checkIn} />}
      </Card>
    </Container>
  );
};
