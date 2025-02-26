import { FC } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './ContactForm.module.scss';

const ContactForm: FC = () => {
  return (
    <section className={styles.contactSection}>
      <Container>
        <Row>
          <Col md={7}>
            <Form action="#" method="post" className="bg-white p-md-5 p-4 mb-5 border">
              <Row>
                <Col md={6} className="form-group">
                  <Form.Label className="text-black font-weight-bold" htmlFor="name">
                    Name
                  </Form.Label>
                  <Form.Control type="text" id="name" className="form-control" />
                </Col>
                <Col md={6} className="form-group">
                  <Form.Label className="text-black font-weight-bold" htmlFor="phone">
                    Phone
                  </Form.Label>
                  <Form.Control type="text" id="phone" className="form-control" />
                </Col>
              </Row>

              <Row>
                <Col md={12} className="form-group">
                  <Form.Label className="text-black font-weight-bold" htmlFor="email">
                    Email
                  </Form.Label>
                  <Form.Control type="email" id="email" className="form-control" />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="form-group">
                  <Form.Label className="text-black font-weight-bold" htmlFor="checkin_date">
                    Date Check In
                  </Form.Label>
                  <Form.Control type="text" id="checkin_date" className="form-control" />
                </Col>
                <Col md={6} className="form-group">
                  <Form.Label className="text-black font-weight-bold" htmlFor="checkout_date">
                    Date Check Out
                  </Form.Label>
                  <Form.Control type="text" id="checkout_date" className="form-control" />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="form-group">
                  <Form.Label htmlFor="adults" className="font-weight-bold text-black">
                    Adults
                  </Form.Label>
                  <div className="field-icon-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down"></span>
                    </div>
                    <Form.Control as="select" id="adults" className="form-control">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4+</option>
                    </Form.Control>
                  </div>
                </Col>
                <Col md={6} className="form-group">
                  <Form.Label htmlFor="children" className="font-weight-bold text-black">
                    Children
                  </Form.Label>
                  <div className="field-icon-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down"></span>
                    </div>
                    <Form.Control as="select" id="children" className="form-control">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4+</option>
                    </Form.Control>
                  </div>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={12} className="form-group">
                  <Form.Label className="text-black font-weight-bold" htmlFor="message">
                    Notes
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    className="form-control"
                    cols={30}
                    rows={8}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="form-group">
                  <Button
                    type="submit"
                    className="btn btn-primary text-white py-3 px-5 font-weight-bold"
                  >
                    Reserve Now
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={10} className="ml-auto contact-info">
                <p>
                  <span className="d-block">Address:</span>{' '}
                  <span className="text-black">Viana 619 - Viña del Mar</span>
                </p>
                <p>
                  <span className="d-block">Phone:</span>{' '}
                  <span className="text-black">32 2 710546</span>
                </p>
                <p>
                  <span className="d-block">Email:</span>{' '}
                  <span className="text-black">informaciones@hoteldevina.cl</span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
