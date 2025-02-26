import { ChildrenProps } from '@models/props';
import TitleContext from '@shared/context/title-context';
import { FC, useState } from 'react';

const TitleProvider: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const [title, setTitle] = useState('Inicio');

  return <TitleContext.Provider value={{ title, setTitle }}>{children}</TitleContext.Provider>;
};

export default TitleProvider;
