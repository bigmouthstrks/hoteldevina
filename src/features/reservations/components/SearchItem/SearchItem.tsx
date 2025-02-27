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

export const SearchItem: FC<SearchItemProps> = ({ searchResult, isAdminMode }) => {
  const { user, isAuthenticated } = useAuth();
  const { setReservation } = useReservation();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { post } = useFetch();
  const handleCommit = async (reservation: Reservation) => {
    if (isAuthenticated) {
      if (isAdminMode) {
        setReservation(reservation);
      } else {
        const formateDate = (date?: string) => {
          const [day, month, year] = String(date).split('-');
          return new Date(`${year}-${month}-${day}`);
        };
        try {
          const response = await post(`${API_URL}/reservations/commit`, {
            userId: user?.id,
            checkIn: formateDate(searchResult?.checkIn),
            checkOut: formateDate(searchResult?.checkOut),
            passengerNumber: Number(searchResult?.passengerCount),
            totalPrice: searchResult?.totalPrice,
            roomIds: searchResult?.rooms?.map((room) => room.roomId),
          });
          showSnackbar(response.message, MessageType.SUCCESS);
        } catch {
          showSnackbar('Ocurrió un error al reservar', MessageType.ERROR);
        }
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
              {searchResult?.rooms?.map((room) => <SimpleRoomItem room={room} key={room.roomId} />)}
            </Row>
          </Col>
          <Col lg={5} className="d-flex flex-column gap-2 mt-5">
            <RowField description="Fecha Check-In:">{searchResult?.checkIn}</RowField>
            <RowField description="Fecha Check-Out:">{searchResult?.checkOut}</RowField>
            <RowField description="Cantidad de noches:">{searchResult?.nightsCount}</RowField>
            <RowField description="Cantidad de pasajeros:">{searchResult?.passengerCount}</RowField>
            <h3>Total: {searchResult?.totalPrice}</h3>
            <Button className={styles.button} onClick={() => handleCommit({ ...searchResult })}>
              Reservar Ahora
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
