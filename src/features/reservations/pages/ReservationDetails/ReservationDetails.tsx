import { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ReservationDetails.module.scss';
import { useNavigate, useParams } from 'react-router';
import { Reservation, ReservationEdit } from '@models/reservation';
import { ReservationDetailsProps } from '@models/props';
import { useFetch, useFormData, useSnackbar, useTitle } from '@shared/hooks';
import { useReservation } from '@reservations/hooks';
import { RowField, StatusInfo } from '@shared/components';
import { SimpleRoomItem } from '@rooms/components';
import { CheckReservation } from '@admin/pages';
import { API_URL, MessageType, StatusType } from '@models/consts';
import { useModal } from '@shared/hooks/useModal';
import { RowFieldEditing } from '@shared/components/RowFieldEditing';

export const ReservationDetails: React.FC<ReservationDetailsProps> = ({
  checkingReservations,
  checkIn,
  fullCheckIn,
  edit,
}) => {
  const [reservation, setInitialReservation] = useState<Reservation | null>(null);
  const [checkingReservation, setCheckingReservation] = useState(checkingReservations);
  const { formData, handleInputChange } = useFormData<ReservationEdit>({});
  const [modifyingReservation, setModifyingReservation] = useState<boolean>(false);
  const { id } = useParams();
  const { get, post } = useFetch();
  const { handleShow } = useModal();
  const { showSnackbar } = useSnackbar();
  const { reservation: initialReservation, setReservation } = useReservation();
  const { setTitle } = useTitle();
  const navigate = useNavigate();
  const dateRef = useRef<string>('');
  const priceRef = useRef<string>('');

  useEffect(() => {
    if (initialReservation) {
      setInitialReservation(initialReservation);
      dateRef.current = String(initialReservation.checkOut);
      priceRef.current = String(initialReservation.totalPrice?.formattedValue);
      if (initialReservation.reservationId)
        setTitle(`Reserva #${initialReservation.reservationId}`);
    } else {
      get(`${API_URL}/reservations/${id}`).then(({ data }: { data: Reservation }) => {
        setInitialReservation(data);
        setTitle(`Reserva #${data.reservationId}`);
        dateRef.current = String(data.checkOut);
        priceRef.current = String(data.totalPrice?.formattedValue);
      });
    }
  }, []);

  // TODO: refactor and simply this method
  const changeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    let days = Number(event.target.value) || 1;
    days = Math.max(1, Math.min(30, days));
    event.target.value = String(days);
    handleInputChange(event);
    const [day, month, year] = String(reservation?.checkIn).split('-').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + days);

    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    const formattedDate = `${d}-${m}-${y}`;
    dateRef.current = formattedDate;
    handleInputChange({
      ...event,
      target: {
        ...event.target,
        name: 'checkOut',
        value: dateRef.current,
      },
    });

    const pricePerDay = (reservation?.totalPrice?.value || 0) / (reservation?.nightsCount || 0);
    const newTotalPrice = pricePerDay * days;
    priceRef.current = `$${newTotalPrice.toLocaleString('es-CL')}`;
    handleInputChange({
      ...event,
      target: {
        ...event.target,
        name: 'totalPrice',
        value: String(newTotalPrice),
      },
    });
  };

  const handleCheckout = async () => {
    setCheckingReservation((prev) => !prev);
    setInitialReservation(initialReservation);
  };

  const handleEdit = () => {
    setModifyingReservation((prev) => !prev);
  };

  //TODO: Simplify this method
  const handleModify = async () => {
    const confirm = await handleShow(
      'Confirmación',
      `¿Desea modificar la reserva ${reservation?.reservationId}?`
    );
    if (!confirm) return;
    post(`${API_URL}/reservations/update/${reservation?.reservationId}`, {
      ...formData,
      nightsCount: Number(formData?.nightsCount ?? reservation?.nightsCount),
      passengerCount: Number(formData.passengerCount ?? reservation?.passengerCount),
      totalPrice: Number(formData.totalPrice ?? reservation?.totalPrice?.value),
    })
      .then(({ message, data }) => {
        showSnackbar(message, MessageType.SUCCESS);
        setInitialReservation((prev) => ({
          ...data,
          rooms: prev?.rooms,
          reservationStatus: reservation?.reservationStatus,
        }));
        setModifyingReservation(false);
      })
      .catch(() => {
        showSnackbar('Ha ocurrido un error al modificar la reserva', MessageType.ERROR);
      });
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
          <RowField description={'Fecha checkout:'}>{dateRef.current}</RowField>
          <RowFieldEditing
            description={'Cantidad de noches:'}
            editing={modifyingReservation}
            onChange={changeDate}
            field="nightsCount"
            min={1}
          >
            {reservation?.nightsCount}
          </RowFieldEditing>
          {reservation?.reservationStatus && (
            <RowField description={'Estado:'}>
              <StatusInfo status={reservation?.reservationStatus} />
            </RowField>
          )}
          <RowField description={'Valor total:'}>{priceRef.current}</RowField>
          {reservation?.taxDocument && (
            <RowField description={'Documento tributario:'}>{reservation?.taxDocument}</RowField>
          )}
          <RowFieldEditing
            description={'Cantidad de pasajeros:'}
            editing={modifyingReservation}
            onChange={handleInputChange}
            field="passengerCount"
          >
            {reservation?.passengerCount}
          </RowFieldEditing>
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
          {/*TODO: create new component for action buttons and details*/}
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
                !modifyingReservation &&
                String(reservation?.reservationStatus?.reservationStatusId) ===
                  StatusType.IN_PROGRESS && (
                  <>
                    <Col className="text-center">
                      <Button variant="primary" onClick={handleCheckout}>
                        Realizar checkout
                      </Button>
                    </Col>
                    <Col className="text-center">
                      <Button variant="primary" onClick={handleEdit}>
                        Modificar reserva
                      </Button>
                    </Col>
                  </>
                )}
              {modifyingReservation &&
                String(reservation?.reservationStatus?.reservationStatusId) ===
                  StatusType.IN_PROGRESS && (
                  <>
                    <Col className="text-center">
                      <Button variant="primary" onClick={handleEdit}>
                        Cancelar
                      </Button>
                    </Col>
                    <Col className="text-center">
                      <Button variant="secondary" onClick={handleModify}>
                        Confirmar
                      </Button>
                    </Col>
                  </>
                )}
            </Row>
          )}
        </Card.Body>
        {checkingReservation && <CheckReservation checkIn={checkIn} fullCheckIn={fullCheckIn} />}
      </Card>
    </Container>
  );
};
