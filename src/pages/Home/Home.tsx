import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/Hero/Hero';
import AvailabilityForm from '../../components/Availability/Availability';
import WelcomeSection from '../../components/Welcome/Welcome';
import RoomsSection from '../../components/Rooms/Rooms';
import TestimonialsSection from '../../components/Testimonials/Testimonials';
import ReservationSection from '../../components/Reservations/Reservations';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => (
  <>
    <Header />
    <HeroSection />
    <AvailabilityForm />
    <WelcomeSection />
    <RoomsSection />
    <TestimonialsSection />
    <ReservationSection />
    <Footer />
  </>
);

export default Home;
