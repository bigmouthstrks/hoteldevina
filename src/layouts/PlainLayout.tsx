import { ChildrenProps } from 'models/props';
import { FC } from 'react';

const PlainLayout: FC<ChildrenProps> = ({ children }) => {
  return <div className="MainContainer">{children}</div>;
};

export default PlainLayout;
