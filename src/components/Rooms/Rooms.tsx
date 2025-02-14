import React, { ReactNode } from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './Rooms.module.scss';
import { RoomData } from 'models/room';
import RoomsList from '@components/RoomsList/RoomsList';

interface RoomProps {
  children?: ReactNode;
}

const RoomsSection: React.FC<RoomProps> = ({ children }: RoomProps) => {
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
        <Row className="justify-content-center text-center mb-5">{children}</Row>
        <Row className="g-4">
          <RoomsList rooms={rooms} />
        </Row>
      </Container>
    </section>
  );
};

export default RoomsSection;
