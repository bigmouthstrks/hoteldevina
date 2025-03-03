import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ChildrenProps } from '@models/props';
import styles from './Rooms.module.scss';
import { RoomItem } from '../RoomItem';
import { useRoom } from '@rooms/hooks';

export const RoomsSection: FC<ChildrenProps> = () => {
  const { rooms } = useRoom();

  return (
    <section className={styles.roomsSection}>
      <Container>
        <Col className="text-justify" md={12} data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-4">Nuestras habitaciones</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Con una decoración clásica y moderna, nuestras habitaciones son el lugar perfecto para
            relajarte después de un día explorando la ciudad. Descubre el descanso que te mereces,
            con todas las comodidades pensadas para tu bienestar, entre nuestras 30 habitaciones.
            ¡Elige entre dobles, triples y suites, y encuentra la mejor opción para tu estadía!
          </p>
          <hr />
          <Row>
            {rooms?.map((room, index) => (
              <RoomItem key={room.roomTypeId} room={room} delay={index * 100} />
            ))}
          </Row>
        </Col>
      </Container>
    </section>
  );
};
