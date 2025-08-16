import { AvailabilityForm, OffersSection, WelcomeSection } from '@core/components';
import { ReservationSection } from '@reservations/components';
import { FC } from 'react';

export const Home: FC = () => {
  return (
    <>
      <AvailabilityForm />
      <WelcomeSection />
      <OffersSection></OffersSection>
      <ReservationSection />
    </>
  );
};
