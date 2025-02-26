import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Offers.module.scss';

export const OffersSection: FC = () => {
  return (
    <section className="section bg-light">
      <Container className="pb-5">
        <Row className="justify-content-center text-center mb-5 pt-5 pb-5">
          <Col md={7}>
            <h2 className="heading" data-aos="fade">
              Destacado
            </h2>
            <p data-aos="fade">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
          </Col>
        </Row>

        <div
          className={`${styles.siteBlockHalf} d-block d-lg-flex bg-white rounded shadow-lg`}
          data-aos="fade"
          data-aos-delay="100"
        >
          <a
            href="#"
            className={styles.image}
            style={{ backgroundImage: "url('./images/centro_2.JPG')" }}
          ></a>
          <div className={styles.text}>
            <span className="d-block mb-4">
              <span className="display-4 text-primary">Ubicación privilegiada</span>{' '}
            </span>
            <h2 className="mb-4">Estamos en el centro de la cuidad jardín</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo itaque dolorem
              fugit nobis. Nemo, impedit similique quae dolores iure optio libero, ea atque est
              consectetur possimus enim minima id. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Mollitia nemo itaque dolorem fugit nobis. Nemo, impedit similique
              quae dolores iure optio libero, ea atque est consectetur possimus enim minima id.
            </p>
          </div>
        </div>
        <br />
        <div
          className={`${styles.siteBlockHalf} d-block d-lg-flex bg-white`}
          data-aos="fade"
          data-aos-delay="200"
        >
          <a
            href="#"
            className={`${styles.image} order-2`}
            style={{ backgroundImage: "url('./images/estacionamiento.JPG')" }}
          ></a>
          <div className={styles.text}>
            <span className="d-block mb-4">
              <span className="display-4 text-primary">Acceso inclusivo</span>{' '}
            </span>
            <h2 className="mb-4">Para pasajeros con movilidad reducida</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo itaque dolorem
              fugit nobis. Nemo, impedit similique quae dolores iure optio libero, ea atque est
              consectetur possimus enim minima id.
            </p>
          </div>
        </div>
        <br />
        <div
          className={`${styles.siteBlockHalf} d-block d-lg-flex bg-white rounded shadow-lg`}
          data-aos="fade"
          data-aos-delay="100"
        >
          <a
            href="#"
            className={styles.image}
            style={{ backgroundImage: "url('images/baño.JPG')" }}
          ></a>
          <div className={styles.text}>
            <span className="d-block mb-4">
              <span className="display-4 text-primary">Comodidad e higiene</span>{' '}
            </span>
            <h2 className="mb-4">Baño privado en todas las habitaciones</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo itaque dolorem
              fugit nobis. Nemo, impedit similique quae dolores iure optio libero, ea atque est
              consectetur possimus enim minima id. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Mollitia nemo itaque dolorem fugit nobis. Nemo, impedit similique
              quae dolores iure optio libero, ea atque est consectetur possimus enim minima id.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo itaque dolorem
              fugit nobis. Nemo, impedit similique quae dolores iure optio libero, ea atque est
              consectetur possimus enim minima id.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
