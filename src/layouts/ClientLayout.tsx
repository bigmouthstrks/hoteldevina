import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import useReservation from '@hooks/useReservation';
import { ChildrenProps } from 'models/props';
import { FC } from 'react';

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
