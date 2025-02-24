import { ReactNode } from 'react';
import { RoomData } from './room';

export interface ChildrenProps {
  children?: ReactNode;
}

export interface LoginProps {
  isRegisterMode?: boolean;
}

export interface HeaderProps {
  isSticky?: boolean;
  showHero?: boolean;
}

export interface RoomItemProps {
  room: RoomData;
  delay: number;
}

export interface StatusInfoProps {
  status: Status;
}
