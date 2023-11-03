import Avatar from '@Avatar';

const UserCard = ({ name, username, avatarUrl, onFollowClick }) => {
  return (
    <div className="user-card bg-white shadow-md p-4 mb-4 rounded-lg flex items-center justify-between dark:bg-neutral-900">
      <div className="user-info flex items-center lg:w-24 ">
        <Avatar imageUrl={avatarUrl} />
        <div className="user-text ml-4 text-black dark:text-slate-200
        md:w-1/3 justify-start lg:w-4">
          <h4 className="font-roboto text-lg font-semibold">{name}</h4>
          <p className="font-roboto text-sm text-gray-600 dark:text-slate-400">@{username}</p>
        </div>
      </div>
      <button
        onClick={onFollowClick}
        className="follow-button bg-blue-500 text-white rounded-full py-1 px-4 cursor-pointer transition duration-300 hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-700
        md:w-1/4 h-4 border-r-black text-transparent lg:w-24 h-8 lg:text-white lg:m-8 xl:w-32 h-8 max-xl:m-16 "
      >
        Seguir
      </button>
    </div>
  );
};

export default UserCard;
