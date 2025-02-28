import { FC, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Room } from '@models/room';
import { ChildrenProps } from '@models/props';
import styles from './Rooms.module.scss';
import { useFetch } from '@shared/hooks';
import { RoomItem } from '../RoomItem';

export const RoomsSection: FC<ChildrenProps> = ({ children }) => {
  const { get } = useFetch();
  const [rooms, setRooms] = useState<Room[] | null>(null);

  useEffect(() => {
    get('').then((data) => {
      setRooms(data);
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
