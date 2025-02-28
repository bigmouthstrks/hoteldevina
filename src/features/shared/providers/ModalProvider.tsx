import { ChildrenProps } from '@models/props';
import { ModalContext } from '@shared/context';
import { FC, useState } from 'react';

export const ModalProvider: FC<ChildrenProps> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);
  const [header, setHeader] = useState<string | null>(null);
  const [body, setBody] = useState<string | null>(null);
  const [resolvePromise, setResolvePromise] = useState<((value: boolean) => void) | null>(null);

  const handleShow = (header: string, body: string): Promise<boolean> => {
    setShow(true);
    setHeader(header);
    setBody(body);

    return new Promise((resolve) => {
      setResolvePromise(() => resolve);
    });
  };
  const handleClose = () => {
    setShow(false);
    if (resolvePromise) {
      resolvePromise(false);
    }
  };
  const handleAccept = () => {
    setShow(false);
    if (resolvePromise) {
      resolvePromise(true);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        show,
        header,
        body,
        handleShow,
        handleClose,
        handleAccept,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
