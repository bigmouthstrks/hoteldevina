import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Rooms.module.scss';
import { RoomData } from 'models/room';
import RoomsList from '@components/RoomsList/RoomsList';

const RoomsSection: React.FC = () => {
  const rooms: RoomData[] = [
    {
      id: 1,
      image: { src: './images/img_1.jpg', alt: 'Single Room' },
      description: 'Single Room',
      price: '90$',
    },
    {
      id: 2,
      image: { src: './images/img_2.jpg', alt: 'Family Room' },
      description: 'Family Room',
      price: '120$',
    },
    {
      id: 3,
      image: { src: './images/img_3.jpg', alt: 'Presidential Room' },
      description: 'Presidential Room',
      price: '250$',
    },
  ];
  return (
    <section className={styles.roomsSection}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8} data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Rooms & Suites</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          <RoomsList rooms={rooms} />
        </Row>
      </Container>
    </section>
  );
};

export default RoomsSection;
