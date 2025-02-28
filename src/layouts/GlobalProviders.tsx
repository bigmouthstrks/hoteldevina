import { AuthProvider } from '@auth/providers';
import { ChildrenProps } from '@models/props';
import { ReservationProvider } from '@reservations/providers';
import { FetchProvider, ModalProvider, SnackbarProvider, TitleProvider } from '@shared/providers';
import { FC } from 'react';

export const GlobalProviders: FC<ChildrenProps> = ({ children }) => {
  return (
    <SnackbarProvider>
      <ModalProvider>
        <FetchProvider>
          <AuthProvider>
            <ReservationProvider>
              <TitleProvider>{children}</TitleProvider>
            </ReservationProvider>
          </AuthProvider>
        </FetchProvider>
      </ModalProvider>
    </SnackbarProvider>
  );
};
