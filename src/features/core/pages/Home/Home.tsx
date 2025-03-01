import { AvailabilityForm, OffersSection, WelcomeSection } from '@core/components';
import { ReservationSection } from '@reservations/components';
import { useTitle } from '@shared/hooks';
import { FC, useEffect } from 'react';

export const Home: FC = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle('');
  });
  return (
    <>
      <AvailabilityForm />
      <WelcomeSection />
      <OffersSection></OffersSection>
      <ReservationSection />
    </>
  );
};
