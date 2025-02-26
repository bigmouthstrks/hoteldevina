import { ReactElement, ReactNode } from 'react';
import { RoomData } from './room';
import { Reservation, SearchResult } from './reservation';

export interface ChildrenProps {
  children?: ReactNode;
}

export interface LoginProps {
  isRegisterMode?: boolean;
  isAdminMode?: boolean;
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

export interface SearchItemProps {
  searchResult?: SearchResult;
}

export interface MenuProps extends ChildrenProps {
  header?: string;
  body?: ReactElement;
}
