import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import DailyBonus from '../../features/dailyBonus/components/DailyBonus';
import UserData from '../../features/profile/components/UserData/UserData';

function UserPage() {
  const { username } = useParams();
  const { userData } = useContext(AuthContext);

  const isOwner = username === userData.username || !username;

  return (
    <>
      {isOwner && <DailyBonus />}
      <UserData username={username ? username : userData.username} isOwner={isOwner} />
    </>
  );
}

export default UserPage;
