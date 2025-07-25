export interface Room {
  roomId: number;
  number?: number;
  isAvailable?: boolean;
  isLocked?: boolean;
  price: string;
  bedNumber?: number;
  roomType: RoomType;
  roomTypeId?: number;
  images: string[];
  description: string;
}

export interface RoomType {
  roomTypeId?: number;
  name?: string;
  description?: string;
  capacity?: number;
  features?: string[];
  price?: number;
  promotionPrice?: string;
  singleBedCount?: number;
  images?: string[];
  queenBedCount?: number;
  priceAsString?: string;
}
