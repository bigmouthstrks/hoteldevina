import { ModalContext } from '@shared/context';
import { useContext } from 'react';

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal debe usarse dentro de un ModalProvider');
  }
  return context;
};
