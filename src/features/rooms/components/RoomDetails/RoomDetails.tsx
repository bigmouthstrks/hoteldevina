import { Carousel, Col, Card, Container, Row, ListGroup, Badge } from 'react-bootstrap';
import { RoomType } from '@models/room'; // Ajusta la ruta según tu estructura de archivos
import styles from './RoomDetails.module.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importamos useParams

export const RoomDetailsSection: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtenemos el id de la URL
  const [room, setRoom] = useState<RoomType | null>(null);

  // Lista de habitaciones (normalmente obtendría estos datos desde una API)
  const rooms: RoomType[] = [
    {
      roomTypeId: 1,
      description: 'Habitación Doble',
      priceAsString: '$90.000',
      images: ['doble-1.webp', 'doble-2.webp', 'doble-3.webp'],
      features: [
        '🛏️ 2 camas individuales',
        '🚻 Baño privado',
        '🍸 Frigobar',
        '📺 TV',
        '🥐 Desayuno continental',
      ],
      capacity: 2,
    },
    {
      roomTypeId: 2,
      description: 'Habitación Triple',
      priceAsString: '$100.000',
      images: ['triple-1.webp', 'triple-2.webp'],
      features: [
        '🛏️ 3 camas individuales',
        '🚻 Baño privado',
        '🍸 Frigobar',
        '📺 TV',
        '🥐 Desayuno continental',
      ],
      capacity: 3,
    },
    {
      roomTypeId: 3,
      description: 'Habitación Matrimonial',
      priceAsString: '$90.000',
      images: ['suite-1.webp', 'suite-2.webp', 'suite-3.webp'],
      features: [
        '🛏️ 1 cama matrimonial',
        '🚻 Baño privado',
        '🍸 Frigobar',
        '📺 TV',
        '🥐 Desayuno continental',
      ],
      capacity: 2,
    },
  ];

  useEffect(() => {
    const roomData = rooms.find((room) => room.roomTypeId === Number(id));
    if (roomData) {
      setRoom(roomData);
    }
  }, [id]);

  if (!room) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.roomDetails}>
      <Container className="mt-5 mb-5">
        <Row className="mt-5">
          <Col md={12} className="mt-5">
            <h2 className="display-4 fw-bold">{room.description}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Carousel>
              {room.images && room.images.length > 0 ? (
                room.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={`/images/${image}`}
                      alt={`Imagen ${index + 1}`}
                    />
                  </Carousel.Item>
                ))
              ) : (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/placeholder.webp"
                    alt="Imagen no disponible"
                  />
                </Carousel.Item>
              )}
            </Carousel>
          </Col>

          <Col md={3}>
            <Card className="h-100 shadow-lg rounded">
              <Card.Body>
                <Card.Title as="h4" className="fw-bold mb-3">
                  {room.description}
                </Card.Title>

                <Card.Text className="mb-3">
                  <h5>Precio:</h5>
                  <Badge pill bg="success" className="fs-4">
                    {room.priceAsString} / por noche
                  </Badge>
                </Card.Text>

                {/* Capacidad */}
                <Card.Text>
                  <h5>Capacidad:</h5>
                  <p>
                    {room.capacity ?? 0} persona{(room.capacity ?? 0) > 1 ? 's' : ''}
                  </p>
                </Card.Text>

                {/* Lista de características */}
                <h5>Características:</h5>
                <ListGroup variant="flush">
                  {room.features?.map((feature, index) => (
                    <ListGroup.Item key={index} className="border-0 ps-0">
                      {feature}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
