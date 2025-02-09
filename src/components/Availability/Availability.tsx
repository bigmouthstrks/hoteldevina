import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { BsCalendar, BsChevronDown } from 'react-icons/bs';
import './Availability.css';

const AvailabilityForm: React.FC = () => {
  return (
    <section className="availability-section py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <div className="availability-form bg-white p-4 rounded shadow" data-aos="fade-up" data-aos-offset="-200">
              <Form>
                <Row className="g-3">
                  <Col md={6} lg={3}>
                    <Form.Label htmlFor="checkin_date" className="fw-bold">
                      Check In
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <BsCalendar />
                      </InputGroup.Text>
                      <Form.Control type="date" id="checkin_date" />
                    </InputGroup>
                  </Col>

                  <Col md={6} lg={3}>
                    <Form.Label htmlFor="checkout_date" className="fw-bold">
                      Check Out
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <BsCalendar />
                      </InputGroup.Text>
                      <Form.Control type="date" id="checkout_date" />
                    </InputGroup>
                  </Col>

                  <Col md={6} lg={3}>
                    <Row className="g-2">
                      <Col xs={6}>
                        <Form.Label htmlFor="adults" className="fw-bold">
                          Adults
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <BsChevronDown />
                          </InputGroup.Text>
                          <Form.Select id="adults">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                          </Form.Select>
                        </InputGroup>
                      </Col>

                      <Col xs={6}>
                        <Form.Label htmlFor="children" className="fw-bold">
                          Children
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <BsChevronDown />
                          </InputGroup.Text>
                          <Form.Select id="children">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                          </Form.Select>
                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6} lg={3} className="d-flex align-items-end">
                    <Button type="submit" variant="primary" className="w-100 py-2">
                      Check Availability
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

export default AvailabilityForm;