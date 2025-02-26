import { FC } from 'react';
import Footer from '@shared/components/Footer/Footer';
import Header from '@shared/components/Header/Header';
import useReservation from '@reservations/hooks/useReservation';
import { ChildrenProps } from 'models/props';

const ClientLayout: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { reservation } = useReservation();
  return (
    <div className="MainContainer">
      <Header isStatic showHero={false} reservation={reservation} />
      {children}
      <Footer />
    </div>
  );
};

export default ClientLayout;
