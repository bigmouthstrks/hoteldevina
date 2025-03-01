import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RoomType } from '@models/room';
import { ChildrenProps } from '@models/props';
import styles from './Rooms.module.scss';
import { RoomItem } from '../RoomItem';

export const RoomsSection: FC<ChildrenProps> = () => {
  const rooms: RoomType[] = [
    {
      roomTypeId: 1,
      description: 'Habitación Doble',
      priceAsString: '$90.000',
      images: ['doble.webp'],
      features: [
        '🛏️ 2 camas individuales',
        '🚻 Baño privado',
        '🍸 Frigobar',
        '📺 TV',
        '🥐 Desayuno continental',
      ],
    },
    {
      roomTypeId: 2,
      description: 'Habitación Triple',
      priceAsString: '$100.000',
      images: ['triple.webp'],
      features: [
        '🛏️ 3 camas individuales',
        '🚻 Baño privado',
        '🍸 Frigobar',
        '📺 TV',
        '🥐 Desayuno continental',
      ],
    },
    {
      roomTypeId: 3,
      description: 'Habitación Matrimonial',
      priceAsString: '$90.000',
      images: ['matrimonial.webp'],
      features: [
        '🛏️ 1 cama matrimonial',
        '🚻 Baño privado',
        '🍸 Frigobar',
        '📺 TV',
        '🥐 Desayuno continental',
      ],
    },
  ];

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
