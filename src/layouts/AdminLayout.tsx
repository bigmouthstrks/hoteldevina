import { ChildrenProps } from '@models/props';
import { FC } from 'react';
import { PlainLayout } from './PlainLayout';
import { Header } from '@shared/components';

export const AdminLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <PlainLayout>
      <Header isStatic showHero={false} />
      {children}
    </PlainLayout>
  );
};
