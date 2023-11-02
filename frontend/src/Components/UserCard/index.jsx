import Avatar from '@Avatar';

const UserCard = ({ name, username, avatarUrl, onFollowClick }) => {
  return (
    <div className="user-card bg-white shadow-md p-4 mb-4 rounded-lg flex items-center justify-between">
      <div className="user-info flex items-center">
        <Avatar imageUrl={avatarUrl} />
        <div className="user-text ml-4 text-black">
          <h4 className="font-roboto text-lg font-semibold">{name}</h4>
          <p className="font-roboto text-sm text-gray-600">@{username}</p>
        </div>
      </div>
      <button
        onClick={onFollowClick}
        className="follow-button bg-blue-500 text-white rounded-full py-1 px-4 cursor-pointer transition duration-300 hover:bg-blue-600"
      >
        Seguir
      </button>
    </div>
  );
};

export default UserCard;
