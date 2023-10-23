import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UserList.css';
<<<<<<< HEAD
import './UserList.css';

=======
>>>>>>> 82b96c39f46b66389fc7644c4bcabf7a1a9302ad

const UserList = () => {
  const users = [
    { name: 'Usuario 1', username: 'usuario1', avatarUrl: 'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg' },
    { name: 'Usuario 2', username: 'usuario2', avatarUrl: 'https://static.vecteezy.com/system/resources/previews/001/131/187/non_2x/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg' },
    { name: 'Usuario 3', username: 'usuario3', avatarUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }
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
