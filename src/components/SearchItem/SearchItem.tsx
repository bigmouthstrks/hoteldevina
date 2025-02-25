import SimpleRoomItem from '@components/SimpleRoomItem/SimpleRoomItem';
import { SearchItemProps } from '@models/props';
import { FC } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import RowField from '@components/RowField/RowField';
import styles from './SearchItem.module.scss';

const SearchItem: FC<SearchItemProps> = ({ searchResult }: SearchItemProps) => {
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.body}>
        <Row className="justify-content-between">
          <Col lg={6}>
            <h3 className={styles.title}>Habitaciones:</h3>
            <Row>
              {searchResult?.rooms?.map((room) => <SimpleRoomItem room={room} key={room.id} />)}
            </Row>
          </Col>
          <Col lg={5} className="d-flex flex-column gap-2 mt-5">
            <RowField description="Fecha Check-In:">{searchResult?.checkInDate}</RowField>
            <RowField description="Fecha Check-Out:">{searchResult?.checkOutDate}</RowField>
            <RowField description="Cantidad de noches:">{searchResult?.numberOfNights}</RowField>
            <RowField description="Cantidad de pasajeros:">
              {searchResult?.numberOfPassengers}
            </RowField>
            <h3>Total: ${searchResult?.totalAmount}</h3>
            <Button className={styles.button}>Reservar Ahora</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SearchItem;
