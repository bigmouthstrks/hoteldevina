import { ChildrenProps } from '@models/props';
import { useSticky } from '@shared/hooks';
import { FC } from 'react';
import { PlainLayout } from './PlainLayout';
import { Footer, Header } from '@shared/components';

export const MainLayout: FC<ChildrenProps> = ({ children }) => {
  const { isSticky } = useSticky();
  return (
    <PlainLayout>
      <Header isSticky={isSticky} />
      {children}
      <Footer />
    </PlainLayout>
  );
};
