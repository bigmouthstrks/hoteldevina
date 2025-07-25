import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Row, Col, InputGroup, Container } from 'react-bootstrap';
import styles from './CheckReservation.module.scss';
import { useBreakpoint, useFetch, useFormData, useSnackbar } from '@shared/hooks';
import { MultiSelect } from '@shared/components/MultiSelect/MultiSelect';
import { Reservation } from '@models/reservation';
import { API_URL, BillingType, MessageType } from '@models/consts';
import { useNavigate, useParams } from 'react-router';
import { useReservation } from '@reservations/hooks';
import { useAuth } from '@auth/hooks';
import { useUtils } from '@shared/hooks/useUtils';

export const CheckReservation: React.FC<{ checkIn?: boolean; fullCheckIn?: boolean }> = ({
  checkIn,
  fullCheckIn,
}: {
  checkIn?: boolean;
  fullCheckIn?: boolean;
}) => {
  const { reservation } = useReservation();
  const [selectedItems, setSelectedItems] = useState<string[]>(reservation?.passengerNames ?? []);
  const { showSnackbar } = useSnackbar();
  const { formatDate } = useUtils();
  const { id } = useParams();
  const { user } = useAuth();
  const { post, error } = useFetch();
  const { isUp } = useBreakpoint();
  const navigate = useNavigate();
  const {
    formData,
    handleInputChange: handleChange,
    handleSelectChange,
    handleRutChange,
  } = useFormData<Reservation>({
    documentNumber: reservation?.user?.documentNumber ?? '',
    documentType: 'rut',
    address: reservation?.address ?? '',
    city: reservation?.city ?? '',
    carPatent: reservation?.carPatent ?? '',
    arrivalTime: reservation?.arrivalTime ?? '',
    leaveTime: '',
    voucher: {
      companyName: reservation?.voucher?.companyName ?? '',
      businessActivity: reservation?.voucher?.businessActivity ?? '',
      documentNumber: reservation?.voucher?.documentNumber ?? '',
      documentType: reservation?.voucher?.documentType ?? '',
      city: reservation?.voucher?.city ?? '',
      address: reservation?.voucher?.address ?? '',
      type: reservation?.voucher?.type ?? BillingType.RECEIPT,
    },
    paymentMethodId: 0,
    passengerNames: [],
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const path = checkIn ? 'check-in' : 'check-out';
    post(`${API_URL}/reservations/${id}/${path}`, {
      ...reservation,
      ...formData,
      checkIn: formatDate(reservation?.checkIn),
      checkOut: formatDate(reservation?.checkOut),
      totalPrice: reservation?.totalPrice?.value,
      userId: user?.id,
    })
      .then((data) => {
        showSnackbar(data.message, MessageType.SUCCESS);
      })
      .catch(() => {
        showSnackbar('Ocurrió un problema con la reserva', MessageType.ERROR);
      })
      .finally(() => {
        navigate(`/admin`);
      });
  };

  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault();
    const path = checkIn ? 'check-in' : 'check-out';
    try {
      const commit = await post(`${API_URL}/reservations/commit`, {
        ...reservation,
        ...formData,
        checkIn: formatDate(reservation?.checkIn),
        checkOut: formatDate(reservation?.checkOut),
        userId: user?.id,
      });
      const { reservationId } = commit.data;
      await post(`${API_URL}/reservations/${reservationId}/confirm`);
      post(`${API_URL}/reservations/${reservationId}/${path}`, formData)
        .then((data) => {
          showSnackbar(data.message, MessageType.SUCCESS);
        })
        .catch(() => {
          showSnackbar('Ocurrió un problema con la reserva', MessageType.ERROR);
        })
        .finally(() => {
          navigate(`/admin`);
        });
    } catch {
      showSnackbar(error ?? '', MessageType.ERROR);
    }
  };

  return (
    <>
      {isUp('xl') ? <div className="vertical-line"></div> : <div className="line"></div>}
      <Card className={styles.card}>
        <Card.Body className={styles.body}>
          <Card.Title>Datos de {checkIn ? 'Check-in' : 'Check-Out'}</Card.Title>
          <Form
            className="d-flex flex-column gap-3"
            onSubmit={fullCheckIn ? handleCreate : handleSubmit}
          >
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
                      disabled={!checkIn && !fullCheckIn}
                    >
                      <option value="rut">Rut</option>
                      <option value="passport">Pasaporte</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Número de documento*</Form.Label>
                  <Form.Control
                    type="text"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleRutChange}
                    placeholder="Ej: 99.999.999-9"
                    required
                    disabled={!checkIn && !fullCheckIn}
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
                    disabled={!checkIn && !fullCheckIn}
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
                    disabled={!checkIn && !fullCheckIn}
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
                    disabled={!checkIn && !fullCheckIn}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  {checkIn ? (
                    <>
                      <Form.Label>Hora de llegada*</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="time"
                          name="arrivalTime"
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
                          name="leaveTime"
                          onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Card.Title>Datos para boleta/factura</Card.Title>
            <Row>
              <Container className={styles.voucherContainer}>
                <Row>
                  <Col lg={4} className="mb-2">
                    <p className={styles.documentType}>*Tipo de documento</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4} className="mb-2">
                    <Form.Check
                      inline
                      type="radio"
                      label="Boleta"
                      name="voucher.type"
                      value="boleta"
                      onChange={handleChange}
                      checked={formData.voucher?.type === BillingType.RECEIPT}
                      disabled={!checkIn && !fullCheckIn}
                    />
                  </Col>
                  <Col lg={4} className="mb-2">
                    <Form.Check
                      inline
                      type="radio"
                      label="Factura nacional"
                      name="voucher.type"
                      value="nacional"
                      onChange={handleChange}
                      checked={formData.voucher?.type === BillingType.NATIONAL}
                      disabled={!checkIn && !fullCheckIn}
                    />
                  </Col>
                  <Col lg={4} className="mb-2">
                    <Form.Check
                      inline
                      type="radio"
                      label="Factura exportación"
                      name="voucher.type"
                      value="exportacion"
                      onChange={handleChange}
                      checked={formData.voucher?.type === BillingType.EXPORTATION}
                      disabled={!checkIn && !fullCheckIn}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className="mb-2">
                    <Form.Group>
                      <Form.Label>*Nombre o razón social</Form.Label>
                      <Form.Control
                        type="text"
                        name="voucher.companyName"
                        value={formData.voucher?.companyName}
                        onChange={handleChange}
                        placeholder="Nombre de empresa"
                        disabled={!checkIn && !fullCheckIn}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-2">
                    <Form.Group>
                      <Form.Label>
                        {formData.voucher?.type === BillingType.NATIONAL
                          ? '*RUT'
                          : '*N° de documento'}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="voucher.documentNumber"
                        value={formData.voucher?.documentNumber}
                        onChange={handleRutChange}
                        placeholder="Ej: 99.999.999-9"
                        disabled={!checkIn && !fullCheckIn}
                      />
                    </Form.Group>
                  </Col>
                  {formData.voucher?.type !== BillingType.RECEIPT && (
                    <>
                      <Col lg={6} className="mb-2">
                        <Form.Group>
                          <Form.Label>*Dirección</Form.Label>
                          <Form.Control
                            type="text"
                            name="voucher.address"
                            value={formData.voucher?.address}
                            onChange={handleChange}
                            placeholder="Ej: Dirección #225"
                            disabled={!checkIn && !fullCheckIn}
                          />
                        </Form.Group>
                      </Col>
                      {formData.voucher?.type === BillingType.NATIONAL ? (
                        <>
                          <Col lg={6} className="mb-2">
                            <Form.Group>
                              <Form.Label>*Giro</Form.Label>
                              <Form.Control
                                type="text"
                                name="voucher.businessActivity"
                                value={formData.voucher?.businessActivity}
                                onChange={handleChange}
                                placeholder="Ej: Comercio"
                                disabled={!checkIn && !fullCheckIn}
                              />
                            </Form.Group>
                          </Col>
                        </>
                      ) : (
                        <>
                          <Col lg={6} className="mb-2">
                            <Form.Group>
                              <Form.Label>*País de origen</Form.Label>
                              <Form.Control
                                type="text"
                                name="voucher.country"
                                value={formData.voucher?.country}
                                onChange={handleChange}
                                placeholder="Ej: Chile"
                                disabled={!checkIn && !fullCheckIn}
                              />
                            </Form.Group>
                          </Col>
                        </>
                      )}
                    </>
                  )}
                </Row>
              </Container>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Recepcionista de turno*</Form.Label>
                  <Form.Control
                    type="text"
                    name={checkIn ? 'checkInWorker' : 'checkOutWorker'}
                    value={checkIn ? formData.checkInWorker : formData.checkOutWorker}
                    onChange={handleChange}
                    placeholder="Ingrese Recepcionista"
                    required
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="mb-2">
                <Form.Group>
                  <Form.Label>Método de pago</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="paymentMethodId"
                      onChange={handleSelectChange}
                      required
                      disabled={!checkIn && !fullCheckIn}
                    >
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
            <Form.Label htmlFor="checkPolitics" className="gap-1">
              <Form.Check
                className={styles.checkbox}
                type="checkbox"
                name="checkPolitics"
                checked={formData.checkPolitics}
                onChange={handleChange}
                required
              />
              Se informó al pasajero sobre las políticas de privacidad y seguridad del hotel y las
              acepta en su totalidad.*
            </Form.Label>
            <Row>
              <Col>
                <Button type="submit" variant="secondary">
                  Completar {checkIn ? 'Check-in' : 'Check-Out'}
                </Button>
              </Col>
              {/* <Col>{<Button className="w-100">Descargar boleta 🧾</Button>}</Col> */}
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
