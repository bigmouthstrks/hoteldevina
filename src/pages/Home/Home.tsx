import React from 'react';
import AvailabilityForm from '@components/Availability/Availability';
import ReservationSection from '@components/Reservations/Reservations';
import RoomsSection from '@components/Rooms/Rooms';
import TestimonialsSection from '@components/Testimonials/Testimonials';
import WelcomeSection from '@components/Welcome/Welcome';

const Home: React.FC = () => (
  <>
    <AvailabilityForm />
    <WelcomeSection />
    <RoomsSection />
    <TestimonialsSection />
    <ReservationSection />
  </>
);

export default Home;
