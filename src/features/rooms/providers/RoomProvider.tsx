import { ChildrenProps } from '@models/props';
import { RoomType } from '@models/room';
import { RoomContext } from '@rooms/context';
import { FC, useMemo, useState } from 'react';

export const RoomProvider: FC<ChildrenProps> = ({ children }) => {
  const [room, setRoom] = useState<RoomType | null>(null);
  const [loading, setLoading] = useState(true);
  // Lista de habitaciones (normalmente obtendría estos datos desde una API)
  const rooms: RoomType[] = useMemo(() => {
    return [
      {
        roomTypeId: 1,
        description: 'Habitación Doble',
        priceAsString: '$90.000',
        images: ['doble-1.webp', 'doble-2.webp', 'doble-3.webp'],
        features: [
          '🛏️ 2 camas individuales',
          '🚻 Baño privado',
          '🍸 Frigobar',
          '📺 TV',
          '🥐 Desayuno continental',
        ],
        capacity: 2,
      },
      {
        roomTypeId: 2,
        description: 'Habitación Triple',
        priceAsString: '$100.000',
        images: ['triple-1.webp', 'triple-2.webp'],
        features: [
          '🛏️ 3 camas individuales',
          '🚻 Baño privado',
          '🍸 Frigobar',
          '📺 TV',
          '🥐 Desayuno continental',
        ],
        capacity: 3,
      },
      {
        roomTypeId: 3,
        description: 'Habitación Matrimonial',
        priceAsString: '$90.000',
        images: ['suite-1.webp', 'suite-2.webp', 'suite-3.webp'],
        features: [
          '🛏️ 1 cama matrimonial',
          '🚻 Baño privado',
          '🍸 Frigobar',
          '📺 TV',
          '🥐 Desayuno continental',
        ],
        capacity: 2,
      },
    ];
  }, []);

  const changeRoom = (room: RoomType) => {
    setRoom(room);
    setLoading(false);
  };

  return (
    <RoomContext.Provider value={{ room, changeRoom, rooms, loading }}>
      {children}
    </RoomContext.Provider>
  );
};
