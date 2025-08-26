import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import styles from './AdminOptions.module.scss';
import { useReservation } from '@reservations/hooks';

export const AdminOptions = () => {
  const { setReservation } = useReservation();
  return (
    <Container fluid className="m-auto">
      <Row xs={3} className={styles.section}>
        <Link to="/admin" className="btn btn-primary" onClick={() => setReservation(null)}>
          Menú
        </Link>
        <Link
          to="/admin/reservations/create"
          className="btn btn-primary"
          onClick={() => setReservation(null)}
        >
          Reservas
        </Link>
        {/*
        <Link to="/admin/reservations/groups" className="btn btn-primary">
          Reservar grupo
        </Link>
        */}
        <Link to="/admin/reservations/update" className="btn btn-primary">
          Actualizar reserva
        </Link>
      </Row>
    </Container>
  );
};
