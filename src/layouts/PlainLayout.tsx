import { LayoutProps } from '@models/props';
import { FC } from 'react';

export const PlainLayout: FC<LayoutProps> = ({ children, className }) => {
  return <div className={`MainContainer ${className}`}>{children}</div>;
};
