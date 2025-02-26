import { FC } from 'react';
import ContactForm from '@core/components/ContactForm/ContactForm';
import ReservationSection from '@reservations/components/Reservations/Reservations';
// import TestimonialsSection from '@components/Testimonials/Testimonials';

const Reservation: FC = () => (
  <>
    <ContactForm />
    {/* <TestimonialsSection /> */}
    <ReservationSection />
  </>
);

export default Reservation;
