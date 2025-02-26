import { ChildrenProps } from '@models/props';
import { TitleContext } from '@shared/context';
import { FC, useState } from 'react';

export const TitleProvider: FC<ChildrenProps> = ({ children }) => {
  const [title, setTitle] = useState<string>('');

  return <TitleContext.Provider value={{ title, setTitle }}>{children}</TitleContext.Provider>;
};
