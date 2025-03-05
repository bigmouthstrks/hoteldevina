import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { BsCalendar, BsPerson } from 'react-icons/bs';
import styles from './Availability.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFetch, useFormData, useTitle } from '@shared/hooks';
import { AvailabilityProps } from '@models/props';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth } from '@auth/hooks';
import { API_URL } from '@models/consts';
import { Reservation } from '@models/reservation';
import { useUtils } from '@shared/hooks/useUtils';

export const AvailabilityForm: FC<AvailabilityProps> = ({ isAdminMode, forGroups }) => {
  const navigate = useNavigate();
  const [blockedRanges, setBlockedRanges] = useState<{ start: Date; end: Date }[]>();
  const { setTitle } = useTitle();
  const { formatDate } = useUtils();
  const { get } = useFetch();
  const { user, loading } = useAuth();
  const { formData, handleDateChange, handleInputChange, handleSelectChange } = useFormData({
    checkin_date: null,
    checkout_date: null,
    adults: '1',
  });

  useEffect(() => {
    if (loading) return;
    if (isAdminMode) setTitle('Realizar una nueva reserva');
    const savedDates = localStorage.getItem('blockedDates');
    if (savedDates) {
      const blockedDates = JSON.parse(savedDates).map((dates: { start: string; end: string }) => {
        return {
          start: new Date(dates.start),
          end: new Date(dates.end),
        };
      });
      setBlockedRanges(blockedDates);
      return;
    }
    get(`${API_URL}/reservations/user/${user?.id}`).then(({ data }) => {
      const blockedDates = data.map((reservation: Reservation) => {
        return {
          start: formatDate(reservation.checkIn),
          end: formatDate(reservation.checkOut),
        };
      });
      localStorage.setItem('blockedDates', JSON.stringify(blockedDates));
      setBlockedRanges(blockedDates);
    });
  }, [loading]);

  const isDateBlocked = useCallback(
    (date: Date) => {
      return !(blockedRanges?.some((range) => date >= range.start && date <= range.end) ?? false);
    },
    [blockedRanges]
  );

  const getDateLimit = useMemo(() => {
    const date = formData.checkin_date ? new Date(formData.checkin_date) : new Date();
    const tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);
    return tomorrow;
  }, [formData.checkin_date]);

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
                      <DatePicker
                        id="checkin_date"
                        name="checkin_date"
                        className={`${styles.formControl} form-control`}
                        selected={formData.checkin_date}
                        onChange={(date) => handleDateChange(date, 'checkin_date')}
                        placeholderText="dd-MM-yyyy"
                        dateFormat="dd-MM-yyyy"
                        filterDate={isDateBlocked}
                        minDate={new Date()}
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
                      <DatePicker
                        id="checkout_date"
                        name="checkout_date"
                        className={`${styles.formControl} form-control`}
                        selected={formData.checkout_date}
                        onChange={(date) => handleDateChange(date, 'checkout_date')}
                        placeholderText="dd-MM-yyyy"
                        dateFormat="dd-MM-yyyy"
                        filterDate={isDateBlocked}
                        minDate={getDateLimit}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6} lg={3}>
                    <Row className="g-2">
                      <Col xs={12}>
                        <Form.Label htmlFor="adults" className="fw-bold">
                          Huéspedes
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
                              max={70}
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
