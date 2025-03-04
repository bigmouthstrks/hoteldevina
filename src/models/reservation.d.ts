import { StatusType } from './consts';
import { Room } from './room';

export interface Status {
  reservationStatusId: StatusType;
  name: string;
}

export interface SearchResult {
  reservationId?: number;
  checkIn?: string;
  checkOut?: string;
  passengerCount?: number;
  nightsCount?: number;
  totalCapacity?: number;
  rooms?: Room[];
  totalPrice?: Price;
}

export interface Price {
  formattedValue: string;
  value: number;
}
export interface Reservation extends SearchResult {
  reservationStatus?: Status;
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
