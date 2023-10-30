import React from 'react'

import Avatar from '@Avatar'
import Header from '@Header';
import NavBar from '@NavBar';

// import { useUserContext } from '../../userContext/userContext';

const Index = () => {
  // const { userData, setUserData} = useUserContext();

  // const avatarImageUrl = 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg';

  const backgroundImageUrl = 'https://t4.ftcdn.net/jpg/05/61/71/39/360_F_561713958_uyAllvElPalXcyGHQnJUpeh31y6dIqwE.jpg'

  // const userName = 'Catherine Ipsum';
  // console.log('este es el contexto')
  // console.log(userData)

  const userData = JSON.parse(localStorage.getItem('userData'))
  const avatarImageUrl = userData.photoProfile.path
  const userName = userData.name;

  return (
    <div>
      <Header>
        <NavBar>
          <Avatar imageUrl={avatarImageUrl} />
          {userName}
        </NavBar>
      </Header>
      <div className='bg-slate-300 w-full h-80'>
        <img src={backgroundImageUrl} alt="" className='object-cover w-full h-full' />
      </div>
    </div>
  );
}

export default Index