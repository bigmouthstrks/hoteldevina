export interface Room {
  roomId: number;
  roomNumber?: number;
  isAvailable?: boolean;
  price: string;
  bedNumber?: number;
  roomTypeId?: number;
  images: string[];
  description: string;
}

export interface RoomType {
  roomTypeId?: number;
  name: string;
  description: string;
  capacity: number;
  features: string[];
  price: number;
  promotionPrice: number;
}
