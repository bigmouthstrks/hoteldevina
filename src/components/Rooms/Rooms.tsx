import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Rooms.css';

const RoomsSection: React.FC = () => (
    <section className="rooms-section py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8} data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Rooms & Suites</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6} lg={4} data-aos="fade-up">
            <Card as="a" href="#" className="text-decoration-none room">
              <figure className="img-wrap overflow-hidden rounded">
                <Image src="./images/img_1.jpg" alt="Single Room" fluid />
              </figure>
              <Card.Body className="text-center room-info">
                <Card.Title as="h2" className="h4 fw-bold">
                  Single Room
                </Card.Title>
                <Card.Text className="text-uppercase letter-spacing-1">
                  90$ / per night
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
            <Card as="a" href="#" className="text-decoration-none room">
              <figure className="img-wrap overflow-hidden rounded">
                <Image src="./images/img_2.jpg" alt="Family Room" fluid />
              </figure>
              <Card.Body className="text-center room-info">
                <Card.Title as="h2" className="h4 fw-bold">
                  Family Room
                </Card.Title>
                <Card.Text className="text-uppercase letter-spacing-1">
                  120$ / per night
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="300">
            <Card as="a" href="#" className="text-decoration-none room">
              <figure className="img-wrap overflow-hidden rounded">
                <Image src="./images/img_3.jpg" alt="Presidential Room" fluid />
              </figure>
              <Card.Body className="text-center room-info">
                <Card.Title as="h2" className="h4 fw-bold">
                  Presidential Room
                </Card.Title>
                <Card.Text className="text-uppercase letter-spacing-1">
                  250$ / per night
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
);

export default RoomsSection;