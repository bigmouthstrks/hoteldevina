import { ChildrenProps } from '@models/props';
import { FC } from 'react';
import { PlainLayout } from './PlainLayout';
import { Footer, Header } from '@shared/components';

export const ClientLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <PlainLayout>
      <Header isStatic showHero={false} />
      {children}
      <Footer />
    </PlainLayout>
  );
};
