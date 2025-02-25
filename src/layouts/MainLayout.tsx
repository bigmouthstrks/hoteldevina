import { FC } from 'react';
import Footer from '@shared/components/Footer/Footer';
import Header from '@shared/components/Header/Header';
import useSticky from '@shared/hooks/useSticky';
import { ChildrenProps } from 'models/props';

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
