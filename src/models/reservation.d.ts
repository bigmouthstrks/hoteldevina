import { StatusType } from './consts';
import { Room } from './room';

export interface Status {
  type: StatusType;
  message: string;
}

export interface SearchResult {
  id?: number;
  checkIn?: string;
  checkOut?: string;
  passengerNumber?: number;
  nightsCount?: number;
  totalCapacity?: number;
  rooms?: Room[];
  totalPrice?: number;
}
export interface Reservation extends SearchResult {
  status?: Status;
  paymentMethod?: string;
  taxDocument?: string;
}
