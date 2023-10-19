import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UserList.css';
import './UserList.css';


const UserList = () => {
  const users = [
    { name: 'Usuario 1', username: 'usuario1', avatarUrl: 'url_avatar_1' },
    { name: 'Usuario 2', username: 'usuario2', avatarUrl: 'url_avatar_2' },
    { name: 'Usuario 3', username: 'usuario3', avatarUrl: 'url_avatar_3' }
  ];

  const handleFollowClick = (index) => {
    // Lógica para seguir al usuario en la posición 'index'
    console.log('Siguiendo al usuario', users[index].name);
  };

  return (
    <div className="user-list">

      <h3>Follow</h3>

      <h2 className='h2-follow'>Follow</h2>

      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          username={user.username}
          avatarUrl={user.avatarUrl}
          onFollowClick={() => handleFollowClick(index)}
        />
      ))}
    </div>
  );
};

export default UserList;
