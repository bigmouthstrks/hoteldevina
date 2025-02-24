import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import useSticky from '@hooks/useSticky';
import { ChildrenProps } from 'models/props';
import { FC } from 'react';

const MainLayout: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { isSticky } = useSticky();
  return (
    <div className="MainContainer">
      <Header isSticky={isSticky} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
