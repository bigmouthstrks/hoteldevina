import { Image, RoomData } from './room';

export interface Status {
  type: string;
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
  rooms?: RoomData[];
  totalAmount?: number;
}
export interface Reservation extends SearchResult {
  status?: Status;
  paymentMethod?: string;
  taxDocument?: string;
}
