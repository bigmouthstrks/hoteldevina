import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { ChildrenProps } from 'models/props';
import { FC } from 'react';

const MainLayout: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  return (
    <div className="MainContainer">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
