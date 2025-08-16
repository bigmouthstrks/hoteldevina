import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ReservationDetails.module.scss';
import { useNavigate, useParams } from 'react-router';
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
  fullCheckIn,
  edit,
}) => {
  const [reservation, setInitialReservation] = useState<Reservation | null>(null);
  const { id } = useParams();
  const { get, post } = useFetch();
  const { handleShow } = useModal();
  const { showSnackbar } = useSnackbar();
  const { reservation: initialReservation, setReservation } = useReservation();
  const { setTitle } = useTitle();
  const navigate = useNavigate();
  const [checkingReservation, setCheckingReservation] = useState(checkingReservations);

  useEffect(() => {
    if (initialReservation) {
      setInitialReservation(initialReservation);
      if (initialReservation.reservationId)
        setTitle(`Reserva #${initialReservation.reservationId}`);
    } else {
      get(`${API_URL}/reservations/${id}`).then(({ data }: { data: Reservation }) => {
        setInitialReservation(data);
        setTitle(`Reserva #${data.reservationId}`);
      });
    }
  }, []);

  const handleCheckout = async () => {
    setCheckingReservation((prev) => !prev);
    setInitialReservation(initialReservation);
  };

  const handleConfirm = async () => {
    const confirm = await handleShow(
      'Confirmación',
      `¿Desea confirmar la reserva ${reservation?.reservationId}?`
    );
    if (!confirm) return;
    post(`${API_URL}/reservations/${reservation?.reservationId}/confirm`)
      .then((data) => {
        showSnackbar(data.message, MessageType.SUCCESS);
        setReservation(null);
        navigate(-1);
      })
      .catch(() => {
        showSnackbar('Ha ocurrido un error al confirmar la reserva', MessageType.ERROR);
      });
  };

  const handleCancel = async () => {
    const confirm = await handleShow(
      'Cancelar',
      `¿Desea cancelar la reserva ${reservation?.reservationId}?`,
      'Conservar cambios',
      'Cancelar mi reserva'
    );
    if (!confirm) return;
    post(`${API_URL}/reservations/${reservation?.reservationId}/cancel`)
      .then((data) => {
        showSnackbar(data.message, MessageType.SUCCESS);
        setReservation(null);
        navigate(-1);
      })
      .catch(() => {
        showSnackbar('Ha ocurrido un error al cancelar la reserva', MessageType.ERROR);
      });
  };

  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Card className={`${styles.details} ${checkingReservation ? styles.checkin : ''}`}>
        <Card.Body className={styles.body}>
          <RowField description={'Fecha checkin:'}>{reservation?.checkIn}</RowField>
          <RowField description={'Fecha checkout:'}>{reservation?.checkOut}</RowField>
          <RowField description={'Cantidad de noches:'}>{reservation?.nightsCount}</RowField>
          {reservation?.reservationStatus && (
            <RowField description={'Estado:'}>
              <StatusInfo status={reservation?.reservationStatus} />
            </RowField>
          )}
          <RowField description={'Valor total:'}>
            {reservation?.totalPrice?.formattedValue}
          </RowField>
          {reservation?.taxDocument && (
            <RowField description={'Documento tributario:'}>{reservation?.taxDocument}</RowField>
          )}
          <RowField description={'Cantidad de pasajeros:'}>{reservation?.passengerCount}</RowField>
          <RowField description={'Número de teléfono:'}>{reservation?.user?.phoneNumber}</RowField>
          <Row>
            <Col className={styles.description}>Habitaciones:</Col>
          </Row>
          <Row className={styles.rooms}>
            {reservation?.rooms?.map((room, index) => (
              <SimpleRoomItem
                room={room}
                delay={0}
                key={room.roomId}
                smallSize={Number(reservation.rooms?.length) > 6 || Number(index) >= 2}
              ></SimpleRoomItem>
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
              {(String(reservation?.reservationStatus?.reservationStatusId) ===
                StatusType.CONFIRMED ||
                String(reservation?.reservationStatus?.reservationStatusId) ===
                  StatusType.TO_BE_CONFIRMED) && (
                <Col className="text-center">
                  <Button variant="danger" onClick={handleCancel}>
                    Cancelar reserva
                  </Button>
                </Col>
              )}
              {!checkingReservation &&
                String(reservation?.reservationStatus?.reservationStatusId) ===
                  StatusType.IN_PROGRESS && (
                  <Col className="text-center">
                    <Button variant="primary" onClick={handleCheckout}>
                      Realizar checkout
                    </Button>
                  </Col>
                )}
            </Row>
          )}
        </Card.Body>
        {checkingReservation && <CheckReservation checkIn={checkIn} fullCheckIn={fullCheckIn} />}
      </Card>
    </Container>
  );
};
