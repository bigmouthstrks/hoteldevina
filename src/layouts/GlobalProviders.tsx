import { AuthProvider } from '@auth/providers';
import { ChildrenProps } from '@models/props';
import { ReservationProvider } from '@reservations/providers';
import { RoomProvider } from '@rooms/providers';
import { FetchProvider, ModalProvider, SnackbarProvider, TitleProvider } from '@shared/providers';
import { FC } from 'react';

export const GlobalProviders: FC<ChildrenProps> = ({ children }) => {
  return (
    <SnackbarProvider>
      <ModalProvider>
        <FetchProvider>
          <AuthProvider>
            <ReservationProvider>
              <RoomProvider>
                <TitleProvider>{children}</TitleProvider>
              </RoomProvider>
            </ReservationProvider>
          </AuthProvider>
        </FetchProvider>
      </ModalProvider>
    </SnackbarProvider>
  );
};
