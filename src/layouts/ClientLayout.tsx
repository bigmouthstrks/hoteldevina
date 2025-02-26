import { FC } from 'react';
import Footer from '@shared/components/Footer/Footer';
import Header from '@shared/components/Header/Header';
import useReservation from '@reservations/hooks/useReservation';
import { ChildrenProps } from 'models/props';
import PlainLayout from './PlainLayout';

const ClientLayout: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { reservation } = useReservation();
  return (
    <PlainLayout>
      <Header isStatic showHero={false} reservation={reservation} />
      {children}
      <Footer />
    </PlainLayout>
  );
};

export default ClientLayout;
