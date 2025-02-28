import { AvailabilityForm, WelcomeSection } from '@core/components';
import { ReservationSection } from '@reservations/components';
import { RoomsSection } from '@rooms/components';
import { useTitle } from '@shared/hooks';
import { FC, useEffect } from 'react';
import { Col } from 'react-bootstrap';

export const Home: FC = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle('');
  });
  return (
    <>
      <AvailabilityForm />
      <WelcomeSection />
      <RoomsSection>
        <Col md={8} data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-4">Suites</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Con una decoración clásica y moderna, nuestras habitaciones son el lugar perfecto para
            relajarte después de un día explorando la ciudad. Descubre el descanso que te mereces,
            con todas las comodidades pensadas para tu bienestar, entre nuestras 30 habitaciones.
            ¡Elige entre dobles, triples y suites, y encuentra la mejor opción para tu estadía!
          </p>
        </Col>
      </RoomsSection>
      <ReservationSection />
    </>
  );
};
