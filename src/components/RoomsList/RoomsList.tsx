import { RoomData } from 'models/room';
import RoomItem from '@components/RoomItem/RoomItem';

const RoomsList = ({ rooms }: { rooms: RoomData[] }) => {
  return (
    <>
      {rooms.map((room, index) => {
        const delay = index * 100 > 500 ? 500 : index * 100;
        return <RoomItem room={room} delay={delay} />;
      })}
    </>
  );
};

export default RoomsList;
