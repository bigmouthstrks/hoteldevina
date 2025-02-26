import { ReactElement, ReactNode } from 'react';
import { Room } from './room';
import { Reservation, SearchResult, Status } from './reservation';

export interface ChildrenProps {
  children?: ReactNode;
}

export interface LoginFormProps {
  isAdminMode?: boolean;
}

export interface LoginProps extends LoginFormProps {
  isRegisterMode?: boolean;
}

export interface HeaderProps {
  isSticky?: boolean;
  isStatic?: boolean;
  showHero?: boolean;
}

export interface RoomItemProps {
  room: Room;
  delay?: number;
}

export interface ReservationItemProps {
  reservation: Reservation;
  delay: number;
}

export interface MyReservationsProps extends LoginFormProps {
  title: string;
  filter?: StatusType;
}

export interface StatusInfoProps {
  status?: Status;
}

export interface SearchItemProps {
  searchResult?: SearchResult;
}

export interface MenuProps extends ChildrenProps {
  header?: string;
  body?: ReactElement;
}
