import { FC } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Offers.module.scss';

const OffersSection: FC = () => {
  return (
    <section className="section bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={7}>
            <h2 className="heading" data-aos="fade">
              Great Offers
            </h2>
            <p data-aos="fade">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
          </Col>
        </Row>

        <div
          className={`${styles.siteBlockHalf} d-block d-lg-flex bg-white`}
          data-aos="fade"
          data-aos-delay="100"
        >
          <a
            href="#"
            className={styles.image}
            style={{ backgroundImage: "url('images/img_1.jpg')" }}
          ></a>
          <div className={styles.text}>
            <span className="d-block mb-4">
              <span className="display-4 text-primary">$199</span>{' '}
              <span className="text-uppercase letter-spacing-2">/ per night</span>
            </span>
            <h2 className="mb-4">Family Room</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p>
              <Button href="#" className="btn btn-primary text-white">
                Book Now
              </Button>
            </p>
          </div>
        </div>

        <div
          className={`${styles.siteBlockHalf} d-block d-lg-flex bg-white`}
          data-aos="fade"
          data-aos-delay="200"
        >
          <a
            href="#"
            className={`${styles.image} order-2`}
            style={{ backgroundImage: "url('images/img_2.jpg')" }}
          ></a>
          <div className={styles.text}>
            <span className="d-block mb-4">
              <span className="display-4 text-primary">$299</span>{' '}
              <span className="text-uppercase letter-spacing-2">/ per night</span>
            </span>
            <h2 className="mb-4">Presidential Room</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p>
              <Button href="#" className="btn btn-primary text-white">
                Book Now
              </Button>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OffersSection;
