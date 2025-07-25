import { FC, useEffect, useState } from 'react';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';
import styles from './MyReservations.module.scss';
import { Reservation } from '@models/reservation';
import { API_URL, MessageType } from '@models/consts';
import { MyReservationsProps } from '@models/props';
import { useFetch, useSnackbar, useTitle } from '@shared/hooks';
import { ReservationItem } from '@reservations/components';
import { useAuth } from '@auth/hooks';
import { useNavigate } from 'react-router';

export const MyReservations: FC<MyReservationsProps> = ({ title, isAdminMode, filter }) => {
  const [reservations, setReservations] = useState<Reservation[] | null>(null);
  const [filteredReservations, setFilteredReservations] = useState<Reservation[] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const { user, loading } = useAuth();
  const { setTitle } = useTitle();
  const { get } = useFetch();

  useEffect(() => {
    if (loading) return;
    setTitle(title);
    let url = '/reservations';
    if (filter) {
      url += `/status/${filter}`;
    }
    if (!isAdminMode) {
      url += `/user/${user?.id}`;
    }
    get(API_URL + url)
      .then(({ data }: { data: Reservation[] }) => {
        if (data.length === 0) {
          if (isAdminMode) {
            showSnackbar('No existen reservas para realizar checkout!', MessageType.INFO);
            navigate('/admin');
          } else {
            showSnackbar('No existen reservas para registradas a su nombre', MessageType.INFO);
            navigate('/');
          }
          return;
        }
        setReservations(data);
        setFilteredReservations(data);
      })
      .catch(() => {
        setReservations([]);
        showSnackbar('Ocurrió un error al cargar las reservas', MessageType.ERROR);
      });
  }, [loading]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredReservations(reservations);
    } else {
      const filtered = reservations?.filter(({ user }) => {
        const fullName = `${user?.firstName} ${user?.lastName}`;
        return fullName?.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredReservations(filtered ?? []);
    }
  };

  return (
    <Container>
      {!isAdminMode && (
        <Row className={styles.description}>
          💡 Presiona sobre una reserva para ver sus más detalles
        </Row>
      )}
      <Row className={styles.description}>
        <div className="mb-6">
          <InputGroup>
            <Form.Control
              type="text"
              name="arrivalTime"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar por nombre de usuario..."
            />
          </InputGroup>
        </div>
      </Row>
      <Row className={styles.reservationList}>
        {filteredReservations?.map((reservation, index) => {
          const delay = index * 100 > 500 ? 500 : index * 50;
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
