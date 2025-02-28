import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './AdminOptions.module.scss';

export const AdminOptions = () => {
  return (
    <Container fluid className="m-auto">
      <Row xs={3} className={styles.section}>
        <Link to="/admin/reservations/create" className="btn btn-primary">
          Realizar nueva reserva
        </Link>

        <Link to="/admin/reservations/groups" className="btn btn-primary">
          Reservar grupo
        </Link>
        <Link to="/admin/reservations/update" className="btn btn-primary">
          Actualizar reserva
        </Link>
      </Row>
    </Container>
  );
};
