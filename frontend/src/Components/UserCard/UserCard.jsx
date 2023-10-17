import React from 'react';
import Avatar from '../Avatar/Avatar';
import './UserCard.css';

const UserCard = ({ name, username, avatarUrl, onFollowClick }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <Avatar imageUrl={avatarUrl} />
        <div className="user-text">
          <h4>{name}</h4>
          <p>@{username}</p>
        </div>
      </div>
      <button onClick={onFollowClick} className="follow-button">Follow</button>
    </div>
  );
};

export default UserCard;
