import { AuthProvider } from '@auth/providers';
import { ChildrenProps } from '@models/props';
import { SnackbarProvider, TitleProvider } from '@shared/providers';
import { FC } from 'react';

export const GlobalProviders: FC<ChildrenProps> = ({ children }) => {
  return (
    <AuthProvider>
      <SnackbarProvider>
        <TitleProvider>{children}</TitleProvider>
      </SnackbarProvider>
    </AuthProvider>
  );
};
