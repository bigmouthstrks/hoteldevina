import { ChildrenProps } from '@models/props';
import { FC } from 'react';

export const PlainLayout: FC<ChildrenProps> = ({ children }) => {
  return <div className="MainContainer">{children}</div>;
};
