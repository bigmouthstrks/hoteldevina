import { Col, Row } from 'react-bootstrap';
import styles from './RowField.module.scss';
import { FC } from 'react';
import { RowFieldProps } from '@models/props';

export const RowField: FC<RowFieldProps> = ({ description, children }) => {
  return children !== undefined ? (
    <Row>
      <Col className={styles.description}>{description}</Col>
      <Col className={styles.value}>{children}</Col>
    </Row>
  ) : null;
};
