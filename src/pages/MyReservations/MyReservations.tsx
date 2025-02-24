import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReservationItem from '@components/ReservationItem/ReservationItem';
import styles from './MyReservations.module.scss';
import { Reservation } from '@models/reservation';

const MyReservations: React.FC = () => {
  const reservations: Reservation[] = [
    {
      id: 1,
      checkInDate: '13/01/2025',
      checkOutDate: '15/01/2025',
      numberOfNights: 2,
      status: { type: 'finished', message: 'FINALIZADA' },
      totalAmount: 360000,
      paymentMethod: 'Tarjeta de Crédito',
      taxDocument: 'Boleta',
      numberOfPassengers: 3,
      rooms: [
        {
          id: 1,
          description: 'Habitación Doble',
          image: { src: 'src/assets/images/img_1.jpg', alt: 'uno jej' },
          price: '1000',
        },
        {
          id: 2,
          description: 'Suite Premium',
          image: { src: 'src/assets/images/img_1.jpg', alt: 'uno jej' },
          price: '1000',
        },
      ],
    },
    {
      id: 2,
      checkInDate: '20/02/2025',
      checkOutDate: '25/02/2025',
      numberOfNights: 5,
      status: { type: 'pending', message: 'PENDIENTE DE PAGO' },
      totalAmount: 750000,
      paymentMethod: 'Transferencia Bancaria',
      taxDocument: 'Factura',
      numberOfPassengers: 2,
      rooms: [
        {
          id: 3,
          description: 'Habitación Individual',
          image: { src: 'src/assets/images/img_1.jpg', alt: 'uno jej' },
          price: '1000',
        },
      ],
    },
    {
      id: 3,
      checkInDate: '10/03/2025',
      checkOutDate: '12/03/2025',
      numberOfNights: 2,
      status: { type: 'confirmed', message: 'CONFIRMADA' },
      totalAmount: 400000,
      paymentMethod: 'PayPal',
      taxDocument: 'Boleta',
      numberOfPassengers: 4,
      rooms: [
        {
          id: 4,
          description: 'Habitación Familiar',
          image: { src: 'src/assets/images/img_1.jpg', alt: 'uno jej' },
          price: '1000',
        },
        {
          id: 5,
          description: 'Habitación Triple',
          image: { src: 'src/assets/images/img_1.jpg', alt: 'uno jej' },
          price: '1000',
        },
      ],
    },
  ];
  return (
    <Container>
      <Row className={styles.description}>
        💡 Presiona sobre una reserva para ver sus más detalles
      </Row>
      <Row className={styles.reservationList}>
        {reservations.map((reservation, index) => {
          const delay = index * 100 > 500 ? 500 : index * 100;
          return <ReservationItem reservation={reservation} delay={delay} />;
        })}
      </Row>
    </Container>
  );
};

export default MyReservations;
