import { MenuProps } from '@models/props';
import { FC } from 'react';
import { Card, Col } from 'react-bootstrap';
import styles from './MenuCard.module.scss';

const MenuCard: FC<MenuProps> = ({ header, body, children }) => {
  return (
    <Col xs={10} lg={5} xl={6} className="d-flex justify-content-center mb-xl-5">
      <Card className={styles.card}>
        <Card.Header className={styles.header}>{header}</Card.Header>
        <Card.Body className={styles.body}>{body}</Card.Body>
        <Card.Footer>{children}</Card.Footer>
      </Card>
    </Col>
  );
};

export default MenuCard;
