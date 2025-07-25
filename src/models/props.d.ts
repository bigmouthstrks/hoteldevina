import { ReactElement, ReactNode } from 'react';
import { Room, RoomType } from './room';
import { Reservation, SearchResult, Status } from './reservation';

export interface ChildrenProps {
  children?: ReactNode;
}

export interface LayoutProps extends ChildrenProps {
  className?: string;
}

export interface AdminProps {
  isAdminMode?: boolean;
}

export interface AvailabilityProps extends AdminProps {
  forGroups?: boolean;
  forRooms?: boolean;
}

export interface AdminRouteProps extends ChildrenProps {
  isAdminRoute?: boolean;
}

export interface LoginProps extends AdminProps {
  isRegisterMode?: boolean;
}

export interface ReturnButtonProps {
  isSticky?: boolean;
}

export interface HeaderProps extends ReturnButtonProps {
  isStatic?: boolean;
  showHero?: boolean;
}

export interface SimpleRoomItemProps {
  room: Room;
  delay?: number;
  smallSize?: boolean;
}

export interface RoomItemProps {
  room: RoomType;
  delay?: number;
}

export interface ReservationItemProps {
  reservation: Reservation;
  delay: number;
}

export interface ReservationDetailsProps {
  edit?: boolean;
  checkingReservations?: boolean;
  checkIn?: boolean;
  fullCheckIn?: boolean;
}

export interface MyReservationsProps extends AdminProps {
  title: string;
  filter?: StatusType;
  filterPath?: string;
}

export interface StatusInfoProps {
  status?: Status;
}

export interface SearchItemProps extends AdminProps {
  searchResult?: SearchResult;
}

export interface MenuProps extends ChildrenProps {
  header?: string;
  body?: ReactElement;
}

export interface RowFieldProps extends ChildrenProps {
  description?: string;
}

export interface CollapseMenuProps {
  handleLink: () => void;
}
