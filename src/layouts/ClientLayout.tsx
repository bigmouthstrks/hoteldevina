import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { ChildrenProps } from 'models/props';
import { FC } from 'react';

const ClientLayout: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  return (
    <div className="MainContainer">
      <Header isStatic showHero={false} />
      {children}
      <Footer />
    </div>
  );
};

export default ClientLayout;
