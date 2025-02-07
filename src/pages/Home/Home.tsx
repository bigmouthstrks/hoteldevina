import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/Hero/Hero';
import AvailabilityForm from '../../components/Availability/Availability';
import WelcomeSection from '../../components/Welcome/Welcome';
import RoomsSection from '../../components/Rooms/Rooms';
import PhotosSection from '../../components/Photos/Photos';
import MenuSection from '../../components/Menu/Menu';
import TestimonialsSection from '../../components/Testimonials/Testimonials';
import EventsSection from '../../components/Events/Events';
import ReservationSection from '../../components/Reservations/Reservations';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => (
    <>
        <Header />
        <HeroSection />
        <AvailabilityForm />
        <WelcomeSection />
        <RoomsSection />
        <PhotosSection />
        <MenuSection />
        <TestimonialsSection />
        <EventsSection />
        <ReservationSection />
        <Footer />
    </>
);

export default Home;