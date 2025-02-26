import { Col, Row } from 'react-bootstrap';
import styles from './RowField.module.scss';
import { ReactNode } from 'react';

const RowField = ({ description, children }: { description: string; children: ReactNode }) => {
  return (
    <Row>
      <Col className={styles.description}>{description}</Col>
      <Col className={styles.value}>{children}</Col>
    </Row>
  );
};

export default RowField;
