import { MessageType } from '@models/consts';
import { ChildrenProps } from '@models/props';
import { SnackbarContext } from '@shared/context/snackbar-context';
import { useState, FC } from 'react';

export const SnackbarProvider: FC<ChildrenProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState(MessageType.SUCCESS);

  const showSnackbar = (msg: string, type: MessageType) => {
    setMessage(msg);
    setShow(true);
    setType(type);
  };

  const hideSnackbar = () => {
    setShow(false);
  };

  return (
    <SnackbarContext.Provider value={{ show, message, type, showSnackbar, hideSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};
