export interface RoomData {
  id: number;
  number?: number;
  isAvailable?: boolean;
  price: string;
  promotionPrice?: number;
  bedNumber?: number;
  roomTypeId?: number;
  image: Image;
  description: string;
}

export interface Image {
  src: string;
  alt: string;
}
