import { ContactForm } from '@core/components';
import { ReservationSection } from '@reservations/components';
import { FC } from 'react';

export const Reservation: FC = () => (
  <>
    <ContactForm />
    <ReservationSection />
  </>
);
