import Avatar from '@Avatar';
import { useNavigate } from 'react-router-dom'

const UserCard = ({ name, username, avatarUrl, userId, onFollowClick }) => {
  const navigate = useNavigate()
  //
  return (
    <div className="user-card bg-white shadow-md p-4 mb-4 rounded-lg flex items-center justify-between dark:bg-neutral-900">
      <div className="user-info flex items-center max-lg:w-24" onClick={() => navigate(`/profile/${userId}`)}>
        <div className='w-1/2'>
        <Avatar imageUrl={avatarUrl} marginTop={'w-12'}/>
        </div>
          <div className="text-black dark:text-slate-200 truncate">
            <h4 className="font-roboto text-lg font-semibold truncate ">{name}</h4>
            <p className="font-roboto text-sm text-gray-600 dark:text-slate-400 truncate">@{username}</p>
          </div>
      </div>
    </div>
  );
};

export default UserCard;
