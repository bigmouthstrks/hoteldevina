import { RoomContext } from '@rooms/context';
import { useContext } from 'react';

export const useRoom = () => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error('useRoom must be used within an RoomProvider');
  }
  return context;
};
