import { FC, useEffect } from 'react';
import AvailabilityForm from '@core/components/Availability/Availability';
import ReservationSection from '@reservations/components/Reservations/Reservations';
import RoomsSection from '@rooms/components/Rooms/Rooms';
import WelcomeSection from '@core/components/Welcome/Welcome';
import { Col } from 'react-bootstrap';
import useTitle from '@shared/hooks/useTitle';

const Home: FC = () => {
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
          <h2 className="display-5 fw-bold mb-4">Rooms & Suites</h2>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
        </Col>
      </RoomsSection>
      <ReservationSection />
    </>
  );
};

export default Home;
