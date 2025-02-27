import { SearchItemProps } from '@models/props';
import { FC } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from './SearchItem.module.scss';
import { SimpleRoomItem } from '@rooms/components';
import { RowField } from '@shared/components';
import { useFetch, useSnackbar } from '@shared/hooks';
import { useAuth } from '@auth/hooks';
import { MessageType } from '@models/consts';

export const SearchItem: FC<SearchItemProps> = ({ searchResult }) => {
  const { user } = useAuth();
  const { showSnackbar } = useSnackbar();
  const { post } = useFetch();
  const handleCommit = () => {
    post(`/reservations/commit`, {
      userId: user?.id,
      checkIn: searchResult?.checkIn,
      checkOut: searchResult?.checkOut,
      passangerNumber: searchResult?.passengerNumber,
      totalPrice: searchResult?.totalPrice,
      roomIds: searchResult?.rooms?.map((room) => room.roomId),
    }).then((data) => {
      showSnackbar(data.message, MessageType.SUCCESS);
    });
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
            <RowField description="Cantidad de pasajeros:">
              {searchResult?.passengerNumber}
            </RowField>
            <h3>Total: ${searchResult?.totalPrice}</h3>
            <Button className={styles.button} onClick={handleCommit}>
              Reservar Ahora
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
