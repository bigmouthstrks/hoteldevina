import { FC, useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { BsCalendar, BsPerson } from 'react-icons/bs';
import styles from './Availability.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFormData, useTitle } from '@shared/hooks';
import { AvailabilityProps } from '@models/props';

export const AvailabilityForm: FC<AvailabilityProps> = ({ isAdminMode, forGroups }) => {
  const navigate = useNavigate();
  const { setTitle } = useTitle();
  const [initialDate, setInitialDate] = useState<string>();
  const today = new Date().toISOString().split('T')[0];
  const { formData, handleInputChange, handleSelectChange } = useFormData({
    checkin_date: '',
    checkout_date: '',
    adults: '1',
  });

  useEffect(() => {
    if (isAdminMode) setTitle('Realizar una nueva reserva');
  }, [isAdminMode]);

  const updateDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    const { value } = event.target;
    setInitialDate(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let url = `/search?checkin=${formData.checkin_date}&checkout=${formData.checkout_date}&adults=${formData.adults}`;
    if (isAdminMode) {
      url = `/admin/reservations/simulate?checkin=${formData.checkin_date}&checkout=${formData.checkout_date}&adults=${formData.adults}`;
    }
    if (forGroups) {
      url = `/admin/reservations/groups-simulate?checkin=${formData.checkin_date}&checkout=${formData.checkout_date}&adults=${formData.adults}`;
    }
    navigate(url);
  };

  return (
    <section className={`${styles.availabilitySection} ${isAdminMode ? styles.admin : ''}`}>
      <Container>
        <Row>
          <Col>
            <div
              className={`${styles.availabilityForm} p-4 rounded shadow`}
              data-aos="fade-up"
              data-aos-offset="-200"
            >
              <h2 className="text-center">Cotice su estadía aquí</h2>
              <br />
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6} lg={3}>
                    <Form.Label htmlFor="checkin_date" className="fw-bold">
                      Fecha de llegada
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text className={styles.inputGroupText}>
                        <BsCalendar />
                      </InputGroup.Text>
                      <Form.Control
                        type="date"
                        id="checkin_date"
                        className={styles.formControl}
                        name="checkin_date"
                        onChange={updateDate}
                        min={today}
                        required
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6} lg={3}>
                    <Form.Label htmlFor="checkout_date" className="fw-bold">
                      Fecha de salida
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text className={styles.inputGroupText}>
                        <BsCalendar />
                      </InputGroup.Text>
                      <Form.Control
                        type="date"
                        id="checkout_date"
                        className={styles.formControl}
                        name="checkout_date"
                        onChange={handleInputChange}
                        min={initialDate}
                        required
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6} lg={3}>
                    <Row className="g-2">
                      <Col xs={12}>
                        <Form.Label htmlFor="adults" className="fw-bold">
                          Pasajeros
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text className={styles.inputGroupText}>
                            <BsPerson />
                          </InputGroup.Text>
                          {forGroups ? (
                            <Form.Control
                              id="adults"
                              className={styles.formSelect}
                              name="adults"
                              type="number"
                              max={50}
                              onChange={handleInputChange}
                            />
                          ) : (
                            <Form.Select
                              id="adults"
                              className={styles.formSelect}
                              name="adults"
                              onChange={handleSelectChange}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </Form.Select>
                          )}
                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} lg={3} className="d-flex align-items-end">
                    <Button
                      type="submit"
                      variant="secondary"
                      className={`${styles.btnPrimary} w-100 py-2`}
                    >
                      Ver disponibilidad
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
