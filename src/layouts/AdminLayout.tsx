import { FC } from 'react';
import Header from '@shared/components/Header/Header';
import useReservation from '@reservations/hooks/useReservation';
import { ChildrenProps } from 'models/props';
import PlainLayout from './PlainLayout';

const AdminLayout: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { reservation } = useReservation();
  return (
    <PlainLayout>
      <Header isStatic showHero={false} reservation={reservation} />
      {children}
    </PlainLayout>
  );
};

export default AdminLayout;
