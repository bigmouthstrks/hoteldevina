import { SnackbarContext } from '@shared/context/snackbar-context';
import { useContext } from 'react';

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useToast debe usarse dentro de un ToastProvider');
  }
  return context;
};
