import React from 'react';
import Avatar from '../Avatar/Avatar';
import './UserCard.css';

const UserCard = ({ name, username, avatarUrl, onFollowClick }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <Avatar imageUrl={avatarUrl} />
        <div className="user-text">
<<<<<<< HEAD
          <h4 className='user-name'>{name}</h4>
          <p className='user-username'>@{username}</p>
=======
          <h4>{name}</h4>
          <p>@{username}</p>
>>>>>>> 82b96c39f46b66389fc7644c4bcabf7a1a9302ad
        </div>
      </div>
      <button onClick={onFollowClick} className="follow-button">Follow</button>
    </div>
  );
};

export default UserCard;
