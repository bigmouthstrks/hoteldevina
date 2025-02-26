import { Image, Room } from './room';

export enum StatusType {
  CANCELLED = 'cancelled',
  CONFIRMED = 'confirmed',
  FINISHED = 'finished',
  IN_PROGRESS = 'inProgress',
  TO_BE_CONFIRMED = 'toBeConfirmed',
}

export interface Status {
  type: StatusType;
  message: string;
}

export interface Room {
  id: number;
  roomName: string;
  image: Image;
}

export interface SearchResult {
  id?: number;
  checkInDate?: string;
  checkOutDate?: string;
  numberOfNights?: number;
  numberOfPassengers?: number;
  rooms?: Room[];
  totalAmount?: number;
}
export interface Reservation extends SearchResult {
  status?: Status;
  paymentMethod?: string;
  taxDocument?: string;
}
