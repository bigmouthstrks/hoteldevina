export interface Room {
  roomId: number;
  roomNumber?: number;
  isAvailable?: boolean;
  price: string;
  bedNumber?: number;
  roomTypeId?: number;
  image: Image;
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

export interface Image {
  src: string;
  alt: string;
}
