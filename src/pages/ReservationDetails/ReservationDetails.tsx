import RoomItem from '@components/RoomItem/RoomItem';
import StatusInfo from '@components/StatusInfo/StatusInfo';
import { Reservation } from '@models/reservation';
import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ReservationDetails: FC = () => {
  const location = useLocation();
  const reservation: Reservation = location.state;
  console.log({ reservation, location });
  return (
    <Container>
      <Row>Fecha checkin: {reservation.checkInDate} </Row>
      <Row>Fecha checkout: {reservation.checkOutDate} </Row>
      <Row>Cantidad de noches: {reservation.numberOfNights} </Row>
      <Row>
        Estado: <StatusInfo status={reservation.status} />{' '}
      </Row>
      <Row>Valor total: {reservation.totalAmount} </Row>
      <Row>Forma de pago: {reservation.paymentMethod} </Row>
      <Row>Documento tributario: {reservation.taxDocument} </Row>
      <Row>Cantidad de pasajeros: {reservation.numberOfPassengers} </Row>
      <Row>
        habitaciones:
        {reservation.rooms?.map((room) => <RoomItem room={room} delay={100}></RoomItem>)}
      </Row>
    </Container>
  );
};

export default ReservationDetails;
