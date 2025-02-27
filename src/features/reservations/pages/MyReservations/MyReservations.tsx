import { FC, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './MyReservations.module.scss';
import { Reservation } from '@models/reservation';
import { StatusType } from '@models/consts';
import { MyReservationsProps } from '@models/props';
import { useFetch, useTitle } from '@shared/hooks';
import { ReservationItem } from '@reservations/components';
import { useAuth } from '@auth/hooks';

const mockReservations: Reservation[] = [
  {
    id: 1,
    checkIn: '13/01/2025',
    checkOut: '15/01/2025',
    nightsCount: 2,
    status: { type: StatusType.FINISHED, message: 'FINALIZADA' },
    totalPrice: 360000,
    paymentMethod: 'Tarjeta de Crédito',
    taxDocument: 'Boleta',
    passengerNumber: 3,
    rooms: [
      {
        roomId: 1,
        description: 'Habitación Doble',
        image: { src: 'images/habitacion doble .JPG', alt: 'uno jej' },
        price: '1000',
      },
      {
        roomId: 2,
        description: 'Suite Premium',
        image: { src: 'images/habitacion doble .JPG', alt: 'uno jej' },
        price: '1000',
      },
    ],
  },
  {
    id: 2,
    checkIn: '20/02/2025',
    checkOut: '25/02/2025',
    nightsCount: 5,
    status: { type: StatusType.IN_PROGRESS, message: 'PENDIENTE DE PAGO' },
    totalPrice: 750000,
    paymentMethod: 'Transferencia Bancaria',
    taxDocument: 'Factura',
    passengerNumber: 2,
    rooms: [
      {
        roomId: 3,
        description: 'Habitación Individual',
        image: { src: 'images/habitacion doble .JPG', alt: 'uno jej' },
        price: '1000',
      },
    ],
  },
  {
    id: 3,
    checkIn: '10/03/2025',
    checkOut: '12/03/2025',
    nightsCount: 2,
    status: { type: StatusType.CONFIRMED, message: 'CONFIRMADA' },
    totalPrice: 400000,
    paymentMethod: 'PayPal',
    taxDocument: 'Boleta',
    passengerNumber: 4,
    rooms: [
      {
        roomId: 4,
        description: 'Habitación Familiar',
        image: { src: '/images/baño.JPG', alt: 'baño 1' },
        price: '1100',
      },
      {
        roomId: 5,
        description: 'Habitación Triple',
        image: { src: '/images/baño.JPG', alt: 'baño 2' },
        price: '1000',
      },
    ],
  },
];

export const MyReservations: FC<MyReservationsProps> = ({ title, isAdminMode, filter }) => {
  const [reservations, setReservations] = useState<Reservation[] | null>(null);
  const { user } = useAuth();
  const { setTitle } = useTitle();
  const { get } = useFetch();

  useEffect(() => {
    setTitle(title);
    const url = isAdminMode ? `/reservations/status/${filter}` : `/reservations/status/${user?.id}`;
    get(url).then((data) => {
      setReservations(data);
      setReservations(mockReservations);
    });
  }, []);

  return (
    <Container>
      {!isAdminMode && (
        <Row className={styles.description}>
          💡 Presiona sobre una reserva para ver sus más detalles
        </Row>
      )}
      <Row className={styles.reservationList}>
        {reservations?.map((reservation, index) => {
          const delay = index * 100 > 500 ? 500 : index * 100;
          return <ReservationItem reservation={reservation} delay={delay} key={reservation.id} />;
        })}
      </Row>
    </Container>
  );
};
