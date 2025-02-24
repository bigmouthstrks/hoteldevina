import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './Rooms.module.scss';
import { RoomData } from 'models/room';
import RoomsList from '@components/RoomsList/RoomsList';
import { ChildrenProps } from '@models/props';

const RoomsSection: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const rooms: RoomData[] = [
    {
      id: 1,
      image: { src: './images/matrimonial.JPG', alt: 'Habitación matrimonial' },
      description: 'Habitación matrimonial',
      price: '$90.000',
    },
    {
      id: 2,
      image: { src: './images/doble.JPG', alt: 'Habitación doble' },
      description: 'Habitación doble',
      price: '$90.000',
    },
    {
      id: 3,
      image: { src: './images/triple.JPG', alt: 'Habitación triple' },
      description: 'Habitación triple',
      price: '$100.000',
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
