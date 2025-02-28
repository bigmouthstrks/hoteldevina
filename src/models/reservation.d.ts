import { StatusType } from './consts';
import { Room } from './room';

export interface Status {
  type: StatusType;
  message: string;
}

export interface SearchResult {
  reservationId?: number;
  checkIn?: string;
  checkOut?: string;
  passengerCount?: number;
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

export interface CheckIn {
  checkIn?: string;
  checkOut?: string;
  userId?: number;
  reservationStatusId?: number;
  checkInWorker?: string;
  checkOutWorker?: string;
  paymentMethodId?: number;
  passengerNames?: string;
  passengerCount?: number;
  nightsCount?: number;
  totalPrice?: number;
  carPatent?: string;
  address?: string;
  city?: string;
  arrivalTime?: string;
  leaveTime?: string;
  documentType?: string;
  documentNumber?: string;
  voucher?: Voucher;
  roomIds?: number[];
  checkPolitics?: boolean;
}

export interface Voucher {
  documentType?: string;
  documentNumber?: string;
  companyName?: string;
  businessActivity?: string;
  address?: string;
  city?: string;
}
