import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Offers.module.scss';

export const OffersSection: FC = () => {
  return (
    <section className="section">
      <Container className="pb-5">
        <div
          className={`${styles.siteBlockHalf} d-block d-lg-flex bg-white rounded shadow-lg`}
          data-aos="fade"
          data-aos-delay="100"
        >
          <a
            href="#"
            className={styles.image}
            style={{ backgroundImage: "url('./images/centro_2.webp')" }}
          ></a>
          <div className={styles.text}>
            <span className="d-block mb-4">
              <span className="display-4 text-primary">Ubicación privilegiada</span>{' '}
            </span>
            <h2 className="mb-4">Estamos en el centro de la cuidad jardín</h2>
            <p>
              Disfrute de la comodidad de alojarse en pleno corazón de la ciudad jardín, con acceso
              directo a los principales atractivos turísticos, comercios y servicios. Esta ubicación
              estratégica permite recorrer y descubrir cada rincón de la ciudad con facilidad,
              aprovechando al máximo su tiempo y su experiencia.
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
            style={{ backgroundImage: "url('./images/estacionamiento.webp')" }}
          ></a>
          <div className={styles.text}>
            <span className="d-block mb-4">
              <span className="display-4 text-primary">Acceso inclusivo</span>{' '}
            </span>
            <h2 className="mb-4">Para pasajeros con movilidad reducida</h2>
            <p>
              Nos comprometemos a brindar una experiencia accesible para todos nuestros huéspedes.
              Nuestras instalaciones cuentan con un acceso adaptado y espacios diseñados para
              facilitar la movilidad de personas con capacidades físicas reducidas, asegurando así
              comodidad, seguridad y autonomía durante toda su estadía. Nuestro equipo está siempre
              disponible para asistirle y garantizar una experiencia confortable e inclusiva.
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
            style={{ backgroundImage: "url('images/baño.webp')" }}
          ></a>
          <div className={styles.text}>
            <span className="d-block mb-4">
              <span className="display-4 text-primary">Privacidad e higiene</span>{' '}
            </span>
            <h2 className="mb-4">Baño privado en todas nuestras habitaciones</h2>
            <p>
              En Hotel de Viña, entendemos la importancia de la privacidad y el cuidado personal
              durante su estadía. Por esta razón, todas nuestras habitaciones disponen de un baño
              privado, diseñado para ofrecerle un ambiente impecable, confortable y seguro. Nos
              preocupamos por mantener los más altos estándares de limpieza e higiene, asegurando
              así su tranquilidad y bienestar en cada momento.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
