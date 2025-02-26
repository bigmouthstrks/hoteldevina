import { MenuProps } from '@models/props';
import { FC } from 'react';
import { Card, Col } from 'react-bootstrap';
import styles from './MenuCard.module.scss';

const MenuCard: FC<MenuProps> = ({ header, body, children }: MenuProps) => {
  return (
    <Col xs={10} lg={5} className="d-flex justify-content-center">
      <Card className={styles.card}>
        <Card.Header>{header}</Card.Header>
        <Card.Body>{body}</Card.Body>
        <Card.Footer>{children}</Card.Footer>
      </Card>
    </Col>
  );
};

export default MenuCard;
