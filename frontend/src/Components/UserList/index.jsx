import React, { useEffect, useState } from 'react'
import UserCard from '@UserCard'
import './UserList.css'
import { useCookies } from 'react-cookie'

import axios from 'axios'

const UserList = () => {
  const [ users, setUsers ] = useState()

  const [cookies] = useCookies(['userId'])
  let userId = cookies?.userId

  useEffect(() => {
    try {
      axios
        .get(`https://linkup-5h1y.onrender.com/api/v1/users`)
        .then((res) => {
          const value = res.data.data;
          const randomUsers = [];
        
          for (let i = 0; i < 3; i++) {
            let indiceAleatorio;
            
            do {
              indiceAleatorio = Math.floor(Math.random() * value.length);
            } while (value[indiceAleatorio]._id === userId);
            
            randomUsers.push(value[indiceAleatorio]);
            value.splice(indiceAleatorio, 1);
          }
          
          setUsers(randomUsers);
        });
    } catch (error) {
      console.log(error);
    }
    
  }, [])
  

  const handleFollowClick = index => {
    console.log('Siguiendo al usuario', users[index]?.name)
  }

  return (
    <div className="user-list bg-gray-300 max-w-xs mx-auto rounded-lg p-4 dark:bg-neutral-800">
     
      <h2 className="font-roboto font-light text-center text-uppercase py-4 dark:text-slate-200">Personas que quizas conozcas</h2>

      {users?.map((user, index) => (
        <UserCard
          key={index}
          userId={user?._id}
          name={user?.name}
          username={user?.username}
          avatarUrl={user?.photoProfile.path}
          onFollowClick={() => handleFollowClick(index)}
        />
      ))}
    </div>
  )
}

export default UserList
