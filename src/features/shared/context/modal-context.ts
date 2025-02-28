import { createContext } from 'react';

export interface ModalContextType {
  show: boolean;
  header: string | null;
  body: string | null;
  handleAccept: () => void;
  handleClose: () => void;
  handleShow: (header: string, body: string) => Promise<boolean>;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);
