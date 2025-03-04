import { createContext } from 'react';

export interface ModalContextType {
  show: boolean;
  header: string | null;
  body: string | null;
  cancel: string | null;
  confirm: string | null;
  handleAccept: () => void;
  handleClose: () => void;
  handleShow: (header: string, body: string, cancel?: string, confirm?: string) => Promise<boolean>;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);
