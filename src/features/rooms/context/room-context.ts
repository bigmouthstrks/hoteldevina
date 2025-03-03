import { RoomType } from '@models/room';
import { createContext } from 'react';

export interface RoomContextType {
  room: RoomType | null;
  rooms: RoomType[];
  loading: boolean;
  changeRoom: (room: RoomType) => void;
}

export const RoomContext = createContext<RoomContextType | undefined>(undefined);
