import { FC } from 'react';
import ReservationSection from '@components/Reservations/Reservations';
import { Container } from 'react-bootstrap';
import AvailabilityForm from '@components/Availability/Availability';

const Search: FC = () => {
  return (
    <>
      <AvailabilityForm />
      <Container>
        {/* <TestimonialsSection /> */}
        <ReservationSection />
      </Container>
    </>
  );
};

export default Search;
