import { ReactNode } from 'react';
import { RoomData } from './room';
import { Reservation } from './reservation';

export interface ChildrenProps {
  children?: ReactNode;
}

export interface LoginProps {
  isRegisterMode?: boolean;
}

export interface HeaderProps {
  isSticky?: boolean;
  isStatic?: boolean;
  showHero?: boolean;
  reservation?: Reservation | null;
}

export interface RoomItemProps {
  room: RoomData;
  delay?: number;
}

export interface ReservationItemProps {
  reservation: Reservation;
  delay: number;
}

export interface StatusInfoProps {
  status: Status;
}
