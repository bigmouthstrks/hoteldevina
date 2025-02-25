import { FC, useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { BsCalendar, BsChevronDown } from 'react-icons/bs';
import styles from './Availability.module.scss';
import { Link } from 'react-router-dom';
import useFormData from '@hooks/useForm';

const AvailabilityForm: FC = () => {
  const [initialDate, setInitialDate] = useState<string>();
  const today = new Date().toISOString().split('T')[0];
  const { formData, handleInputChange, handleSelectChange } = useFormData({
    checkin_date: '',
    checkout_date: '',
    adults: '1',
  });
  const updateDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    const { value } = event.target;
    setInitialDate(value);
  };

  return (
    <section className={styles.availabilitySection}>
      <Container>
        <Row>
          <Col>
            <div
              className={`${styles.availabilityForm} p-4 rounded shadow`}
              data-aos="fade-up"
              data-aos-offset="-200"
            >
              <Form>
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
                            <BsChevronDown />
                          </InputGroup.Text>
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
                            <option value="9">9+</option>
                          </Form.Select>
                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} lg={3} className="d-flex align-items-end">
                    <Link
                      className={`${styles.btnPrimary} btn btn-secondary w-100 py-2`}
                      to={{
                        pathname: '/search',
                        search: `?checkin=${formData.checkin_date}&checkout=${formData.checkout_date}&adults=${formData.adults}`,
                      }}
                    >
                      Ver disponibilidad
                    </Link>
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

export default AvailabilityForm;
