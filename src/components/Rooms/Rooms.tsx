import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import styles from './Rooms.module.scss';

const RoomsSection: React.FC = () => (
  <section className={styles.roomsSection}>
    <Container>
      <Row className="justify-content-center text-center mb-5">
        <Col md={8} data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-4">Rooms & Suites</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={6} lg={4} data-aos="fade-up">
          <Card as="a" href="#" className={styles.room}>
            <figure className={styles.imgWrap}>
              <Image src="./images/img_1.jpg" alt="Single Room" fluid />
            </figure>
            <Card.Body className={styles.roomInfo}>
              <Card.Title as="h2" className="h4 fw-bold">
                Single Room
              </Card.Title>
              <Card.Text className={styles.letterSpacing1}>
                90$ / per night
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
          <Card as="a" href="#" className={styles.room}>
            <figure className={styles.imgWrap}>
              <Image src="./images/img_2.jpg" alt="Family Room" fluid />
            </figure>
            <Card.Body className={styles.roomInfo}>
              <Card.Title as="h2" className="h4 fw-bold">
                Family Room
              </Card.Title>
              <Card.Text className={styles.letterSpacing1}>
                120$ / per night
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="300">
          <Card as="a" href="#" className={styles.room}>
            <figure className={styles.imgWrap}>
              <Image src="./images/img_3.jpg" alt="Presidential Room" fluid />
            </figure>
            <Card.Body className={styles.roomInfo}>
              <Card.Title as="h2" className="h4 fw-bold">
                Presidential Room
              </Card.Title>
              <Card.Text className={styles.letterSpacing1}>
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
