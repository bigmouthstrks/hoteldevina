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

export interface Reservation {
  id?: number;
  checkInDate?: string;
  checkOutDate?: string;
  numberOfNights?: number;
  status?: Status;
  totalAmount?: number;
  paymentMethod?: string;
  taxDocument?: string;
  numberOfPassengers?: number;
  rooms?: RoomData[];
}
