import { FC, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './MyReservations.module.scss';
import { Reservation } from '@models/reservation';
import { API_URL } from '@models/consts';
import { MyReservationsProps } from '@models/props';
import { useFetch, useTitle } from '@shared/hooks';
import { ReservationItem } from '@reservations/components';
import { useAuth } from '@auth/hooks';

export const MyReservations: FC<MyReservationsProps> = ({ title, isAdminMode, filter }) => {
  const [reservations, setReservations] = useState<Reservation[] | null>(null);
  const { user } = useAuth();
  const { setTitle } = useTitle();
  const { get } = useFetch();

  useEffect(() => {
    setTitle(title);
    const url = isAdminMode ? `/reservations/status/${filter}` : `/reservations/status/${user?.id}`;
    get(API_URL + url).then(({ data }) => {
      setReservations(data);
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
          return (
            <ReservationItem
              reservation={reservation}
              delay={delay}
              key={reservation.reservationId}
            />
          );
        })}
      </Row>
    </Container>
  );
};
