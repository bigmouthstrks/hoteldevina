import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import styles from './CheckReservation.module.scss';
import { useBreakpoint, useFetch, useFormData, useSnackbar } from '@shared/hooks';
import { MultiSelect } from '@shared/components/MultiSelect/MultiSelect';
import { CheckIn } from '@models/reservation';
import { API_URL, MessageType } from '@models/consts';
import { useParams } from 'react-router-dom';
import { useReservation } from '@reservations/hooks';

export const CheckReservation: React.FC<{ checkIn?: boolean }> = ({
  checkIn,
}: {
  checkIn?: boolean;
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { reservation } = useReservation();
  const { showSnackbar } = useSnackbar();
  const { id } = useParams();
  const { post } = useFetch();
  const { isUp } = useBreakpoint();
  const {
    formData,
    handleInputChange: handleChange,
    handleSelectChange,
    handleRutChange,
  } = useFormData<CheckIn>({
    documentNumber: '',
    documentType: '1',
    address: '',
    city: '',
    carPatent: '',
    arrivalTime: '',
    leaveTime: '',
    voucher: {
      companyName: '',
      businessActivity: '',
      documentNumber: '',
      documentType: '',
      city: '',
      address: '',
    },
    checkInWorker: '',
    paymentMethodId: 0,
    passengerNames: '',
    roomIds: reservation?.rooms?.map((room) => room.roomId),
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const event: any = {
      target: {
        name: 'passengerNames',
        value: selectedItems,
      },
    };
    handleChange(event);
  }, [selectedItems]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ formData, reservation });
    const path = checkIn ? 'check-in' : 'check-out';
    post(`${API_URL}/reservations/${path}/${id}`, formData)
      .then((data) => {
        showSnackbar(data.message, MessageType.SUCCESS);
      })
      .catch(() => {
        showSnackbar('Ocurrió un problema con la reserva', MessageType.ERROR);
      });
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
                  <InputGroup>
                    <Form.Select
                      name="documentType"
                      className={styles.formSelect}
                      onChange={handleSelectChange}
                      required
                    >
                      <option value="1">Rut</option>
                      <option value="2">Pasaporte</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Número de documento</Form.Label>
                  <Form.Control
                    type="text"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleRutChange}
                    placeholder="Ej: 99.999.999-9"
                    required
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
                    placeholder="Ej: Dirección #225"
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
                    placeholder="Ej: Santiago"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Patente de vehículo</Form.Label>
                  <Form.Control
                    type="text"
                    name="carPatent"
                    value={formData.carPatent}
                    onChange={handleChange}
                    placeholder="Ej: AB-CD-EF"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  {checkIn ? (
                    <>
                      <Form.Label>Hora de llegada</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="time"
                          name="leaveTime"
                          onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </>
                  ) : (
                    <>
                      <Form.Label>Hora de salida</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="time"
                          name="arrivalTime"
                          onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </>
                  )}
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
                    name="voucher.companyName"
                    value={formData.voucher?.companyName}
                    onChange={handleChange}
                    placeholder="Nombre de empresa"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>RUT</Form.Label>
                  <Form.Control
                    type="text"
                    name="voucher.documentNumber"
                    value={formData.voucher?.documentNumber}
                    onChange={handleRutChange}
                    placeholder="Ej: 99.999.999-9"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="voucher.address"
                    value={formData.voucher?.address}
                    onChange={handleChange}
                    placeholder="Ej: Dirección #225"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Giro</Form.Label>
                  <Form.Control
                    type="text"
                    name="voucher.businessActivity"
                    value={formData.voucher?.businessActivity}
                    onChange={handleChange}
                    placeholder="Ej: Comercio"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Recepcionista de turno</Form.Label>
                  <Form.Control
                    type="text"
                    name={checkIn ? 'checkInWorker' : 'checkOutWorker'}
                    value={checkIn ? formData.checkInWorker : formData.checkOutWorker}
                    onChange={handleChange}
                    placeholder="Ingrese Recepcionista"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Método de pago</Form.Label>
                  <InputGroup>
                    <Form.Select name="paymentMethodId" onChange={handleSelectChange} required>
                      <option value="1">Tarjeta de crédito</option>
                      <option value="2">Paypal</option>
                      <option value="3">Transferencia</option>
                      <option value="4">Efectivo</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <MultiSelect items={selectedItems} onChange={setSelectedItems} />
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
