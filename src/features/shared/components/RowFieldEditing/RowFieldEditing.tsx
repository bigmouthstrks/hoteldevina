import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import styles from './RowFieldEditing.module.scss';
import { FC } from 'react';
import { RowFieldEditingProps } from '@models/props';

export const RowFieldEditing: FC<RowFieldEditingProps> = ({
  description,
  field,
  children,
  editing,
  min,
  max,
  onChange,
}) => {
  return children !== undefined ? (
    <Row>
      <Col className={styles.description}>{description}</Col>
      {editing ? (
        <Col>
          <InputGroup className="mb-3 input-sm">
            <Form.Control
              type="number"
              name={field}
              defaultValue={String(children)}
              onChange={onChange}
              min={min}
              max={max}
            />
          </InputGroup>
        </Col>
      ) : (
        <Col className={styles.value}>{children}</Col>
      )}
    </Row>
  ) : null;
};
