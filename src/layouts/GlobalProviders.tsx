import AuthProvider from '@auth/providers/AuthProvider';
import { ChildrenProps } from '@models/props';
import TitleProvider from '@shared/providers/TitleProvider';
import { FC } from 'react';

const GlobalProviders: FC<ChildrenProps> = ({ children }) => {
  return (
    <AuthProvider>
      <TitleProvider>{children}</TitleProvider>
    </AuthProvider>
  );
};

export default GlobalProviders;
