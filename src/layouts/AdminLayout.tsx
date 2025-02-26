import { FC } from 'react';
import Header from '@shared/components/Header/Header';
import { ChildrenProps } from 'models/props';
import PlainLayout from './PlainLayout';

const AdminLayout: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  return (
    <PlainLayout>
      <Header isStatic showHero={false} />
      {children}
    </PlainLayout>
  );
};

export default AdminLayout;
