import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import styles from './CheckReservation.module.scss';
import useFormData from '@shared/hooks/useForm';
import useBreakpoint from '@shared/hooks/useBreakpoints';

const CheckReservation: React.FC<{ checkIn?: boolean }> = ({ checkIn }: { checkIn?: boolean }) => {
  const { isUp } = useBreakpoint();
  const { formData, handleInputChange: handleChange } = useFormData({
    documentNumber: '',
    documentType: '',
    address: '',
    city: '',
    vehicle: '',
    arrival: '',
    departure: '',
    company: {
      name: '',
      number: '',
      address: '',
      turnover: '',
    },
    recepcionist: '',
    paymentMethod: '',
    checkPolitics: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { target } = event;
    console.log({ target });
  };

  return (
    <>
      {isUp('xl') ? <div className="vertical-line"></div> : <div className="line"></div>}
      <Card className={styles.card}>
        <Card.Body className={styles.body}>
          <Card.Title>Datos de {checkIn ? 'Check-in' : 'Check-Out'}</Card.Title>
          <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Tipo de documento de identidad</Form.Label>
                  <Form.Control
                    type="text"
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Número de documento</Form.Label>
                  <Form.Control
                    type="text"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Patente de vehículo</Form.Label>
                  <Form.Control
                    type="text"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Hora de llegada</Form.Label>
                  <Form.Control
                    type="text"
                    name="arrival"
                    value={formData.arrival}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Card.Title>Datos para factura (sólo si aplica)</Card.Title>
            <Row>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Razón social</Form.Label>
                  <Form.Control
                    type="text"
                    name="company.name"
                    value={formData.company.name}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>RUT</Form.Label>
                  <Form.Control
                    type="text"
                    name="company.number"
                    value={formData.company.number}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="company.address"
                    value={formData.company.address}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Giro</Form.Label>
                  <Form.Control
                    type="text"
                    name="company.turnover"
                    value={formData.company.turnover}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Recepcionista de turno</Form.Label>
                  <Form.Control
                    type="text"
                    name="recepcionist"
                    value={formData.recepcionist}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Método de pago</Form.Label>
                  <Form.Control
                    type="text"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    placeholder="Placeholder"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Check
              className={styles.checkbox}
              type="checkbox"
              name="checkPolitics"
              checked={formData.checkPolitics}
              onChange={handleChange}
              label="Se informó al pasajero sobre las políticas de privacidad y seguridad del hotel y las acepta en su totalidad."
            />
            <Row xs={2}>
              <Col>
                <Button type="submit" variant="secondary" className="w-100">
                  Completar {checkIn ? 'Check-in' : 'Check-Out'}
                </Button>
              </Col>
              <Col>
                <Button className="w-100">Descargar boleta 🧾</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default CheckReservation;
