import { MessageType } from '@models/consts';
import { createContext } from 'react';

export interface SnackbarContextType {
  show: boolean;
  message: string;
  type: MessageType;
  showSnackbar: (msg: string, type: MessageType) => void;
  hideSnackbar: () => void;
}

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);
