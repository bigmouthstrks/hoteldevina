import { StatusType } from './consts';
import { Room } from './room';

export interface Status {
  type: StatusType;
  message: string;
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
