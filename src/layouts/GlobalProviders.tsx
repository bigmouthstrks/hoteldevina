import { AuthProvider } from '@auth/providers';
import { ChildrenProps } from '@models/props';
import { TitleProvider } from '@shared/providers';
import { FC } from 'react';

export const GlobalProviders: FC<ChildrenProps> = ({ children }) => {
  return (
    <AuthProvider>
      <TitleProvider>{children}</TitleProvider>
    </AuthProvider>
  );
};
