import { FC } from 'react';
import Footer from '@shared/components/Footer/Footer';
import Header from '@shared/components/Header/Header';
import useSticky from '@shared/hooks/useSticky';
import { ChildrenProps } from 'models/props';
import PlainLayout from './PlainLayout';

const MainLayout: FC<ChildrenProps> = ({ children }) => {
  const { isSticky } = useSticky();
  return (
    <PlainLayout>
      <Header isSticky={isSticky} />
      {children}
      <Footer />
    </PlainLayout>
  );
};

export default MainLayout;
