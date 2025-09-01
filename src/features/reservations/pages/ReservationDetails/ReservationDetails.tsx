import { useEffect, useMemo, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ReservationDetails.module.scss';
import { useNavigate, useParams } from 'react-router';
import { Reservation, ReservationEdit } from '@models/reservation';
import { ReservationDetailsProps } from '@models/props';
import { useFetch, useFormData, useSnackbar, useTitle } from '@shared/hooks';
import { useReservation } from '@reservations/hooks';
import { RowField, StatusInfo } from '@shared/components';
import { SimpleRoomItem } from '@rooms/components';
import { CheckReservation } from '@admin/pages';
import { API_URL, MessageType } from '@models/consts';
import { RowFieldEditing } from '@shared/components/RowFieldEditing';
import { ReservationActions } from '@reservations/components';
import { useUtils } from '@shared/hooks/useUtils';

export const ReservationDetails: React.FC<ReservationDetailsProps> = ({
  checkingReservations,
  checkIn,
  fullCheckIn,
  edit,
}) => {
  const [date, setDate] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const { formData, handleInputChange } = useFormData<ReservationEdit>({});
  const { id } = useParams();
  const { get } = useFetch();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const {
    reservation,
    checkingReservation,
    modifyingReservation,
    setReservation,
    setCheckingReservation,
    setModifyingReservation,
  } = useReservation();
  const { setTitle } = useTitle();
  const { clamp, formatDate, formatDateToString } = useUtils();

  useEffect(() => {
    setCheckingReservation(checkingReservations ?? false);
    setModifyingReservation(false);
    if (reservation) {
      updateValues(String(reservation.checkOut), String(reservation.totalPrice?.formattedValue));
      if (reservation.reservationId) setTitle(`Reserva #${reservation.reservationId}`);
    } else {
      get(`${API_URL}/reservations/${id}`)
        .then(({ data }: { data: Reservation }) => {
          setReservation(data);
          setTitle(`Reserva #${data.reservationId}`);
          updateValues(String(data.checkOut), String(data.totalPrice?.formattedValue));
        })
        .catch((error) => {
          navigate('/admin');
          showSnackbar(error.message, MessageType.ERROR);
        });
    }
  }, []);

  const capacity = useMemo(() => {
    if (!reservation) return 0;
    const { rooms } = reservation;
    return rooms?.reduce((prev, acc) => prev + (acc.roomType.capacity || 0), 0) ?? 0;
  }, [reservation]);

  const updateValues = (date: string, price: string) => {
    setDate(date);
    setPrice(price);
  };

  const handleChangeDays = (event: React.ChangeEvent<HTMLInputElement>) => {
    const days = Number(event.target.value) || 1;
    event.target.value = String(clamp(days, 1, 30));
    handleInputChange(event);
    changeDate(event, days);
    changePricePerDay(event, days);
  };

  const handleChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(event.target.value) || 1;
    event.target.value = String(clamp(count, 0, capacity));
    handleInputChange(event);
  };

  const changeDate = (event: React.ChangeEvent<HTMLInputElement>, days: number) => {
    const date = formatDate(reservation?.checkIn);
    date.setDate(date.getDate() + days);
    const formattedDate = formatDateToString(date);
    setDate(formattedDate);
    handleInputChange({
      ...event,
      target: {
        ...event.target,
        name: 'checkOut',
        value: formattedDate,
      },
    });
  };

  const changePricePerDay = (event: React.ChangeEvent<HTMLInputElement>, days: number) => {
    const pricePerDay = (reservation?.totalPrice?.value || 0) / (reservation?.nightsCount || 0);
    const newTotalPrice = pricePerDay * days;
    setPrice(`$${newTotalPrice.toLocaleString('es-CL')}`);
    handleInputChange({
      ...event,
      target: {
        ...event.target,
        name: 'totalPrice',
        value: String(newTotalPrice),
      },
    });
  };

  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Card className={`${styles.details} ${checkingReservation ? styles.checkin : ''}`}>
        <Card.Body className={styles.body}>
          <RowField description={'Fecha checkin:'}>{reservation?.checkIn}</RowField>
          <RowField description={'Fecha checkout:'}>{date}</RowField>
          <RowFieldEditing
            description={'Cantidad de noches:'}
            editing={modifyingReservation}
            onChange={handleChangeDays}
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
          <RowField description={'Valor total:'}>{price}</RowField>
          {reservation?.taxDocument && (
            <RowField description={'Documento tributario:'}>{reservation?.taxDocument}</RowField>
          )}
          <RowFieldEditing
            description={'Cantidad de pasajeros:'}
            editing={modifyingReservation}
            onChange={handleChangeCount}
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
          {edit && (
            <ReservationActions
              reservation={reservation}
              formData={formData}
              updateValues={updateValues}
            />
          )}
        </Card.Body>
        {checkingReservation && <CheckReservation checkIn={checkIn} fullCheckIn={fullCheckIn} />}
      </Card>
    </Container>
  );
};
