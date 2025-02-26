import { FC, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Room } from '@models/room';
import { ChildrenProps } from '@models/props';
import styles from './Rooms.module.scss';
import { useFetch } from '@shared/hooks';
import { RoomItem } from '../RoomItem';

const mockedRooms: Room[] = [
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

export const RoomsSection: FC<ChildrenProps> = ({ children }) => {
  const { get } = useFetch();
  const [rooms, setRooms] = useState<Room[] | null>(null);

  useEffect(() => {
    get('').then(() => {
      setRooms(mockedRooms);
    });
  }, []);

  return (
    <section className={styles.roomsSection}>
      <Container>
        <Row className="justify-content-center text-center mb-5">{children}</Row>
        <Row className="g-4">
          {rooms?.map((room, index) => {
            const delay = index * 100 > 500 ? 500 : index * 100;
            return <RoomItem room={room} delay={delay} key={room.id} />;
          })}
        </Row>
      </Container>
    </section>
  );
};
