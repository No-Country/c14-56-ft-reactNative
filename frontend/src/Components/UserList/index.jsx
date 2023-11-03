import React, { useEffect, useState } from 'react'
import UserCard from '@UserCard'
import './UserList.css'
import axios from 'axios'

const UserList = () => {
  // const users = [
  //   {
  //     name: 'Usuario 1',
  //     username: 'usuario1',
  //     avatarUrl:
  //       'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg',
  //   },
  //   {
  //     name: 'Usuario 2',
  //     username: 'usuario2',
  //     avatarUrl:
  //       'https://static.vecteezy.com/system/resources/previews/001/131/187/non_2x/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg',
  //   },
  //   {
  //     name: 'Usuario 3',
  //     username: 'usuario3',
  //     avatarUrl:
  //       'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
  //   },
  // ]
  const [ users, setUsers ] = useState()

  useEffect(() => {
    try {
      axios
        .get(`https://linkup-5h1y.onrender.com/api/v1/users`)
        .then((res) => {
          const value = res.data.data
          const randomUsers = []

          for (let i = 0; i < 3; i++) {
            const indiceAleatorio = Math.floor(Math.random() * value.length);
       
            randomUsers.push(value[indiceAleatorio]);
          
            value.splice(indiceAleatorio, 1);
          }
          console.log(randomUsers)
          setUsers(randomUsers)
        })
    } catch (error) {
      console.log(error)
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
