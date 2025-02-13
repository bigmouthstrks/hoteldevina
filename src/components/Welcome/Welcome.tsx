import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import styles from './Welcome.module.scss';

const WelcomeSection: React.FC = () => (
  <section className={styles.welcomeSection}>
    <Container>
      <Row className="align-items-center">
        <Col lg={7} className="ms-auto order-lg-2 mb-5" data-aos="fade-up">
          <Carousel className="d-flex gap-3 overflow-auto pb-4">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <Carousel.Item key={num} className={styles.sliderItem}>
                <a
                  href={`./images/slider-${num}.jpg`}
                  data-fancybox="gallery"
                  data-caption={`Caption for image ${num}`}
                >
                  <img
                    src={`./images/slider-${num}.jpg`}
                    alt={`Gallery item ${num}`}
                    className="img-fluid"
                  />
                </a>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col lg={4} className="order-lg-1" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-4">Welcome!</h2>
          <p className="mb-4 fs-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            <Button
              href="#"
              variant="primary"
              size="lg"
              className="text-white py-2 me-3"
            >
              Learn More
            </Button>
            <span className="me-3 fs-5">
              <em>or</em>
            </span>
            <a
              href="https://vimeo.com/channels/staffpicks/93951774"
              className="text-primary text-uppercase fs-5"
            >
              See video
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default WelcomeSection;
