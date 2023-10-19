import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UserList.css';
<<<<<<< HEAD
import './UserList.css';

=======
>>>>>>> 82b96c39f46b66389fc7644c4bcabf7a1a9302ad

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
<<<<<<< HEAD

      <h3>Follow</h3>

      <h2 className='h2-follow'>Follow</h2>

=======
      <h2 className='h2-follow'>Follow</h2>
>>>>>>> 82b96c39f46b66389fc7644c4bcabf7a1a9302ad
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
<<<<<<< HEAD
=======

>>>>>>> 82b96c39f46b66389fc7644c4bcabf7a1a9302ad
