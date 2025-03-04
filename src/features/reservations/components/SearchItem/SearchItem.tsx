import { SearchItemProps } from '@models/props';
import { FC } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from './SearchItem.module.scss';
import { SimpleRoomItem } from '@rooms/components';
import { RowField } from '@shared/components';
import { useFetch, useSnackbar } from '@shared/hooks';
import { useAuth } from '@auth/hooks';
import { API_URL, MessageType } from '@models/consts';
import { useNavigate } from 'react-router-dom';
import { useReservation } from '@reservations/hooks';
import { Reservation } from '@models/reservation';
import { useModal } from '@shared/hooks/useModal';
import { useDate } from '@shared/hooks/useDate';

export const SearchItem: FC<SearchItemProps> = ({ searchResult, isAdminMode }) => {
  const { user, isAuthenticated } = useAuth();
  const { setReservation } = useReservation();
  const { handleShow } = useModal();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { post } = useFetch();
  const { formatDate } = useDate();
  const handleCommit = async (reservation: Reservation) => {
    if (isAuthenticated) {
      if (isAdminMode) {
        setReservation(reservation);
      } else {
        const confirm = await handleShow(
          'Creando reserva',
          'Estás seguro que quieres crear está reserva?'
        );
        if (!confirm) return;
        post(`${API_URL}/reservations/commit`, {
          userId: user?.id,
          checkIn: formatDate(searchResult?.checkIn),
          checkOut: formatDate(searchResult?.checkOut),
          passengerCount: Number(searchResult?.passengerCount),
          totalPrice: searchResult?.totalPrice?.value,
          roomIds: searchResult?.rooms?.map((room) => room.roomId),
        })
          .then((response) => showSnackbar(response.message, MessageType.SUCCESS))
          .catch(() => showSnackbar('Ocurrió un error al reservar', MessageType.ERROR))
          .finally(() => navigate('/my-reservations'));
      }
    } else {
      navigate('/login');
      showSnackbar('Ingresa sesión para continuar la reserva', MessageType.INFO);
    }
  };
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.body}>
        <Row className="justify-content-between">
          <Col lg={6}>
            <h3 className={styles.title}>Habitaciones:</h3>
            <Row>
              {searchResult?.rooms?.map((room, index) => (
                <SimpleRoomItem
                  room={room}
                  key={room.roomId}
                  smallSize={Number(searchResult.rooms?.length) > 6 || Number(index) >= 2}
                />
              ))}
            </Row>
          </Col>
          <Col lg={5} className="d-flex flex-column gap-2 mt-5">
            <RowField description="Fecha Check-In:">{searchResult?.checkIn}</RowField>
            <RowField description="Fecha Check-Out:">{searchResult?.checkOut}</RowField>
            <RowField description="Cantidad de noches:">{searchResult?.nightsCount}</RowField>
            <RowField description="Cantidad de pasajeros:">{searchResult?.passengerCount}</RowField>
            <h3>Total: {searchResult?.totalPrice?.formattedValue}</h3>
            <Button className={styles.button} onClick={() => handleCommit({ ...searchResult })}>
              Reservar Ahora
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
