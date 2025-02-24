import { FC } from 'react';
import AvailabilityForm from '@components/Availability/Availability';
import ReservationSection from '@components/Reservations/Reservations';
import RoomsSection from '@components/Rooms/Rooms';
// import TestimonialsSection from '@components/Testimonials/Testimonials';
import WelcomeSection from '@components/Welcome/Welcome';
import { Col } from 'react-bootstrap';

const Home: FC = () => (
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
    {/* <TestimonialsSection /> */}
    <ReservationSection />
  </>
);

export default Home;
