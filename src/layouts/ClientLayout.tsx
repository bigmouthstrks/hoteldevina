import { FC } from 'react';
import Footer from '@shared/components/Footer/Footer';
import Header from '@shared/components/Header/Header';
import { ChildrenProps } from 'models/props';
import PlainLayout from './PlainLayout';

const ClientLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <PlainLayout>
      <Header isStatic showHero={false} />
      {children}
      <Footer />
    </PlainLayout>
  );
};

export default ClientLayout;
