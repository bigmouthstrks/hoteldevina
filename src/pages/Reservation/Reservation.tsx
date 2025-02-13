import React from 'react';
import ContactForm from '@components/ContactForm/ContactForm';
import ReservationSection from '@components/Reservations/Reservations';
import TestimonialsSection from '@components/Testimonials/Testimonials';

const Reservation: React.FC = () => (
  <>
    <ContactForm />
    <TestimonialsSection />
    <ReservationSection />
  </>
);

export default Reservation;
