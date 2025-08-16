import { ChildrenProps } from '@models/props';
import { useSticky } from '@shared/hooks';
import { FC } from 'react';
import { PlainLayout } from './PlainLayout';
import { Footer, Header } from '@shared/components';
import { useTitle } from '@shared/hooks';
import { useEffect } from 'react';

export const MainLayout: FC<ChildrenProps> = ({ children }) => {
  const { isSticky } = useSticky();
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle('');
  }, []);
  return (
    <PlainLayout className="overflow-visible h-auto">
      <Header isSticky={isSticky} />
      {children}
      <Footer />
    </PlainLayout>
  );
};
