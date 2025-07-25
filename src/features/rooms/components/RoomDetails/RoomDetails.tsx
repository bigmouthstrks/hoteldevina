import { Carousel, Col, Card, Container, Row, ListGroup, Badge } from 'react-bootstrap';

import styles from './RoomDetails.module.scss';
import { FC, useEffect } from 'react';
import { useRoom } from '@rooms/hooks';
import { useParams } from 'react-router';

interface RoomDetailsSectionProps {
  id: string;
}

export const RoomDetailsSection: FC<RoomDetailsSectionProps> = () => {
  const { id } = useParams();
  const { room, rooms, changeRoom, loading } = useRoom();

  useEffect(() => {
    const roomData = rooms.find((room) => room.roomTypeId === Number(id));
    if (roomData) {
      changeRoom(roomData);
    }
  }, [loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.roomDetails}>
      <Container className="mt-5 mb-5">
        <Row className="mt-5">
          <Col md={12} className="mt-5">
            <h2 className="display-4 fw-bold">{room?.description}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Carousel>
              {room?.images && room?.images.length > 0 ? (
                room?.images.map((image, index) => (
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
                  {room?.description}
                </Card.Title>

                <h5>Precio:</h5>
                <Card.Text className="mb-3">
                  <Badge pill bg="success" className="fs-4">
                    {room?.priceAsString} / por noche
                  </Badge>
                </Card.Text>

                {/* Capacidad */}
                <h5>Capacidad:</h5>
                <Card.Text>
                  {room?.capacity ?? 0} persona{(room?.capacity ?? 0) > 1 ? 's' : ''}
                </Card.Text>

                {/* Lista de características */}
                <ListGroup variant="flush">
                  <h5>Características:</h5>
                  {room?.features?.map((feature, index) => (
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
